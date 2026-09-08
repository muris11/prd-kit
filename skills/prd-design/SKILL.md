---
name: prd-design
description: "PRD Design Picker — 30 design-template identities for PRD. Use inside PRD questioning to pick visual direction (monochrome, bauhaus, cyberpunk, etc.) and set DESIGN.md + dials."
allowed-tools: Read Write Edit Glob Grep
---
# prd-design

> **Design picker untuk PRD** — 30 identitas dari `design-template` yang ditanya di dalam flow PRD. Load bersama `prd` agar PRD bagian UI Requirements sudah deliberate, bukan generik.

## Kapan dipakai?

*   Saat PRD sampai di **Round 1/2** yang tanya design direction → agent list 30 template, minta user pilih 1 (atau "belum ada" → recommend).
*   Saat PRD generate **Section 20 UI Requirements** → agent tulis tokens, components, motion dari template yang dipilih + set dial ENERGY/RHYTHM/MOTION.
*   Saat PRD generate **Section 21 Technology Stack & 22 System Architecture** → agent sesuaikan stack dengan template (misal Cyberpunk butuh Orbitron + scanlines, bukan Inter).

## 30 Template — Dipilih via Pertanyaan

Di **Round 1** atau **Round 2** agent tanya (pakai `question` tool, single selection):

> **Mau gaya visual seperti apa?**
> 1. Minimalist Monochrome — Vogue austere (All) — `monochrome`
> 2. Bauhaus — Primaries + hard shadows — `bauhaus`
> 3. Modern-dark — Linear cinematic — `modern-dark`
> 4. Newsprint — NY Times paper — `newsprint`
> 5. SaaS — Electric Blue — `saas`
> 6. Luxury — Vogue Hermès — `luxury`
> 7. Terminal — Hacker phosphor — `terminal`
> 8. Swiss-minimalist — Helvetica grid — `swiss-minimalist`
> 9. Kinetic — Marquee acid — `kinetic`
> 10. Flat — Color block — `flat`
> 11. Art-deco — Gatsby sunburst — `art-deco`
> 12. Material — M3 tonal pill — `material`
> 13. Neo-brutalism — Sticker Y2K — `neo-brutalism`
> 14. Bold-typography — Poster 6:1 — `bold-typography`
> 15. Academia — Mahogany brass — `academia`
> 16. Cyberpunk — Neon glitch — `cyberpunk`
> 17. Web3 — Bitcoin glass — `web3`
> 18. Playful-geometric — Memphis confetti — `playful-geometric`
> 19. Minimal-dark — Slate amber — `minimal-dark`
> 20. Claymorphism — Vinyl marshmallow — `claymorphism`
> 21. Profesional — Ivory serif — `profesional`
> 22. Botanical — Sage arch — `botanical`
> 23. Vaporwave — Sunset 80s — `vaporwave`
> 24. Enterprise — Indigo unicorn — `enterprise`
> 25. Sketch — Wobbly dodle — `sketch`
> 26. Industrial — Braun neumorphic — `industrial`
> 27. Neumorphism — Cool clay — `neumorphism`
> 28. Organic — Wabi-sabi blob — `organic`
> 29. Maximalism — Dopamine — `maximalism`
> 30. Retro — Win95 geocities — `retro`
> 31. Belum tahu — rekomendasikan berdasarkan app idea

**Trigger words** sudah ada di tiap `design-template-*` description, jadi agent bisa auto-suggest: user bilang "elegan kayak majalah" → suggest `monochrome` / `luxury`.

## Cara Set DESIGN.md & Dials

Begitu user pilih template, agent:

1. **Tulis/load `DESIGN.md`** dari template yang dipilih (contoh `design-template-monochrome` → `#FFF #000 only, Playfair Display, 0px, inversion`).
2. **Set 3 dials** dari DESIGN.md atau tanya:
   > Reading this as: `<app kind>` for `<audience>`, in `<template>` style, dial ENERGY/RHYTHM/MOTION?
   *   Contoh: PRD untuk "B2B SaaS dashboard untuk ops team" + `bauhaus` → dial ENERGY 2 / RHYTHM 2 / MOTION 1.
3. **Sisipkan ke PRD** Section 20 UI Requirements: palette, typography, radius, shadows, textures, components, motion, bold choices.
4. **Jalanin Checklist** template di akhir PRD (misal Monochrome: 0px? serif oversized? inversion? textures?).

## Pertanyaan Desain yang Masuk di PRD Flow

*   **Round 1 (Foundation):** "Punya brand/DESIGN.md? Jika tidak: (1) tulis sendiri, (2) agent bikinin dengan warning, (3) skip → draft ENERGY1/RHYTHM1/MOTION1."
*   **Round 2 (Product Shape):** "Pilih 1 dari 30 template di atas, atau belum tahu? Jika belum tahu, agent rekomendasikan berdasar app idea (misal fintech → web3/cyberpunk, fashion → monochrome/luxury)."

## Checklist Mini untuk PRD

- [ ] DESIGN.md dipilih atau draft dials honest (R-37)?
- [ ] Palette/typography/radius/shadows di PRD Section 20 sesuai template (bukan default)?
- [ ] Bold Factor template terpenuhi (misal Bauhaus: border-4 + hard shadow, bukan soft)?
- [ ] Responsive & accessibility di PRD sesuai template?

> Load ini bersama `prd` — agent akan tanya picker di ronde yang tepat, dan inject DESIGN.md + dials ke PRD final.
