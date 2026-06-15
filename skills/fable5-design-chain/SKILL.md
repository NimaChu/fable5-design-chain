---
name: fable5-design-chain
description: "Upgrade any coding agent's frontend design process with the Fable5 design chain: environment preflight, intentional visual direction, anti-convergence guidance, and rendered-product quality gates. Use whenever an agent creates, redesigns, restyles, or visually reviews a website, landing page, web app, dashboard, component, or other frontend UI; when a user asks for a polished, beautiful, memorable, premium, modern, or less-AI-looking interface; or when frontend code needs an aesthetic, responsive, accessibility, or interaction critique. Run this skill before writing frontend code, even when another frontend-building skill also applies."
---

# Fable5 Design Chain

Treat design direction as an engineering input, not decorative cleanup. Establish the environment contract, commit to one context-specific visual thesis, implement it coherently, and verify the rendered result.

"Fable5 Design Chain" names the layered workflow and target quality bar. This skill does not change model weights, claim affiliation with a model provider, or guarantee parity with any specific model.

## Required Sequence

Complete these gates in order. Do not start frontend implementation before Gates 1-3 are explicit in working notes or the user-facing update.

### Gate 1: Learn The Room

Inspect the repo and current product before choosing an aesthetic.

- Read applicable repo instructions and other relevant skills.
- Inspect the framework, dependencies, routes, existing tokens, global styles, component library, assets, fonts, and neighboring screens.
- Open the existing UI in the Browser when a runnable target exists. Capture its visual language, responsive behavior, and obvious defects.
- Identify the actual environment constraints: available libraries, asset policy, browser support, performance budget, accessibility expectations, persistence/API behavior, and build/test commands.
- Reuse established product language unless the user explicitly requests a redesign. Do not import a library or font before confirming it is available or acceptable.
- Decide whether the brief calls for an established design system, the repo's existing system, or a custom aesthetic. Use official packages and patterns when the product context clearly calls for them; do not imitate a named system with approximate CSS.

For an existing product, distinguish deliberate brand rules from accidental inconsistency. Preserve the former; repair the latter.

For redesigns, classify the mode before editing: **Preserve** evolves the current brand and information architecture; **Overhaul** permits a new visual language while preserving required content and behavior. Read [references/calibration-and-redesign.md](references/calibration-and-redesign.md).

### Gate 2: Frame The Design Problem

Write a compact design brief:

- **Purpose:** What job must this surface complete?
- **Audience:** Who uses it, in what setting, and with what level of urgency or expertise?
- **Content hierarchy:** What must be understood or acted on first, second, and third?
- **Constraints:** What technical, brand, accessibility, responsive, and content limits matter?
- **Tone:** Choose a precise direction, not a vague adjective such as "modern."
- **Differentiator:** Name one memorable visual or interaction idea tied to the product's meaning.
- **Calibration:** Set layout variance, motion intensity, and visual density on a 1-10 scale. Treat them as reasoning controls, not targets to maximize.

If the user supplied a reference, extract its principles rather than blindly copying its ornament.

### Gate 3: Commit To A Visual Thesis

State one sentence that binds the design decisions together:

> A [tone] interface for [audience/purpose], expressed through [type character], [composition rule], [palette logic], and [signature motif].

Then define a small design system before coding:

- typography roles and scale
- dominant, supporting, accent, and semantic colors
- spacing rhythm and container behavior
- surface, border, radius, and elevation rules
- accent-color and shape-consistency rules
- icon and imagery treatment
- one or two motion cues
- responsive transformation rules

Choose intentionally. Bold maximalism and refined minimalism both work; unexamined defaults do not.

Read [references/design-cookbook.md](references/design-cookbook.md) when selecting typography, color, composition, background, imagery, or motion. Read [references/calibration-and-redesign.md](references/calibration-and-redesign.md) for dial interpretation, design-system selection, or redesign work. Read [references/preflight-and-qa.md](references/preflight-and-qa.md) before implementation and again during final visual QA.

### Gate 4: Implement The Real Surface

- Follow the repo's framework and component patterns.
- Build the primary user workflow, not a decorative shell around it.
- Encode repeated decisions as tokens and shared components. Keep deliberate exceptions rare.
- Keep content, controls, and labels code-native. Use real or purpose-built assets rather than placeholder-looking boxes.
- Make controls functional and states legible: default, hover, focus, active, selected, loading, empty, error, success, and disabled as applicable.
- Preserve semantic HTML, keyboard access, visible focus, contrast, reduced motion, touch targets, and readable line lengths.
- Match implementation complexity to the thesis. Minimal design requires exceptional spacing and type precision; expressive design requires disciplined layering and performance control.

### Gate 5: Break Convergence

Before considering the design complete, audit for choices Codex tends to make by habit:

- generic sans-serif typography with no role contrast
- purple/blue gradient on white, evenly distributed palettes, or timid accents
- centered hero plus three-card grid plus alternating feature rows
- every section inside a rounded card
- excessive pills, badges, glows, glass panels, and decorative dashboard chrome
- generic copy, fake metrics, meaningless icons, or filler illustrations
- decorative labels, numbering, status dots, scroll cues, or technical-looking text with no product meaning
- repeated section layouts, inconsistent corner radii, or a new accent color appearing midway through the page
- fake product screenshots assembled from decorative rectangles instead of a real or intentionally demonstrated interface
- motion scattered everywhere instead of one composed moment

Do not replace these defaults mechanically with different cliches. Return to the purpose and visual thesis, then choose a more specific solution.

### Gate 6: Verify The Rendered Product

Run the repo's checks, then inspect the actual UI in the Browser.

- Verify desktop and mobile-sized layouts.
- Scroll the full page and exercise the primary workflow.
- Inspect hierarchy, line breaks, spacing rhythm, overflow, contrast, focus, state changes, and asset loading.
- Mechanically inspect repeated layout families, accent and radius consistency, CTA wrapping, navigation wrapping, and explicit mobile collapse for complex sections.
- Compare the result to the visual thesis and any accepted reference.
- Fix visible issues before handoff. A successful build is not visual QA.

Use the quality ledger in [references/preflight-and-qa.md](references/preflight-and-qa.md). For substantial new or redesigned surfaces, capture a screenshot and inspect it directly.

## Decision Rules

- Prefer one strong idea over a pile of effects.
- Prefer context-specific character over novelty for its own sake.
- Prefer hierarchy and legibility over decoration.
- Prefer open composition, bands, rails, lists, tables, or canvases when cards are not semantically useful.
- Prefer a small number of coordinated animations over constant movement.
- Prefer exact, coherent repetition over near-duplicate styles.
- Keep dense operational tools efficient; do not force a marketing-site aesthetic onto them.
- Keep restrained products restrained; distinctiveness can come from proportion, typography, rhythm, or interaction rather than ornament.

## Coordinate With Other Skills

This skill owns visual direction, anti-convergence, and visual QA. Let framework, product-design, data-visualization, accessibility, security, or provider-specific skills own their specialized implementation rules. When another frontend-building skill requires concept generation or a fidelity workflow, use this skill to sharpen the design brief and critique the result without overriding accepted user direction.

## Final Handoff

Briefly report the chosen visual thesis, important design decisions, checks run, browser viewports/workflow verified, and any intentional deviations or remaining limitations.
