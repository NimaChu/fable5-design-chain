# Design Cookbook

Use this reference to make concrete aesthetic choices after understanding the product. It is a menu, not a checklist. Select a coherent subset and avoid repeating the same recipe across unrelated projects.

## Contents

- Direction selection
- Design system or custom aesthetic
- Typography
- Color
- Composition and containers
- Backgrounds and imagery
- Motion
- Surface-specific guidance

## Direction Selection

Choose a direction with enough specificity to constrain decisions:

| Direction | Type character | Composition | Palette logic | Signature opportunity |
| --- | --- | --- | --- | --- |
| Editorial authority | expressive serif + quiet sans | strong columns, oversized headlines, captions | paper-like neutral + one ink/accent | article-like pacing, marginal notes |
| Technical instrument | precise grotesk/mono pairing | rails, tables, dense alignment | restrained dark/light base + semantic signals | command surface, live traces |
| Warm craft | humanist serif/sans | tactile blocks, irregular but calm rhythm | natural dominant + saturated detail | material texture, illustrated process |
| Civic clarity | highly legible sans + sturdy display | open bands, strong wayfinding | accessible institutional base + clear action color | maps, timelines, service status |
| Cultural energy | characterful display + readable body | controlled overlap, poster rhythm | bold dominant + sharp contrast | typography-led composition |
| Quiet luxury | refined serif + minimal sans | generous space, exact proportions | narrow tonal range + rare accent | exquisite crop, transition, or detail |
| Playful system | rounded or unexpected display + neutral body | modular, responsive, stateful | cheerful dominant + disciplined semantic colors | satisfying state change or direct manipulation |

Do not choose a direction merely because it is fashionable. It must fit the audience, content, and workflow.

## Design System Or Custom Aesthetic

Choose an established design system when its conventions are part of the product context, ecosystem, or trust model. Examples include a platform-native application, government service, enterprise suite, or a repo already built around a maintained system. Confirm the official package and current project version before using it.

Choose a custom aesthetic when the brief is primarily expressive, editorial, brand-led, or when the product already owns its components. Build it from tokens and accessible primitives rather than vaguely imitating a named system.

Do not mix systems casually. One project may use lower-level primitives from one library while owning its visual language, but component behavior, typography, shapes, and spacing must still read as one coherent system.

## Typography

Typography should create hierarchy before borders and cards do.

### Pairing Principles

- Pair by useful contrast: expressive display + restrained body, serif + geometric sans, mono + humanist sans, or one variable family used at clearly different optical sizes and weights.
- Use at most two primary families unless the concept has a strong editorial reason.
- Make jumps meaningful. Adjacent levels that differ only slightly often look accidental.
- Tune line height, measure, tracking, and weight per role. Do not rely on browser defaults.
- Verify that selected fonts support required languages and weights. For CJK products, prioritize high-quality CJK coverage and test mixed-script line breaks.

### Starting Families, Not Defaults

- Editorial: Fraunces, Newsreader, Source Serif, Playfair Display
- Technical: IBM Plex, JetBrains Mono, Fira Code, Source Sans 3
- Humanist: Atkinson Hyperlegible, Literata, Lora, Public Sans
- Expressive geometric: Bricolage Grotesque, Archivo, Syne, Unbounded

Avoid reflexively reaching for Inter, Roboto, Arial, system UI, Space Grotesk, or any other familiar family. They are valid only when the product context or existing system justifies them.

### Type Audit

- Is the first reading path obvious without color?
- Do controls, labels, data, body copy, and display text have deliberate roles?
- Are line lengths comfortable and mobile breaks intentional?
- Are numbers aligned and formatted appropriately in data-heavy surfaces?

## Color

- Choose a dominant background/surface character, then a small number of supporting and semantic colors.
- Use one sharp accent decisively rather than distributing several accents evenly.
- Define colors as tokens. Include hover, active, focus, disabled, border, and muted-text states.
- Lock the accent logic across the surface. Introduce a new accent only when it has a documented semantic role.
- Treat light and dark themes as designed systems, not simple inversion.
- Verify contrast in the rendered interface.

Avoid the habitual purple-to-blue gradient on white, generic neon-on-black "cyber" palettes, and low-contrast gray-on-gray minimalism unless the context truly calls for them.

## Composition And Containers

- Establish a container model: full-bleed bands, editorial columns, application shell, rails, lists, tables, canvas, or purposeful cards.
- Vary rhythm through scale, alignment, density, and whitespace while preserving shared gutters and tokens.
- Use asymmetry, overlap, or grid-breaking only when it improves hierarchy or meaning.
- Let important content occupy space. Do not shrink the core product into a small card floating inside a decorative page.
- Use cards when items are genuinely discrete and movable. Avoid nested cards and default bento grids.
- Define a corner-radius grammar. Mixed radii are valid when each radius maps to a component role; arbitrary mixtures are not.

For long pages, avoid repeating the same centered heading and three-column grid. Give each section a distinct role while keeping the visual system continuous.

## Backgrounds And Imagery

Background treatment should support the concept:

- quiet tonal shift or paper texture for editorial work
- subtle grid, trace, or instrument pattern for technical tools
- restrained grain or material detail for tactile brands
- art-directed photography, illustration, or product imagery when the subject benefits from it

Use gradients, noise, patterns, transparencies, and dramatic shadows sparingly and contextually. A solid background is completely valid when proportion, typography, and content carry the design.

Avoid placeholder gradients, random stock imagery, decorative blobs, and effects that reduce legibility or make implementation brittle.

## Motion

- Choose one primary motion idea tied to hierarchy or product behavior.
- Prefer a composed entrance, meaningful state transition, or direct manipulation over motion on every element.
- Keep durations, easing, and staggering coherent.
- Animate transform and opacity where practical; avoid layout-thrashing effects.
- Respect `prefers-reduced-motion` and preserve usability without animation.

Motion should clarify sequence, causality, or delight. Remove it when it merely proves animation exists.

## Surface-Specific Guidance

### Landing And Marketing Pages

Make the offer and primary action unmistakable. Avoid generic hero copy, ornamental badges, fake social proof, and a sequence of interchangeable feature cards. Let product evidence or a meaningful visual idea carry the page.

### Dashboards And Admin Tools

Optimize scan paths, comparison, and action density. Tables, lists, charts, filters, and sidebars should retain their useful structure. Do not convert operational information into spacious marketing cards.

### Editors And Creative Tools

Treat canvas, chrome, inspectors, layers, toolbars, and status areas as separate typographic/density systems. Preserve working space and make selection, focus, and mode visible.

### Commerce And Booking

Prioritize trust, product evaluation, price clarity, validation, and the transaction path. Decorative novelty must not obscure options, availability, totals, or confirmation.

### Content And Documentation

Prioritize reading rhythm, navigation, code/data legibility, anchors, and findability. Distinctiveness can come from typography, marginalia, diagrams, and information architecture rather than excessive effects.
