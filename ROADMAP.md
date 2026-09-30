# Roadmap

Tracked changes and releases for prd-kit.

## v1.0.3 — npm completeness

- Included `images/` and `.claude-plugin/` in the npm `files` list so the published package ships the cover, flow diagrams, and the Claude Code plugin manifest.
- Version bumped to 1.0.3 across package, plugin, and READMEs.

## v1.0.2 — visual identity

- Added a new logo, cover, and flow diagram — the stacked PRD layers (brief-ku × anti-ai-slop × design-template).
- Version bumped to 1.0.2 across package, plugin, and READMEs.

## v1.0.1 — npm name fix

- Renamed the package to the scoped `@muris11/prd-kit` (too similar to `prdkit`), then bumped to 1.0.1 after the unscoped name 404'd on `npm view`.
- Published `@muris11/prd-kit@1.0.1` to npm.

## v1.0.0 — initial release

- Shipped the hybrid PRD builder: adaptive questioning → 45-section PRD.
- Combined three engines: `brief-ku` (adaptive questioning), `anti-ai-slop` (38-rule filter + liveliness dials), and `design-template` (30 design identities).
- Added the anti-slop Delivery Gate (4 blocks) and the design checklist injection into PRD Section 20.
- Added TDD vertical slices and the route verification matrix.

## Planned

- More conditional question packs (payments, GPS, files, integrations).
- An optional `DESIGN.md` starter template to make the direction step easier.
- A prebuilt example PRD gallery for common app kinds.

See the repo's issues and PRs for the live tracker.
