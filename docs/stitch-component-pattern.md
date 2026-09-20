# Stitch Component Pattern

This app is the baseline structure for future Stitch-driven React web apps in this workspace.

## Rules we follow

1. Keep design tokens in `src/styles/tokens.css`.
2. Keep app shell and navigation in `src/components/layout/`.
3. Keep reusable UI primitives in `src/components/ui/`.
4. Keep page sections in `src/components/sections/`.
5. Keep static copy and configuration in `src/data/`.
6. Keep interactive page logic in `src/hooks/`.
7. When a design changes, prefer token or shared-component updates before page-level overrides.

## Migration contract

- To create a new app with the same pattern, copy the `src/components`, `src/hooks`, and `src/styles` structure first.
- Replace `src/data/` content before rewriting components.
- If the visual system changes, update `tokens.css` and shared component classes so other apps can migrate by applying the same token names.
- Avoid hardcoding one-off colors, spacing, or button styles inside page files.

## Stitch alignment

- Treat Stitch output as a section/component source, not as a full-page dump.
- Extract repeated visual styles into shared classes immediately.
- Move all text, labels, CTA config, and lists into `src/data/`.
- Put filtering, searching, and event logic into hooks so generated markup stays easy to swap.
