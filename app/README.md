# Forge · Notebook quickstarts

A React + TypeScript + Vite build of the Claude Design prototype
`project/Forge Quickstarts v24 streamlined.dc.html`: notebook templates in the W&B
workspace ("Add a notebook panel") and in Notebooks ("Getting started").

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build
```

Open a specific screen with query params, like the prototype's Tweaks panel:
`?step=getting-started|workspace|menu|gallery|notebook&template=rerun|foxglove|splat|bench|graph`.
The app opens on Getting started by default.

## Layout

| Path | What it holds |
| --- | --- |
| `src/state/QuickstartsApp.tsx` | All state and actions. `renderVals()` builds the flat view model that screens render from (ported from the prototype's logic class). |
| `src/data/templates.ts` | The five templates, their data sources, parameters and notebook code. |
| `src/data/workspace.ts` | Mock project, org, apps and other users' notebooks. |
| `src/lib/notebook.ts` | Cell code generation and the simulated run results: success, missing data, file paths. |
| `src/lib/highlight.ts` | Python syntax highlighting for notebook cells. |
| `src/components/` | One component per screen region: top bar, workspace, notebooks, templates drawer, notebook editor and others. |
| `src/ds/` | CoreWeave design-system tokens, fonts and the `Button` component. |
| `src/styles/hover.css` | Hover states. The prototype set these per element with `style-hover`. |

## Behaviour notes

- Runs are simulated. They take 1 second. Some references fail on purpose to show the
  "Expected data not found" state: each template's `missing` artifact, the third run in the
  list, an empty upload, and a path with the wrong file extension.
- Picking a template in the workspace flow copies it and auto-runs it straight away. From
  Notebooks it opens a read-only notebook preview first. The **Include in workspace panel**
  checkbox also adds a linked panel.
- **View in Workspace** only appears after you change an input and the run succeeds, and
  only when the notebook is linked to a panel.
- Parts of the prototype that v24 never reaches aren't included: the first "choose a source"
  step and the "Make a copy" dialog.
