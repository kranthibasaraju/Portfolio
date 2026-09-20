---
project_id: 
board_project: Portfolio
epic: 
repo: Portfolio
related_projects: []
status: active
owner: Rana
updated: 2026-06-29
---

# PROFILE — Portfolio

## Identity
Portfolio (`Portfolio/`) is Rana's personal portfolio website — a Stitch-inspired, mobile-first
multi-page site built with React 19 + Vite 8. Not part of the PPT ecosystem; standalone git repo.

## Architecture
Client-only SPA. `src/main.jsx` mounts React under `BrowserRouter`; `src/App.jsx` is the shell
(top nav + route registration). Three routes — `/` (Home), `/projects` (archive with search/filter +
featured bento card), `/resume`. All page content comes from one shared model in
`src/data/portfolioData.js`; pages in `src/pages/*.jsx`; global styling in `src/index.css`.

## Infrastructure
- **Stack:** React 19, Vite 8, React Router DOM, Tailwind (configured; custom CSS currently used).
- **Repo:** `Portfolio/` (git repo). Build output in `dist/`.
- **Hosting:** static build — deploy `dist/` to any static host.

## Product
A recruiter-facing portfolio: home, a searchable/filterable projects archive with a featured card,
and a resume narrative page. Mobile-first.

## Design
Stitch-prototype-derived visual language; sample prototypes kept in `sample Stitch Prototypes/`.
Mobile-first responsive layout rules live in `index.css`.

## Features
- Multi-page routing (Home / Projects / Resume).
- Projects archive with search + filter and a featured bento card.
- Shared content model so all pages render from one source.

## Known Bugs
<!-- none tracked -->

## Next Todo (summary)
See `project-plan/` and `docs/` in the repo for planned work.

## Run / Start
```
npm install
npm run dev      # Vite dev server
```

## Restart
```
npm run dev
```

## Deploy
```
npm run build    # outputs static site to dist/
# deploy dist/ to the static host
```

## Test
```
npm run build && npx eslint .
```

## Dependencies
- Node + npm; React 19, Vite 8, React Router DOM, Tailwind/PostCSS. No backend.

## Change Log
| Date | Kind | Summary |
|---|---|---|
| 2026-06-29 | docs | DevHub PROFILE backfilled with real architecture/run detail. |
