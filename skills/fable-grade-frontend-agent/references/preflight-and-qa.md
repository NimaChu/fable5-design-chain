# Frontend Preflight And QA

Use this before implementation and during final verification. Keep the working notes compact, but do not skip unknowns that can break the design or runtime.

## Contents

- Environment preflight
- Design brief record
- Implementation traps
- Responsive and accessibility checks
- Visual quality ledger

## Environment Preflight

Confirm:

- repo instructions and relevant skills read
- framework, router, styling approach, and component library identified
- existing tokens, fonts, icons, and assets inspected
- package availability confirmed before imports
- current UI opened and inspected when runnable
- required routes, content, states, and interactions identified
- browser support, performance, accessibility, and localization constraints identified
- persistence, API, authentication, and error behavior understood
- build, lint, typecheck, test, and dev commands known

Never invent environment-specific restrictions. Discover them from the repo and tools.

## Design Brief Record

Before coding, record:

```text
Purpose:
Audience/context:
First / second / third priority:
Constraints:
Visual thesis:
Memorable differentiator:
Layout variance (1-10):
Motion intensity (1-10):
Visual density (1-10):
Type roles:
Palette logic:
Accent lock:
Container model:
Shape/radius grammar:
Signature motif:
Motion idea:
Responsive transformation:
Primary workflow:
```

For a small component or narrow fix, use a shortened version rather than skipping design reasoning entirely.

## Implementation Traps

- Do not add dependencies, remote fonts, or large assets without checking project policy and performance impact.
- Do not replace an established design system merely to make the result feel novel.
- Do not use static screenshots as interactive UI.
- Do not leave primary controls inert or key states unimplemented.
- Do not create one giant component when the repo has clear ownership patterns.
- Do not hardcode fragile desktop dimensions without a responsive rule.
- Do not let decoration intercept pointer events, obscure content, or create overflow.
- Do not use animation that delays task completion or causes motion sickness.
- Do not invent visible copy, metrics, claims, or navigation that change product meaning.
- Do not hide usability problems behind glass, glow, blur, low contrast, or excessive whitespace.
- Do not silently change URLs, navigation labels, form field names, legal copy, brand marks, or core workflows during a redesign.
- Do not claim a high-motion direction and ship a static page. Lower the intended motion level when scope or environment cannot support it well.

## Responsive And Accessibility Checks

Check at least one desktop and one mobile-sized viewport:

- no horizontal overflow or clipped primary content
- first viewport hierarchy remains clear
- navigation and controls remain usable
- desktop navigation and primary CTAs do not wrap accidentally
- text wraps intentionally and stays readable
- touch targets are practical
- hover-only behavior has a touch/keyboard equivalent
- focus order and visible focus are correct
- semantic headings and landmarks make sense
- form labels, errors, status, and validation are perceivable
- contrast is sufficient in default and interactive states
- reduced motion is respected
- loading, empty, error, and success states do not collapse the layout
- every complex multi-column section has an explicit mobile transformation

## Visual Quality Ledger

Inspect the rendered UI and record at least five concrete observations for a substantial surface:

| Area | Intended decision | Render evidence | Fix or accepted reason |
| --- | --- | --- | --- |
| Hierarchy | What should dominate? | What actually dominates? | Action |
| Typography | Intended roles and rhythm | Actual size, weight, line break | Action |
| Composition | Intended container and spacing | Actual balance and density | Action |
| Color | Intended dominant/accent logic | Actual contrast and distribution | Action |
| Interaction | Intended state/motion cue | Actual behavior | Action |
| Responsive | Intended transformation | Actual mobile/desktop result | Action |

For multi-section surfaces, also count rather than merely glance:

- repeated section-layout families
- accent colors without semantic justification
- corner radii outside the declared grammar
- decorative pills, dots, labels, or technical text without meaning
- primary CTA labels with duplicate intent
- motion patterns that do not communicate hierarchy, feedback, sequence, or state

Also ask:

- Does the result express the visual thesis in one glance?
- Is the memorable differentiator actually visible and useful?
- Which choice still looks like an unexamined template default?
- Is anything decorative competing with the user's main task?
- Would a careful designer leave a review comment on spacing, alignment, type, state, or responsiveness?

Fix material issues before handoff. Passing tests and building successfully do not substitute for inspecting the rendered product.
