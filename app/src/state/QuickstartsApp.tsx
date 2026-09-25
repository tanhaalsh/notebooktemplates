import { Component, createElement, createRef, type ChangeEvent, type MouseEvent, type SyntheticEvent } from 'react';
import { AppShell } from '../components/AppShell';
import {
  BENCH, CHARTS, CTX, DATA, EXT, IMPORTS, PARAM, RUNSRC, SLUG, SRC_DEF, SRCS, TPL, UPLOAD, VIEW,
  type ParamValue, type SourceKind, type TemplateId,
} from '../data/templates';
import { APPS, CUR, ENTITY, OTHER_NBS } from '../data/workspace';
import { tok } from '../lib/highlight';
import {
  baseName, ctrlCode, defRef, defSrc, extsOf, isFail, isList, loadCode, missingMsg, okLine, panelTitle, shortRef, srcCode,
} from '../lib/notebook';

export type Step = 'getting-started' | 'workspace' | 'menu' | 'gallery' | 'notebook';

interface RunRef { ref: string; pValue: ParamValue; src: SourceKind }

/** A notebook saved to "Your notebooks". */
interface SavedNotebook {
  name: string;
  tpl: TemplateId;
  author: string;
  project: string;
  savedAt: string;
  created?: string;
  fresh?: boolean;
  src: SourceKind;
  ref: string;
  pValue: ParamValue;
  benchmarks?: string[];
  chart?: string;
  lastOk: RunRef | null;
  lastFail: { ref: string; src: SourceKind } | null;
}

/** A notebook panel in the workspace's "Notebook charts" section. */
interface Panel { nb: string; loading: boolean; fresh?: boolean }

/** The notebook open in the editor. */
interface Editor {
  name: string;
  tpl: TemplateId;
  src: SourceKind;
  ref: string;
  pValue: ParamValue;
  benchmarks: string[];
  chart: string;
}

interface RunResult extends RunRef { status: 'ok' | 'failed'; sig?: string }

type SectionKey = 'charts' | 'marimo';
type DrawerSectionKey = 'charts' | 'query' | 'media' | 'text';

interface State {
  modalOpen: boolean;
  step: 'gallery' | 'existing' | 'detail';
  menu: 'hdr' | 'apps' | null;
  q: string;
  sel: TemplateId;
  copyProject: string;
  page: 'workspace' | 'notebooks';
  tab: 'ws' | 'nb';
  nbTab: string | null;
  ed: Editor | null;
  run: RunResult | null;
  running: boolean;
  saving: boolean;
  banner: { kind: 'ok' | 'fail'; text: string; action: boolean } | null;
  nbSec: 'start' | 'overview';
  /** Where the templates drawer was opened from: the workspace panel flow or Notebooks. */
  origin: 'ws' | 'nb';
  includeWs: boolean;
  closed: Partial<Record<SectionKey, boolean>>;
  dclosed: Partial<Record<DrawerSectionKey, boolean>>;
  nbq: string;
  toast: string;
  toastAction: { label: string; go: () => void } | null;
  saved: SavedNotebook[];
  panels: Panel[];
}

interface Props {
  initialStep?: Step;
  initialTemplate?: TemplateId;
}

const stop = (e: SyntheticEvent) => e.stopPropagation();

const plusIcon = createElement(
  'svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' },
  createElement('path', { d: 'M12 5v14M5 12h14' }),
);
const playIcon = createElement('svg', { width: 12, height: 12, viewBox: '0 0 24 24', fill: 'currentColor' }, createElement('path', { d: 'M7 5l12 7-12 7z' }));

const LINES = Object.fromEntries(TPL.map((t) => [t.id, tok(t.code)])) as Record<TemplateId, ReturnType<typeof tok>>;
const benchSig = (ed: { benchmarks?: string[]; chart?: string }) => (ed.benchmarks || []).join('|') + ed.chart;

/**
 * Owns all prototype state and derives the flat view model the screens render from.
 * Ported from the Claude Design v24 prototype's DCLogic component.
 */
export class QuickstartsApp extends Component<Props, State> {
  state: State = {
    modalOpen: false, step: 'gallery', menu: null, q: '', sel: this.props.initialTemplate ?? 'rerun',
    copyProject: CUR,
    page: 'workspace', tab: 'ws', nbTab: null, ed: null, run: null, running: false, saving: false, banner: null,
    nbSec: 'start', origin: 'ws', includeWs: true, closed: {}, dclosed: { query: true, media: true }, nbq: '', toast: '', toastAction: null,
    saved: [
      { name: 'pick_place_review.py', tpl: 'rerun', author: 'Jane Doe', project: CUR, savedAt: 'Yesterday', src: 'artifact', ref: 'robot-episodes:v2', pValue: 240, lastOk: { ref: 'robot-episodes:v2', pValue: 240, src: 'artifact' }, lastFail: null },
      { name: 'sft_vs_dpo_bench.py', tpl: 'bench', author: 'Buzz Aldrin', project: CUR, savedAt: 'Sep 18', src: 'tag', ref: 'eval-v1', pValue: 'acc', lastOk: { ref: 'eval-v1', pValue: 'acc', src: 'tag' }, lastFail: null },
    ],
    panels: [],
  };

  wsScrollRef = createRef<HTMLDivElement>();
  marimoRef = createRef<HTMLDivElement>();
  private timers: Record<'save' | 'autorun' | 'toast' | 'run' | 'scroll' | 'link', number | undefined> = {
    save: undefined, autorun: undefined, toast: undefined, run: undefined, scroll: undefined, link: undefined,
  };

  private later(key: keyof QuickstartsApp['timers'], fn: () => void, ms: number) {
    clearTimeout(this.timers[key]);
    this.timers[key] = window.setTimeout(fn, ms);
  }

  // StrictMode mounts twice in development; only apply the initial step once.
  private didInit = false;

  componentDidMount() {
    if (this.didInit) return;
    this.didInit = true;
    const st = this.props.initialStep ?? 'getting-started';
    if (st === 'menu') this.setState({ menu: 'hdr' });
    else if (st === 'gallery') this.setState({ modalOpen: true, step: 'gallery', origin: 'ws' });
    else if (st === 'notebook') this.confirmCopy();
    else if (st === 'getting-started') this.setState({ page: 'notebooks', nbSec: 'start', tab: 'ws' });
  }

  componentWillUnmount() {
    Object.values(this.timers).forEach((t) => clearTimeout(t));
  }

  sec = (k: SectionKey) => {
    const open = !this.state.closed[k];
    return { open, rot: open ? '0deg' : '-90deg', toggle: () => this.setState((st) => ({ closed: { ...st.closed, [k]: !st.closed[k] } })) };
  };

  showToast = (toast: string, toastAction?: State['toastAction']) => {
    this.setState({ toast, toastAction: toastAction || null });
    this.later('toast', () => this.setState({ toast: '' }), 2800);
  };

  scrollToMarimo = () => {
    this.later('scroll', () => {
      const c = this.wsScrollRef.current, el = this.marimoRef.current;
      if (c && el) c.scrollTo({ top: Math.max(0, el.offsetTop - c.offsetTop - 12), behavior: 'smooth' });
    }, 80);
  };

  uniqueName = (tpl: TemplateId, saved: SavedNotebook[]) => {
    const base = SLUG[tpl];
    const names = new Set(saved.map((n) => n.name));
    let i = 1, name = base + '.py';
    while (names.has(name)) { i++; name = base + '_' + i + '.py'; }
    return name;
  };

  openNb = (name: string) => {
    const e = this.state.saved.find((n) => n.name === name);
    if (!e) return;
    const src = e.src || defSrc(e.tpl);
    const run: RunResult | null = e.lastFail && e.lastFail.ref === e.ref
      ? { status: 'failed', ref: e.ref, pValue: e.pValue, src }
      : e.lastOk && e.lastOk.ref === e.ref && e.lastOk.pValue === e.pValue ? { status: 'ok', ref: e.ref, pValue: e.pValue, src } : null;
    this.setState({
      page: 'notebooks', sel: e.tpl, tab: 'nb', nbTab: name,
      ed: { name, tpl: e.tpl, src, ref: e.ref, pValue: e.pValue, benchmarks: e.benchmarks || BENCH, chart: e.chart || CHARTS[0] },
      run, running: false, banner: null, menu: null, modalOpen: false,
    });
  };

  /** Copies the selected template into the project, opens it, and auto-runs it with starter data. */
  confirmCopy = () => {
    const tpl = this.state.sel, name = this.uniqueName(tpl, this.state.saved);
    const entry: SavedNotebook = { name, tpl, author: 'Jane Doe', project: this.state.copyProject, savedAt: 'Just now', fresh: true, src: defSrc(tpl), ref: DATA[tpl].options[0], pValue: PARAM[tpl].value, lastOk: null, lastFail: null };
    const fromNb = this.state.origin === 'nb', addPanel = !fromNb || this.state.includeWs;
    this.setState((st) => ({
      saved: [entry, ...st.saved.map((n) => ({ ...n, fresh: false }))],
      panels: addPanel ? [...st.panels, { nb: name, loading: false, fresh: false }] : st.panels,
      modalOpen: false,
      closed: { ...st.closed, marimo: false },
    }), () => {
      this.openNb(name);
      this.showToast(fromNb
        ? 'Created ' + name + (addPanel ? ', added it to your workspace,' : '') + ' and ran it with starter data'
        : 'Copied ' + name + ', linked it to a new panel, and ran it with starter data');
      this.later('autorun', () => this.runNb(true), 60);
    });
  };

  quickCopy = (id: TemplateId, origin?: State['origin']) =>
    this.setState({ sel: id, copyProject: CUR, origin: origin || this.state.origin, q: '' }, this.confirmCopy);

  /** Simulates a notebook run. `auto` is the run right after copying a template, which shows no banner. */
  runNb = (auto?: unknown) => {
    const isAuto = auto === true;
    const { ed } = this.state;
    if (!ed || this.state.running) return;
    this.setState({ running: true, banner: null });
    this.later('run', () => {
      const src = ed.src || defSrc(ed.tpl);
      const fail = isFail(ed.tpl, src, ed.ref);
      const linked = this.state.panels.filter((p) => p.nb === ed.name).length;
      const prev = this.state.run, sig = benchSig(ed);
      const changed = !prev || prev.ref !== ed.ref || prev.pValue !== ed.pValue || prev.src !== src || (prev.sig || sig) !== sig;
      const showWs = !isAuto && changed && linked > 0;
      this.setState((st) => ({
        running: false,
        run: { status: fail ? 'failed' : 'ok', ref: ed.ref, pValue: ed.pValue, src, sig },
        saved: st.saved.map((n) => n.name === ed.name
          ? { ...n, lastOk: fail ? n.lastOk : { ref: ed.ref, pValue: ed.pValue, src }, lastFail: fail ? { ref: ed.ref, src } : null }
          : n),
        panels: st.panels.map((p) => (p.nb === ed.name ? { ...p, fresh: !fail } : p)),
        banner: isAuto
          ? null
          : fail
            ? { kind: 'fail', text: 'Run failed: ' + missingMsg(ed.tpl, ed.ref, src) + (linked ? ' The linked panel keeps its last successful output.' : ''), action: false }
            : { kind: 'ok', text: showWs ? 'Run succeeded. The linked workspace panel now shows your changes.' : 'Run succeeded.', action: showWs },
      }));
    }, 1000);
  };

  autoSave = (patch: Partial<Editor>) => {
    this.setState((st) => ({
      ed: st.ed && { ...st.ed, ...patch },
      saving: true,
      saved: st.saved.map((n) => (st.ed && n.name === st.ed.name ? { ...n, ...patch, savedAt: 'Just now', fresh: true } : { ...n, fresh: false })),
    }));
    this.later('save', () => this.setState({ saving: false }), 600);
  };

  renderVals() {
    const s = this.state, q = s.q.trim().toLowerCase();
    const selT = TPL.find((t) => t.id === s.sel) || TPL[0];

    // Templates drawer
    const crumbDefs: [string, State['step']][] = [[s.origin === 'nb' ? 'New notebook' : 'Add a notebook panel', 'gallery']];
    if (s.step === 'existing') crumbDefs.push(['Existing notebook', 'existing']);
    if (s.step === 'detail') crumbDefs.push(['Templates', 'gallery'], [selT.title, 'detail']);
    const crumbs = crumbDefs.map(([label, step], i) => {
      const last = i === crumbDefs.length - 1;
      return { label, sepDisplay: i ? 'inline' : 'none', fw: last ? 700 : 400, fg: last ? '#1c1b1a' : '#4a4845', cursor: last ? 'default' : 'pointer', go: () => !last && this.setState({ step }) };
    });
    const items = TPL
      .filter((t) => !q || (t.title + ' ' + t.blurb + ' ' + t.formats.map((f) => f.ext + ' ' + f.name).join(' ')).toLowerCase().includes(q))
      .map((t) => ({ ...t, exts: extsOf(t), open: () => (s.origin === 'nb' ? this.setState({ sel: t.id, step: 'detail' }) : this.quickCopy(t.id, s.origin)) }));

    // Your notebooks
    const linkedCount = (name: string) => s.panels.filter((p) => p.nb === name).length;
    const nbqq = s.nbq.trim().toLowerCase();
    const savedRows0 = s.saved.filter((n) => !nbqq || n.name.toLowerCase().includes(nbqq)).map((n) => {
      const t = TPL.find((x) => x.id === n.tpl)!;
      const lc = linkedCount(n.name);
      return {
        ...n, title: n.name, projectLabel: ENTITY + '/' + n.project, created: n.fresh ? 'Just now' : n.created || n.savedAt, tplTitle: t.title,
        linked: lc ? lc + ' panel' + (lc > 1 ? 's' : '') : '—', isNew: !!n.fresh, bg: n.fresh ? '#f7faff' : 'transparent',
        open: () => this.openNb(n.name),
        link: () => {
          const idx = s.panels.length;
          this.setState((st) => ({ panels: [...st.panels, { nb: n.name, loading: true }], modalOpen: false, page: 'workspace', tab: 'ws', closed: { ...st.closed, marimo: false } }), this.scrollToMarimo);
          this.later('link', () => {
            this.setState((st) => ({ panels: st.panels.map((p, j) => (j === idx ? { ...p, loading: false } : p)) }));
            this.showToast('Linked ' + n.name + ' as a panel');
          }, 1400);
        },
      };
    });
    const otherRows = OTHER_NBS.filter((o) => !nbqq || o.title.toLowerCase().includes(nbqq)).map((o) => ({
      ...o, name: o.title, tplTitle: '', project: '', linked: '—', isNew: false, bg: 'transparent',
      open: () => this.showToast('Only template copies open in this prototype'), link: undefined,
    }));
    const savedRows = [...savedRows0, ...otherRows];

    // Notebook editor
    const ed = s.ed, eid = ed ? ed.tpl : selT.id, P = PARAM[eid], D = DATA[eid];
    const entry = ed ? s.saved.find((n) => n.name === ed.name) : null;
    const run = s.run, running = s.running;
    const esrc = ed ? ed.src || defSrc(eid) : defSrc(eid);
    const stale = !!run && !running && (
      run.ref !== ed?.ref || (!!run.src && run.src !== esrc) || run.pValue !== ed?.pValue ||
      (run.sig !== undefined && !!ed && ed.tpl === 'bench' && run.sig !== benchSig(ed))
    );
    const ranOk = !!run && run.status === 'ok' && !running;
    const ranFail = !!run && run.status === 'failed' && !running;
    const lc = ed ? linkedCount(ed.name) : 0;
    const cellDefs = ed ? [
      { kind: 'md', code: 'mo.md("""\n# ' + selT.title + '\n\n' + selT.desc + '\n""")', out: true },
      { kind: 'imp', code: IMPORTS[eid], out: false },
      { kind: 'ctx', code: CTX, out: !!run },
      { kind: 'src', code: srcCode(eid, esrc), out: true },
      { kind: 'ctrl', code: ctrlCode(eid, ed.ref, ed.pValue, ed), out: true },
      { kind: 'load', code: loadCode(eid, esrc), out: !!run },
      { kind: 'view', code: VIEW[eid], out: true },
    ] : [];
    const cells = cellDefs.map((c, i) => ({
      n: i + 1, lines: tok(c.code), hasOut: c.out,
      isMd: c.kind === 'md', isCtx: c.kind === 'ctx', isSrc: c.kind === 'src', isCtrl: c.kind === 'ctrl', isLoad: c.kind === 'load', isView: c.kind === 'view',
      isStale: c.kind === 'view' && stale,
      border: running ? '#bfdbfe' : c.kind === 'load' && ranFail ? '#f3dca8' : c.kind === 'view' && stale ? '#fcd34d' : '#e4e4e7',
      outOpacity: (c.kind === 'view' || c.kind === 'load') && (stale || running) ? 0.5 : 1,
    }));
    const statusLabel = running ? 'Running…' : !run ? 'Not run yet' : stale ? 'Changed since last run' : ranFail ? 'Last run failed' : 'Ran just now';
    const bn = s.banner;

    // Workspace notebook panels
    const panels = s.panels.map((p, i) => {
      const e = s.saved.find((n) => n.name === p.nb);
      const t = TPL.find((x) => x.id === e?.tpl) || TPL[0];
      const ok = e?.lastOk ?? null, lastFail = e?.lastFail ?? null, loading = !!p.loading;
      return {
        kind: t.kind, nb: p.nb, loading, showViz: !loading && !!ok, showEmpty: !loading && !ok, showFailNote: !loading && !!lastFail && !!ok,
        failMsg: lastFail ? missingMsg(t.id, lastFail.ref, lastFail.src) : '',
        emptyTitle: lastFail ? 'Last run failed · no output yet' : 'Not run yet',
        emptyText: lastFail ? missingMsg(t.id, lastFail.ref, lastFail.src) : 'Open the notebook, check the query against your project data, then run it. The output appears here.',
        name: panelTitle(t.id, ok ? shortRef(ok.src, ok.ref) : shortRef(e?.src, e?.ref ?? '') || DATA[t.id].options[0]),
        caption: ok ? PARAM[t.id].cap(ok.pValue) + ' · ' + (ok.src === 'path' || ok.src === 'upload' ? baseName(ok.ref) : ok.ref) : '',
        statusText: loading ? 'Loading…' : lastFail ? 'Last run failed' : !ok ? 'Not run yet' : p.fresh ? 'Updated just now' : 'Saved output',
        statusColor: lastFail ? '#b45309' : !ok ? '#8a8784' : p.fresh ? '#3aa46a' : '#8a8784',
        view: (ev?: MouseEvent) => { ev?.stopPropagation(); this.openNb(p.nb); },
        remove: (ev?: MouseEvent) => { ev?.stopPropagation(); this.setState((st) => ({ panels: st.panels.filter((_, j) => j !== i) })); },
      };
    });

    const nbActive = s.tab === 'nb' && !!s.nbTab;
    const railItem = (on: boolean) => ({ fg: on ? 'var(--cw-blue-700)' : '#8a8784', bg: on ? 'var(--cw-blue-50)' : 'transparent' });
    const navItem = (k: State['nbSec']) => ({ go: () => this.setState({ nbSec: k }), bg: s.nbSec === k ? 'var(--cw-blue-50)' : 'transparent', fg: s.nbSec === k ? 'var(--cw-blue-700)' : '#3d3b39' });
    const drawerSec = (k: DrawerSectionKey) => {
      const open = !s.dclosed[k];
      return { open, rot: open ? '0deg' : '180deg', pad: open && k === 'charts' ? '16px' : '0', toggle: () => this.setState((st) => ({ dclosed: { ...st.dclosed, [k]: !st.dclosed[k] } })) };
    };

    return {
      stop, wsScrollRef: this.wsScrollRef, marimoRef: this.marimoRef, plusIcon, playIcon,
      isWsPage: s.page === 'workspace', isNbPage: s.page === 'notebooks',
      isWbProduct: s.page === 'workspace', isNbProduct: s.page === 'notebooks',
      rail: {
        ws: { go: () => this.setState({ page: 'workspace', tab: 'ws' }), ...railItem(!nbActive && s.page === 'workspace') },
        nb: { go: () => this.setState({ page: 'notebooks', tab: 'ws', nbSec: 'start', menu: null }), ...railItem(nbActive || s.page === 'notebooks') },
      },

      // Menus: app switcher and "Add panels" drawer
      openHdrMenu: () => this.setState((st) => ({ menu: st.menu === 'hdr' ? null : 'hdr' })),
      menuHdrOpen: s.menu === 'hdr', anyMenu: !!s.menu, closeMenu: () => this.setState({ menu: null }),
      pickChart: () => { this.setState({ menu: null }); this.showToast('Chart panels are not part of this prototype'); },
      pickMarkdown: () => { this.setState({ menu: null }); this.showToast('Markdown panels are not part of this prototype'); },
      pickMarimo: () => this.setState({ menu: null, modalOpen: true, step: 'gallery', q: '', origin: 'ws' }),
      dsec: { charts: drawerSec('charts'), query: drawerSec('query'), media: drawerSec('media'), text: drawerSec('text') },
      openApps: () => this.setState((st) => ({ menu: st.menu === 'apps' ? null : 'apps' })),
      appsOpen: s.menu === 'apps', appsBg: s.menu === 'apps' ? '#f5f4f2' : 'transparent', appsBorder: s.menu === 'apps' ? '#d6d3cf' : '#e6e4e0',
      appSections: APPS.map((sec) => ({
        label: sec.label,
        items: sec.items.map(([k, name, desc, icon]) => {
          const on = (k === 'nb' && s.page === 'notebooks') || (k === 'wb' && s.page === 'workspace');
          return {
            name, desc, icon, bg: on ? 'var(--cw-blue-50)' : 'transparent', fg: on ? 'var(--cw-blue-700)' : '#1c1b1a',
            go: () => {
              if (k === 'nb') this.setState({ menu: null, page: 'notebooks', nbSec: 'start', tab: 'ws' });
              else if (k === 'wb') this.setState({ menu: null, page: 'workspace', tab: 'ws' });
              else { this.setState({ menu: null }); this.showToast(name + ' is not part of this prototype'); }
            },
          };
        }),
      })),

      // Workspace
      sec: { charts: this.sec('charts'), marimo: this.sec('marimo') },
      panelCount: 3, marimoCount: s.panels.length, hasPanels: s.panels.length > 0, panels,

      // Templates drawer
      modalOpen: s.modalOpen, closeModal: () => this.setState({ modalOpen: false }),
      canBack: s.step === 'existing' || s.step === 'detail', mBack: () => this.setState({ step: 'gallery' }),
      crumbs, stepExisting: s.step === 'existing', stepGallery: s.step === 'gallery', stepDetail: s.step === 'detail',
      galleryTitle: s.origin === 'nb' ? 'Create from a template' : 'Add a notebook panel',
      gallerySub: s.origin === 'nb'
        ? 'Pick a template to preview it. We copy it to your notebooks and run it with starter data.'
        : 'Pick a template. We copy it to this project, link it to a new panel, and run it with starter data.',
      showExistingLink: s.origin !== 'nb',
      startBlank: () => this.showToast('Blank notebooks are not part of this prototype'),
      startExisting: () => this.setState({ step: 'existing' }),
      q: s.q, onQ: (e: ChangeEvent<HTMLInputElement>) => this.setState({ q: e.target.value }), items, noItems: items.length === 0,
      sel: { ...selT, lines: LINES[selT.id] },
      isNbOrigin: s.origin === 'nb',
      toggleIncludeWs: (e?: SyntheticEvent) => { e?.preventDefault(); this.setState((st) => ({ includeWs: !st.includeWs })); },
      incWs: s.includeWs ? { on: true, bg: 'var(--cw-blue-500)', border: 'var(--cw-blue-500)' } : { on: false, bg: '#fff', border: '#a8a5a1' },
      useTpl: () => this.quickCopy(s.sel, 'nb'),
      copyProject: s.copyProject, copyName: this.uniqueName(selT.id, s.saved),

      // Notebooks page
      nbIsStart: s.nbSec === 'start', nbIsOverview: s.nbSec === 'overview',
      nbNav: { start: navItem('start'), overview: navItem('overview') },
      nbq: s.nbq, onNbq: (e: ChangeEvent<HTMLInputElement>) => this.setState({ nbq: e.target.value }), savedRows, noSaved: savedRows.length === 0,
      pageLabel: '1–' + savedRows.length + ' of ' + savedRows.length,
      newFromTemplate: () => this.setState({ modalOpen: true, step: 'gallery', q: '', origin: 'nb' }),
      browseTemplates: () => this.setState({ modalOpen: true, step: 'gallery', q: '', origin: 'nb' }),
      goNotebooks: () => this.setState({ tab: 'ws', page: 'notebooks', nbSec: 'overview' }),
      tutorialToast: () => this.showToast('Tutorials are not part of this prototype'),
      createScratch: () => this.showToast('Blank notebooks are not part of this prototype'),

      // Notebook editor
      nbOpen: nbActive && !!ed,
      ed: ed
        ? { ...ed, project: entry ? entry.project : CUR, author: entry ? entry.author : 'Jane Doe', isLinked: lc > 0, linkedLabel: lc + ' panel' + (lc > 1 ? 's' : '') }
        : { name: '', src: '', ref: '', pValue: '', chart: '', project: '', author: '', isLinked: false, linkedLabel: '' },
      param: { ...P, options: P.options ?? [] }, pIsSlider: P.kind === 'slider', pIsSelect: P.kind === 'select',
      onRef: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => this.autoSave({ ref: e.target.value }),
      srcOpts: SRCS[eid].map((k, i) => {
        const on = k === esrc;
        return { label: SRC_DEF[k].label, bg: on ? '#0ea5e9' : '#fff', fg: on ? '#fff' : '#3f3f46', bl: i ? '1px solid #d4d4d8' : 'none', pick: () => { if (!on) this.autoSave({ src: k, ref: defRef(eid, k) }); } };
      }),
      srcHint: SRC_DEF[esrc].note,
      srcIsList: isList(esrc), refLabel: esrc === 'run' ? 'Run' : D.label, refOpts: esrc === 'run' ? RUNSRC[eid] || [] : D.options,
      srcIsPath: esrc === 'path', hasUpload: esrc === 'upload' && !!ed?.ref, noUpload: esrc === 'upload' && !ed?.ref,
      uploadExt: EXT[eid], uploadSize: UPLOAD[eid][1],
      doUpload: () => this.autoSave({ ref: UPLOAD[eid][0] }), clearUpload: () => this.autoSave({ ref: '' }),
      onParam: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => this.autoSave({ pValue: P.kind === 'slider' ? Number(e.target.value) : e.target.value }),
      cells, running, runNb: () => this.runNb(), runLabel: running ? 'Running…' : 'Run', saveLabel: s.saving ? 'Saving…' : 'All changes saved',
      statusLabel, statusDot: running ? '#3b82f6' : !run ? '#a1a1aa' : stale ? '#f59e0b' : ranFail ? '#d97706' : '#22c55e',
      ctxLine: 'project = ' + ENTITY + '/' + CUR + ' · RUNS = 15 runs visible in Buzz Aldrin’s workspace · 42 artifacts',
      isBench: eid === 'bench', chartOpts: CHARTS,
      benchOpts: BENCH.map((b) => {
        const on = !!ed && (ed.benchmarks || BENCH).includes(b);
        return {
          name: b, check: on ? '✓' : '', fill: on ? '#0ea5e9' : '#fff', ring: on ? '#0ea5e9' : '#a1a1aa',
          toggle: (e?: SyntheticEvent) => {
            e?.preventDefault();
            if (!ed) return;
            const cur = ed.benchmarks || BENCH;
            const next = on ? cur.filter((x) => x !== b) : BENCH.filter((x) => cur.includes(x) || x === b);
            if (next.length) this.autoSave({ benchmarks: next });
          },
        };
      }),
      onChart: (e: ChangeEvent<HTMLSelectElement>) => this.autoSave({ chart: e.target.value }),
      loadOk: ranOk || (stale && !!run && run.status === 'ok'), loadMissing: ranFail || (stale && !!run && run.status === 'failed'),
      loadLine: run ? '✓ ' + okLine(eid, run.src || esrc, run.ref) : '', missingText: run ? missingMsg(eid, run.ref, run.src || esrc) : '',
      viewOk: !!run && run.status === 'ok', viewEmpty: !run || run.status !== 'ok',
      ranCaption: run && run.status === 'ok'
        ? P.cap(run.pValue) + ' · ' + (run.src === 'path' || run.src === 'upload' ? baseName(run.ref) : run.ref) + (eid === 'bench' && ed ? ' · ' + (ed.benchmarks || BENCH).length + ' benchmarks' : '')
        : '',
      viewPlaceholder: running ? 'Running…' : ranFail ? 'No output: the data in cell 6 could not be loaded.' : 'Run the notebook to render the output and update the linked panel.',
      hasBanner: !!bn && !running, bannerText: bn ? bn.text : '', bannerHasAction: !!bn && bn.action,
      bannerBg: bn && bn.kind === 'fail' ? '#fdf6e6' : '#effaf2', bannerBorder: bn && bn.kind === 'fail' ? '#f3dca8' : '#c6ecd2', bannerFg: bn && bn.kind === 'fail' ? '#7a4e06' : '#14532d',
      viewInWs: () => this.setState((st) => ({ tab: 'ws', page: 'workspace', closed: { ...st.closed, marimo: false } }), this.scrollToMarimo),

      // Toast
      hasToast: !!s.toast, toast: s.toast, hasToastAction: !!s.toastAction, toastActionLabel: s.toastAction ? s.toastAction.label : '',
      toastGo: () => { const a = s.toastAction; if (a) { this.setState({ toast: '', toastAction: null }); a.go(); } },
    };
  }

  render() {
    return <AppShell v={this.renderVals()} />;
  }
}
