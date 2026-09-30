# Changelog

All notable changes to **prd-kit** are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `.github/workflows/ci.yml` — validates JSON manifests, verifies skill frontmatter, and runs the smoke test on push and PR.
- GitHub issue templates (bug report, feature request) and a pull request template.
- `CONTRIBUTING.md`, `SECURITY.md`, and `ROADMAP.md`.
- `cli/scripts/sync-skills.mjs` and `cli/scripts/smoke-test.mjs`, the scripts `package.json` already referenced.
- `.gitattributes` (LF normalization) and `.gitignore`.
- `.claude-plugin/marketplace.json` so the plugin is discoverable from the marketplace.

### Fixed

- `npm test` and `npm run sync-skills` no longer fail on a missing `cli/` folder.
- Stale npm version references in the READMEs (1.0.1 → 1.0.3).

## [1.0.3] — 2026-09-08

### Fixed

- Included `images/` and `.claude-plugin/` in the npm `files` list so the published package ships the cover, flow diagrams, and the Claude Code plugin manifest.

## [1.0.2] — 2026-09-08

### Added

- New logo, cover, and flow diagram — the stacked PRD layers (brief-ku × anti-ai-slop × design-template).

## [1.0.1] — 2026-09-08

### Fixed

- Renamed the package to the scoped `@muris11/prd-kit` (too similar to `prdkit`), then bumped to 1.0.1 after the unscoped name 404'd on `npm view`.
- Published `@muris11/prd-kit@1.0.1` to npm.

## [1.0.0] — 2026-09-08

### Added

- Initial release: the hybrid PRD builder — adaptive questioning → 45-section PRD.
- Combined three engines: `brief-ku` (adaptive questioning), `anti-ai-slop` (38-rule filter + liveliness dials), and `design-template` (30 design identities).
- The anti-slop Delivery Gate (4 blocks) and the design checklist injection into PRD Section 20.
- TDD vertical slices and the route verification matrix.

[Unreleased]: https://github.com/muris11/prd-kit/compare/v1.0.3...HEAD
[1.0.3]: https://github.com/muris11/prd-kit/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/muris11/prd-kit/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/muris11/prd-kit/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/muris11/prd-kit/releases/tag/v1.0.0
