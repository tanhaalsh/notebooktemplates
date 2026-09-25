# Featured section for notebooks

_Started 2026-09-24 16:16 UTC_

---

## User

Continuing from "Customizing quick templates".

## Assistant

We were refining how users access and create notebooks from quickstart templates in the Notebooks product. The core question: where templates live in the interface, and how to surface them without cluttering Getting started.

We explored six layout options for Getting started (two-path hero, tabs, featured preview, data-first drop zone, numbered steps) and landed on the simplest: a **Create from a template** button next to Create from scratch. Both are now styled identically as filled primary buttons with plus icons.

The current state (v22):
- Getting started shows three tutorial cards and two action buttons: Create from scratch and Create from a template.
- Clicking either opens the respective flow. Templates open the gallery (detail page, then copy).
- A notebook created from templates is saved to "Your notebooks" without linking to a Workspace panel.
- Left nav is Getting started / Overview only; the Templates tab and v20 exploration are shelved.
- The Add panels drawer (v18) and Notebooks navigation from the grid button (v19) remain in place.

Open questions not in the PRD scope, flagged for v20+ exploration:
- Can notebooks created in Notebooks be linked to a Workspace panel after creation, and from where?
- Should the data-source picker (v17: Artifact / Run files / Upload / Path URL) be integrated here?
- Does the template detail page need changes to fit this flow?

Files: Forge Quickstarts v22 create from template.dc.html (current); v19 and v18 are the navigation and drawer foundations.

## User

explore how we can insert a featured section in the notebooks strated page

## Assistant

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: copy_files]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_set_props]_

_[tool: ready_for_verification]_

I added a featured section to Getting started in v23. The file now opens straight onto the Getting started page. You can switch between versions from the Tweaks panel:

- **Style:**
  - **Spotlight** is one large card for a single template, with "Use template" and "See all templates" buttons.
  - **Row** is a "Featured templates" heading and three cards.
  - **Split** is one large card with two smaller ones beside it.
  - **None** hides the section.
- **Position:** above the tutorials, below them, or below the action buttons.
- **Featured template:** which template gets the spotlight or large card.

Clicking any featured card opens that template's detail page. The viewer images are dark placeholders for now, so send real screenshots if you want them in.

## User

maybe include te image preview w the feature of the quickstart item

## Assistant

_[tool: run_script]_

_[tool: grep]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

The featured cards now show an image preview of each quickstart: the same viewer visual used in the workspace panels (Rerun, Foxglove, splats, benchmarks, graph).

- **Spotlight:** the preview is back as the left column, next to your trimmed text.
- **Row:** each card has a preview across the top.
- **Split:** the large card and both small cards have previews; I widened the small-card previews from 96px to 128px.

The preview changes when you pick a different featured template in Tweaks.

## User

its too big-- fix it into the tile.

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I resized the previews so each one scales to fit inside its tile instead of overflowing, across all three featured styles. I haven't checked the result on screen yet; a review is running in the background.

## User

remove black. put image oln right

## Assistant

_[tool: run_script]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I moved the spotlight preview to the right of the text and swapped the black backgrounds for white, with a thin divider line. The row and split cards also lost their black backgrounds. I haven't checked it on screen yet; a review is running in the background.

## User

remove line in the middle.

## Assistant

_[tool: run_script]_

I removed the divider line between the text and the preview in the spotlight card.

## User

sanity check v23 w prd

## Assistant

_[tool: list_files]_

_[tool: grep]_

_[tool: grep]_

I can't check v23 against the PRD because it isn't in the project. The uploads folder only has screenshots and the old quickstarts HTML prototype. Please paste the PRD text or attach the file, and I'll go through v23 point by point.

## User

<pasted_text name="Pasted text (93 lines)">
**TL;DR:** Enable researchers to add domain-specific Workspace panels from ready-made Marimo notebook templates, then customize and run their project copy, eliminating the need to build each visualization from scratch.

## Background and Strategic Fit

Marimo Panels give W&amp;B a way to support specialized visualizations without building a native panel for every domain. Templates make that capability easier to adopt: researchers can start with a working Rerun viewer, benchmark comparison, or knowledge graph and adapt the notebook to their project.

The parent Panels PRD documents requests from Quadrature, Netflix, and Applied Intuition for more flexible Python visualizations. Templates address the next step, helping users turn that flexibility into a useful panel quickly.

- **Quadrature Explains the Cost of Custom Charts**
    
    Quadrature builds specialized multi-run plots outside W&amp;B and finds Vega difficult to customize.
    
    &gt; “We have some custom plots which are quite difficult to achieve with Vega, and we generally find it very hard to work with.”
    &gt; 
    
    Source: Quadrature Slack excerpt in the parent Panels PRD
    

- Netflix Explains the Python Panel Gap
    
    During its trial, Netflix asked whether W&amp;B offered an equivalent to Comet’s Python Panel.
    
    &gt; “I was referring to something like this Python panel in the meeting today, I wonder if W&amp;B has something similar?”
    &gt; 
    
    Source: Netflix Slack excerpt in the parent Panels PRD
    

We propose a template gallery within the Marimo panel creation flow. Selecting a template copies its notebook into the current project and links it to the panel. **Project context and the W&amp;B SDK are already available in the notebook**, so users can pull relevant project data and customize the visualization there.

## Requirements

Figma: https://www.figma.com/design/ej2DFI9fF7g7ODukIVLaun/Marimo---Wandb?node-id=708-36241&amp;p=f&amp;m=dev

Add **Start from template** alongside the existing notebook source options. Reuse the Notebooks experience’s copy behavior; the template gallery is the new design work.

**Workflow:** Add panels &gt; Text and Code &gt; Marimo panel &gt; Start from template &gt; Use template &gt; customize and run notebook &gt; view output in Workspace.

### Goals

- Help users start with useful domain-specific panels instead of a blank notebook.
- Let users own, customize, and run template copies within their W&amp;B project.
- Reuse notebook project context and SDK access to retrieve data.

### Non-Goals

- A template marketplace, user-published templates, or a new notebook editor.
- A separate data connection or field-mapping setup flow.
- Changes to the parent Panels execution, sharing, billing, or Reports scope.

### Initial Templates

| Template | Starting experience |
| --- | --- |
| Rerun viewer | Retrieve a recording from the project and explore it with playback and spatial views. |
| Foxglove viewer | Retrieve recorded sensor data and inspect it in an embedded viewer. |
| 3D splats viewer | Retrieve a Gaussian splat asset and explore the reconstructed scene. |
| LLM and eval benchmarks | Retrieve eval results and compare benchmarks across model runs. Users customize benchmark names, score fields, and presentation in the notebook. |
| Knowledge graph | Retrieve node and relationship data and visualize the graph. |

Each template includes a preview, a short description, supported data formats, and readable SDK example code. Queries use the current project and available Workspace run context; users edit the notebook to retrieve the runs, metrics, Tables, or Artifacts relevant to their analysis. When expected data is missing, the notebook explains which query or data reference to change.

### User Stories

1. **As a researcher, I can select a panel template and copy its notebook into my project so I have a working starting point that I own.**
    
    Start from template, I browse preview cards and select Use template. W&amp;B creates a uniquely named notebook in the current project, makes me its author, and sets it as the panel’s Source notebook. The copy appears in Project &gt; Notebooks, and View notebook opens it in a new tab. Selecting an existing notebook continues to link that notebook directly.
    
2. **As a researcher, I can customize and run my copied notebook so the linked Workspace panel shows the visualization I need.**
    
    The notebook already has project context and access to the W&amp;B SDK. I edit its queries, benchmark definitions, or visualization code, then save and run it. A successful run updates the linked panel’s saved output; the panel displays the visualization, while code editing stays in the notebook. Changes affect my copy only, and updates to the original template do not overwrite it.
    

## Questions and Decisions

| Question | Decision | Notes |
| --- | --- | --- |
| How does the notebook access data? | Use existing project context and the W&amp;B SDK. | Template code provides a starting query; users customize it in the notebook. |
| What gets copied? | The template notebook, into the current project, owned by the selecting user. | Copying does not duplicate the underlying run data. |
| When does the panel update? | After a successful notebook run, through the parent Panels output mechanism. | Retain the last successful output if execution fails. Inherit existing execution and sharing permissions. |
| Must all five templates launch together? | Open. Recommend releasing each when ready. | Validate viewer embedding, dependencies, and any account requirements before release. |
| Who maintains templates? | W&amp;B maintains the originals; users own their copies. | Assign an owner to each template. Existing copies never update automatically. |

## Metrics

Proposed targets to calibrate during beta. Example previews do not count as activation.

| Outcome we care about | Metric | Success threshold | Notes |
| --- | --- | --- | --- |
| Adoption | Users rendering project data within 7 days of copying a template | At least 30% of Paid users activated | Segment by template. |
| Time to value | Time from copying to first successful project-data render | Median under 2 minutes | Measure users with compatible data available. |
| WREUs | Activated paid organizations using a template panel in two distinct weeks | At least 20% of Paid App WREUs | Count viewing or rerunning real-data panels. |
| Business impact | Opportunities where templates unblocks Physical AI deals | 5+ | Record customer confirmation and opportunity outcome. |
</pasted_text>

## Assistant

_[tool: grep]_

v23 matches the PRD on the panel flow. Most of what doesn't match is on the Notebooks Getting started page, which the PRD doesn't cover.

**Matches the PRD**
- **Workflow:** Add panels › Text and Code › Marimo panel › Start from template › Use template, with Start from template sitting next to Existing notebook.
- **Template detail page:** has a preview, a description, supported formats, and SDK example code.
- **Copying:** creates a uniquely named notebook in the current project, authored by you, set as the panel's Source notebook, and listed in Your notebooks.
- **Opening the copy:** View notebook opens it in a new tab.
- **Missing data:** the notebook shows "Expected data not found" and says which reference to change.
- **Failed runs:** the panel keeps the last successful output and shows a failure note.
- **Initial templates:** all five are there.

**Outside the PRD (make these decisions explicitly)**
1. **Templates on Getting started, featured section included.** The PRD puts the gallery only inside the Marimo panel creation flow. Showing templates on the Notebooks page adds a second way in that it doesn't cover.
2. **Copies made from the Notebooks page aren't linked to a panel.** The PRD's copy behavior assumes a panel gets linked. This is the open question you already flagged: how to link one later.
3. **The featured section implies someone chooses what gets featured.** The PRD rules out a marketplace. A fixed featured slot is fine, but someone needs to own which template goes in it.

**Small mismatches to fix**
- **"Use template" on the spotlight card opens the detail page.** In the panel flow, "Use template" means copy the notebook. It should be renamed "View template" or actually copy.
- **The "New" badge on the split layout's main card isn't backed by anything.** It should be removed or tied to real release timing; the PRD suggests releasing templates one at a time.
- **Activation tracking:** the PRD says example previews don't count as activation. The featured cards only preview, so they shouldn't be counted.

Want me to fix the two small UI mismatches (rename the spotlight button to "View template" and remove the "New" badge)?

## User

make sure this v23 is the aspect ratio i provided

## Assistant

_[tool: grep]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: run_script]_

I changed v23's preview frame from 1440×948 to 1512×982. That matches your screenshots, which are 3024×1964 at 2x. I assumed "the aspect ratio I provided" meant those screenshots. The spotlight card's size is still the 859×221 you set.

## User

-notebooks is unclickable through workspaces view 
-remove image from tile from getting strated view
-automatically run the quickstart templates w strater data
-rename mairmo charts to notebook charts
-minimize the decisions and clicks on. add a marimo panel page
-remove the "use template" page after clicking on the template

## Assistant

_[tool: copy_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: show_html]_

_[tool: ready_for_verification]_

I made all six changes in a new file, v24 (v23 is unchanged). I haven't checked it on screen yet; a review is running in the background.

- **Notebooks from the workspace:** there's now a Notebooks icon in the workspace's left sidebar, and it opens Getting started.
- **Getting started tiles:** the image previews are gone from all featured styles.
- **Auto-run:** copying a template now runs it right away with starter data. From a workspace, the linked panel fills in with output straight away.
- **Rename:** "Marimo charts" is now "Notebook charts".
- **Add a Marimo panel:** choosing Marimo panel now goes straight to the template grid. A "Link an existing notebook" link sits below it. The first screen with three choices, including Blank notebook, is gone.
- **Use template page:** clicking any template copies it and opens the notebook in one click. The template detail page and the "Make a copy" dialog are skipped everywhere, including the featured cards on Getting started.

Skipping the detail page means users no longer see supported formats or example code before copying. The PRD lists both as part of each template.

## User

getting started page is empty

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: grep]_

_[tool: ready_for_verification]_

Getting started has its content back in v24. It had been emptied, and an edit in v23 had moved the content outside the Getting started section, so I copied it back from v23 without the image previews. v23 itself still has that problem.

In your v23 edits the "Create from a template" button was removed. I left it out of v24 too, so the featured section is the only way to start from a template on this page. Tell me if you want the button back.

## User

remove featured tile and create an action that says get started w templates

## Assistant

_[tool: run_script]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I removed the featured tile from Getting started and added a **Get started with templates** button after Create from scratch. It opens the template grid, and picking a template copies it and runs it with starter data. I also removed the featured-section settings from the Tweaks panel, since there's nothing left for them to control.

