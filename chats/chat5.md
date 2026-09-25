# Robotics tile templates

_Started 2026-09-24 19:30 UTC_

---

## User

Continuing from "Featured section for notebooks".

## Assistant

We were refining the Notebooks Getting started page and the template flow to simplify the user journey from discovery to a running notebook. The core goal: minimize clicks and decisions while keeping templates accessible.

We made six key changes in v24:
- Added a Notebooks icon in the workspace sidebar so users can reach Getting started from there.
- Removed image previews from the Getting started tiles.
- Auto-run templates with starter data after copying.
- Renamed "Marimo charts" to "Notebook charts".
- Skipped the Add a Marimo panel choice screen; Marimo panel now goes straight to the template grid.
- Removed the template detail page entirely; clicking a template copies and opens it in one action.

Then we streamlined further: removed the featured tile section and replaced it with a single **Get started with templates** button alongside Create from scratch. Clicking it opens the template grid, and selecting a template copies it and runs it immediately.

Current state (v24):
- Getting started shows the three tutorial cards and two action buttons: Create from scratch and Get started with templates.
- The template grid is the first UI users see after clicking Get started with templates.
- Copying a template skips preview, detail page, and confirmation dialogs.
- Notebooks created from templates run automatically with starter data.
- The workspace sidebar now links to Notebooks.

Open: the PRD lists supported formats and example code on the template detail page. By skipping that page, users no longer see this info before copying. Decide if a detail page should be restored or if the info belongs elsewhere.

Files: Forge Quickstarts v24 streamlined.dc.html (current); v23 featured section.dc.html archived.

## User

getting started: make the robotics tile be a tile for templates. within notebooks ONLY-- include a panel preview of the notebook when user selects which notebook form the QuickStart they want

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

I replaced the robotics tile on Getting started with a **Start from a template** tile. It opens the template grid.

- **From Notebooks only:** clicking a template now opens a preview first. You see the notebook's panel output, supported formats, data sources and example code. **Use template** then copies the notebook and runs it with starter data. There's no copy dialog.
- **From the workspace ("Add a Marimo panel"):** nothing changed. Clicking a template still copies it straight away.

This also settles the open question: from Notebooks, users now see supported formats and example code before they copy.

## User

lets make the window a pane or drawer

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

The template window is now a 760px drawer that slides in from the right, matching the Add panels drawer. The template grid is two columns instead of three to fit. The preview page stacks top to bottom: panel preview, then formats and data sources, then example code.

The drawer is shared, so the workspace "Add a Marimo panel" flow opens it too.

## User

for the notebooks preview--make it consistent with a notebook format. add in check box include in workspaces panel (automatically populates workspace without having to add panel)

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

The Notebooks template preview now looks like a notebook:

- **Top strip:** the file name, a "Preview · read-only" chip, and the sample data it runs with.
- **Cell 1:** title and description, in the same text style as the notebook editor.
- **Cell 2:** the example code, with the panel output underneath.
- **Cell 3:** supported formats and data sources.

**Include in workspace panel** is a checkbox at the bottom left of the drawer, on by default. When it's checked, **Use template** also adds a linked panel to the workspace, so the user doesn't have to add one. The confirmation message says so. The checkbox only shows when the drawer is opened from Notebooks.

## User

rename marimo to notebook in every mention

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I replaced "Marimo" with "notebook" in all on-screen text, including:
- The Getting started intro.
- The **Notebook** entry in the Add panels drawer.
- **Add a notebook panel** in the drawer title and breadcrumb.
- The copy-dialog panel line.
- The blank notebook description.
- The splat template's intro text.

The example code still has `import marimo as mo`. That's the real Python import, so renaming it would make the sample code wrong. Say if you want it changed anyway.

## User

lets resolve the view in workspaces for the template-- should only appear when user alters and runs the notebook?

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

"View in Workspace" now only appears after the user changes something in the notebook and runs it successfully, and the notebook is linked to a workspace panel. "Changes" means a different data source, artifact or file, parameter, or chart setting.

- **Auto-run after copying a template:** no banner. The confirmation message already says what happened.
- **Re-running without changes:** a plain "Run succeeded." with no link.
- **Failed run:** the error message only, with no link.
- **Changed and ran successfully:** "Run succeeded. The linked workspace panel now shows your changes." with **View in Workspace**.

## User

make link an existing notebook more visible in the add notebook panel. also start from a blank notebook

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

The "Add a notebook panel" drawer now opens with two cards side by side, **Link an existing notebook** and **Start from a blank notebook**. Below them, an "Or start from a template" label leads into the template grid. This replaces the small link at the bottom. The cards only show in the workspace flow.

The blank notebook card only shows a "not part of this prototype" message for now. I can make it create and open an empty linked notebook if you want.

