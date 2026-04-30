# Speaker Notes — Conference Deck

Speeches for each slide, with bilingual EN/RU mirror per paragraph.
On migration into `index.html`, only the **EN** blocks become `<aside class="notes">`
inside each `<section>` — RU and stage directions are study-aid for memorization
and don't ship into Reveal.js.

Reading workflow: read the EN block as a memorizable whole. If a line slips,
glance at the RU paragraph directly below for instant meaning recovery.

Translation style: speech-level, not word-for-word. Idioms localized.
Proper nouns and department names kept in English. Bold/italic emphasis
preserved across both renderings to keep delivery rhythm aligned.

**Numbering: this file uses NEW numbering (1–17) after the planned merges of slides 03+04 and 07+08.** See appendix at the end of file for the merge plan and old → new mapping.

---

## Slide 01 — Title / Opening

*[~30-40 seconds. Simple English (B1). Greet, name yourself, set up the journey.]*

> **EN:** Good morning, everyone — and thank you, Tansar, for inviting Altbridge today.
>
> **RU:** Доброе утро всем — и спасибо, Tansar, что пригласили Altbridge сегодня.

> **EN:** I'm **Assyl Akhmet** — Chief Product Officer at Altbridge. We build infrastructure for what comes after analyst-assistance — **agentic investing on live capital**.
>
> **RU:** Я **Асыл Ахмет** — Chief Product Officer в Altbridge. Мы строим инфраструктуру для того, что приходит после analyst-assistance — **агентного инвестирования на реальном капитале**.

> **EN:** The next twenty minutes are about one journey. **From Level 3 to Level 4.** Level 3 is assisted research — a human approves every trade. Level 4 is agentic execution — humans supervise, not execute.
>
> **RU:** Следующие двадцать минут — про один путь. **От Уровня 3 к Уровню 4.** Уровень 3 — это assisted research, где человек одобряет каждую сделку. Уровень 4 — это agentic execution, где человек надзирает, а не исполняет.

> **EN:** We started this in **Q1 of last year**. By Q3, we moved to Level 4. The year after gave us results I want to share with you.
>
> **RU:** Мы начали это в **первом квартале прошлого года**. К третьему кварталу мы перешли на Уровень 4. Следующий год дал нам результаты, которыми я хочу с вами поделиться.

> **EN:** But first — let me start with a question you probably know.
>
> **RU:** Но сначала — позвольте начать с вопроса, который вам, возможно, знаком.

*[Click → slide 02]*

### Stage directions (non-obvious only)
- "**From Level 3 to Level 4**" — slow down here; this is the headline of the whole talk
- "Q3, we moved to Level 4" — clear date; this is the key fact
- "But first" — slight smile, transition to slide 02 hook

### Vocabulary to memorize
| English | Russian |
|---|---|
| **agentic investing** | агентное инвестирование (AI принимает решения, человек надзирает) |
| **live capital** | реальный капитал (реальные деньги, не симуляция) |
| **assisted research** | research-помощь от AI, решения принимает человек |
| **agentic execution** | AI исполняет, человек надзирает |
| **supervise** | надзирать |
| **approve** | одобрять |

### Don't say
- ❌ "audited" — нет signed report (см. memory rule)
- ❌ "two-year journey" / "from L1 to L4" — фактически неверно

---

## Slide 02 — Andrew Ang's LinkedIn quote

*[~35-45 seconds. Simple English (B1). Plant the analogy seed.]*

> **EN:** Six months ago, our Chief Strategist posted this on LinkedIn:
>
> **RU:** Шесть месяцев назад наш Chief Strategist опубликовал это на LinkedIn:

> **EN:** *"How is adopting AI in investments — like driverless cars?"*
>
> **RU:** *«Как внедрение AI в инвестиции — похоже на беспилотные автомобили?»*

> **EN:** That's **Andrew Ang**. Former Head of Systematic Investing at BlackRock. Professor at Columbia Business School. He wrote much of the modern textbook on factor investing — over **thirty-four thousand academic citations**.
>
> **RU:** Это **Эндрю Энг**. Бывший руководитель Systematic Investing в BlackRock. Профессор бизнес-школы Колумбии. Он написал большую часть современного учебника по factor investing — более **тридцати четырёх тысяч академических цитирований**.

> **EN:** When Andrew picks an analogy — listen carefully.
>
> **RU:** Когда Эндрю выбирает аналогию — слушайте внимательно.

> **EN:** And this analogy is **exact**. The driverless car industry has spent twenty years on one question — *how much of the steering wheel do you give the AI, and when?* That is the same question for investing now.
>
> **RU:** И эта аналогия — **точная**. Индустрия беспилотных автомобилей двадцать лет работает над одним вопросом: *сколько руля передавать AI, и когда?* Это тот же самый вопрос для инвестиций сейчас.

> **EN:** The answer is a framework. We will get to it. But first — let me show you why we needed it.
>
> **RU:** Ответ — это фреймворк. Мы дойдём до него. Но сначала — позвольте показать, почему он нам понадобился.

*[Click → slide 03]*

### Stage directions (non-obvious only)
- Pause before opening — let the quote-mark on slide settle visually
- Reading the quote — slow down, beat before "driverless cars"
- "**When Andrew picks an analogy — listen carefully**" — slowest line, eye contact with the room
- "this analogy is **exact**" — emphasis on "exact"
- "we needed it" — forward-lean, transition to slide 03

### Vocabulary to memorize
| English | Russian |
|---|---|
| **analogy** | аналогия (сравнение похожих ситуаций) |
| **adopting** | внедрение (нового) |
| **factor investing** | факторное инвестирование (Andrew's field) |
| **driverless car** | беспилотный автомобиль |
| **framework** | фреймворк (структурированный подход) |
| **picks an analogy** | выбирает аналогию (= reaches for) |

### Don't say
- ❌ "my co-author" — Assyl is not a paper co-author (см. memory rule)
- ❌ Don't read the 3 bullet credentials verbatim — slide already shows them
- ❌ Don't cite SSRN paper number — that's for slide 09

---

## Slide 03 — Try this yourself + Failure Mode 1 (merged)

*[Merged slide. ~50-55 seconds. Simple English (B1). Set the prompt → reveal the variance → land the punchline.]*

> **EN:** Right now, on your phone, you can open Claude, ChatGPT, or Perplexity. Type a prompt like this:
>
> **RU:** Прямо сейчас, на телефоне, вы можете открыть Claude, ChatGPT или Perplexity. Введите prompt типа этого:

> **EN:** *"Analyze NVIDIA as an investment. Build a DCF. What's the fair value per share?"*
>
> **RU:** *«Проанализируй NVIDIA как инвестицию. Построй DCF. Какая справедливая стоимость акции?»*

> **EN:** Try this. Same prompt. Many times. You will get answers like these.
>
> **RU:** Попробуйте сами. Тот же prompt. Много раз. Вы получите ответы вроде этих.

> **EN:** **$30.8 billion. $28.5 billion. $31.2 billion. $30.6 billion.** All look professional. All sound confident.
>
> **RU:** **$30.8 миллиарда. $28.5 миллиарда. $31.2 миллиарда. $30.6 миллиарда.** Все выглядят профессионально. Все звучат уверенно.

> **EN:** The real number — from NVIDIA's 10-Q — is **$30.77 billion**.
>
> **RU:** Реальное число — из 10-Q NVIDIA — **$30.77 миллиарда**.

> **EN:** Two of these answers are wrong. **You cannot tell which.** The output never cites the 10-Q.
>
> **RU:** Два из этих ответов — неверны. **Вы не можете определить какие.** Output никогда не ссылается на 10-Q.

> **EN:** We call this **confident confabulation**. The model invents — confidently. It never tells you when it is making things up.
>
> **RU:** Мы называем это **уверенная выдумка** *(confident confabulation)*. Модель выдумывает — уверенно. Никогда не говорит вам, когда выдумывает.

> **EN:** This is failure mode one of three. Two more failure modes are next.
>
> **RU:** Это первый из трёх типов сбоя. Два других — впереди.

*[Click → slide 04]*

### Stage directions (non-obvious only)
- "type a prompt like this" — small smile (audience has done it)
- Reading the prompt — slow, deliberate
- Listing 4 LLM numbers — brisk, list-style
- "**$30.77 billion**" — slow back down; truth-anchor
- "**You cannot tell which.**" — pause, eye contact with one person
- "**confident confabulation**" — pronounce clearly, it's the named failure mode
- "Two more failure modes are next" — forward-lean → click

### Vocabulary to memorize
| English | Russian |
|---|---|
| **DCF** (Discounted Cash Flow) | модель оценки через дисконтирование денежных потоков |
| **fair value** | справедливая стоимость |
| **10-Q** | квартальный отчёт компании в SEC |
| **confabulation** | уверенная выдумка (модель сама себе верит) |
| **failure mode** | тип сбоя (способ, которым система ломается) |
| **made up** | выдуман / придуман |

### Don't say
- ❌ Don't read the full LLM response from slide visuals — speech does the work
- ❌ Don't say "AI is bad" — too general
- ❌ Don't bring up RAG / fine-tuning / tool use as fixes — that's slide 12 territory

---

## Slide 04 — Failure Mode 2 · Corner cutting on data

*[~35-45 seconds. B1 + CPO frame. Abstract / qualitative — no specific percentages or paper citations.]*

> **EN:** Failure mode two. **The model takes shortcuts.**
>
> **RU:** Failure mode номер два. **Модель срезает углы.**

> **EN:** A 10-K is around **200 pages**. When LLMs are tested on real 10-Ks, only a small part of the document is actually used. Most of it is **skipped** — or filled in from what the model already knew.
>
> **RU:** 10-K — около **200 страниц**. Когда LLM тестируют на реальных 10-K, реально используется только малая часть документа. Большая часть **пропускается** — или заполняется из того, что модель уже знала.

> **EN:** Look at this slide. The cyan cells show what the model used. The gray cells — skipped, or built from what the model **already knew** about similar companies. **The output never tells you which is which.**
>
> **RU:** Посмотрите на слайд. Cyan ячейки — то что модель использовала. Серые ячейки — пропущенные, или построенные на том что модель **уже знала** про похожие компании. **Output никогда не сообщает разницу.**

> **EN:** So your DCF looks complete. But most of it is built on **prior knowledge** — not on the actual report.
>
> **RU:** То есть DCF выглядит полным. Но большая часть построена на **prior knowledge** — не на реальном отчёте.

> **EN:** That's failure mode two. **Failure mode three is the worst.**
>
> **RU:** Это failure mode два. **Failure mode три — худшая.**

*[Click → slide 05]*

### Stage directions (non-obvious only)
- "around **200 pages**" — slow on number
- "**skipped**" — emphasis, key word
- "Look at this slide" — gesture to the page-grid visualization
- "**The output never tells you which is which**" — pause; this is the trust problem
- "**Failure mode three is the worst**" — forward-lean → click

### Vocabulary to memorize
| English | Russian |
|---|---|
| **skipped** | пропущенный |
| **prior knowledge** | предварительные знания (то что модель помнит из обучения) |
| **filled in** | заполнено (моделью, не из источника) |

### Key CPO framing
- Qualitative claim only — no specific percentages or paper citations
- "When LLMs are tested" — passive voice, defensible without claiming Altbridge tested
- Slide visual carries the visual punch (200 cells, only fraction cyan)
- Speech = simple, short, no jargon — easy to deliver and memorize

---

## Slide 05 — Failure Mode 3 · No normalization

*[~50-55 seconds. B1 + CPO frame. The silent killer — Amazon FY2025 example.]*

> **EN:** Failure mode three. **No normalization.**
>
> **RU:** Failure mode номер три. **Без нормализации.**

> **EN:** This one is the most expensive.
>
> **RU:** Эта — самая дорогая.

> **EN:** Look at Amazon, FY2025. Net income, headline: **$77.7 billion**.
>
> **RU:** Посмотрите на Amazon, FY2025. Чистая прибыль, заголовок: **$77.7 миллиарда**.

> **EN:** Now look in the 10-K footnotes. One line catches your eye. A revaluation of private equity holdings — **$7.7 billion**.
>
> **RU:** Теперь посмотрите в footnotes 10-K. Одна строка обращает на себя внимание. Переоценка private equity — **$7.7 миллиарда**.

> **EN:** For the three years before, this same line was tiny. About fifty million dollars per year. Then in 2025, it jumped **a hundred and fifty-four times**.
>
> **RU:** Три года до этого та же строка была крошечной. Около пятидесяти миллионов долларов в год. А в 2025 — она выросла в **сто пятьдесят четыре раза**.

> **EN:** That is not recurring. That happens once.
>
> **RU:** Это не повторяющееся событие. Это случается один раз.

> **EN:** There are three more items like this in the footnotes. Together — about nine billion of one-time gains and losses. After tax — about **seven billion**.
>
> **RU:** В footnotes есть ещё три подобных пункта. Всего — около девяти миллиардов разовых доходов и расходов. После налога — около **семи миллиардов**.

> **EN:** The real, recurring number is closer to **$70 billion**.
>
> **RU:** Реальное, recurring число — ближе к **$70 миллиардам**.

> **EN:** The headline overstates by about **ten percent**. Every projection compounds that error.
>
> **RU:** Заголовок завышен примерно на **десять процентов**. Каждый прогноз умножает эту ошибку.

> **EN:** The LLM does not read the footnotes. And even if it did — it does not know to flag these as one-time.
>
> **RU:** LLM не читает footnotes. А даже если читала бы — она не знает, что эти статьи нужно пометить как разовые.

> **EN:** This is failure mode three. **The silent killer.**
>
> **RU:** Это failure mode три. **Тихий убийца.**

*[Click → slide 06]*

### Stage directions (non-obvious only)
- "the most expensive" — slow, slightly serious — sets weight
- "**$77.7 billion**" — headline number, clear enunciation
- "**$7.7 billion**" — the killer one-time item; pause briefly after
- "**a hundred and fifty-four times**" — slow, this is the punchy stat
- "**$70 billion**" — truth-anchor, slow back down
- "**ten percent**" — the magnitude of the error
- "The LLM does not read the footnotes" — quietly damning
- "**The silent killer**" — final beat, forward-lean → click

### Vocabulary to memorize
| English | Russian |
|---|---|
| **normalization** | нормализация (очистка от разовых статей) |
| **headline** (number) | заголовочное число (главная цифра отчёта) |
| **footnotes** (10-K) | сноски в годовом отчёте |
| **revaluation** | переоценка (актива) |
| **one-time** vs **recurring** | разовый / повторяющийся |
| **after tax** | после уплаты налога |
| **flag** (as one-time) | пометить, выделить |

### Source confirmation
- All numbers from Amazon 10-K filings (XBRL, SEC EDGAR), fiscal years 2022-2025
- $7.71B private equity adjustment = `EquitySecuritiesWithoutReadilyDeterminableFairValueUpwardPriceAdjustmentAnnualAmount`, FY2025
- 154× jump verified across 4-year XBRL data: $0.04B (FY22) / $0.05B (FY24) / $0.08B (FY23) → $7.71B (FY25)
- After-tax effect: $9.05B pre-tax × (1 − 19.7% effective rate) = $7.27B
- Normalized: $77.7B − $7.27B = $70.4B (overstated by 9.4%)

### Key CPO framing
- *"Look at Amazon, FY2025"* — concrete public-company example, not abstract claim
- *"154 times bigger"* — punchy stat that makes the failure mode visceral
- *"The LLM does not read the footnotes. And even if it did..."* — sets up Apex reveal on slide 12 (validators that catch this)
- This is **product engineering review** of LLM output, not Amazon investment thesis

---

## Slide 06 — The L0-L5 Framework (merged)

*[~50-60 seconds. The mental-model reveal.]*

> **EN:** Now — the framework Andrew was talking about.
>
> **RU:** Теперь — фреймворк, о котором говорил Andrew.

> **EN:** Last September, Andrew Ang and our research team published a paper. They took the **L0 to L5** model from autonomous driving — the same model used to classify Tesla's Autopilot or Waymo — and applied it to investing.
>
> **RU:** Прошлым сентябрём Andrew Ang и наша research-команда опубликовали paper. Они взяли модель **L0 to L5** из автономного вождения — ту же модель, что используется для классификации Tesla Autopilot или Waymo — и применили её к инвестированию.

> **EN:** Six levels. From **L0** — no automation — to **L5** — full autonomy with no human in the loop at all.
>
> **RU:** Шесть уровней. От **L0** — никакой автоматизации — до **L5** — полная автономия, без человека в петле.

> **EN:** Most of the industry today — most of what is sold as *"AI in finance"* — sits at **L1 or L2**. ChatGPT wrappers. Factor-model black boxes. *"AI-powered"* rebranding of tools that already existed.
>
> **RU:** Большая часть индустрии сегодня — большая часть того, что продаётся под маркой *"AI in finance"* — на **L1 или L2**. ChatGPT wrappers. Factor-model black boxes. *"AI-powered"* ребрендинг инструментов, которые уже существовали.

> **EN:** **L3** is where the industry can credibly be today. AI that recommends decisions in a defined domain. Humans on the loop, supervising.
>
> **RU:** **L3** — это где индустрия может реально находиться сегодня. AI, который рекомендует решения в определённой области. Люди в петле — надзирают.

> **EN:** **L4** — **High Automation**. Full autonomy in a defined domain. Rare. It needs architectural discipline — **pipelines, not just prompts**.
>
> **RU:** **L4** — **High Automation**. Полная автономия в определённой области. Редкость. Нужна архитектурная дисциплина — **pipeline'ы, не просто prompts**.

> **EN:** That is where Altbridge sits today. **L4. On live capital. Since Q3 of last year.**
>
> **RU:** Вот где Altbridge сегодня. **L4. На реальном капитале. С Q3 прошлого года.**

> **EN:** **L5** — full autonomy across all market conditions — is theoretical. Decades away in any serious read.
>
> **RU:** **L5** — полная автономия во всех рыночных условиях — теоретический. Десятилетия в любой серьёзной оценке.

> **EN:** So when you hear *"AI in finance"* — ask which level. Most of what is sold is **L1**. We are at **L4**. **The gap matters.**
>
> **RU:** Так что когда слышите *"AI in finance"* — спрашивайте на каком уровне. Большая часть продаваемого — **L1**. Мы — на **L4**. **Разрыв имеет значение.**

*[Click → slide 07]*

### Stage directions
- "Tesla's Autopilot or Waymo" — small smile, recognizable references
- "**L4. On live capital. Since Q3.**" — three separate beats, slow
- "ask which level" — direct eye contact with audience
- "**The gap matters.**" — quiet confident close

### Vocabulary to memorize
| English | Russian |
|---|---|
| **L0–L5** | шесть уровней автономии |
| **ChatGPT wrappers** | оболочки над ChatGPT |
| **factor-model black boxes** | непрозрачные факторные модели |
| **defined domain** | определённая область |
| **architectural discipline** | архитектурная дисциплина |
| **pipelines, not prompts** | конвейеры, не отдельные prompts |

---

## Slide 07 — Our first live deployment

*[~45-55 seconds. From framework theory to lived practice.]*

> **EN:** Now — what we ran.
>
> **RU:** Теперь — что мы запустили.

> **EN:** In Q1 of last year, we deployed a **Level 3** system. US and China equities. Value approach. The system used conviction scoring, DCF modeling, and sector-routed frameworks. But on every recommendation, a PM had to approve.
>
> **RU:** В Q1 прошлого года мы запустили **Level 3** систему. Акции США и Китая. Value approach. Система использовала conviction scoring, DCF modeling и sector-routed frameworks. Но на каждую рекомендацию PM должен был дать одобрение.

> **EN:** Through Q3, that is how we ran. **AI proposing — humans approving.**
>
> **RU:** До Q3 мы так и работали. **AI предлагает — люди одобряют.**

> **EN:** Then in Q3, we made the transition. We **cut the cord**. The system moved to **L4** — autonomy in a defined domain. Humans monitoring instead of approving.
>
> **RU:** Потом в Q3 мы сделали переход. **Перерезали пуповину**. Система перешла на **L4** — автономия в определённой области. Люди мониторят, а не одобряют.

> **EN:** This is the part that matters. The **L3 to L4 transition** is not theory from a paper. It is what we lived through in real time. With real money. On live capital.
>
> **RU:** Это и есть важная часть. **Переход L3 → L4** — это не теория из paper'а. Это то, что мы прожили в реальном времени. С реальными деньгами. На реальном капитале.

> **EN:** It was the **first proof point** that the framework describes something real.
>
> **RU:** Это был **первый proof point**, что framework описывает что-то реальное.

*[Click → slide 08]*

### Stage directions
- "Now — what we ran" — transition from theory to practice; small pause
- "AI proposing — humans approving" — short, paired
- "**We cut the cord**" — slight emphasis; idiomatic but strong
- "real money. live capital" — slow, deliberate
- "**first proof point**" — quietly confident close

### Vocabulary to memorize
| English | Russian |
|---|---|
| **conviction scoring** | оценка уверенности (системы в идее) |
| **DCF modeling** | DCF-моделирование |
| **sector-routed frameworks** | sector-маршрутизированные фреймворки |
| **PM (portfolio manager)** | портфельный управляющий |
| **cut the cord** | "перерезать пуповину" — отпустить, дать свободу |
| **proof point** | точка подтверждения, доказательство |

---

## Slide 08 — 2025 Full-Year Performance

*[~45-55 seconds. The numbers that matter to LP audience.]*

> **EN:** Phase one results. 2025 full year. Live capital.
>
> **RU:** Фаза один — результаты. 2025 год полностью. Реальный капитал.

> **EN:** **Plus thirty-three percent** gross return. That is the headline.
>
> **RU:** **Плюс тридцать три процента** gross return. Это главный показатель.

> **EN:** **Sharpe ratio of 2.28.** Above most long-short hedge funds.
>
> **RU:** **Sharpe ratio 2.28.** Выше большинства long-short hedge fund'ов.

> **EN:** **Max drawdown of negative five percent.** Contained by the structured pipeline.
>
> **RU:** **Max drawdown минус пять процентов.** Удержан структурированным pipeline'ом.

> **EN:** **Plus fourteen percentage points** above the S&P 500 in 2025. **Plus twenty-three** above Citadel — a leading systematic fund.
>
> **RU:** **Плюс четырнадцать процентных пунктов** над S&P 500 за 2025. **Плюс двадцать три** над Citadel — одним из ведущих systematic fund'ов.

> **EN:** Capital grew from **four hundred and ninety thousand** to **six hundred and fifty thousand**. No outside money. No leverage. No derivatives.
>
> **RU:** Капитал вырос с **490 тысяч** до **650 тысяч**. Без внешних денег. Без leverage'а. Без деривативов.

> **EN:** US and China equities. Value approach. A **disciplined pipeline** — not a black box.
>
> **RU:** Акции США и Китая. Value approach. **Disciplined pipeline** — не black box.

*[Click → slide 09]*

### Stage directions
- "**Plus thirty-three percent**" — slow, the headline; let it land
- Each stat (Sharpe, Drawdown, vs S&P, vs Citadel) — own beat, no rushing
- "490 → 650" — clear enunciation
- "**not a black box**" — final beat, quiet

### Vocabulary to memorize
| English | Russian |
|---|---|
| **gross return** | валовая доходность (до издержек/налогов) |
| **Sharpe ratio** | соотношение risk-adjusted return (выше 1 — хорошо, выше 2 — отлично) |
| **max drawdown** | максимальное падение от пика |
| **percentage points (pp)** | процентные пункты (разница между двумя процентами) |
| **leverage** | заёмные средства |
| **derivatives** | деривативы (производные инструменты) |
| **systematic fund** | систематический фонд (квантовый, на правилах) |

### Don't say
- ❌ "audited" — нет signed report (memory rule)
- ❌ "best year ever" / "outperformed everyone" — empty superlatives
- ❌ Don't promise this will repeat — past performance ≠ future results

---

## Slide 09 — Intellectual reset with Andrew Ang

*[~50-60 seconds. Pivot moment — from Phase 1 success to Phase 2 mental model.]*

> **EN:** After Phase 1 worked, we did something different. We sat down with Andrew Ang.
>
> **RU:** После того как Phase 1 заработала, мы сделали кое-что другое. Мы сели с Andrew Ang.

> **EN:** Our research team — with Andrew — published the L0 to L5 paper you just saw. And one sentence from that work changed everything for us.
>
> **RU:** Наша research-команда — с Andrew — опубликовала L0-L5 paper, который вы только что видели. И одно предложение из этой работы изменило для нас всё.

> **EN:** Andrew put it this way: **the bottleneck is the human bandwidth.**
>
> **RU:** Andrew сформулировал так: **bottleneck — это пропускная способность человека.**

> **EN:** The full sentence is on the slide. The simple version: **not data. Not the model. The human.** There are only so many decisions a person can make in a day.
>
> **RU:** Полное предложение — на слайде. Простой вариант: **не данные. Не модель. Человек.** Один человек может принять только ограниченное число решений в день.

> **EN:** That changed our goal. Not *"remove the human."* Not *"AI replaces the team."* But: **give the team more bandwidth**. Supervise more — more efficiently. **More** governance, not less.
>
> **RU:** Это изменило нашу цель. Не *«убрать человека»*. Не *«AI заменит команду»*. А: **дать команде больше пропускной способности**. Надзирать за большим — эффективнее. **Больше** governance, не меньше.

> **EN:** From this point, we stopped chasing **L5**. We started chasing **L4 at scale**.
>
> **RU:** С этого момента мы перестали гнаться за **L5**. Мы стали гнаться за **L4 at scale**.

*[Click → slide 10]*

### Stage directions
- "We sat down with Andrew Ang" — slow, important pivot
- "**the bottleneck is the human bandwidth**" — slow; this is the simple version, anchor of your speech
- Pause briefly after — let audience read the full academic quote on the slide
- "**not data. Not the model. The human.**" — three beats, staccato
- "**L4 at scale**" — final emphasis, forward-lean → click

### Vocabulary to memorize
| English | Russian |
|---|---|
| **constraint** | ограничение |
| **bottleneck** | узкое место |
| **bandwidth** | пропускная способность |
| **governance** | управление, надзор |
| **at scale** | на масштабе (для многих случаев одновременно) |
| **decision-maker** | принимающий решения |

---

## Slide 10 — The Self-Driving Portfolio

*[~50-60 seconds. The architectural answer to "L4 at scale".]*

> **EN:** While Phase 1 was running, we were already building **Phase 2**. Bigger.
>
> **RU:** Пока Phase 1 работала, мы уже строили **Phase 2**. Больше.

> **EN:** Phase 2 is not stock picking. It is **strategic asset allocation** — how a fund decides where to put money across all asset classes.
>
> **RU:** Phase 2 — это не подбор акций. Это **strategic asset allocation** — как фонд решает, куда вложить деньги по всем классам активов.

> **EN:** This is the second paper from our team — again with Andrew Ang. **The Self-Driving Portfolio.**
>
> **RU:** Это второй paper нашей команды — снова с Andrew Ang. **The Self-Driving Portfolio.**

> **EN:** The system has about **fifty agents**. They produce market assumptions. They run **twenty different methods** for building portfolios. They debate. They peer-review. They vote on each other's work.
>
> **RU:** В системе около **пятидесяти агентов**. Они производят market assumptions. Они запускают **двадцать разных методов** построения портфелей. Они спорят. Делают peer-review. Голосуют за работу друг друга.

> **EN:** One **meta-agent** watches everything. It compares forecasts with real returns. It rewrites the other agents' code overnight to make them better next time.
>
> **RU:** Один **meta-agent** следит за всем. Сравнивает прогнозы с реальной доходностью. Переписывает код других агентов ночью, чтобы в следующий раз они работали лучше.

> **EN:** All of this is governed by one document — the **Investment Policy Statement**, the IPS. The same document that guides a human portfolio manager now directs the AI.
>
> **RU:** Всё это управляется одним документом — **Investment Policy Statement**, или IPS. Тот же документ, который направляет человека-PM, теперь направляет AI.

> **EN:** The investor's job changes. You stop doing every step yourself. You design the system that does the steps. From **executor** — to **architect**.
>
> **RU:** Работа инвестора меняется. Вы перестаёте делать каждый шаг сами. Вы проектируете систему, которая делает шаги. От **исполнителя** — к **архитектору**.

*[Click → slide 11]*

### Stage directions
- "**fifty agents**" / "**twenty different methods**" — slow on numbers
- "They debate. They peer-review. They vote." — three short beats
- "**meta-agent**" — pronounce clearly, key concept
- "**executor → architect**" — pause between, the conceptual flip

### Vocabulary to memorize
| English | Russian |
|---|---|
| **strategic asset allocation (SAA)** | стратегическое распределение активов |
| **market assumptions** | предположения о рынке (прогнозы) |
| **peer-review** | взаимная проверка (между агентами) |
| **meta-agent** | мета-агент (агент, надзирающий за другими) |
| **Investment Policy Statement (IPS)** | политика инвестирования (документ-правила) |
| **executor** | исполнитель |
| **architect** | архитектор |

---

## Slide 11 — 30-year academic validation

*[~30-40 seconds. Backtest credibility — short, factual.]*

> **EN:** We tested the Self-Driving Portfolio against **thirty years** of real market data. **2001** — the dot-com crash. **2008** — the global financial crisis. **2020** — COVID.
>
> **RU:** Мы протестировали Self-Driving Portfolio на **тридцати годах** реальных рыночных данных. **2001** — крах dot-com. **2008** — глобальный финансовый кризис. **2020** — COVID.

> **EN:** The system held up.
>
> **RU:** Система выдержала.

> **EN:** Sharpe ratio **0.39** — about the same as a traditional sixty-forty portfolio. **Sixty percent stocks. Forty percent bonds.**
>
> **RU:** Sharpe ratio **0.39** — примерно как у традиционного 60/40 портфеля. **Шестьдесят процентов акций. Сорок процентов облигаций.**

> **EN:** But maximum drawdown of **negative twenty-five point six percent** — versus negative **thirty-four point three** for sixty-forty. Significantly less pain in the worst moments.
>
> **RU:** Но maximum drawdown **минус 25.6 процента** — против **минус 34.3** у 60/40. Значительно меньше боли в худшие моменты.

> **EN:** The system did not break in any of the three crises. That is the validation we wanted before scaling up.
>
> **RU:** Система не сломалась ни в одном из трёх кризисов. Это та валидация, которую мы хотели перед тем как масштабировать.

*[Click → slide 12]*

### Stage directions
- Reading "2001 dot-com / 2008 GFC / 2020 COVID" — three beats, audience recognizes each
- "The system held up." — short, confident
- "**−25.6% vs −34.3%**" — slow on numbers; the differentiator
- "scaling up" — forward-lean → click

### Vocabulary to memorize
| English | Russian |
|---|---|
| **backtest** | тестирование на исторических данных |
| **60/40 portfolio** | классический портфель 60% акций / 40% облигаций |
| **maximum drawdown** | максимальное падение от пика |
| **dot-com** | пузырь интернет-компаний 1999-2001 |
| **GFC (Global Financial Crisis)** | глобальный финансовый кризис 2008 |
| **scale up** | масштабировать |

---

## Slide 12 — Apex architecture: Black box vs. structured pipeline

*[~60-70 seconds. Architectural deep-dive. CPO domain — speak with confidence.]*

> **EN:** Now — how Apex actually works.
>
> **RU:** Теперь — как работает Apex.

> **EN:** On the **left** — what most "AI in finance" looks like. You ask the model. You get an answer. **Black box.** No source for any cell. No way to check.
>
> **RU:** **Слева** — как выглядит большая часть "AI in finance". Спрашиваете модель. Получаете ответ. **Black box.** Ни источника для ячейки. Ни способа проверить.

> **EN:** On the **right** — the **Apex pipeline**. The same task is decomposed into about **two hundred small atomic rows**. Each row has a value, a source, and a validator. You can see one example on the slide.
>
> **RU:** **Справа** — **Apex pipeline**. Та же задача разложена на примерно **двести маленьких атомарных строк**. У каждой строки — значение, источник и validator. Один пример вы видите на слайде.

> **EN:** Every cell. Every time. If the validator fails, the cell is blocked, retried, or escalated to a human.
>
> **RU:** Каждая ячейка. Каждый раз. Если validator не проходит — ячейка блокируется, повторяется, или эскалируется к человеку.

> **EN:** This is how we solve the **three failure modes** from earlier.
>
> **RU:** Так мы решаем **три типа сбоя** с прошлых слайдов.

> **EN:** **Confabulation** — solved by the **source anchor validator**. The cell must trace back to a real document.
>
> **RU:** **Confabulation** — решается **source anchor validator**. Ячейка должна вести обратно к реальному документу.

> **EN:** **Corner cutting** — solved by the **completeness gate**. The pipeline cannot complete unless every required cell has been read.
>
> **RU:** **Corner cutting** — решается **completeness gate**. Pipeline не может завершиться пока каждая нужная ячейка не прочитана.

> **EN:** **No normalization** — solved by the **normalization validator**. One-time items must be flagged.
>
> **RU:** **No normalization** — решается **normalization validator**. Разовые статьи должны быть помечены.

> **EN:** Three failures. **Three gates.**
>
> **RU:** Три сбоя. **Три gate'а.**

*[Click → slide 13]*

### Stage directions
- "**On the left… On the right**" — gesture to each side of the slide
- "value, a source, and a validator" — three short beats; let slide JSON carry the example
- "Confabulation… Corner cutting… No normalization" — three beats, callbacks to slides 03/04/05
- "**Three failures. Three gates.**" — final beat, hard close → click

### Vocabulary to memorize
| English | Russian |
|---|---|
| **decompose** | разложить на части |
| **atomic row** | атомарная строка (минимальная единица) |
| **validator** | валидатор (проверяющая функция) |
| **gate** | ворота (точка проверки в pipeline) |
| **escalate** | эскалировать (передать выше) |
| **anchor** | привязать к источнику |

### Key CPO framing
- This is your home territory — speak with engineer confidence
- The slide shows JSON; let the visual carry; you narrate the meaning
- This is the answer to slides 03-05 critique — "here is HOW we solve it"

---

## Slide 13 — How Apex gets smarter (BARREL + Apex demo)

*[~40-50 seconds. Self-improvement layer. Apex demo plays in video panel.]*

> **EN:** Apex catches errors. But what makes Apex **get smarter**?
>
> **RU:** Apex ловит ошибки. Но что заставляет Apex **становиться умнее**?

> **EN:** Every agent. Every gate. Every check — writes to a log. Reflection. Errors. Insights.
>
> **RU:** Каждый agent. Каждый gate. Каждая проверка — пишет в log. Reflection. Errors. Insights.

> **EN:** Then **BARREL** — Apex's learning engine — reads the log. Weekly. It looks for patterns.
>
> **RU:** Затем **BARREL** — learning engine от Apex — читает log. Еженедельно. Ищет паттерны.

> **EN:** When the same error appears **three or more times**, BARREL writes a new gate. The mistake becomes — technically — **impossible**.
>
> **RU:** Когда та же ошибка появляется **три или больше раз**, BARREL пишет новый gate. Ошибка становится — технически — **невозможной**.

> **EN:** This is how Apex gets smarter without us. Every error becomes a **wall the system cannot cross again**.
>
> **RU:** Так Apex становится умнее без нас. Каждая ошибка становится **стеной, которую система больше не может пересечь**.

> **EN:** Watch the demo on the screen. This is the system in action.
>
> **RU:** Посмотрите демо на экране. Это система в действии.

*[Click → slide 14]*

### Stage directions
- "what makes Apex **get smarter**?" — rhetorical pause
- Listing "agent / gate / check" — three beats
- "**three or more times**" — slow on number
- "wall the system cannot cross again" — quiet, then gesture to demo on screen
- Final line — gesture to video, let it speak

### Vocabulary to memorize
| English | Russian |
|---|---|
| **log** | журнал (записи событий) |
| **learning engine** | обучающий движок |
| **pattern** | паттерн (повторяющийся шаблон) |
| **wall** | стена (метафора для ограничения) |

### ⚠ Note for Assyl
- Speech assumes the Apex demo video is playing in the panel. The current placeholder badge "APEX DEMO · PENDING" is visible until the video file is dropped in. When recording, aim for ~60 seconds, looping, no audio.

---

## Slide 14 — SWF Manager Oversight (Setup)

*[~30-40 seconds. Simple English (B1) + CPO frame. Set up the case from the paper.]*

> **EN:** Now let me show you what L3 looks like in real practice. This case is from our September paper — the same paper Andrew Ang and our team wrote.
>
> **RU:** Теперь позвольте показать вам, как L3 выглядит на практике. Этот case взят из нашего сентябрьского paper'а — того же, который написали Andrew Ang и наша команда.

> **EN:** A sovereign wealth fund manages money through **75 external managers**. Different strategies. Different asset classes. Different geographies.
>
> **RU:** Sovereign wealth fund управляет деньгами через **75 внешних менеджеров**. Разные стратегии. Разные классы активов. Разные географии.

> **EN:** Their old way: **quarterly reviews**. Manual data. Late warnings. By the time a risk appeared in the report, the exposure had already moved.
>
> **RU:** Их старый процесс: **квартальные ревью**. Ручные данные. Поздние предупреждения. К моменту когда риск появлялся в отчёте, exposure уже двигалось.

> **EN:** They built an **L3 monitoring system**. Daily data from all 75 managers. Performance, holdings, risk metrics — all in one dashboard. Anomaly detection looking for unusual patterns.
>
> **RU:** Они построили **L3 monitoring system**. Ежедневные данные от всех 75 менеджеров. Performance, holdings, risk metrics — всё в одном dashboard. Anomaly detection ищет необычные паттерны.

> **EN:** Then one Tuesday, the dashboard found a problem with one of the 75 managers.
>
> **RU:** И вот, однажды во вторник, dashboard нашёл проблему с одним из 75 менеджеров.

*[Click → slide 15]*

### Vocabulary to memorize
| English | Russian |
|---|---|
| sovereign wealth fund (SWF) | государственный инвестиционный фонд |
| external manager | внешний управляющий |
| quarterly review | квартальная проверка |
| monitoring system | система мониторинга |
| anomaly detection | поиск аномалий |
| dashboard | панель управления |

### Source confirmation
- 75 external managers + L3 monitoring case = SSRN 5468687, Section 4.3 "Sovereign Wealth Fund and Manager Oversight"
- Authors: Nazym Azimbayev, Andrey Kim, Zhassulan Ospanov, Andrew Ang (Sep 2025)
- The fund is anonymous in the paper — reference safely as "case study from our paper"
- Do NOT claim this as Altbridge's actual client engagement

---

## Slide 15 — The Result · 47 Days

*[~30-40 seconds. Hero number 47, then implications.]*

> **EN:** The system flagged a **litigation threat** — affecting one of the 75 external managers.
>
> **RU:** Система задетектила **litigation threat** — влияющую на одного из 75 внешних менеджеров.

> **EN:** It found the signal in a small district court filing — **47 days** before the official disclosure.
>
> **RU:** Сигнал был найден в маленьком документе окружного суда — **за 47 дней** до официального раскрытия.

> **EN:** This is how L3 monitoring works. The system reads court filings, news, and regulatory data — across many sources, every day, in many languages. A human team cannot do this for 75 managers at once. The system can.
>
> **RU:** Вот как работает L3 monitoring. Система читает судебные документы, новости, регуляторные данные — из множества источников, каждый день, на многих языках. Человеческая команда не может делать это для 75 менеджеров одновременно. Система — может.

> **EN:** What happened next: the fund **reduced exposure**. They **avoided losses**. Other investors learned about the risk through normal disclosure channels — weeks later.
>
> **RU:** Что произошло дальше: фонд **сократил exposure**. Они **избежали убытков**. Другие инвесторы узнали о риске через обычные disclosure каналы — недели спустя.

> **EN:** Other cases will be different. The early-warning window depends on the signal source. But this is what L3 monitoring made possible — **weeks** of additional reaction time, instead of being last to know.
>
> **RU:** Другие случаи будут разные. Окно раннего предупреждения зависит от источника сигнала. Но вот что L3 monitoring сделало возможным — **недели** дополнительного времени на реакцию, вместо того чтобы узнать последним.

> **EN:** The AI does not replace the investment committee. It gives them **time**.
>
> **RU:** AI не заменяет investment committee. Он даёт им **время**.

*[Click → slide 16]*

### Stage directions (non-obvious only)
- "**47 days**" — slow, hero number, pause
- "Other cases will be different" — caveat tone, honesty signal
- "It gives them **time**" — final beat, quiet → click

### Vocabulary to memorize
| English | Russian |
|---|---|
| litigation threat | угроза судебного иска |
| flag (a threat) | задетектить |
| disclosure | раскрытие (информации) |
| reduce exposure | сократить позицию (риск) |
| react | отреагировать |

### Source confirmation
- 47 days early warning = direct quote from SSRN 5468687, page 11
- Frame: "AI gives the committee 47 extra days to react" (augmentation, not replacement)

---

## Slide 16 — Three Sentences (Close)

*[~45-60 seconds. Three numbered take-away sentences. Slow, deliberate.]*

> **EN:** I want to leave you with three sentences.
>
> **RU:** Я хочу оставить вас с тремя предложениями.

> **EN:** **One.** AI in investing today is mostly L1 and L2. There is a real path to L3 and L4 — and we have been walking it on live capital since Q1 2025.
>
> **RU:** **Первое.** AI в инвестициях сегодня — в основном L1 и L2. Есть реальный путь к L3 и L4 — и мы по нему идём на реальном капитале с Q1 2025.

> **EN:** **Two.** This journey produced three things — **a year of real returns on live capital**, a **framework co-written with Andrew Ang**, and an **architecture our team rolled into production**.
>
> **RU:** **Второе.** Этот путь дал три вещи — **год реальной доходности на реальном капитале**, **framework, написанный совместно с Andrew Ang**, и **архитектуру, которую наша команда запустила в production**.

> **EN:** **Three.** The framework is **published**. The track record is **real**. The architecture is **ready**. Now we scale.
>
> **RU:** **Третье.** Framework — **опубликован**. Track record — **реален**. Архитектура — **готова**. Теперь мы масштабируем.

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

> **EN:** Thank you.
>
> **RU:** Спасибо.

> **EN:** The journey from **Assisted** — through **Agentic** — toward **Autonomous**.
>
> **RU:** Путь от **Assisted** — через **Agentic** — к **Autonomous**.

> **EN:** Built with **Andrew Ang**. For **institutional capital** that demands more than *"trust the box."*
>
> **RU:** Построено с **Andrew Ang**. Для **institutional capital**, который требует больше, чем *«trust the box»*.

> **EN:** I'm **Assyl Akhmet**. Find me after the talk if you want to see what **L4** looks like in your portfolio.
>
> **RU:** Я **Асыл Ахмет**. Найдите меня после talk'а, если хотите увидеть как **L4** выглядит в вашем портфеле.

*[End — applause]*

### Stage directions
- "Thank you" — slow, full pause; let the audience react
- Reading the arc "Assisted → Agentic → Autonomous" — three beats
- "**Andrew Ang**" — clear, with credit
- "L4 in your portfolio" — final invitation, eye contact swept across audience

### Vocabulary to memorize
| English | Russian |
|---|---|
| **Assisted / Agentic / Autonomous** | три уровня (L3 / L4 / L5) системы |
| **trust the box** | "доверяй коробке" — идиома про black-box AI |
| **find me after** | "найдите меня после" — приглашение к разговору |

---

# Appendix · Merge plan for migration to index.html

This file uses NEW numbering (1–17) which assumes two structural merges have happened. The merges have NOT yet been physically applied to the v5 mockup files — they are previewed in `merged_03_04_v6.html` and `merged_07_08_v6.html`. Physical merging will happen during migration to `index.html`.

### Merge A: old slides 03 + 04 → new slide 03

**Reason:** Old slide 03 ("Try this yourself" prompt) and old slide 04 ("Confident confabulation" — 5 LLM runs) were two beats of one reveal. Merging fixes the count bug (subtitle "five times" vs 4 LLM cards) and removes preamble.

**Combined content:**
- Kicker: "Try This Yourself · Failure Mode 1 of 3"
- Title: "Confident confabulation."
- Layout: prompt bubble (compact) + 5-card grid (4 LLM runs + Actual 10-Q) + verdict
- Speech: see "Slide 03" section above

### Merge B: old slides 07 + 08 → new slide 06

**Reason:** Both old slides 07 and 08 introduced the L0-L5 framework. Slide 07 was the intro/title with ladder, slide 08 showed cohort positioning. Merging gives "here's the framework + here's where industry sits + here's where we sit" in one shot.

**Combined content:**
- Kicker: "A Taxonomy of Autonomous Investing · Industry Position 2026"
- Title: "The L0-L5 Framework — and where we sit."
- Layout: 6-step ladder with cohort labels above; L0-L2 dimmed, L3 marked "today's credible", L4 highlighted glass with "Altbridge today", L5 dimmed
- Speech: see "Slide 06" section above

### Renumbering (old → new)

| Old | New | Notes |
|---|---|---|
| 01, 02 | 01, 02 | unchanged |
| 03 + 04 | **03** | merged |
| 05, 06 | 04, 05 | shifted |
| 07 + 08 | **06** | merged |
| 09–13 | 07–11 | shifted |
| 14, 15 | 12, 13 | shifted; old slide 15's video panel becomes the Apex demo (now new slide 13) |
| 16, 17 | 14, 15 | shifted |
| 18, 19 | 16, 17 | shifted |

**Total: 17 slides.**

### Migration checklist (when ready)

1. Delete `slide03_v5.html`, `slide04_v5.html`, `slide07_v5.html`, `slide08_v5.html`
2. Move `merged_03_04_v6.html` → `slide03_v5.html` (or fold into final index.html)
3. Move `merged_07_08_v6.html` → `slide06_v5.html`
4. Renumber `slide05_v5.html` → `slide04_v5.html`, `slide06_v5.html` → `slide05_v5.html`, etc.
5. Update `qa/snap.py` `SLIDE_COUNT` from 19 to 17
6. Update `folio-total` in each section from "/19" to "/17"
7. Build `index.html` with 17 `<section>` blocks; insert each speech's EN-only content into matching `<aside class="notes">`
