---
name: prd-anti-slop
description: "PRD Anti-Slop Filter — 38-rule slop filter for PRD & specs. Use inside PRD questioning to ensure purpose test, liveliness dials, and Delivery Gate pass. Load with prd."
allowed-tools: Read Write Edit Glob Grep
---
# prd-anti-slop

> **Filter khusus PRD** — potongan `anti-ai-slop` yang dipakai di dalam pertanyaan PRD. Load bersama `prd` agar PRD yang keluar filter-bersih, bukan generik.

## Kapan dipakai?

*   Saat agent mau generate PRD section yang mengandung **klaim, angka, testimoni, navigasi, atau visual** → cek Hard Gate dulu.
*   Saat agent mau pilih **teknik visual/copy** di PRD (gradient, badge, glassmorphism, dll.) → pakai Purpose-Gate (tulis alasan).
*   Saat PRD mau define **design direction** → set dial ENERGY/RHYTHM/MOTION via DESIGN.md.

## Ringkas 38 Rules untuk PRD

**Hard Gate (absolute) — untuk PRD bagian Evidence & Function:**
- R-02 no `—` em dash di PRD text
- R-17 no fake stats/numbers tanpa source → tulis `[REAL DATA]` atau jangan tampilkan
- R-18 no fake testimonials/avatar → jangan buat `testimonials` section kalau tidak ada data real
- R-23 konfirmasi sebelum bikin logo/avatar/stats/nav → placeholder honest
- R-24 no navbar link ke page yang tidak ada di Route Inventory
- R-25 WCAG AA 4.5:1/3:1 — berlaku untuk UI Requirements di PRD
- R-26 every interactive works — tiap route di Route Inventory harus ada expected result
- R-27 empty/loading/error states wajib di tiap page di PRD
- R-28 no generic FAQ — tiap FAQ di PRD harus jawab concern real product
- R-32 keyboard Tab/Enter/Escape + focus visible — tulis di Accessibility Requirements
- R-36 no fabricated compliance/claims — tulis di Security/Compliance hanya jika ada bukti
- R-37 DESIGN.md required — PRD section 20 UI Requirements harus refer ke дизайн-template yang dipilih atau draft ENERGY1/RHYTHM1/MOTION1
- R-38 real content or `[REAL DATA]` — tiap klaim di PRD harus real atau placeholder

**Purpose-Gate — untuk PRD bagian Visual & Copy (boleh, tulis alasan):**
R-01 gradients, R-04 icons, R-06 mono uppercase, R-07 grid bg, R-08 arrows, R-09 badges, R-10 glass 1-2x, R-12 shadows, R-13 glows, R-14 identical cards, R-19 animations, R-22 illustrations. Jika muncul tanpa alasan tertulis di PRD → slop.

**Quality Locks — untuk PRD bagian Consistency:**
R-05 no template (Hero+3cards, 3 steps, bento, 3 pricing), R-11 radius, R-15 CTA spesifik, R-16 no buzzwords, R-20 identity, R-21 dark mode deliberate, R-29 palette 2-3+1, R-30 no clone, R-31 1-line reason per decision.

## Pertanyaan Anti-Slop yang Masuk di PRD Flow

Di **Round 1** (Foundation) agent tanya:

> **Kapan filter anti-slop mau dipakai?**
> 1. DURING — terapkan saat nulis PRD & implementasi (cegah slop dari awal)
> 2. AFTER — audit PRD jadi, kasih numbered findings, user pilih yang mau di-fix, baru fix

Di **Round 2** (Product Shape) agent tanya DESIGN.md:

> Punya `DESIGN.md` atau brand direction? Jika tidak, mau: (1) user tulis sendiri, (2) agent bikinin dengan warning default taste, (3) skip → draft ENERGY1/RHYTHM1/MOTION1 (bukan deliverable).

## Delivery Gate untuk PRD

Sebelum PRD dinyatakan DONE, agent jalankan Gate 4 blocks (dari `anti-ai-slop`):

*   **Block 1 Hard Gate** all NO (em dash? fake stats? dead links? contrast? fabricated claims?)
*   **Block 2 Purpose-Gate** FAIL if technique tanpa written reason
*   **Block 3 Liveliness** all YES (dials set? focal point? whitespace structural? accent? motif? Design Read?)
*   **Block 4 Craftsmanship** all NO (C-1 default? C-2 dead interactive? C-3 template section? C-4 broken state? C-5 fabricated? R-05/R-11/R-15/R-16/R-20/R-21/R-29/R-30/R-31)

Satu FAIL = PRD belum ship.

## Checklist Mini untuk PRD

- [ ] Semua angka di PRD ada source atau `[REAL DATA]`?
- [ ] Semua route di Route Inventory ada expected result (bukan dead link)?
- [ ] Semua page di PRD punya empty/loading/error states?
- [ ] FAQ di PRD relevan product, bukan template?
- [ ] DESIGN.md dipilih atau draft dials honest?

> Load ini bersama `prd` — agent akan tanya 2 pertanyaan di atas di ronde yang tepat, dan cek Gate sebelum generate final PRD.
