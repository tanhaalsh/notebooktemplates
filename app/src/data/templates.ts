import type { ViewerKind } from '../components/ViewerPreview';
import { CUR, ENTITY } from './workspace';

export type TemplateId = 'rerun' | 'foxglove' | 'splat' | 'bench' | 'graph';
export type SourceKind = 'artifact' | 'tag' | 'run' | 'upload' | 'path';
export type ParamValue = string | number;

export interface Format { name: string; ext: string; note: string }
export interface SourceDef { label: string; note: string }
export interface Template {
  id: TemplateId;
  kind: ViewerKind;
  title: string;
  cat: string;
  blurb: string;
  desc: string;
  viewer: string;
  formats: Format[];
  sources: SourceDef[];
  /** Full notebook code shown in the template preview. */
  code: string;
  /** Starter data the template runs with. */
  sample: string;
}
export interface DataDef { label: string; options: string[]; missing: string; expect: string; ok: (ref: string) => string }
export interface ParamDef {
  key: string;
  label: string;
  kind: 'slider' | 'select';
  min?: number;
  max?: number;
  options?: string[];
  value: ParamValue;
  ctor: string;
  cap: (v: ParamValue) => string;
}

const BASE: Omit<Template, 'sources' | 'code' | 'sample'>[] = [
  { id: 'rerun', kind: 'Rerun', title: 'Rerun viewer', cat: 'Robotics',
    blurb: 'Play back a recording with spatial/3D views.',
    desc: 'Embed the Rerun viewer in a notebook to scrub through a recording: 3D point clouds, camera poses, images and time series on a shared timeline. ',
    viewer: 'Rerun · 3D view',
    formats: [
      { name: 'Rerun recording', ext: '.rrd', note: 'Native format. Keeps every entity, timeline and blueprint.' },
      { name: 'MCAP', ext: '.mcap', note: 'Loaded through the Rerun data loader; ROS 2 message types are mapped automatically.' },
      { name: 'Robot description', ext: '.urdf', note: 'Renders the robot model and joint transforms.' },
      { name: 'Meshes and point clouds', ext: '.glb .obj .ply', note: 'Static scene geometry shown alongside the recording.' },
    ], },
  { id: 'foxglove', kind: 'Foxglove', title: 'Foxglove viewer', cat: 'Robotics',
    blurb: 'Inspect recorded sensor data in an embedded viewer.',
    desc: 'Open a robotics log in an embedded Foxglove layout with camera, lidar, plot and topic panels. Pick topics in Python first, then inspect them side by side.',
    viewer: 'Foxglove · Perception layout',
    formats: [
      { name: 'MCAP', ext: '.mcap', note: 'Recommended. Indexed, so large logs open quickly.' },
      { name: 'ROS 1 bag', ext: '.bag', note: 'Read directly; no conversion step needed.' },
      { name: 'ROS 2 bag', ext: '.db3', note: 'SQLite storage. Include the metadata.yaml next to it.' },
      { name: 'Foxglove layout', ext: '.json', note: 'Optional. Saves which panels are open and what they show.' },
    ], },
  { id: 'splat', kind: 'Splat', title: '3D splats viewer', cat: '3D',
    blurb: 'Explore a reconstructed Gaussian-splat scene.',
    desc: 'Orbit, pan and zoom through a Gaussian-splat reconstruction in the browser. Adjust the camera from Python to check coverage and artifacts before training further.',
    viewer: 'Splat viewer · orbit camera',
    formats: [
      { name: '3D Gaussian Splatting', ext: '.ply', note: 'Standard 3DGS training output, with spherical harmonics up to degree 3.' },
      { name: 'Compact splat', ext: '.splat', note: 'Smaller, no spherical harmonics. Loads fastest.' },
      { name: 'Compressed splat', ext: '.spz', note: 'About 10× smaller than .ply with little visible loss.' },
      { name: 'COLMAP cameras', ext: 'cameras.bin', note: 'Optional. Adds the training camera positions to the scene.' },
    ], },
  { id: 'bench', kind: 'Bench', title: 'LLM and eval benchmarks', cat: 'Evals',
    blurb: 'Compare benchmark scores across model runs.',
    desc: 'Load results from several model runs and compare them task by task. Grouped bars show where a fine-tune gained or lost ground against its base model.',
    viewer: 'Benchmark comparison',
    formats: [
      { name: 'lm-eval-harness results', ext: 'results.json', note: 'One file per run. Task scores are read from the results block.' },
      { name: 'Per-sample outputs', ext: '.jsonl', note: 'Optional. Lets you open individual answers for a task.' },
      { name: 'Score table', ext: '.csv', note: 'Columns: run, task, score. Use this for results from any other harness.' },
    ], },
  { id: 'graph', kind: 'Graph', title: 'Knowledge graph', cat: 'Graphs',
    blurb: 'Visualize node/relationship data.',
    desc: 'Draw nodes and relationships as an interactive force layout. Start from one node and grow the neighborhood to see how entities connect.',
    viewer: 'Graph viewer · force layout',
    formats: [
      { name: 'GraphML', ext: '.graphml', note: 'Keeps node and edge attributes, which you can use for color and size.' },
      { name: 'Edge list', ext: '.csv', note: 'Columns source and target; any extra columns become edge attributes.' },
      { name: 'Node-link JSON', ext: '.json', note: 'The format networkx and D3 use: separate nodes and links arrays.' },
      { name: 'Nodes and edges tables', ext: '.parquet', note: 'Two files, for graphs too large to load as CSV.' },
    ], },
];

export const DATA: Record<TemplateId, DataDef> = {
  rerun: { label: 'Artifact', options: ['robot-episodes:v3', 'robot-episodes:v2', 'sim-episodes:latest'], missing: 'sim-episodes:latest', expect: 'an artifact that contains .rrd recordings', ok: (r: string) => 'Downloaded ' + r + ' · 3 files · 412 MB' },
  foxglove: { label: 'Artifact', options: ['drive-logs:v5', 'drive-logs:v4', 'drive-logs-raw:latest'], missing: 'drive-logs-raw:latest', expect: 'an artifact that contains .mcap or .bag logs', ok: (r: string) => 'Downloaded ' + r + ' · drive_0413.mcap · 1.8 GB' },
  splat: { label: 'Artifact', options: ['garden-splat:v2', 'lobby-splat:v1', 'warehouse-splat:latest'], missing: 'warehouse-splat:latest', expect: 'an artifact that contains a .ply, .splat or .spz file', ok: (r: string) => 'Downloaded ' + r + ' · 1.24M splats' },
  bench: { label: 'Workspace runs tagged', options: ['eval-v2', 'eval-v1', 'eval-v3'], missing: 'eval-v3', expect: 'a tag that is set on runs visible in this Workspace', ok: (r: string) => '3 of 15 Workspace runs tagged ' + r },
  graph: { label: 'Table', options: ['citations:v1', 'citations:v0', 'entities:latest'], missing: 'entities:latest', expect: 'a Table artifact with source and target columns', ok: (r: string) => 'Loaded ' + r + ' · 1,284 edges · 312 nodes' },
};
export const PARAM: Record<TemplateId, ParamDef> = {
  rerun: { key: 'frame', label: 'frame', kind: 'slider', min: 0, max: 600, value: 412, ctor: 'mo.ui.slider(0, 600, value={v}, label="frame")', cap: (v: ParamValue) => 'frame ' + v },
  foxglove: { key: 'layout', label: 'layout', kind: 'select', options: ['perception', 'planning', 'localization'], value: 'perception', ctor: 'mo.ui.dropdown(["perception", "planning", "localization"], value="{v}", label="layout")', cap: (v: ParamValue) => v + ' layout' },
  splat: { key: 'fov', label: 'field of view', kind: 'slider', min: 30, max: 90, value: 50, ctor: 'mo.ui.slider(30, 90, value={v}, label="field of view")', cap: (v: ParamValue) => 'fov ' + v + '°' },
  bench: { key: 'score', label: 'score field', kind: 'select', options: ['acc', 'acc_norm', 'exact_match'], value: 'acc', ctor: 'mo.ui.dropdown(["acc", "acc_norm", "exact_match"], value="{v}", label="score field")', cap: (v: ParamValue) => String(v) },
  graph: { key: 'depth', label: 'depth', kind: 'slider', min: 1, max: 4, value: 2, ctor: 'mo.ui.slider(1, 4, value={v}, label="depth")', cap: (v: ParamValue) => 'depth ' + v },
};
export const IMPORTS: Record<TemplateId, string> = {
  rerun: 'import marimo as mo\nimport wandb\nimport rerun as rr\nfrom wandb.panels.viewers import RerunViewer',
  foxglove: 'import marimo as mo\nimport wandb\nfrom wandb.panels.viewers import FoxgloveViewer',
  splat: 'import marimo as mo\nimport wandb\nfrom wandb.panels.viewers import SplatViewer',
  bench: 'import marimo as mo\nimport wandb\nimport pandas as pd\nimport altair as alt',
  graph: 'import marimo as mo\nimport wandb\nimport pandas as pd\nimport networkx as nx\nfrom wandb.panels.viewers import GraphViewer',
};
export const CTX = 'ctx = wandb.panels.context()   # set when the notebook is linked to a panel\napi = wandb.Api()\nPROJECT = ctx.project           # "' + ENTITY + '/' + CUR + '"\nRUNS = ctx.runs                 # runs visible in the Workspace (filters and grouping applied)';
export const LOAD: Record<TemplateId, string> = {
  rerun: '# Change the artifact name, or use RUNS[0].logged_artifacts() for a Workspace run\nart = api.artifact(f"{PROJECT}/{ref.value}")\nrrd = next(art.download().glob("*.rrd"))',
  foxglove: '# Change the artifact name if your logs are stored elsewhere\nart = api.artifact(f"{PROJECT}/{ref.value}")\nlog = next(art.download().glob("*.mcap"))',
  splat: '# Change the artifact name to your reconstruction\nart = api.artifact(f"{PROJECT}/{ref.value}")\nscene_file = next(art.download().glob("*.ply"))',
  bench: '# Starts from the runs visible in the Workspace; edit the tag and summary keys to match your evals\nruns = [r for r in RUNS if ref.value in r.tags]\ndf = pd.DataFrame([\n    {"run": r.name, **{b: r.summary["eval"][b][score.value] for b in benchmarks.value}}\n    for r in runs\n])',
  graph: '# Change the Table name and columns to match your graph data\ntable = api.artifact(f"{PROJECT}/{ref.value}").get("graph")\nedges = table.get_dataframe()[["source", "target", "type"]]',
};
export const VIEW: Record<TemplateId, string> = {
  rerun: 'rr.log_file_from_path(rrd)\nRerunViewer(frame=frame.value, height=520)',
  foxglove: 'FoxgloveViewer(log, layout=layout.value)',
  splat: 'scene = SplatViewer(scene_file, camera="orbit")\nscene.set_camera(fov=fov.value)\nscene',
  bench: 'long = df.melt(id_vars="run", var_name="benchmark", value_name="score")\nif chart.value == "Grouped bars":\n    out = alt.Chart(long).mark_bar().encode(x="benchmark:N", xOffset="run:N", y="score:Q", color="run:N")\nelse:\n    out = mo.ui.table(df)\nout',
  graph: 'G = nx.from_pandas_edgelist(edges, edge_attr="type")\nsub = nx.ego_graph(G, "Attention Is All You Need", radius=depth.value)\nGraphViewer(sub, color_by="type")',
};
export const BENCH = ['MMLU', 'GSM8K', 'HumanEval', 'ARC-C'];
export const CHARTS = ['Grouped bars', 'Table'];
export const SRC_DEF: Record<SourceKind, SourceDef> = {
  artifact: { label: 'Artifact', note: 'A versioned artifact in this project. The panel stays on the version you pick.' },
  tag: { label: 'Workspace runs', note: 'Runs visible in this Workspace, filtered by tag.' },
  run: { label: 'Run files', note: 'Files logged to a single run.' },
  upload: { label: 'Upload', note: 'A file from your computer. It is logged as an artifact so the panel can load it again later.' },
  path: { label: 'Path / URL', note: 'An s3://, gs:// or https:// location, or a path on the notebook volume. The file is fetched again on each run.' },
};
export const SRCS: Record<TemplateId, SourceKind[]> = { rerun: ['artifact', 'run', 'upload', 'path'], foxglove: ['artifact', 'run', 'upload', 'path'], splat: ['artifact', 'run', 'upload', 'path'], bench: ['tag', 'upload', 'path'], graph: ['artifact', 'run', 'upload', 'path'] };
export const EXT: Record<TemplateId, string> = { rerun: '.rrd', foxglove: '.mcap', splat: '.ply', bench: '.csv', graph: '.csv' };
export const UPLOAD: Record<TemplateId, [string, string]> = { rerun: ['episode_0412.rrd', '386 MB'], foxglove: ['drive_0413.mcap', '1.8 GB'], splat: ['garden.ply', '212 MB'], bench: ['eval_scores.csv', '14 KB'], graph: ['edges.csv', '96 KB'] };
export const PATHS: Record<TemplateId, string> = { rerun: 's3://robotics-data/episodes/ep_0412.rrd', foxglove: 's3://fleet-logs/2025-04-13/drive_0413.mcap', splat: 'gs://recon-scenes/garden/garden.ply', bench: 'https://evals.acme.dev/results/eval_scores.csv', graph: 's3://kg-exports/citations/edges.csv' };
export const RUNSRC: Partial<Record<TemplateId, string[]>> = { rerun: ['pick-place-0412', 'pick-place-0409', 'sim-rollout-12'], foxglove: ['drive-0413', 'drive-0411', 'drive-0402'], splat: ['garden-recon-3', 'lobby-recon-1', 'warehouse-recon-2'], graph: ['build-graph-07', 'build-graph-06', 'extract-entities-2'] };
export const SLUG: Record<TemplateId, string> = { rerun: 'rerun_viewer', foxglove: 'foxglove_viewer', splat: 'splats_viewer', bench: 'eval_benchmarks', graph: 'knowledge_graph' };

export const TPL: Template[] = BASE.map((t) => ({
  ...t,
  sources: SRCS[t.id].map((k) => SRC_DEF[k]),
  code: IMPORTS[t.id] + '\n\n' + CTX + '\n\n' + LOAD[t.id] + '\n\n' + VIEW[t.id],
  sample: 'wandb · ' + DATA[t.id].options[0],
}));
