# Security

**prd-kit** is a set of agent skills — Markdown rule files that turn a vague idea into a 45-section PRD. It is a **planning filter** that tells an agent how to question, structure, and gate a PRD. It does not fetch, execute, or transmit anything on its own beyond what the agent already does.

This document explains what is in the box, the trust boundaries, and how to report a concern.

---

## What's in the box

- `skills/prd/SKILL.md` — the main hybrid skill: adaptive questioning → 45-section PRD.
- `skills/prd/SKILL.md` + `skills/prd/brief-ku-source.md` — the adaptive question flow and its source notes.
- `skills/prd-anti-slop/SKILL.md` — the 38-rule slop filter, liveliness dials, and Delivery Gate.
- `skills/prd-design/SKILL.md` — the 30-identity design picker that injects `DESIGN.md` + dials.
- `cli/` — local validation scripts used by `npm run sync-skills` and `npm test`.
- `plugin.json`, `.claude-plugin/` — plugin manifests for the agents that consume the skills.

## What it does not do

- It does **not** download, fetch, or install anything at runtime.
- It does **not** phone home or transmit telemetry of its own.
- It does **not** execute remote code. The only executable content is the local `cli/` validation scripts.
- It does **not** overwrite your project files. It produces a PRD document; the agent writes it where you ask.

## Trust boundaries

- **Direction is yours.** `DESIGN.md` is the source of visual direction; the design skill never invents direction on its own beyond an honest "draft without direction" fallback.
- **No runtime self-install.** A shipped skill must not instruct the agent to download further instruction files at runtime. The `cli/scripts/sync-skills.mjs` guard refuses to validate if a runtime `raw.githubusercontent.com` URL is present.
- **Dependencies are declared, not hidden.** The hybrid pulls `brief-ku`, `anti-ai-slop`, and `design-template` — each a separate, auditable source.
- **Audit the source.** Skills are code-adjacent policy applied by an agent. Only install from a source you trust. Review the `SKILL.md` files before use.

## Supported-agent storage

The skills install into the agent's skills folder (for example `.claude/skills` for Claude Code, or the folder chosen by `npx skills`). prd-kit never writes outside the folders you select.

## Reporting a vulnerability

If you find a security issue, a rule that causes harm, or a supply-chain concern:

- Open a GitHub issue at <https://github.com/muris11/prd-kit/issues> with the details.
- Do **not** embed secrets, credentials, or live malicious links directly in an issue.
- For anything time-sensitive, describe the affected file and the behavior rather than pasting raw payloads.

## Supported versions

Security updates apply to the current `main` branch. We do not backport fixes to older tags.

---

## License

MIT — see [LICENSE](LICENSE).
