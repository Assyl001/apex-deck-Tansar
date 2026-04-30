# Altbridge Conference Deck — Coordination Package

**For:** Nazym Azimbayev (CEO)
**From:** Assyl Akhmet (CPO)
**Re:** Tansar Capital Investors Annual Meeting · May 6, 2026

---

## What's in this package

```
.
├── README.md                       (this file)
├── speeches_en.md                  (full speech text for all 17 slides — English)
└── conference-deck/
    ├── rei-loop-reference.png      (poster image — shown on slide 13 until Apex demo video is recorded)
    └── mockups/
        ├── _base_v5.css            (shared brand styles)
        └── slide01_v5.html
            slide02_v5.html
            …
            slide17_v5.html         (17 slide mockups, full-screen HTML)
```

> **Note on slide 13:** the video panel currently shows the static poster image (`rei-loop-reference.png`) as a placeholder. The actual Apex demo video will be recorded later (see open question #1 below).

---

## Deck overview

**17 slides · ~12–15 minutes total**

| # | Title | Approx. duration |
|---|---|---|
| 01 | Title / Opening | 30–40s |
| 02 | Andrew Ang's LinkedIn quote | 35–45s |
| 03 | Try this yourself + Failure Mode 1 (Confident confabulation) | 50–55s |
| 04 | Failure Mode 2 · Corner cutting on data | 35–45s |
| 05 | Failure Mode 3 · No normalization | 45–55s |
| 06 | The L0–L5 Framework | 50–60s |
| 07 | Our first live deployment | 45–55s |
| 08 | 2025 Full-Year Performance | 45–55s |
| 09 | Intellectual reset with Andrew Ang | 50–60s |
| 10 | The Self-Driving Portfolio | 50–60s |
| 11 | 30-year academic validation | 30–40s |
| 12 | Apex architecture: Black box vs. structured pipeline | 60–70s |
| 13 | How Apex gets smarter (BARREL + Apex demo) | 40–50s |
| 14 | SWF Manager Oversight (Setup) | 30–40s |
| 15 | The Result · 47 Days | 30–40s |
| 16 | Three Sentences (Close) | 45–60s |
| 17 | Thank you | 25–30s |

---

## How to view the slides

Each `slideNN_v5.html` file is a standalone full-screen mockup. To view:

1. Open any `conference-deck/mockups/slideNN_v5.html` in a modern browser (Chrome, Safari, Firefox)
2. Slides are designed for a 16:9 aspect ratio at 1920×1080
3. They reference the shared `_base_v5.css` for brand styles and Google Fonts (Geist family) loaded via CDN

To view all slides as a deck, the migration to Reveal.js (single `index.html` with all 17 sections + speaker notes) is planned as the final step.

---

## Open items (need your input)

1. **Slide 13 — Apex demo video:** the `rei-loop-pp.mp4` is a placeholder showing a conceptual animation. The plan is to record a 45–60 second silent screen recording of the actual Apex system in action (prompt → decompose → validators → final DCF) using Remotion. **Question:** any thoughts on which Apex flow to record?

2. **Slide 05 — Meta numbers:** the slide currently uses placeholder financials ($62.4B net income / $4.2B / $2.1B / $3.8B one-time items). Net income is correct (Meta's actual FY2024 was $62.36B), but the breakdown of one-time items needs verification or replacement with a different real-company example. **Question:** can the team verify these breakdown numbers from Meta's 10-K, or should we use a different company you have a clean DCF for?

3. **Slide 14–15 — SWF case study:** the 75 external managers / 47 days story is from our SSRN 5468687 paper (Section 4.3). The fund is anonymous in the paper. **Question:** is this the right framing — referencing the paper as research illustration — or do you prefer a different framing?

4. **Speech tone:** the speeches are written for B1 (pre-intermediate) English to match Assyl's comfort level for memorized delivery. Stage directions and timing notes are included. **Question:** any tone or content adjustments you'd like before the conference?

---

## Policy decisions reflected in this deck

- ❌ Word "audited" not used anywhere — Altbridge has no signed GIPS/CPA audit; we use "live capital" / "brokerage statements available" instead
- ❌ No specific institutional pipeline names (UBS QIS / ADIC / EIA / NBK) — these are in the NDA pitch deck only
- ✅ "Our research team" / "the team published" — Assyl is positioned as CPO presenting the team's work, not as paper co-author
- ✅ Andrew Ang credited explicitly as Chief Strategist on slides 02, 09, 10, 16, 17
- ✅ Numbers consistent with public sources: SSRN 5468687, arXiv 2604.02279, Meta FY2024 10-K, our 2025 trading record
