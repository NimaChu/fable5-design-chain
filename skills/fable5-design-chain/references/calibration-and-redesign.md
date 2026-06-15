# Calibration And Redesign Protocol

Use this reference to turn a design brief into bounded creative freedom and to improve existing products without erasing what matters.

## Contents

- Three calibration axes
- Calibration presets
- Interpreting the axes
- Redesign modes
- Redesign audit
- Preservation contract
- Modernization order

## Three Calibration Axes

Set each axis from 1-10 after reading the brief. These values make tradeoffs explicit; they are not scores and higher is not better.

### Layout Variance

- **1-3:** strict alignment, familiar patterns, low surprise
- **4-7:** one or two asymmetric or grid-breaking moments inside a stable system
- **8-10:** experimental composition, unconventional flow, or art-directed spatial behavior

High variance must collapse deliberately on small screens. Do not preserve desktop asymmetry when it harms reading order or interaction.

### Motion Intensity

- **1-3:** state feedback and restrained hover/focus transitions
- **4-7:** composed entrances, meaningful reveals, and a small number of richer transitions
- **8-10:** motion-led storytelling or direct manipulation that materially defines the experience

Every animation must communicate hierarchy, sequence, feedback, causality, or state. If the environment or scope cannot support the intended motion well, lower the calibration instead of shipping partial choreography.

### Visual Density

- **1-3:** gallery-like, spacious, few decisions per viewport
- **4-7:** balanced content and action density
- **8-10:** operational, comparative, or data-rich surfaces with compact scanning paths

Density follows the user's task. A dashboard may need high density; a premium product story may need low density. Do not equate whitespace with quality or density with clutter.

## Calibration Presets

Use these only as starting points:

| Surface | Layout variance | Motion intensity | Visual density |
| --- | ---: | ---: | ---: |
| Public service flow | 2-4 | 1-3 | 4-6 |
| Marketing landing page | 5-8 | 3-7 | 3-5 |
| Editorial/content site | 4-7 | 2-5 | 4-6 |
| Dashboard/admin tool | 2-5 | 1-4 | 7-9 |
| Creative portfolio | 7-10 | 5-9 | 2-5 |
| Commerce/booking | 3-6 | 2-5 | 5-7 |

Adjust for brand, audience, device, accessibility, performance, and implementation scope.

## Interpreting The Axes

Use the axes to resolve design choices:

- When layout variance is high, make the reading order and mobile collapse explicit.
- When motion intensity exceeds the restrained range, include reduced-motion behavior and verify performance.
- When visual density is high, reduce decorative containers and strengthen typography, alignment, grouping, and scan paths.
- When all three axes are high, challenge the brief. The result is likely to overload users unless the experience is intentionally immersive.

## Redesign Modes

Classify the task before editing:

- **Preserve:** Keep the brand language, content model, URLs, navigation, and workflows. Repair hierarchy, consistency, responsiveness, states, and implementation quality.
- **Evolve:** Keep recognizable brand anchors and information architecture while introducing a clearer visual thesis and stronger component system.
- **Overhaul:** Establish a new visual language or information architecture. Still preserve required content, behavior, legal text, and business-critical paths unless the user approves changes.

When the user's wording is ambiguous, default to Preserve or Evolve rather than silently performing an Overhaul.

## Redesign Audit

Before editing, record:

```text
Mode:
Current visual thesis:
Current calibration axes:
Brand anchors to preserve:
Core workflows and routes:
Strong existing patterns:
Inconsistencies and visual debt:
Accessibility/responsive failures:
Patterns to retire:
Target visual thesis and calibration:
```

Distinguish structural debt from cosmetic debt. A new palette does not fix broken hierarchy, and larger spacing does not fix an inefficient workflow.

## Preservation Contract

Do not silently change:

- URL structure and navigation meaning
- form field names, validation behavior, or submission flow
- legal, compliance, pricing, or product claims
- brand wordmarks and supplied assets
- analytics hooks, data contracts, or core interactions
- content that the user asked to preserve

Surface proposed changes when the redesign would benefit from altering these.

## Modernization Order

Prefer this order because later polish depends on earlier structure:

1. Repair information hierarchy and primary workflow.
2. Establish tokens, typography roles, spacing rhythm, and container model.
3. Normalize components, states, shapes, accents, and iconography.
4. Repair responsive and accessibility behavior.
5. Add imagery and motion that support the target thesis.
6. Run mechanical visual QA and remove remaining template defaults.
