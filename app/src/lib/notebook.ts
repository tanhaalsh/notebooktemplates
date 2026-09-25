// Builds the code for each notebook cell, and simulates what a run loads.
import {
  BENCH, CHARTS, DATA, EXT, LOAD, PARAM, PATHS, RUNSRC, SRC_DEF, SRCS, UPLOAD,
  type ParamValue, type SourceKind, type Template, type TemplateId,
} from '../data/templates';
import { CUR } from '../data/workspace';

/** Notebook-editor state that affects generated code. */
export interface EditorFields {
  src?: SourceKind;
  benchmarks?: string[];
  chart?: string;
}

export const isList = (src: SourceKind) => src === 'artifact' || src === 'tag' || src === 'run';
export const defSrc = (id: TemplateId): SourceKind => SRCS[id][0];
export const defRef = (id: TemplateId, src: SourceKind): string =>
  src === 'run' ? RUNSRC[id]![0] : src === 'path' ? PATHS[id] : src === 'upload' ? '' : DATA[id].options[0];
export const baseName = (p: string | undefined) => (p || '').split('/').pop() || '';
export const shortRef = (src: SourceKind | undefined, ref: string) =>
  src === 'path' || src === 'upload' ? baseName(ref).replace(/\.[^.]+$/, '') : ref;

const VAR: Partial<Record<TemplateId, string>> = { rerun: 'rrd', foxglove: 'log', splat: 'scene_file' };
const readAs = (id: TemplateId, x: string) =>
  id === 'graph'
    ? 'edges = pd.read_csv(' + x + ')[["source", "target", "type"]]'
    : id === 'bench'
      ? 'df = pd.read_csv(' + x + ').pivot(index="run", columns="task", values="score").reset_index()[["run", *benchmarks.value]]'
      : VAR[id] + ' = ' + x;

export const srcCode = (id: TemplateId, src: SourceKind) =>
  '# Where this notebook reads its data from\nsource = mo.ui.radio(\n    options={' +
  SRCS[id].map((k) => '"' + SRC_DEF[k].label + '": "' + k + '"').join(', ') +
  '},\n    value="' + SRC_DEF[src].label + '", label="Data source", inline=True,\n)\nsource';

const refCode = (id: TemplateId, src: SourceKind, ref: string) => {
  const D = DATA[id];
  if (src === 'run') return '# Runs visible in the Workspace\nref = mo.ui.dropdown(\n    options=[r.name for r in RUNS],\n    value="' + ref + '", label="Run",\n)';
  if (src === 'upload') return 'ref = mo.ui.file(filetypes=["' + EXT[id] + '"], kind="area", label="Upload")';
  if (src === 'path') return 'ref = mo.ui.text(value="' + ref + '", label="Path or URL", full_width=True)';
  return 'ref = mo.ui.dropdown(\n    options=[' + D.options.map((o) => '"' + o + '"').join(', ') + '],\n    value="' + ref + '", label="' + D.label + '",\n)';
};

export const loadCode = (id: TemplateId, src: SourceKind) => {
  if (src === 'artifact' || src === 'tag') return LOAD[id];
  if (src === 'run') return '# Files logged to the selected run\nrun = next(r for r in RUNS if r.name == ref.value)\nf = next(f for f in run.files() if f.name.endswith("' + EXT[id] + '"))\n' + readAs(id, 'f.download(replace=True).name');
  if (src === 'upload') return '# The upload is logged as an artifact so the linked panel can load it again\nart = ctx.log_upload(ref.value[0], name="uploads")\n' + readAs(id, 'next(art.download().glob("*' + EXT[id] + '"))');
  return '# Fetched on every run; credentials come from the project storage settings\n' + readAs(id, 'ctx.fetch(ref.value)');
};

/** Whether a run against this data reference fails (the prototype's canned "missing data" cases). */
export const isFail = (id: TemplateId, src: SourceKind, ref: string) =>
  src === 'run'
    ? RUNSRC[id]![2] === ref
    : src === 'upload'
      ? !ref
      : src === 'path'
        ? !(ref || '').trim() || !(ref || '').trim().toLowerCase().endsWith(EXT[id])
        : DATA[id].missing === ref;

export const okLine = (id: TemplateId, src: SourceKind, ref: string) =>
  src === 'run'
    ? 'Downloaded ' + UPLOAD[id][0] + ' from run ' + ref
    : src === 'upload'
      ? 'Logged ' + ref + ' as uploads:v0 · ' + UPLOAD[id][1]
      : src === 'path'
        ? 'Fetched ' + baseName(ref) + ' · ' + UPLOAD[id][1]
        : DATA[id].ok(ref);

export const ctrlCode = (id: TemplateId, ref: string, v: ParamValue, ed: EditorFields | null) => {
  const P = PARAM[id];
  const src = (ed && ed.src) || defSrc(id);
  let c = refCode(id, src, ref) + '\n' + P.key + ' = ' + P.ctor.replace('{v}', String(v));
  if (id === 'bench') {
    const bs = (ed && ed.benchmarks) || BENCH;
    c += '\nbenchmarks = mo.ui.multiselect(' + JSON.stringify(BENCH).replace(/,/g, ', ') + ', value=' + JSON.stringify(bs).replace(/,/g, ', ') +
      ', label="Benchmarks")\nchart = mo.ui.dropdown(' + JSON.stringify(CHARTS).replace(/,/g, ', ') + ', value="' + ((ed && ed.chart) || CHARTS[0]) +
      '", label="Chart")\nmo.vstack([mo.hstack([ref, score]), mo.hstack([benchmarks, chart])])';
  } else c += '\nmo.hstack([ref, ' + P.key + '])';
  return c;
};

const refName = (r: string) => (r || '').split(':')[0];
export const panelTitle = (tpl: TemplateId, ref: string) => {
  const n = refName(ref);
  if (tpl === 'rerun') return 'Robot playback · ' + n;
  if (tpl === 'foxglove') return 'Sensor log · ' + n;
  if (tpl === 'splat') return n.replace(/-splat$/, '').replace(/^./, (c) => c.toUpperCase()) + ' scene · splats';
  if (tpl === 'bench') return 'Benchmark scores · ' + n;
  return n === 'citations' ? 'Citation graph' : 'Graph · ' + n;
};

export const missingMsg = (tpl: TemplateId, ref: string, src: SourceKind) => {
  const D = DATA[tpl], x = EXT[tpl];
  if (src === 'run') return 'Run ' + ref + ' has no ' + x + ' files logged. Pick another run in cell 5, or switch the data source in cell 4.';
  if (src === 'upload') return 'No file uploaded. Choose a ' + x + ' file in cell 5.';
  if (src === 'path') return 'Couldn’t read ' + ((ref || '').trim() ? ref : 'an empty path') + ' as a ' + x + ' file. Check the path in cell 5, or switch the data source in cell 4.';
  return (
    (tpl === 'bench' ? 'None of the 15 runs visible in this Workspace are tagged ' + ref : 'No ' + (tpl === 'graph' ? 'Table' : 'artifact') + ' named ' + ref) +
    ' in ' + CUR + '. Change ref in cell 5 (or the query in cell 6) to ' + D.expect + ', or switch the data source in cell 4.'
  );
};

/** File extensions a template accepts, for the gallery cards. */
export const extsOf = (t: Template) => t.formats.flatMap((f) => f.ext.split(' ')).filter((e) => e.startsWith('.') || e.includes('.'));
