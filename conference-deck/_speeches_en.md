# Conference Deck — Speeches (English)

For: Tansar Capital Investors Annual Meeting · May 6, 2026
Speaker: Assyl Akhmet (CPO, Altbridge)
Total: 17 slides · ~12–15 minutes

This file contains the speech text for each slide along with stage directions,
timing notes, and policy guidance. Use this for review with the team.

The corresponding HTML slide mockups are in the `conference-deck/mockups/`
folder of this archive — open any `slideNN_v5.html` in a browser to view.

---

## Slide 01 — Title / Opening

*[~30-40 seconds. Simple English (B1). Greet, name yourself, set up the journey.]*

Good morning, everyone — and thank you, Tansar, for inviting Altbridge today.

I'm **Assyl Akhmet** — Chief Product Officer at Altbridge. We build infrastructure for what comes after analyst-assistance — **agentic investing on live capital**.

The next twenty minutes are about one journey. **From Level 3 to Level 4.** Level 3 is assisted research — a human approves every trade. Level 4 is agentic execution — humans supervise, not execute.

We started this in **Q1 of last year**. By Q3, we moved to Level 4. The year after gave us results I want to share with you.

But first — let me start with a question you probably know.

*[Click → slide 02]*

### Stage directions (non-obvious only)
- "**From Level 3 to Level 4**" — slow down here; this is the headline of the whole talk
- "Q3, we moved to Level 4" — clear date; this is the key fact
- "But first" — slight smile, transition to slide 02 hook

### Don't say
- ❌ "audited" — no signed performance audit exists yet
- ❌ "two-year journey" / "from L1 to L4" — factually incorrect (L3 → L4 over ~16 months)

---

## Slide 02 — Andrew Ang's LinkedIn quote

*[~35-45 seconds. Simple English (B1). Plant the analogy seed.]*

Six months ago, our Chief Strategist posted this on LinkedIn:

*"How is adopting AI in investments — like driverless cars?"*

That's **Andrew Ang**. Former Head of Systematic Investing at BlackRock. Professor at Columbia Business School. He wrote much of the modern textbook on factor investing — over **thirty-four thousand academic citations**.

When Andrew picks an analogy — listen carefully.

And this analogy is **exact**. The driverless car industry has spent twenty years on one question — *how much of the steering wheel do you give the AI, and when?* That is the same question for investing now.

The answer is a framework. We will get to it. But first — let me show you why we needed it.

*[Click → slide 03]*

### Stage directions (non-obvious only)
- Pause before opening — let the quote-mark on slide settle visually
- Reading the quote — slow down, beat before "driverless cars"
- "**When Andrew picks an analogy — listen carefully**" — slowest line, eye contact with the room
- "this analogy is **exact**" — emphasis on "exact"
- "we needed it" — forward-lean, transition to slide 03

### Don't say
- ❌ "my co-author" — Assyl is not a paper co-author
- ❌ Don't read the 3 bullet credentials verbatim — slide already shows them
- ❌ Don't cite SSRN paper number — that's for slide 09

---

## Slide 03 — Try this yourself + Failure Mode 1 (merged)

*[Merged slide. ~50-55 seconds. Simple English (B1). Set the prompt → reveal the variance → land the punchline.]*

Right now, on your phone, you can open Claude, ChatGPT, or Perplexity. Type a prompt like this:

*"Analyze NVIDIA as an investment. Build a DCF. What's the fair value per share?"*

Try this. Same prompt. Many times. You will get answers like these.

**$30.8 billion. $28.5 billion. $31.2 billion. $30.6 billion.** All look professional. All sound confident.

The real number — from NVIDIA's 10-Q — is **$30.77 billion**.

Two of these answers are wrong. **You cannot tell which.** The output never cites the 10-Q.

We call this **confident confabulation**. The model invents — confidently. It never tells you when it is making things up.

This is failure mode one of three. Two more failure modes are next.

*[Click → slide 04]*

### Stage directions (non-obvious only)
- "type a prompt like this" — small smile (audience has done it)
- Reading the prompt — slow, deliberate
- Listing 4 LLM numbers — brisk, list-style
- "**$30.77 billion**" — slow back down; truth-anchor
- "**You cannot tell which.**" — pause, eye contact with one person
- "**confident confabulation**" — pronounce clearly, it's the named failure mode
- "Two more failure modes are next" — forward-lean → click

### Don't say
- ❌ Don't read the full LLM response from slide visuals — speech does the work
- ❌ Don't say "AI is bad" — too general
- ❌ Don't bring up RAG / fine-tuning / tool use as fixes — that's slide 12 territory

---

## Slide 04 — Failure Mode 2 · Corner cutting on data

*[~35-45 seconds. B1 + CPO frame. Abstract / qualitative — no specific percentages or paper citations.]*

Failure mode two. **The model takes shortcuts.**

A 10-K is around **200 pages**. When LLMs are tested on real 10-Ks, only a small part of the document is actually used. Most of it is **skipped** — or filled in from what the model already knew.

Look at this slide. The cyan cells show what the model used. The gray cells — skipped, or built from what the model **already knew** about similar companies. **The output never tells you which is which.**

So your DCF looks complete. But most of it is built on **prior knowledge** — not on the actual report.

That's failure mode two. **Failure mode three is the worst.**

*[Click → slide 05]*

### Stage directions (non-obvious only)
- "around **200 pages**" — slow on number
- "**skipped**" — emphasis, key word
- "Look at this slide" — gesture to the page-grid visualization
- "**The output never tells you which is which**" — pause; this is the trust problem
- "**Failure mode three is the worst**" — forward-lean → click

### Key CPO framing
- Qualitative claim only — no specific percentages or paper citations
- "When LLMs are tested" — passive voice, defensible without claiming Altbridge tested
- Slide visual carries the visual punch (200 cells, only fraction cyan)
- Speech = simple, short, no jargon — easy to deliver and memorize

---

## Slide 05 — Failure Mode 3 · No normalization

*[~50-55 seconds. The silent killer — Amazon FY2025 example.]*

Failure mode three. **No normalization.**

This one is the most expensive.

Look at Amazon, FY2025. Net income, headline: **$77.7 billion**.

Now look in the 10-K footnotes. One line catches your eye. A revaluation of private equity holdings — **$7.7 billion**.

For the three years before, this same line was tiny. About fifty million dollars per year. Then in 2025, it jumped **a hundred and fifty-four times**.

That is not recurring. That happens once.

There are three more items like this in the footnotes. Together — about nine billion of one-time gains and losses. After tax — about **seven billion**.

The real, recurring number is closer to **$70 billion**.

The headline overstates by about **ten percent**. Every projection compounds that error.

The LLM does not read the footnotes. And even if it did — it does not know to flag these as one-time.

This is failure mode three. **The silent killer.**

*[Click → slide 06]*

### Stage directions (non-obvious only)
- "the most expensive" — slow, slightly serious — sets weight
- Reading dollar amounts — clear, deliberate
- "**by definition will not happen again**" — strong emphasis
- "the silent one" — quiet, then forward-lean → click

### Key CPO framing
- *"Here is what every analyst learns in their first week — but the LLM does not"* — positions you as product person who tested AI, comparing model to baseline professional standard, not claiming analyst expertise
- "The silent one" — closes failure modes section, prepares framework reveal

---

## Slide 06 — The L0-L5 Framework (merged)

*[~50-60 seconds. The mental-model reveal.]*

Now — the framework Andrew was talking about.

Last September, Andrew Ang and our research team published a paper. They took the **L0 to L5** model from autonomous driving — the same model used to classify Tesla's Autopilot or Waymo — and applied it to investing.

Six levels. From **L0** — no automation — to **L5** — full autonomy with no human in the loop at all.

Most of the industry today — most of what is sold as *"AI in finance"* — sits at **L1 or L2**. ChatGPT wrappers. Factor-model black boxes. *"AI-powered"* rebranding of tools that already existed.

**L3** is where the industry can credibly be today. AI that recommends decisions in a defined domain. Humans on the loop, supervising.

**L4** — **High Automation**. Full autonomy in a defined domain. Rare. It needs architectural discipline — **pipelines, not just prompts**.

That is where Altbridge sits today. **L4. On live capital. Since Q3 of last year.**

**L5** — full autonomy across all market conditions — is theoretical. Decades away in any serious read.

So when you hear *"AI in finance"* — ask which level. Most of what is sold is **L1**. We are at **L4**. **The gap matters.**

*[Click → slide 07]*

### Stage directions
- "Tesla's Autopilot or Waymo" — small smile, recognizable references
- "**L4. On live capital. Since Q3.**" — three separate beats, slow
- "ask which level" — direct eye contact with audience
- "**The gap matters.**" — quiet confident close

---

## Slide 07 — Our first live deployment

*[~45-55 seconds. From framework theory to lived practice.]*

Now — what we ran.

In Q1 of last year, we deployed a **Level 3** system. US and China equities. Value approach. The system used conviction scoring, DCF modeling, and sector-routed frameworks. But on every recommendation, a PM had to approve.

Through Q3, that is how we ran. **AI proposing — humans approving.**

Then in Q3, we made the transition. We **cut the cord**. The system moved to **L4** — autonomy in a defined domain. Humans monitoring instead of approving.

This is the part that matters. The **L3 to L4 transition** is not theory from a paper. It is what we lived through in real time. With real money. On live capital.

It was the **first proof point** that the framework describes something real.

*[Click → slide 08]*

### Stage directions
- "Now — what we ran" — transition from theory to practice; small pause
- "AI proposing — humans approving" — short, paired
- "**We cut the cord**" — slight emphasis; idiomatic but strong
- "real money. live capital" — slow, deliberate
- "**first proof point**" — quietly confident close

---

## Slide 08 — 2025 Full-Year Performance

*[~45-55 seconds. The numbers that matter to LP audience.]*

Phase one results. 2025 full year. Live capital.

**Plus thirty-three percent** gross return. That is the headline.

**Sharpe ratio of 2.28.** Above most long-short hedge funds.

**Max drawdown of negative five percent.** Contained by the structured pipeline.

**Plus fourteen percentage points** above the S&P 500 in 2025. **Plus twenty-three** above Citadel — a leading systematic fund.

Capital grew from **four hundred and ninety thousand** to **six hundred and fifty thousand**. No outside money. No leverage. No derivatives.

US and China equities. Value approach. A **disciplined pipeline** — not a black box.

*[Click → slide 09]*

### Stage directions
- "**Plus thirty-three percent**" — slow, the headline; let it land
- Each stat (Sharpe, Drawdown, vs S&P, vs Citadel) — own beat, no rushing
- "490 → 650" — clear enunciation
- "**not a black box**" — final beat, quiet

### Don't say
- ❌ "audited" — no signed performance audit exists yet
- ❌ "best year ever" / "outperformed everyone" — empty superlatives
- ❌ Don't promise this will repeat — past performance ≠ future results

---

## Slide 09 — Intellectual reset with Andrew Ang

*[~50-60 seconds. Pivot moment — from Phase 1 success to Phase 2 mental model.]*

After Phase 1 worked, we did something different. We sat down with Andrew Ang.

Our research team — with Andrew — published the L0 to L5 paper you just saw. And one sentence from that work changed everything for us.

Andrew put it this way: **the bottleneck is the human bandwidth.**

The full sentence is on the slide. The simple version: **not data. Not the model. The human.** There are only so many decisions a person can make in a day.

That changed our goal. Not *"remove the human."* Not *"AI replaces the team."* But: **give the team more bandwidth**. Supervise more — more efficiently. **More** governance, not less.

From this point, we stopped chasing **L5**. We started chasing **L4 at scale**.

*[Click → slide 10]*

### Stage directions
- "We sat down with Andrew Ang" — slow, important pivot
- "**the bottleneck is the human bandwidth**" — slow; this is the simple version, anchor of your speech
- Pause briefly after — let audience read the full academic quote on the slide
- "**not data. Not the model. The human.**" — three beats, staccato
- "**L4 at scale**" — final emphasis, forward-lean → click

---

## Slide 10 — The Self-Driving Portfolio

*[~50-60 seconds. The architectural answer to "L4 at scale".]*

While Phase 1 was running, we were already building **Phase 2**. Bigger.

Phase 2 is not stock picking. It is **strategic asset allocation** — how a fund decides where to put money across all asset classes.

This is the second paper from our team — again with Andrew Ang. **The Self-Driving Portfolio.**

The system has about **fifty agents**. They produce market assumptions. They run **twenty different methods** for building portfolios. They debate. They peer-review. They vote on each other's work.

One **meta-agent** watches everything. It compares forecasts with real returns. It rewrites the other agents' code overnight to make them better next time.

All of this is governed by one document — the **Investment Policy Statement**, the IPS. The same document that guides a human portfolio manager now directs the AI.

The investor's job changes. You stop doing every step yourself. You design the system that does the steps. From **executor** — to **architect**.

*[Click → slide 11]*

### Stage directions
- "**fifty agents**" / "**twenty different methods**" — slow on numbers
- "They debate. They peer-review. They vote." — three short beats
- "**meta-agent**" — pronounce clearly, key concept
- "**executor → architect**" — pause between, the conceptual flip

---

## Slide 11 — 30-year academic validation

*[~30-40 seconds. Backtest credibility — short, factual.]*

We tested the Self-Driving Portfolio against **thirty years** of real market data. **2001** — the dot-com crash. **2008** — the global financial crisis. **2020** — COVID.

The system held up.

Sharpe ratio **0.39** — about the same as a traditional sixty-forty portfolio. **Sixty percent stocks. Forty percent bonds.**

But maximum drawdown of **negative twenty-five point six percent** — versus negative **thirty-four point three** for sixty-forty. Significantly less pain in the worst moments.

The system did not break in any of the three crises. That is the validation we wanted before scaling up.

*[Click → slide 12]*

### Stage directions
- Reading "2001 dot-com / 2008 GFC / 2020 COVID" — three beats, audience recognizes each
- "The system held up." — short, confident
- "**−25.6% vs −34.3%**" — slow on numbers; the differentiator
- "scaling up" — forward-lean → click

---

## Slide 12 — Apex architecture: Black box vs. structured pipeline

*[~60-70 seconds. Architectural deep-dive. CPO domain — speak with confidence.]*

Now — how Apex actually works.

On the **left** — what most "AI in finance" looks like. You ask the model. You get an answer. **Black box.** No source for any cell. No way to check.

On the **right** — the **Apex pipeline**. The same task is decomposed into about **two hundred small atomic rows**. Each row has a value, a source, and a validator. You can see one example on the slide.

Every cell. Every time. If the validator fails, the cell is blocked, retried, or escalated to a human.

This is how we solve the **three failure modes** from earlier.

**Confabulation** — solved by the **source anchor validator**. The cell must trace back to a real document.

**Corner cutting** — solved by the **completeness gate**. The pipeline cannot complete unless every required cell has been read.

**No normalization** — solved by the **normalization validator**. One-time items must be flagged.

Three failures. **Three gates.**

*[Click → slide 13]*

### Stage directions
- "**On the left… On the right**" — gesture to each side of the slide
- "value, a source, and a validator" — three short beats; let slide JSON carry the example
- "Confabulation… Corner cutting… No normalization" — three beats, callbacks to slides 03/04/05
- "**Three failures. Three gates.**" — final beat, hard close → click

### Key CPO framing
- This is your home territory — speak with engineer confidence
- The slide shows JSON; let the visual carry; you narrate the meaning
- This is the answer to slides 03-05 critique — "here is HOW we solve it"

---

## Slide 13 — Apex in Action (AMZN demo)

*[~40-50 seconds. Capability demo. Apex demo video plays in panel showing AMZN audit.]*

Now watch the system run. This is **Apex** — auditing Amazon's FY2025 10-K, end to end.

First — **data collection**. The system pulls XBRL filings from SEC, ten years of statements, forty earnings call transcripts, sector data. Public sources. Auditable.

Second — **model build**. The 10-K is decomposed into atomic rows. Each row has a value, a source, a validator. Normalization runs. The 154-times jump on private equity? **Caught.** Normalized net income drops to 70.4 billion.

Third — **conviction score**. Seven pillars. Full audit trail. Every cell traceable to a 10-K page.

Three days of analyst work — **done in twenty minutes**. Sourced. Auditable. **Reproducible.**

*[Click → slide 14]*

### Stage directions
- "what makes Apex **get smarter**?" — rhetorical pause
- Listing "agent / gate / check" — three beats
- "**three or more times**" — slow on number
- "wall the system cannot cross again" — quiet, then gesture to demo on screen
- Final line — gesture to video, let it speak

### Open question
- The slide currently uses a placeholder video animation; the plan is to record a 45–60 second silent screen recording of the actual Apex system in action (prompt → decompose → validators → final DCF), looping. **Question for the team:** which Apex flow should we record?

---

## Slide 14 — SWF Manager Oversight (Setup)

*[~30-40 seconds. Simple English (B1) + CPO frame. Set up the case from the paper.]*

Now let me show you what L3 looks like in real practice. This case is from our September paper — the same paper Andrew Ang and our team wrote.

A sovereign wealth fund manages money through **75 external managers**. Different strategies. Different asset classes. Different geographies.

Their old way: **quarterly reviews**. Manual data. Late warnings. By the time a risk appeared in the report, the exposure had already moved.

They built an **L3 monitoring system**. Daily data from all 75 managers. Performance, holdings, risk metrics — all in one dashboard. Anomaly detection looking for unusual patterns.

Then one Tuesday, the dashboard found a problem with one of the 75 managers.

*[Click → slide 15]*

### Source confirmation
- 75 external managers + L3 monitoring case = SSRN 5468687, Section 4.3 "Sovereign Wealth Fund and Manager Oversight"
- Authors: Nazym Azimbayev, Andrey Kim, Zhassulan Ospanov, Andrew Ang (Sep 2025)
- The fund is anonymous in the paper — reference safely as "case study from our paper"
- Do NOT claim this as Altbridge's actual client engagement

---

## Slide 15 — The Result · 47 Days

*[~30-40 seconds. Hero number 47, then implications.]*

The system flagged a **litigation threat** — affecting one of the 75 external managers.

It found the signal in a small district court filing — **47 days** before the official disclosure.

This is how L3 monitoring works. The system reads court filings, news, and regulatory data — across many sources, every day, in many languages. A human team cannot do this for 75 managers at once. The system can.

What happened next: the fund **reduced exposure**. They **avoided losses**. Other investors learned about the risk through normal disclosure channels — weeks later.

Other cases will be different. The early-warning window depends on the signal source. But this is what L3 monitoring made possible — **weeks** of additional reaction time, instead of being last to know.

The AI does not replace the investment committee. It gives them **time**.

*[Click → slide 16]*

### Stage directions (non-obvious only)
- "**47 days**" — slow, hero number, pause
- "Other cases will be different" — caveat tone, honesty signal
- "It gives them **time**" — final beat, quiet → click

### Source confirmation
- 47 days early warning = direct quote from SSRN 5468687, page 11
- Frame: "AI gives the committee 47 extra days to react" (augmentation, not replacement)

---

## Slide 16 — Three Sentences (Close)

*[~45-60 seconds. Three numbered take-away sentences. Slow, deliberate.]*

I want to leave you with three sentences.

**One.** AI in investing today is mostly L1 and L2. There is a real path to L3 and L4 — and we have been walking it on live capital since Q1 2025.

**Two.** This journey produced three things — **a year of real returns on live capital**, a **framework co-written with Andrew Ang**, and an **architecture our team rolled into production**.

**Three.** The framework is **published**. The track record is **real**. The architecture is **ready**. Now we scale.

*[Click → slide 17]*

### Stage directions (non-obvious only)
- "**One. Two. Three.**" — distinct pauses between each
- Each sentence — slow down, let it land before the next
- "**Now we scale.**" — last words, slight forward-lean energy → click

### Key framing for CPO
- *"our team rolled into production"* — engineering credit, your CPO domain
- Three sentences = different facets: state of industry / what we built / readiness to scale
- This is the mnemonic — if audience forgets everything else, they should remember these three
- Sentence three is **capability-focused** — not asking partners, signaling readiness

---

## Slide 17 — Thank you

*[~25-30 seconds. Closing. Slow, confident, eye contact.]*

Thank you.

The journey from **Assisted** — through **Agentic** — toward **Autonomous**.

Built with **Andrew Ang**. For **institutional capital** that demands more than *"trust the box."*

I'm **Assyl Akhmet**. Find me after the talk if you want to see what **L4** looks like in your portfolio.

*[End — applause]*

### Stage directions
- "Thank you" — slow, full pause; let the audience react
- Reading the arc "Assisted → Agentic → Autonomous" — three beats
- "**Andrew Ang**" — clear, with credit
- "L4 in your portfolio" — final invitation, eye contact swept across audience

---

# Appendix · Deck history note

The deck went through a structural refactor from 19 → 17 slides:

- **Old slides 03 + 04 merged into new slide 03** (Try this yourself + Confident confabulation). The original split made the same point in two beats; merging tightens pacing.
- **Old slides 07 + 08 merged into new slide 06** (L0–L5 Framework + industry position). Originally two separate slides, now one combined view showing the six-level ladder with cohort labels and Altbridge's L4 position highlighted.

The remaining slides were renumbered to fill the gaps. All 17 slides in this archive use the new (final) numbering.

The next step is migration to a single Reveal.js `index.html` deck with all 17 sections plus speaker notes — that's a presentation-engineering task, not a content task.