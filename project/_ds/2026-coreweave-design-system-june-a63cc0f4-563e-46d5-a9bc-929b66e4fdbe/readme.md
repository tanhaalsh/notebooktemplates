# CoreWeave Design System

A brand & UI design system for **CoreWeave — The Essential Cloud for AI™**, derived from the
official *CoreWeave Company Deck Template*. It packages the brand's color, type, spacing and
effect tokens, reusable React UI primitives, foundation specimen cards, and a set of on-brand
slide templates so any agent or team can produce unmistakably-CoreWeave work.

---

## Sources

- **Primary source of truth:** *CoreWeave Company Deck Template (Jun 01)* — Google Slides
  `https://docs.google.com/presentation/d/1gXqfRXPBjs5YMAPTbMVY7XyQUZdLmUlzhXxEPjFZcf8/edit`
  (Originally `CoreWeave_Company Deck Template (Jun 01).pptx`, ~50MB.) Colors, full type
  hierarchy, component emphasis system, charts/diagrams language, and slide layouts were
  extracted verbatim — see `guidelines/_brand_source_notes.md`.
- **Brand context:** coreweave.com press materials (public).

> The reader is **not** assumed to have access to the above; everything needed is captured here.

### ⚠️ Known substitutions (need real files from the brand owner)
1. **Brand font** — ✅ **RESOLVED.** Official **Plus Jakarta Sans** (weights 200–800 + italics)
   supplied by the brand owner and served locally from `assets/fonts/` via `@font-face` in
   `tokens/fonts.css`. `--font-brand` points to it.
2. **Logo artwork** — ✅ **RESOLVED.** Official CoreWeave logo extracted from brand decks and
   stored in `assets/logo/` — full lockup in white / blue / black, plus the CW mark
   (`coreweave-mark-{white,blue}.png`). Brand 3D render imagery lives in `assets/imagery/`.
3. **Iconography** — still substituted. The deck's custom icon library wasn't extractable (the
   source PPTs embed no icon set — icons are vector shapes or absent). Using **Lucide** line
   icons (CDN), which match the 1px line-stroke style. Send the real icon set to swap in.

---

## Company & product context

CoreWeave is **The Essential Cloud for AI™** — a GPU cloud / AI hyperscaler. *"Built for
pioneers by pioneers,"* it delivers technology, tools and teams that let innovators build and
scale AI with confidence. Founded 2017 (formerly Atlantic Crypto, renamed 2019); listed on
Nasdaq (**CRWV**) in March 2025. Platform spans GPU compute, CPU compute, Kubernetes, storage,
networking, VFX/rendering, and ML/AI inference. Weights & Biases is a CoreWeave subsidiary but
maintains its **own** (Source Serif/Sans) brand — it is *not* covered by this system.

**Products / surfaces represented here:** the **Company Deck** (this is the only first-party
surface provided). No product-UI codebase or Figma was supplied, so no console/marketing UI kit
is fabricated — see *Index* for what to add when those sources become available.

---

## CONTENT FUNDAMENTALS — how CoreWeave writes

- **Voice:** confident, technical, and pioneering — declarative and energetic, never hype.
  Speaks as **"we"** to the audience as **"you"** / "innovators."
- **Casing:** display headers are set **UPPERCASE** (XL & Large headers). Subheaders, body, and
  UI use **sentence case**. Small labels / eyebrows are uppercase with wide tracking.
- **Tone examples (verbatim from brand):**
  - "The Essential Cloud for AI™"
  - "The cloud built for this moment."
  - "Built for pioneers, by pioneers."
  - "…enables innovators to move at the pace of innovation, building and scaling AI with confidence."
  - "…combining superior infrastructure performance with deep technical expertise to accelerate breakthroughs."
- **Numbers carry weight.** Headline metrics are stated as large figures (e.g. tokens served,
  data-center count). Use tabular figures; don't round away specificity when the precise number
  is the point.
- **No emoji** in brand communications. Technical nouns (GPU, HGX, Kubernetes, InfiniBand) are
  used plainly and correctly.
- **Trademark:** "The Essential Cloud for AI™". Company name is always "CoreWeave" (one word, capital W).

---

## VISUAL FOUNDATIONS

- **Color.** Royal/electric **blue is the brand signature** — `#2374FF` (bright, Blue 500) and
  `#0541E9` (deep, Blue 700) anchor the palette. *"Blues represent hierarchy, importance and
  relationships; neutral colors support structure and balance."* Backgrounds are **white**
  (`#FFF` / off-white `#FAFCFF`); dark surfaces are **pure black** or **deep blue** — the 12-step
  gray ramp tops out at `#464B51`, so there are no near-black grays. See `tokens/colors.css`.
- **Type.** A **single brand family** across the whole hierarchy. Sizes (from the deck): XL 72pt
  / Large 40pt (both 0.85 line-height, uppercase, extrabold), Small Header 24pt, Subheader 20pt,
  Body 16/14/12pt (1.15 line-height). Big display sits tight (-0.02em). See `tokens/typography.css`.
- **Backgrounds.** Predominantly flat solid fills — white, deep blue, or black. No photographic
  full-bleed-by-default, no gradients, no textures or patterns. Imagery, when present, sits in
  clearly-bounded placeholders. Keep it clean and roomy.
- **Layout.** Generous margins (72px slide safe-area), an 8px spacing grid, and a thin footer
  rule carrying the wordmark + page number. Strong hierarchy and clear contrast "guide the story."
- **Shape language.** Rounded rectangles and circles — *"modern, friendly and consistent."*
  Radii 4→24px; pills for chips/tags; circles for nodes/avatars.
- **Borders & strokes.** Thin and precise: **1px** structural lines/containers (Gray 700,
  `#686D73`), **2px** for diagram arrows (Gray 700) and connectors (Blue 500). Cards use a 1px
  `gray-200` border.
- **Elevation.** The brand reads **flat**. Prefer borders over shadow for structure; shadows are
  soft, low-spread, and rare (see `tokens/effects.css`).
- **Charts & diagrams.** A dedicated emphasis system: **Primary → Secondary → Tertiary → Support**
  step colors (deep→bright→light blue→gray), arrows for flow/direction, connectors to link nodes,
  containers to group. Rounded shapes throughout.
- **Motion.** Restrained and functional — ease in/out, modest fades and translations, **no
  bounce**, no decorative loops. 120–320ms durations.
- **Hover / press.** Hover: subtle background/border shift toward the brand blue or a darker
  tint. Press: a slight `scale(0.98)` (see `Button`). No glow, no large lifts.
- **Transparency & blur.** Minimal. On dark/brand panels, white at 6–22% opacity is used for
  subtle fills and dividers; avoid heavy glassmorphism.
- **Imagery vibe.** Cool, precise, infrastructure-forward; let the electric blue do the work.

---

## ICONOGRAPHY

- **Style:** **line / outline icons** with a thin, even stroke (the deck specifies a 1px line
  stroke in Gray 700 for lines & icons). Geometric, modern, consistent.
- **Source categories in the deck:** About Us · Industries · Platform · Resources · Solutions —
  i.e. a nav-aligned custom icon library. Those custom SVGs were **not** extractable.
- **Substitution (flagged):** [**Lucide**](https://lucide.dev) line icons via CDN
  (`https://unpkg.com/lucide@0.460.0`) — same 1.5px outline character. Used on the feature-grid
  slide (`cpu`, `layers`, `database`, `network`). Swap in CoreWeave's real icon set when available
  and drop the SVGs into `assets/`.
- **Emoji:** never used. **Unicode glyphs** are not used as UI icons.
- **Logo symbol:** the CW geometric mark — `assets/logo/coreweave-mark-{white,blue}.png`.

---

## Foundations at a glance

| Concern | Tokens file | Specimen cards (Design System tab) |
|---|---|---|
| Color | `tokens/colors.css` | Primary Blues · Neutrals · Surfaces & Text · Diagram Colors |
| Type | `tokens/typography.css` | Display Headers · Headings · Body · Brand Family |
| Spacing/effects | `tokens/spacing.css`, `tokens/effects.css` | Spacing Scale · Radii · Strokes & Elevation |
| Brand | — | Logo Lockup · Voice & Principle |

---

## INDEX — what's in this project

**Global entry:** `styles.css` (imports all token files — link this one file).

**Tokens** (`tokens/`): `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.

**Components** (React primitives, `window.CoreWeaveDesignSystem_a63cc0.*`):
- `components/core/` — **Button** (primary/secondary/tertiary/support × filled/outline), **Badge**, **Tag**
- `components/layout/` — **Card** (default/subtle/brand/inverse), **StatBlock** (big-number metric)

**Slide templates** (`slides/`, group "Slides", 1280×720): `01 Cover` · `02 Section Divider` ·
`03 Agenda` · `04 Content + Image` · `05 Feature Grid` · `06 Big Stat` · `07 Quote` ·
`08 Team` · `09 Diagram Baseline`. Shared chrome in `slides/slide.css`.

**Reusable template** (`templates/`, shown in the Starting-Points / Templates picker):
`templates/company-deck/CompanyDeck.dc.html` — a 6-slide on-brand deck (cover · section ·
content+image · big stat · quote · closing) that consuming projects copy to start a CoreWeave
presentation. Loads the system via `ds-base.js`.

**Guidelines** (`guidelines/`): foundation specimen cards in `guidelines/cards/`; source
extraction in `guidelines/_brand_source_notes.md`.

**Assets** (`assets/`): `fonts/` (Plus Jakarta Sans), `logo/` (official lockup + CW mark, 3 colorways), `imagery/` (brand 3D renders).

**Starting points:** `Button` (Core), `Card` (Layout).

**Not yet built (needs source material):**
- Product UI kit (console/dashboard, marketing site) — needs a codebase or Figma.
- Form controls (Input, Select, Checkbox, Switch) — not defined in the source deck.

---

*Generated by an automated compiler: `_ds_bundle.js`, `_ds_manifest.json`, and
`_adherence.oxlintrc.json` are build outputs — do not edit by hand.*
