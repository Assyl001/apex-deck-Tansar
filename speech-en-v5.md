# AI in Investment Activities — Our Two-Year Journey from L1 to L4
## Speech v5 — Tansar Capital Investors Annual Meeting 2026

**Speaker:** Assyl, Chief Product Officer, Altbridge
**Slot:** **May 6, 11:15–11:45 (30 minutes)** + Q&A
**Official topic:** "Применение Искусственного Интеллекта в Инвестиционной Деятельности" — *The Use of Artificial Intelligence in Investment Activities*
**Audience:** LPs, institutional allocators, BlackRock (Tony Ashraf), Hamilton Lane, Balyasny, B Capital, regulators (Nat Bank of Kazakhstan, KASE, AIFC), sovereign / pension funds
**Visual centerpiece:** v6 architecture diagram (Section 4, ~8 min on screen). Also need: Table 1 from L0-L5 paper.
**Tone:** Confident, technically rigorous, with humility. Thought leadership built on academic credibility.

---

## ⚠️ Placeholders to fill

- `[FILL: TGM_RETURN]` — Tansar Global Market 2025 return
- `[FILL: TGM_RETURN_2024]` — Tansar Global Market 2024 partial return (May-Dec 2024)
- `[FILL: DELTA_PP]` — outperformance vs S&P (e.g., 10.6)
- `[FILL: SHARPE]` — Tansar GM Sharpe ratio
- `[FILL: MAX_DD]` — max drawdown
- `[FILL: RECOVERY]` — recovery weeks
- `[FILL: ASK_DETAIL]` — exact capital allocation ask
- `[VERIFY: ROLLOUT_TIMELINE]` — when v6 architecture rolls into TGM production (Q3 2026? End of year?)

---

## How to use this script

- **`[SCROLL: ...]`** / **`[POINT TO ...]`** — visual cue
- **`[PAUSE]`** — short pause (1-2 sec)
- **`[PAUSE — let it land]`** — long pause (3-4 sec)
- **`[STRONG]`** — extra emphasis, slower
- **`[GESTURE]`** — physical gesture
- **`[NAME-DROP]`** — acknowledge specific attendee in the room

---

## SECTION 1 — OPEN WITH ANG (2 min)

[Walk slowly to center stage. Pause 3 seconds. Look across the room.]

Good morning.

[PAUSE]

Six months ago, my co-author wrote a question on LinkedIn that I want to start with.

[STRONG, slower] *"How is adopting AI in investments — like driverless cars?"*

[PAUSE]

That co-author is **Andrew Ang.** Former Head of Systematic Investing at BlackRock. Adjunct Professor at Columbia.

[NAME-DROP — slight nod toward Tony Ashraf if he's seated]

He has spent thirty years building the factor models that the largest asset managers in the world use today.

[PAUSE]

For the last year, he has been working with our team at Altbridge on two questions.

**One** — what does it actually mean for AI to operate inside an institutional investment process?

**Two** — how do we build systems that institutional investors and regulators can trust?

[PAUSE]

That collaboration produced two papers. One published in September. One published this April.

In the next thirty minutes, I want to walk you through what we have learned.

Not as a product pitch. As a journey — from where we started two years ago, to where we are today, to where this entire industry is going.

[PAUSE]

Let me start with the framework.

---

## SECTION 2 — THE L0-L5 FRAMEWORK (4 min)

[SCROLL: Table 1 from L0-L5 paper — autonomous driving vs autonomous investing side-by-side]

In our September paper — *Investing in AI for Investing* — we adapted a standard from the automotive industry.

The Society of Automotive Engineers — the SAE — has a six-level taxonomy for autonomous driving. Most of you have heard of it. Level zero is no automation. Level five is full self-driving across any condition.

[PAUSE]

We adapted that exact taxonomy for AI in investment management.

[POINT TO Table 1 on screen]

[STRONG] **Level zero — no automation.** All analysis performed manually. AI tools may exist but they only support, not replace.

[STRONG] **Level one — investor assistance.** AI helps with single tasks. Data collection. News alerts. Earnings date reminders. Human-in-the-loop. Most "AI" you see in industry today is actually L1.

[STRONG] **Level two — partial automation.** Multiple integrated tasks. Sentiment analysis combined with valuation calculation. AI provides synthesis. Humans formulate the thesis and decide.

[STRONG] **Level three — conditional automation.** AI performs substantial portions of the investment process — within a defined operational domain. AI suggests buy and sell actions. Humans review and approve. **This is where the institutional industry can credibly be today.**

[STRONG] **Level four — high automation.** AI performs the entire investment task autonomously, within a defined domain. Humans set high-level goals and risk parameters. They do not participate in tactical decisions.

[STRONG] **Level five — full autonomy.** Across all market conditions. Human involvement minimal. **Currently theoretical. Raises significant systemic risk and AI alignment questions.**

[PAUSE]

Three things matter about this framework.

[STRONG] **First** — it gives the industry a shared language. Just like the SAE standard let Tesla, Waymo, and General Motors discuss their systems on common terms — this framework lets investment firms, regulators, and LPs do the same.

[STRONG] **Second** — at every level, there is a clearly defined operational design domain. Asset classes, market conditions, risk parameters. **Outside the domain, the human takes over.** This is the safety mechanism.

[STRONG] **Third** — most of the industry today is at Level zero, one, or two. **Almost nobody is credibly at Level three.** Level four is the next decade.

[PAUSE]

Let me tell you our own journey through these levels.

---

## SECTION 3 — OUR TWO-YEAR JOURNEY (8 min)

[SCROLL: Timeline visual — Phase 1 / Phase 2 / Phase 3 / Today]

Two years ago, in May twenty-twenty-four, we launched the first production system.

### Phase 1 — May 2024: Tansar Global Market goes live

[POINT TO timeline — Phase 1]

Many of you in this room know **Tansar Global Market**. [GESTURE — slight head nod toward Tansar team]

Tansar's product. Public equities. Global mandate.

[STRONG] **Altbridge has been the research partner since launch — May twenty-twenty-four. Two years.**

[PAUSE]

Our first-generation system was — in the language of our paper — a **Level two to three** system. Conviction scoring. DCF modeling. Sector-routed frameworks. Human portfolio managers reviewed every recommendation and made final decisions.

[PAUSE]

The result over twenty-twenty-five — full year:

[STRONG] **Tansar Global Market returned [FILL: TGM_RETURN] percent.**

S&P five hundred — total return — plus twenty point four percent.
MSCI World — plus fifteen point five percent.

[STRONG] **We outperformed the S&P by [FILL: DELTA_PP] percentage points. Sharpe ratio [FILL: SHARPE]. Maximum drawdown minus [FILL: MAX_DD] percent — recovered within [FILL: RECOVERY] weeks.**

[PAUSE — let the numbers land]

This is our **proof point that the foundation works**. A small team, in Almaty, using AI as augmentation — beating large institutional benchmarks consistently.

But — within months of running it — we hit a question we could not answer alone.

[PAUSE]

*"Where exactly is this system in the spectrum of AI autonomy? And where should it go next?"*

That question led us to Phase Two.

### Phase 2 — September 2025: Co-publishing the framework with Andrew Ang

[POINT TO timeline — Phase 2]

In September of last year, our team at Altbridge — Nazym, Andrey, Zhassulan — and Andrew Ang published the L0 to L5 framework you just saw.

[STRONG] This was not a marketing exercise. It was an **intellectual reset.**

We needed common language. We needed clearly defined operational design domains. We needed a way to articulate — to LPs, to regulators, to ourselves — exactly what our system did and did not do.

[PAUSE]

The paper has three case studies. I will share one in detail later. But here is the key insight that changed how we thought about our own work:

[STRONG] **At every level, the human's role is not eliminated. It is elevated.**

Quote from the paper: *"The most binding constraint in institutional asset management is not data availability or model sophistication, but the finite bandwidth of human decision-makers."*

[PAUSE]

What that meant for us — practically — was that we needed to redesign our system **so that humans could supervise more, more efficiently, with stronger governance.** Not less human involvement. **Better human involvement.**

That redesign became Phase Three.

### Phase 3 — April 2026: The Self-Driving Portfolio

[POINT TO timeline — Phase 3]

Last month, our team and Andrew Ang published a second paper — *The Self-Driving Portfolio.*

It describes an architecture for institutional asset management built on roughly **fifty specialized AI agents.** Each agent has a defined role. They produce capital market assumptions. They build candidate portfolios using twenty-plus methods in parallel. They critique each other. They vote. **A meta-agent reads past performance and rewrites their own code.**

[PAUSE]

All of it — governed by the **Investment Policy Statement.** The same document that constrains a human portfolio manager — now constrains the agents.

[STRONG] In our framework, this is a **Level three to four** system.

[PAUSE]

The paper includes a backtest from nineteen-ninety-six to twenty-twenty-six. Thirty years.

[STRONG] **Sharpe ratio of zero point three nine — versus a sixty-forty portfolio's zero point four one.**

Almost identical risk-adjusted return.

But here is the critical difference.

[STRONG] **Maximum drawdown of minus twenty-five point six percent — versus the sixty-forty's minus thirty-four point three percent.**

Materially better downside. Across multiple crises — including the dot-com crash, the global financial crisis, COVID.

[PAUSE — let it land]

This is our **theoretical proof** that the next-generation architecture works at scale, across regimes, over decades.

### Today: Bridging foundation and vision

[POINT TO timeline — Today]

Two phases proven. Phase one — with two years of live track record on Tansar Global Market. Phase three — with a thirty-year academic backtest.

[PAUSE]

What you are about to see — is the **bridge.** The architecture we are rolling into production over [VERIFY: ROLLOUT_TIMELINE]. Built on every lesson from Tansar Global Market. Aligned with the principles of the Self-Driving Portfolio paper.

[PAUSE]

We call it Apex v6.

[Transition]

Let me show you.

---

## SECTION 4 — APEX v6 ARCHITECTURE (8 min) — **CENTERPIECE**

[SCROLL: full v6 diagram on the main screen]

[PAUSE 5 seconds — let the audience absorb]

This is Apex Research Pipeline, version six.

[PAUSE]

You are looking at the entire decision-making system. Every component. Every gate. Every feedback loop.

I will walk you through it in three parts. The same three principles from our published framework.

### Part 1: Three component types

[POINT TO LEGEND]

Three kinds of components. Just three.

[STRONG] **Agents** — marked with the letter A. Language models. They read 10-K filings. They interpret earnings transcripts. They build business profiles. **Agents are good at understanding.**

[STRONG] **Engines** — marked with D — for deterministic. Pure code. **No language model. No shortcut. No improvisation.** Same input always produces the same output. **Engines are good at calculation.**

[STRONG] **Gates** — diamond shapes between stages. Schema validators. **If the artifact does not pass — the next stage cannot start.** Period. Not "should not." *Cannot.*

[PAUSE]

In the language of our framework — this is how we **define the operational design domain in code.** The domain is not policy. The domain is gate logic. The system literally cannot operate outside it.

### Part 2: Pipeline — five stages

[POINT TO PIPELINE]

[STRONG] **Stage one — Data Fetch.** Agent downloads 10-K filings, transcripts, XBRL data, Damodaran sector betas. Gate — *did we get them all?*

[STRONG] **Stage two — Data Extraction.** Agent parses files into structured tables. Twenty-two universal rows. Twelve common rows. Sector-specific derived rows. Gate — *does the schema validate?*

[STRONG] **Stage three — Business Understanding.** Agent reads tables and transcripts. Produces drivers — falsifiable theses with citations and target rows. Gate — *do all drivers validate?*

[STRONG] **Stage four — Modeling.** This is where most AI research falls apart.

[POINT TO Modeling]

[STRONG] **We do this with deterministic code. Not an agent.**

The Engine routes by GICS sector. Picks the right framework. **Bank** — equity-only, regulatory capital adjustments, justified P/B terminal. **Energy** — volume times price, exit multiple. **Tech and standard** — FCFF, sector beta from Damodaran.

[PAUSE]

And here is the key.

[STRONG] **The model is stored as JSON. Not as Excel.** Excel is a render. The source of truth is a JSON tree where every row has a formula expression, dependencies, and source.

That means every cell is auditable. Every dependency traceable. Every value reproducible.

[STRONG] **Stage five — Render.** Optional. Excel, PDF, dashboard.

### Part 3: The feedback loop — REI

[POINT TO REI Feedback Loop]

Every agent and every gate writes to one log file. We call it REI — Reflection, Errors, Insights.

Once a week — automated pattern analysis scans the log.

If the same error happens three or more times — the system creates a ticket.

But the fix is not training. The fix is not a memo.

[STRONG] **The fix is a new gate.**

A new validator. The kind of mistake that triggered the ticket — becomes **technically impossible** to repeat.

[PAUSE — let it land]

Apex gets smarter without us. Every error in the system's history is now a wall the system cannot cross.

[PAUSE]

This is what an L3 architecture looks like in production.

---

## SECTION 5 — ONE CASE STUDY (3 min)

[SCROLL: optional — case study summary slide, or stay on diagram]

Let me share one example from our September paper. Specifically, the third case study.

[PAUSE]

A sovereign wealth fund. Managing relationships with **seventy-five external investment managers.** Traditional quarterly review processes. Insufficient early warning. Manual data compilation slowing strategic decisions.

The fund implemented an **L3 monitoring system.** Daily ingestion of performance data, holdings, risk metrics — across all seventy-five managers. Real-time view of the entire portfolio. Anomaly detection. Standardized risk metrics across different strategies.

[PAUSE]

Here is what happened.

[STRONG] **The system flagged a litigation threat affecting one external manager — forty-seven days before the official disclosure.**

[PAUSE — let it land]

Forty-seven days.

The sovereign fund reduced exposure. Avoided losses that affected every other investor who learned through traditional disclosure channels.

[PAUSE]

This is L3 in action. Not the AI replacing the investment committee. **The AI giving the investment committee forty-seven days of additional reaction time.**

[PAUSE]

That is what augmentation looks like at this level. **Not faster decisions. Better-informed decisions, sooner.**

[Transition]

What does this mean for everyone in this room?

---

## SECTION 6 — IMPLICATIONS FOR THE INDUSTRY (3 min)

[SCROLL: optional — implications slide, or stay on diagram]

Three implications. Brief.

[STRONG] **First — audit-grade AI will become the baseline expectation.** Not a differentiator. Within five years, no serious institutional allocator will accept "the model decided" as an answer. They will demand the same standards we apply to human analysts. Documented methodology. Reproducible decisions. Explainable failures. **The funds that built for transparency now will be ahead. The funds that bolted AI onto opaque processes will face an expensive retrofit.**

[STRONG] **Second — regulators in this region have a strategic opportunity.** Most global AI-in-investing frameworks are reactive — written after market events. Kazakhstan, through AIFC and the National Bank, has the chance to be **proactive.** To define what auditable AI in asset management looks like *before* there is a crisis. To set a regional standard. **This would be a real competitive advantage for our financial center. Not from looser rules — from clearer ones.** We would welcome that conversation.

[STRONG] **Third — and most importantly — Central Asia can build its own institutional asset management infrastructure.** For decades, the most sophisticated research infrastructure has lived in three places. New York. London. Hong Kong. AI changes this. The same systematic research that took a hundred people in twenty-fifteen — now runs with ten. **We are not building software for Wall Street. We are building the institutional asset management infrastructure for our region.** Tansar Global Market is the first proof. The Self-Driving Portfolio paper is the academic foundation. **The next chapter is yours to allocate to, partner with, or build on.**

---

## SECTION 7 — CLOSE + ASK (2 min)

[SCROLL: closing slide / contact info]

Three sentences to summarize.

[STRONG, slower, eye contact — pause between each sentence]

**One.** AI in investing today is mostly L1. Most of what gets called "AI" is marketing or opacity. **There is a credible path to L3 — and our team has been walking it for two years.**

[PAUSE]

**Two.** The journey produced three things — a live track record on Tansar Global Market, a framework co-published with one of BlackRock's most senior alumni, and an architecture rolling into production. **That triple — track record, framework, architecture — is unusual. We think it matters.**

[PAUSE]

**Three.** The next step is regional. Built from Almaty. With this room. **And we want to build it together.**

[PAUSE — count to three]

So — the ask.

[PAUSE]

[STRONG] **First — capital allocation partners.** [FILL: ASK_DETAIL — be specific. Examples: "We are opening our next research-driven vehicle to a small number of institutional LPs."] If you value transparent, reproducible, audit-grade methodology — let us talk this evening.

[STRONG] **Second — strategic infrastructure partners.** Exchanges. Custodians. Regulators. If you are building the rails for the next generation of regional asset management — Apex is already running. We want to plug in.

[STRONG] **Third — talent.** Research engineers. Quant developers. People who want to work on the most ambitious AM technology project in this region.

[PAUSE]

Capital. Infrastructure. Talent.

I will be at the bar this evening. I would love to talk to any of you.

[PAUSE — count to three]

[STRONG, looking up] **From Level two — through Level three — toward Level four. Built from Almaty. With Andrew Ang. For institutional capital that demands more than 'trust the box.'**

Thank you.

[GESTURE — small bow]

[After applause settles — smile]

I would love to take your questions.

---

# 📋 SUPPORTING MATERIALS

## A. How to use the diagram on stage

Two visuals matter:

**Visual 1: Table 1 (L0-L5 mapping)** — appears in Section 2 (4 min). High-resolution screenshot from the SSRN paper's Table 1 (autonomous driving vs autonomous investing side-by-side). Stays on screen during framework explanation.

**Visual 2: v6 architecture diagram** — appears in Section 4 (8 min). High-resolution PNG export from `dcf-workflow-v6.excalidraw` at 3x+ resolution. **Critical: text labels must be legible from row 20.** Stays on screen through Section 4 and into Section 5 background.

**Visual 3 (optional): Timeline graphic** — appears in Section 3. Simple horizontal timeline: May 2024 (TGM launch) → Sep 2025 (L0-L5 paper) → Apr 2026 (Self-Driving Portfolio paper) → Today (v6 in production). If no time to design, just describe verbally — narrative is strong without it.

**Cue summary:**
- Sections 1, 7: closing slide / title
- Section 2: Table 1 from L0-L5 paper
- Section 3: timeline (or describe verbally)
- Section 4-5: v6 diagram
- Section 6: optional implications slide

## B. Pronunciation guide

| Word | How to say it |
|------|---------------|
| **Damodaran** | dah-moh-DAH-ran |
| **Falsifiable** | fal-suh-FY-uh-bul |
| **Reproducible** | ree-pruh-DOO-suh-bul |
| **Auditable** | AW-dih-tuh-bul |
| **Deterministic** | dee-TUR-min-IS-tik |
| **Architectural** | ar-kih-TEK-chur-ul |
| **Provenance** | PROV-uh-nens |
| **Methodology** | meth-uh-DOL-uh-jee |
| **Operational design domain** | op-uh-RAY-shun-ul de-ZINE doh-MAYN |
| **Taxonomy** | tak-SON-uh-mee |
| **AIFC** | A-I-F-C |
| **KASE** | KAH-say |
| **GICS** | "gicks" |
| **JSON** | JAY-sahn |
| **Sharpe ratio** | SHARP RAY-shee-oh |
| **Andrew Ang** | AN-droo ANG (hard g, like "song") |
| **SAE J3016** | "S-A-E J thirty thirty-sixteen" |

## C. Russian-speaker pitfalls

- **"th" sound** — *three, thirty, both, thesis* — tongue between teeth
- **"v" vs "w"** — *we, why, weight, was* — round lips for "w"
- **"-ing" endings** — *modeling, scoring, building, driving* — soft "g", do NOT end with hard "k"
- **Long words** — *deterministic, architectural, reproducible* — break into syllables
- **Numbers**: practice "minus twenty-five point six" and "minus thirty-four point three" — they appear back-to-back in Phase 3

## D. Q&A — likely questions for THIS topic

### Q1 [Hamilton Lane / private markets]: "How does this scale to private markets?"

> *"Two answers. One — Apex is built for public equities right now, where 10-K and transcript data is rich. Two — the architecture transfers. The principle of agents-for-understanding, engines-for-calculation, gates-between-every-stage is sector-agnostic. We have started exploring private market applications. The data layer is harder; the architecture is the same."*

### Q2 [BlackRock / Tony Ashraf]: "Where does this evolve in the next 3-5 years?"

> *"Two directions. One — vertical specialization. The general-purpose investment AI fragments into specialists: equity research, credit, private markets, risk. Each requires a different architecture. Two — auditability becomes regulatory requirement, not best practice. The funds that build for audit now will be ahead in twenty-thirty. The Self-Driving Portfolio paper outlines what L3-to-L4 looks like for SAA. We are operationalizing similar principles at the equity research layer."*

### Q3 [Regulator / National Bank / KASE]: "What is your view on AI risk for asset management?"

> *"Three categories — and our framework addresses all three. Model risk: opacity prevents audit. Concentration risk: similar models cause correlated failures. Explainability gap: when AI fails, investor protection breaks. Our published framework defines operational design domains and required oversight per autonomy level. We welcome regulatory dialog on standards. AIFC framework is a starting point."*

### Q4 [Tansar / your host]: "Will Apex stay focused on Tansar Global Market?"

> *"Tansar is our anchor partnership and Tansar Global Market is the proof point that made Apex credible. We will continue investing in that relationship. The next products — custom mandates, sovereign wealth advisory, additional vehicles — extend the platform without competing. Building together."*

### Q5 [Skeptical investor]: "What if Apex makes a bad call?"

> *"Risk management is built in. Position sizes conviction-weighted with hard caps — five percent max per name, thirty percent per sector. The cycle pillar specifically catches over-extended positions. In twenty-twenty-five, max drawdown was [FILL: MAX_DD] percent, recovered within [FILL: RECOVERY] weeks. The system is designed not to be right every time — but to lose less when wrong, and to know exactly why."*

### Q6 [Sovereign / pension fund]: "Could you build a custom mandate for our portfolio?"

> *"Yes. The Apex methodology is general — the engine is configurable. Custom conviction thresholds, sector tilts, ESG overlays, geographic constraints. Output is a custom strategy with full audit trail. Looking for one or two anchor clients to design the first custom product with."*

### Q7 [VC / B Capital]: "What's your moat? Anyone could build this."

> *"Three layers. One — methodology refinement: two years of edge cases and documented decisions, hard to replicate without making the same mistakes. Two — data integration: the SEC, FMP, transcript, XBRL plumbing took us a year. Three — distribution and credibility: Tansar relationship, two co-published papers with Andrew Ang, conference visibility like today. Software is reproducible. Trust is not."*

### Q8 [Andrew Ang's context]: "What does Andrew Ang's involvement actually mean — adviser, investor, co-author?"

> *"Co-author on two peer-reviewed working papers. Active intellectual partner on the framework and the architecture. The collaboration is about establishing rigorous standards for AI in institutional investing — not just at Altbridge but across the industry. We are honored by his involvement and the credibility it brings — but his name is on the work because of the work, not the other way around."*

### Q9 [Practical]: "How do I evaluate whether my current AI manager is L1, L2, or L3?"

> *"Ask three questions. One — can they replay any decision the system made last quarter, with the exact data inputs? If no, they are L0 with marketing on top. Two — is there a defined operational design domain — what asset classes, what market conditions — outside of which a human takes over? If no, they are L1-L2. Three — when the system was wrong, can they explain which input or model component caused the error? If yes — L3. If no — black box, regardless of what they call it."*

### Q10 [Direct ask]: "How do I allocate to your next vehicle?"

> *"We are opening our next strategy to a small number of institutional LPs. [FILL: ASK_DETAIL]. Data room and one-on-one walk-through of the architecture available this week. Find me at the bar after."*

## E. Stage tips for THIS room (May 6, 11:15 slot)

- **Mid-morning slot, Day 2** — audience attentive but not yet caffeinated. Open with energy.
- **Day 1 covered tokenization.** You can reference it briefly ("yesterday's tokenization discussion") but your topic is broader — AI in investment activities.
- **Skip basics.** This audience knows DCF, Sharpe, beta, factor models. Do not explain.
- **Andrew Ang is your secret weapon.** Open Section 1 with the Ang quote. Mention his BlackRock background. **Tony Ashraf will recognize him.** This raises your peer credibility instantly.
- **Tansar credit critical.** Slight head nod toward front row when mentioning Tansar Global Market.
- **Slow down on architecture walkthrough.** 3 seconds per concept on a complex visual.
- **Q&A — tactical:** if hostile, acknowledge ("Fair point"), redirect to the strongest narrative — usually the published papers or the architecture diagram. Never be defensive.
- **If diagram fails to load** — describe verbally. Architecture story works without the visual.

## F. ONE-PAGE STAGE CHEAT SHEET

**Open** — "Andrew Ang asked: 'How is adopting AI in investments like driverless cars?' Today I tell you what we learned answering that — over two years."

**Framework (4 min)** — L0-L5 from our Sept paper with Ang. Show Table 1. Most industry at L0-L2. L3 achievable now. L4 next decade.

**Journey (8 min)** —
- **Phase 1 (May 2024):** TGM launched. L2-L3. Conviction scoring + DCF engine. → [TGM_RETURN]%, beat S&P [DELTA_PP]pp, Sharpe [SHARPE].
- **Phase 2 (Sep 2025):** Co-published L0-L5 framework with Ang. *Intellectual reset.*
- **Phase 3 (Apr 2026):** Co-published Self-Driving Portfolio. 50 agents, IPS-governed. **Backtest 1996-2026: Sharpe 0.39, drawdown -25.6% vs 60/40 -34.3%.** Better downside.
- **Today:** v6 architecture, rolling into production. Bridge between phase 1 foundation and phase 3 vision.

**v6 Architecture (8 min)** — Show diagram. Three components: Agents (A) flexible, Engines (D) deterministic, Gates schema-validated. 5 pipeline stages. Modeling = code, NOT agent. Model = JSON, Excel = render. **REI loop:** errors → enforced gates.

**SWF case (3 min)** — 75 external managers, L3 monitoring system. **Flagged litigation threat 47 days before official disclosure.** Augmentation, not replacement.

**Industry implications (3 min)** —
1. Audit-grade AI = baseline in 5 yr (LPs will demand).
2. Regulators here can lead (proactive vs reactive).
3. Central Asia can build its own AM infrastructure.

**Close + ask (2 min)** — "L1 marketing → L3 production. Track record + framework + architecture. Three asks: capital, infrastructure, talent. From L2 → L3 → toward L4. Built from Almaty. With Andrew Ang."

---

**Total speaking time:** ~28-30 minutes at 130 wpm with pauses
**Total word count:** ~3,800 words
**Visuals:** Table 1 (Section 2) + v6 diagram (Section 4) + optional timeline (Section 3)
