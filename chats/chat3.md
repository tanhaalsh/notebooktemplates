# Customizing quick templates

_Started 2026-09-24 13:30 UTC_

---

## User

explain how a user will adjust the quick template with their own data?

## Assistant

_[tool: grep]_

In v16, users bring their own data in four steps:

1. **Pick a template.** Go to Add panel → Marimo → Templates, then open one (for example, the 3D splats viewer). The detail page lists the file formats it accepts (such as .mcap, .bag, .ply, .graphml or .csv edge lists) and shows sample code. At this point it still uses sample data, like `data/garden.ply`.

2. **Copy it into their project.** "Copy to project" saves a notebook under the chosen project. The notebook knows which Workspace it came from, so it has the project name and the runs visible in that Workspace.

3. **Point it at their data.** The notebook's first cell has a dropdown for choosing the data. What it lists depends on the template:
   - Rerun, Foxglove, splats: artifacts, e.g. `garden-splat:v2`
   - Benchmarks: a run tag, e.g. `eval-v2`, which filters the Workspace's runs
   - Knowledge graph: a Table artifact with `source` and `target` columns

   The data-loading cell has a comment telling them what to edit, e.g. "Change the artifact name to your reconstruction." To use data that isn't in the dropdown, they edit that one line.

4. **Tune and check.** Each template has one control, such as a frame slider, layout dropdown, field of view, score field or graph depth, and the viewer cell reruns when they change it. If the chosen data doesn't exist or has the wrong shape, the panel says what it expected, e.g. "a Table artifact with source and target columns" or "none of the 15 runs are tagged eval-v3".

The notebook then appears as a panel in the Workspace, with a link back to its source notebook for further edits.

The prototype doesn't show:
- **Uploading raw files.** There's no upload step; files have to be logged as artifacts first.
- **Remapping columns or fields.** Users have to edit the code to do that.

If you want, I can add an upload step, a column-mapping step, or both.

## User

so im seeing that it points to artifacts?

## Assistant

Yes. In v16, the data dropdown in each template lists artifacts from the current project, except for the benchmarks template:

- **Rerun / Foxglove:** a log artifact, e.g. `drive-0413:v3`
- **Splats:** an artifact with a .ply, .splat or .spz file, e.g. `garden-splat:v2`
- **Knowledge graph:** a Table artifact, e.g. `citations:v1`
- **Benchmarks:** a run tag, not an artifact. It filters runs already in the Workspace.

The generated code downloads the selected version with `api.artifact(f"{PROJECT}/{ref.value}")`, so every panel stays tied to a specific version.

The catch: data that isn't logged as an artifact has no way in, short of editing the code. If that's a gap, I could add a "Data source" picker on the first cell with a few options:
- **Artifact** (as now)
- **Run files:** files logged to a specific run
- **Upload:** drag in a file and it's logged as an artifact for you
- **Path / URL:** S3, GCS or a local path

Want me to add that in a v17?

## User

yes

## Assistant

_[tool: read_file]_

_[tool: copy_files]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

I've built v17 (`Forge Quickstarts v17 data sources`); it's with the verifier now. Copied notebooks now have a **Data source** cell (cell 4) with four options:

- **Artifact:** the v16 behavior, unchanged.
- **Run files:** pick one of the Workspace runs and it reads that run's files.
- **Upload:** a drop zone; the file is logged as `uploads:v0` so the linked panel can load it again later.
- **Path / URL:** an s3://, gs:// or https:// location, fetched again on each run.

The benchmarks template offers Workspace runs, Upload and Path / URL. An uploaded or fetched CSV is expected in the run, task, score layout.

Other changes:
- **Code follows the source:** the choice cell (5) and the loading cell (6) show the code for whichever source is picked.
- **Failure messages:** there's a specific message for each source: a run with no matching file, no file uploaded, or a path that isn't the right file type. Each says which cell to fix.
- **Template detail page:** new "Where your data can come from" list.

In the prototype, the last run in each Run files list has no files, so you can see the failure state. `ctx.log_upload` and `ctx.fetch` are made-up function names for the copy/upload helpers and would need to exist in the real product.

## User

where do the notebooks that were run and saved live?

## Assistant

In the prototype, saved notebooks live in the project's **Notebooks** page. You reach it from the notebook icon in the left rail, or from "View in Notebooks".

- **Where a copy goes:** "Copy to project" saves the notebook into the project you pick in the copy dialog. That's the current project by default, and you can also choose another or create one.
- **What the list shows:** each notebook's file name (e.g. `rerun_viewer.py`, numbered `_2`, `_3` for more copies), the template it came from, author, last saved time and how many panels it's linked to.
- **Saving:** edits save automatically ("All changes saved"). Nothing publishes unless you run the notebook.
- **Run output:** the linked Workspace panel shows the last successful run. A failed run doesn't replace it; the panel keeps the previous output and shows a "Last run failed" note. The prototype doesn't keep a history of runs.
- **Opening one:** clicking a row opens it as a tab next to the Workspace tab. The source-notebook link on a panel does the same.

Still undefined in the prototype:
- **Storage:** whether a notebook is stored as a project file, an artifact or something else.
- **Run history:** whether past run outputs are kept.
- **Access:** who else can open a notebook, e.g. teammates viewing Buzz Aldrin's Workspace.

Want me to add any of these?

## User

so a few things: this is the current add panels -- adjust our design to this

## User

so a few things: this is the current add panels -- adjust our design to this

## Assistant

_[tool: copy_files]_

_[tool: grep]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

v18 (`Forge Quickstarts v18 add panels drawer`) now uses the real Add panels layout: "Add panels" opens a right-side drawer instead of the small dropdown. It's with the verifier now.

- **Drawer contents:** the drawer follows your screenshots: Quick panel builder, Charts (open), Weave traces, then Query panels and Media (both collapsed), and Text and code (open). HTML is greyed out with its Docs button, as in the screenshot.
- **Marimo entry:** "Marimo notebook" sits in Text and code, between Code and HTML, with a New badge. Clicking it opens the same template modal and flow as before.
- **Invented items:** your screenshots show Query panels and Media collapsed, so I made up one item for each ("Query panel" and "Media"). Send what's really in them and I'll swap them in.

What are the other changes you mentioned?

## User

this is the notebooks navigation--the side nav u see here is correlated with the grid button next to cw loogo

## Assistant

_[tool: copy_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I've built v19 (`Forge Quickstarts v19 notebooks nav`) to match your navigation; it's with the verifier now. Notebooks is now its own Forge product, reached from the grid button next to the CW logo.

- **App switcher:** the grid button opens the Forge / Infrastructure list from your screenshot. Weights & Biases goes to the Workspace and Notebooks goes to the Notebooks product. The other apps just show a "not part of this prototype" message.
- **Header:** it reads "Notebooks" when you're in that product. The project picker and the W&B icon rail only show inside Weights & Biases, and I removed the Notebooks icon from that rail.
- **Getting started:** the welcome screen with the three tutorial cards, plus Documentation and Create from scratch.
- **Overview ("Your notebooks"):**
  - Search, Filters, and the Notebook / Author / Project / Last updated / Created table.
  - Your template copies are listed first, then the three example rows from the screenshot.
  - "Create notebook" opens the template gallery. A notebook created this way is saved to Notebooks without adding a Workspace panel.
- **Opening a notebook:** "View notebook" on a panel, or clicking a row, opens the notebook full-width in the Notebooks product with a back arrow to your notebooks. The "View in Workspace" link still takes you back to W&B.

The three example notebooks from the screenshot don't open, since they aren't template copies. Neither do the Getting started tutorial cards. Tell me if either should.

## User

so open quesytions: how does user access quickstart templatres from notebooks

## Assistant

Right now there's only one way in: on the Overview page, **Create notebook** opens the template gallery. Getting started doesn't mention templates at all, and it's the first page people see.

Four ways we could expose them, from least to most prominent:

1. **Create notebook gives a choice.** It opens the same first step as the panel flow: Blank, From a template, or Open existing. Templates become one clear option instead of the only route.
2. **Templates row on Getting started.** Add a "Start from a template" row under the three tutorial cards, showing the five viewer templates (Rerun, Foxglove, Splats, Benchmarks, Graph) plus "Browse all". It uses the empty space on that page and keeps tutorials and templates separate.
3. **Templates item in the left nav.** A third item, Getting started / Overview / **Templates**, opens the full gallery as a page rather than a modal. That makes templates a place in the product, which suits the list if it grows.
4. **Empty state.** When "Your notebooks" is empty, show a few templates in place of a blank table. It only helps first-time users.

My recommendation is 1 + 2: Create notebook always offers templates, and Getting started shows them to new users. Add 3 if you expect the template list to grow.

One more thing to decide either way: a notebook created from the Notebooks product isn't linked to a Workspace panel. Do we let people link it to a panel after creating it, or is that only done from the Workspace?

Want me to build 1 + 2 in a v20?

## User

its not in the scope of this prd tho. so v20 should explore this

## Assistant

_[tool: copy_files]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I've built v20 (`Forge Quickstarts v20 templates in notebooks`) as a separate exploration, so v19 stays aligned with the PRD. It's with the verifier now.

- **Getting started:** a new "Start from a template" row sits under the three tutorial cards, with one card per viewer template and a "Browse all templates" link. Clicking a card opens that template's detail page.
- **Left nav:** a third item, **Templates** (with a count), opens the template gallery.
- **Create notebook:** it still opens the gallery.
- **Copying:** a template copied from inside Notebooks is saved to "Your notebooks" and opens there. No Workspace panel is created.

The template screens still use the panel flow's modal, now with a "New notebook" breadcrumb. If this direction sticks, Templates could become a full page instead of a modal.

Still open: can a notebook created in Notebooks be linked to a Workspace panel later, and from where?

## User

im not lking this integration. lets brianstrom here how we can add it in

## Assistant

Here are six ways templates could fit into Notebooks, each built on a different idea:

**A. Templates are notebooks.** Add a "Templates" tab to "Your notebooks", next to Mine and Shared with me. A template opens like any notebook but read-only, and "Make a copy" turns it into yours. No new screens or modal; it reuses the table and the notebook view.

**B. Try before you copy.** Opening a template runs it right away on the sample data, so you see the live viewer first. A "Use with my data" bar across the top copies the notebook and jumps to the data source cell. The main thing people get is seeing the output before they commit.

**C. Start from your data.** You pick the data first: drop a .mcap file or choose an artifact. Forge detects the type and suggests the matching viewer ("Looks like ROS logs → Foxglove viewer"). Templates stay in the background as the thing that renders your data.

**D. Templates inside a blank notebook.** An empty notebook shows starter suggestions in its first cell ("Visualize a robot log", "Compare benchmark runs"…). Picking one inserts those cells into the notebook you already have. Templates become snippets rather than whole files, so the same suggestions work in the Workspace panel flow too.

**E. ARIA.** Tell ARIA something like "show drive-logs:v5 in a viewer". It picks the template, sets the data source and runs it. Templates are how ARIA builds the notebook, and users rarely browse them.

**F. From where the data lives.** On an artifact or run file in W&B, add "Open in notebook ▸ Foxglove viewer". Templates show up where the data already is, instead of in the Notebooks home.

My take: **B** is the strongest core, because seeing it work first is the point of a quickstart. **A** is the cheapest way in. **C and F** are the most novel, since they flip the flow to start from data, and they tie back to the data-source work in v17.

Which should I prototype? I can build two or three side by side as options.

## User

in the getting started oage

## Assistant

Here are six ways the Getting started page could bring in templates, each a different layout:

**1. Two paths in the hero.** Under "Get started with notebooks", show two large choices side by side: **Learn** (the three tutorials) and **Build** (start from a template). Tutorials and templates stay separate instead of stacked.

**2. Tabs on the cards.** Keep the existing card row but add tabs above it: *Tutorials | Templates*. Templates shows the five viewers in the same card style. The page layout doesn't change, the templates are one click away, and tutorials stay the default.

**3. One featured template.** Replace the plain header area with one large preview of a template's live output, such as the Rerun viewer playing, with "Use this template" and "See all 5". It's the most visual option and sells the idea quickly.

**4. Templates as the create buttons.** The bottom buttons become a single row: *Create from scratch · Rerun · Foxglove · Splats · Benchmarks · Graph*. It reads as "what do you want to build?". The lightest change, with nothing new on the page.

**5. Start from your data.** A drop zone on the page: "Drop a .mcap, .rrd, .ply or .csv, or pick an artifact". Forge suggests the matching template. It's the only option that doesn't need people to know template names.

**6. Numbered steps.** Turn the page into a checklist: ① Pick a template ② Connect your data ③ Add to a Workspace panel. Step 1 opens the templates inline. It teaches the whole flow, including panels, and fits a first-run experience.

My picks:
- **2** is the safest.
- **3 or 5** would make the strongest first impression.
- **6** best explains how Notebooks connects to Workspaces.

Which should I prototype? I'd build 2–3 as side-by-side versions of the Getting started page so you can compare.

## User

olets see 2

## Assistant

_[tool: copy_files]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I built v21 (`Forge Quickstarts v21 getting started tabs`) from v19, dropping the v20 changes. It's with the verifier now.

- **Tabs:** Getting started now has *Tutorials | Templates (5)* tabs above the cards. Tutorials is the default and looks the same as before.
- **Templates tab:** the five viewer templates, in the same card style (3 + 2 grid), with a one-line hint on using your own data.
- **Opening a template:** clicking a card opens its detail page. A copy is saved to "Your notebooks" without adding a Workspace panel.

The left nav is back to just Getting started / Overview.

## User

its ok....maybe a simple button next to creat from scratch can be a create from a template

## Assistant

_[tool: copy_files]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I made v22 (`Forge Quickstarts v22 create from template`) from your edited v21. The tabs are gone, and the three tutorial cards are back on their own. It's with the verifier now.

Next to **Create from scratch** there's now an outline **Create from a template** button. It opens the template gallery, and a copy made there is saved to "Your notebooks" without adding a Workspace panel.

## User

match it with scratch

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

"Create from a template" now looks the same as "Create from scratch": a filled primary button with a plus icon.

