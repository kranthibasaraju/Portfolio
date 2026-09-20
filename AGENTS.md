# AGENTS.md

Agent onboarding guide for this repository (Codex, Claude, Cursor agents, Copilot agents, and similar).

## Mission

Maintain and evolve a Stitch-inspired portfolio site while keeping:

- shared data in one source (`src/data/portfolioData.js`)
- page-specific UI in `src/pages/*`
- privacy-conscious frontend defaults

## Quick Start

```bash
npm install
npm run dev
```

Build validation before finishing work:

```bash
npm run build
```

## Source of Truth

- Content model: `src/data/portfolioData.js`
- Routing shell: `src/App.jsx`
- Global styles: `src/index.css`
- Entry point: `src/main.jsx`

Do not duplicate content constants in page files unless explicitly needed.

## Editing Rules

1. Keep existing branch strategy: milestone-sized commits.
2. Keep `sample Stitch Prototypes/` as reference only unless asked otherwise.
3. Preserve `src/LegacyPortfolio.jsx` as historical backup unless user requests removal.
4. Any new external links should include:
   - `target="_blank"` (if opening new tab)
   - `rel="noopener noreferrer"`
   - `referrerPolicy="no-referrer"`
5. Run `npm run build` after meaningful UI/code changes.

## Typical Tasks

- Content refresh: edit only `src/data/portfolioData.js`
- New page: add in `src/pages/` and wire route in `src/App.jsx`
- Visual polish: prefer `src/index.css` updates over inline style sprawl
- Security pass: scan for `mailto:` and raw sensitive identifiers in rendered pages

## PR Checklist

- [ ] Build succeeds (`npm run build`)
- [ ] No accidental secret/sensitive exposure added
- [ ] Mobile layout verified for home hero and page sections
- [ ] Data changes made in shared data file when possible
- [ ] Commit message is milestone-scoped and descriptive

<!-- BEGIN ppt-agent-usage-pointer -->
## Agent usage

Cross-project agent guidance — **DevHub project profiles, skills, and the PPT MCP servers** — lives
in the Projects-wide guide: `../CLAUDE.md` (marker `ppt-agent-usage`). That is the source of truth;
do not duplicate it here.

**This repo's current-state runbook is [`./PROFILE.md`](./PROFILE.md)** — read it before operating
or modifying this repo, and update it (the relevant `##` section **and** a `## Change Log` row) on
any material change (architecture / infra / shipped feature / new or closed bug / deploy).
<!-- END ppt-agent-usage-pointer -->
