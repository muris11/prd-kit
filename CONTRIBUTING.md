# Contributing to prd-kit

Thanks for helping make this better. This guide explains how to contribute a new question, a rule refinement, a design identity mapping, or a fix to the packaging.

---

## Ways to contribute

- **Add or refine a question** — a foundational or conditional question that unlocks a better PRD.
- **Improve the PRD template** — a section, a traceability link, or a TDD slice.
- **Sharpen the anti-slop gate** — a rule, a liveliness dial, or a Delivery Gate block.
- **Fix packaging** — a bug in the manifests, the npm files list, or the `cli/` scripts.
- **Improve docs** — README, README.id, or the skill files.

---

## Before you start

1. Read the main skill (`skills/prd/SKILL.md`) and the adaptive question flow.
2. Read `skills/prd-anti-slop/SKILL.md` and `skills/prd-design/SKILL.md` so a change fits the hybrid model.
3. Run `npm run test` on your own change (see below).

---

## How to add a question

Every question lives in the round where it unlocks the next decision — never a 20-question dump.

- **Where** — Round 1 (foundation), Round 2 (product shape), or Round 3+ (conditional detail).
- **Why** — state the decision it unlocks (relevance-gated, not curiosity).
- **Default** — the "I don't know → recommend" behavior.

If the question touches the anti-slop filter or the design identity, mirror it in `prd-anti-slop` or `prd-design` with a pointer back.

---

## Checklist

- [ ] One idea per change; keep PRs focused.
- [ ] Frontmatter on every `SKILL.md` carries `name` + `description`.
- [ ] No `raw.githubusercontent.com` runtime download URLs in any `SKILL.md` (the sync guard blocks these).
- [ ] `npm run test` (smoke test) passes.
- [ ] `npm run sync-skills` (validation) passes.
- [ ] JSON files are valid (`package.json`, `plugin.json`, `.claude-plugin/*.json`).
- [ ] Write a one-line reason for the change.

---

## Local checks

```bash
npm run sync-skills   # validate every skill has name + description, no runtime URLs
npm run test          # validate manifests + expected skills
```

---

## Submitting

- Open a PR against `main`.
- Explain what and why in the description.
- Reference any related issue.
- Follow the existing code style (no comments unless they add meaning).

## License

By contributing, you agree that your contributions are licensed under the [MIT License](LICENSE).

Participation in this project is governed by the [Code of Conduct](CODE_OF_CONDUCT.md).
