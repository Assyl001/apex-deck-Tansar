# ИИ в инвестиционной деятельности — наше двухлетнее путешествие от L1 к L4
## Спич v5 (русская версия для параллельной репетиции) — Tansar Capital Investors Annual Meeting 2026

**Спикер:** Ассыл, Chief Product Officer, Altbridge
**Слот:** **6 мая, 11:15–11:45 (30 минут)** + Q&A
**Официальная тема:** "Применение Искусственного Интеллекта в Инвестиционной Деятельности"
**Аудитория:** LP, институциональные allocators, BlackRock (Tony Ashraf), Hamilton Lane, Balyasny, B Capital, регуляторы (Нацбанк РК, KASE, AIFC), суверенные / пенсионные фонды
**Визуал:** Table 1 из L0-L5 paper (Секция 2) + v6 архитектура (Секция 4) + timeline (Секция 3)
**Тон:** уверенный, технически строгий. Thought leadership с academic credibility.

**ВАЖНО:** это **русская версия для понимания смысла**. Реально выступать на английском по [speech-en-v5.md](speech-en-v5.md).

---

## ⚠️ Placeholders

- `[FILL: TGM_RETURN]` — доходность TGM 2025
- `[FILL: TGM_RETURN_2024]` — TGM 2024 partial (May-Dec)
- `[FILL: DELTA_PP]` — превышение над S&P
- `[FILL: SHARPE]` — TGM Sharpe
- `[FILL: MAX_DD]` — max drawdown
- `[FILL: RECOVERY]` — недели recovery
- `[FILL: ASK_DETAIL]` — точная формулировка ask'а
- `[VERIFY: ROLLOUT_TIMELINE]` — когда v6 катится в TGM production (Q3 2026?)

---

## СЕКЦИЯ 1 — ОТКРЫТИЕ С AN-ОМ (2 мин)

[Медленно идёте в центр сцены. Пауза 3 секунды. Посмотрите на зал.]

Доброе утро.

[PAUSE]

Шесть месяцев назад мой соавтор написал вопрос в LinkedIn, с которого я хочу начать.

[STRONG, медленнее] *"Как принятие AI в инвестициях — похоже на беспилотные автомобили?"*

[PAUSE]

Этот соавтор — **Andrew Ang.** Бывший Head of Systematic Investing в BlackRock. Adjunct профессор Columbia.

[NAME-DROP — лёгкий кивок в сторону Tony Ashraf если он в зале]

Он провёл тридцать лет, строя factor модели которые используют крупнейшие asset managers в мире сегодня.

[PAUSE]

Последний год он работал с нашей командой в Altbridge над двумя вопросами.

**Первый** — что реально значит для AI работать внутри институционального инвестиционного процесса?

**Второй** — как строить системы которым институциональные инвесторы и регуляторы могут доверять?

[PAUSE]

Это сотрудничество произвело две статьи. Одна опубликована в сентябре. Одна — в апреле этого года.

В следующие тридцать минут я хочу провести вас через то, что мы узнали.

Не как product pitch. Как путешествие — от того где мы стартовали два года назад, к тому где мы сегодня, к тому куда движется вся индустрия.

[PAUSE]

Начну с фреймворка.

---

## СЕКЦИЯ 2 — L0-L5 ФРЕЙМВОРК (4 мин)

[SCROLL: Table 1 из L0-L5 статьи — autonomous driving vs autonomous investing бок о бок]

В нашей сентябрьской статье — *Investing in AI for Investing* — мы адаптировали стандарт из автомобильной индустрии.

Society of Automotive Engineers — SAE — имеет шести-уровневую таксономию для autonomous driving. Многие из вас о ней слышали. Level zero — нет автоматизации. Level five — full self-driving в любых условиях.

[PAUSE]

Мы адаптировали точно эту таксономию для AI в инвестиционном управлении.

[POINT TO Table 1 на экране]

[STRONG] **Level zero — нет автоматизации.** Весь анализ вручную. AI инструменты могут существовать но они только поддерживают, не заменяют.

[STRONG] **Level one — investor assistance.** AI помогает с одиночными задачами. Сбор данных. News alerts. Earnings date reminders. Human-in-the-loop. Большинство "AI" что видите в индустрии сегодня — на самом деле L1.

[STRONG] **Level two — partial automation.** Множественные интегрированные задачи. Sentiment analysis объединённый с valuation calculation. AI предоставляет synthesis. Люди формулируют thesis и решают.

[STRONG] **Level three — conditional automation.** AI выполняет существенные части investment process — в пределах defined operational domain. AI предлагает buy и sell actions. Люди review и approve. **Это там где институциональная индустрия может credibly быть сегодня.**

[STRONG] **Level four — high automation.** AI выполняет всю investment task автономно, в пределах defined domain. Люди устанавливают high-level goals и risk parameters. Не участвуют в tactical решениях.

[STRONG] **Level five — full autonomy.** Через все market conditions. Human involvement минимален. **На текущий момент теоретический. Поднимает значительные systemic risk и AI alignment вопросы.**

[PAUSE]

Три вещи важны про этот фреймворк.

[STRONG] **Первое** — он даёт индустрии shared language. Так же как SAE стандарт позволил Tesla, Waymo и General Motors обсуждать свои системы на общих терминах — этот фреймворк позволяет investment firms, regulators и LPs делать то же самое.

[STRONG] **Второе** — на каждом уровне есть чётко определённый operational design domain. Asset classes, market conditions, risk parameters. **За пределами domain — человек берёт управление.** Это safety mechanism.

[STRONG] **Третье** — большинство индустрии сегодня на Level zero, one, или two. **Почти никто credibly не на Level three.** Level four — следующее десятилетие.

[PAUSE]

Позвольте рассказать наш собственный путь через эти уровни.

---

## СЕКЦИЯ 3 — НАШЕ ДВУХЛЕТНЕЕ ПУТЕШЕСТВИЕ (8 мин)

[SCROLL: Timeline визуал — Phase 1 / Phase 2 / Phase 3 / Today]

Два года назад, в мае две тысячи двадцать четвёртого, мы запустили первую production систему.

### Phase 1 — Май 2024: Tansar Global Market goes live

[POINT TO timeline — Phase 1]

Многие из вас в этом зале знают **Tansar Global Market**. [GESTURE — лёгкий кивок в сторону команды Tansar]

Продукт Tansar. Публичные акции. Global mandate.

[STRONG] **Altbridge является research partner с запуска — май две тысячи двадцать четвёртого. Два года.**

[PAUSE]

Наша first-generation система была — в языке нашей статьи — **Level two-three** система. Conviction scoring. DCF modeling. Sector-routed frameworks. Human portfolio managers review каждую рекомендацию и принимают final decisions.

[PAUSE]

Результат за двадцать-двадцать пятый — полный год:

[STRONG] **Tansar Global Market дал [FILL: TGM_RETURN] процентов.**

S&P пятьсот — total return — плюс двадцать целых четыре.
MSCI World — плюс пятнадцать целых пять.

[STRONG] **Мы превзошли S&P на [FILL: DELTA_PP] процентных пункта. Sharpe ratio [FILL: SHARPE]. Maximum drawdown минус [FILL: MAX_DD] процентов — recovered за [FILL: RECOVERY] недель.**

[PAUSE — дайте цифрам осесть]

Это наш **proof point что foundation работает**. Маленькая команда, в Алматы, используя AI как augmentation — bitting крупные institutional benchmarks последовательно.

Но — в течение месяцев работы с ним — мы наткнулись на вопрос, на который не могли ответить одни.

[PAUSE]

*"Где именно эта система в спектре AI автономии? И куда она должна идти дальше?"*

Этот вопрос привёл нас к Phase Two.

### Phase 2 — Сентябрь 2025: Co-publishing фреймворк с Andrew Ang

[POINT TO timeline — Phase 2]

В сентябре прошлого года наша команда в Altbridge — Назым, Андрей, Жасулан — и Andrew Ang опубликовали L0 to L5 фреймворк который вы только что видели.

[STRONG] Это не был marketing exercise. Это был **intellectual reset.**

Нам нужен был общий язык. Нам нужны были чётко определённые operational design domains. Нам нужен был способ формулировать — для LP, для регуляторов, для нас самих — что наша система делает и не делает.

[PAUSE]

Статья содержит три case studies. Я поделюсь одним детально позже. Но вот ключевой инсайт изменивший как мы думаем о собственной работе:

[STRONG] **На каждом уровне роль человека не устраняется. Она возвышается.**

Цитата из статьи: *"Самое binding constraint в институциональном asset management — это не доступность данных или sophistication модели, а конечная bandwidth human decision-makers."*

[PAUSE]

Что это для нас означало — практически — что нам нужно redesign нашу систему **так чтобы люди могли supervise больше, более эффективно, с более сильным governance.** Не меньше human involvement. **Лучше human involvement.**

Этот redesign стал Phase Three.

### Phase 3 — Апрель 2026: The Self-Driving Portfolio

[POINT TO timeline — Phase 3]

В прошлом месяце наша команда и Andrew Ang опубликовали вторую статью — *The Self-Driving Portfolio.*

Она описывает архитектуру для институционального asset management построенную примерно на **пятидесяти специализированных AI агентах.** Каждый агент имеет defined role. Они производят capital market assumptions. Строят candidate портфели используя двадцать-плюс методов параллельно. Критикуют друг друга. Голосуют. **Мета-агент читает past performance и переписывает собственный код.**

[PAUSE]

Всё это — governed by **Investment Policy Statement.** Тот же документ что constraints human portfolio manager — теперь constrains агентов.

[STRONG] В нашем фреймворке это **Level three-four** система.

[PAUSE]

Статья включает backtest с 1996 по 2026. Тридцать лет.

[STRONG] **Sharpe ratio ноль целых тридцать девять — против sixty-forty portfolio's ноль целых сорок один.**

Почти идентичный risk-adjusted return.

Но вот критическая разница.

[STRONG] **Maximum drawdown минус двадцать пять целых шесть процентов — против sixty-forty минус тридцать четыре целых три.**

Материально лучший downside. Через multiple crises — включая dot-com crash, global financial crisis, COVID.

[PAUSE — дайте осесть]

Это наш **theoretical proof** что next-generation архитектура работает at scale, через regimes, на десятилетиях.

### Today: Мост между foundation и vision

[POINT TO timeline — Today]

Две фазы доказаны. Phase one — с двумя годами live track record на Tansar Global Market. Phase three — с тридцати-летним academic backtest.

[PAUSE]

Что вы сейчас увидите — это **мост.** Архитектура которую мы rolling в production в течение [VERIFY: ROLLOUT_TIMELINE]. Построенная на каждом уроке из Tansar Global Market. Aligned с принципами Self-Driving Portfolio статьи.

[PAUSE]

Мы называем её Apex v6.

[Transition]

Позвольте показать.

---

## СЕКЦИЯ 4 — APEX v6 АРХИТЕКТУРА (8 мин) — **ЦЕНТРАЛЬНЫЙ ЭЛЕМЕНТ**

[SCROLL: полная v6 диаграмма на главном экране]

[PAUSE 5 секунд]

Это Apex Research Pipeline, версия шестая.

[PAUSE]

Перед вами вся система принятия решений. Каждый компонент. Каждый гейт. Каждая обратная связь.

Я проведу через неё в трёх частях. Те же три принципа из нашего published фреймворка.

### Часть 1: Три типа компонентов

[POINT TO LEGEND]

Три типа компонентов. Всего три.

[STRONG] **Агенты** — отмечены буквой A. Языковые модели. Читают 10-K. Интерпретируют earnings transcripts. Строят бизнес-профили. **Агенты хороши в понимании.**

[STRONG] **Engines** — отмечены D — от deterministic. Чистый код. **Никакого LLM. Никаких сокращений. Никакой импровизации.** Тот же вход всегда даёт тот же выход. **Engines хороши в расчётах.**

[STRONG] **Гейты** — ромбы между этапами. Schema validators. **Если артефакт не прошёл — следующий этап не может начаться.** Точка. Не "не должен." *Не может.*

[PAUSE]

В языке нашего фреймворка — это как мы **определяем operational design domain в коде.** Domain не политика. Domain это gate logic. Система буквально не может оперировать вне него.

### Часть 2: Pipeline — пять этапов

[POINT TO PIPELINE]

[STRONG] **Этап один — Data Fetch.** Агент скачивает 10-K, transcripts, XBRL data, Damodaran sector betas. Гейт — *получили ли все?*

[STRONG] **Этап два — Data Extraction.** Агент парсит файлы в структурированные таблицы. Двадцать две универсальные строки. Двенадцать общих. Sector-specific derived rows. Гейт — *валидируется ли схема?*

[STRONG] **Этап три — Business Understanding.** Агент читает таблицы и transcripts. Производит drivers — falsifiable theses с цитатами и target rows. Гейт — *все ли drivers валидируются?*

[STRONG] **Этап четыре — Modeling.** Здесь большинство AI-research разваливается.

[POINT TO Modeling]

[STRONG] **Делаем детерминированным кодом. Не агентом.**

Engine маршрутизирует по GICS сектору. Выбирает правильный фреймворк. **Bank** — equity-only, regulatory capital adjustments, justified P/B terminal. **Energy** — volume × price, exit multiple. **Tech и standard** — FCFF, sector beta из Damodaran.

[PAUSE]

И вот ключевое.

[STRONG] **Модель хранится как JSON. Не как Excel.** Excel — рендер. Source of truth — JSON-дерево где каждая строка имеет formula expression, dependencies и source.

Это значит каждая ячейка аудитируется. Каждая зависимость прослеживается. Каждое значение воспроизводимо.

[STRONG] **Этап пять — Render.** Опционально. Excel, PDF, dashboard.

### Часть 3: Feedback loop — REI

[POINT TO REI Feedback Loop]

Каждый агент и каждый гейт пишут в один лог. Мы называем его REI — Reflection, Errors, Insights.

Раз в неделю — автоматический pattern analysis сканирует лог.

Если одна и та же ошибка три или более раз — система создаёт тикет.

Но fix не training. Fix не memo.

[STRONG] **Fix — это новый гейт.**

Новый валидатор. Тип ошибки который вызвал тикет — становится **технически невозможным** повторить.

[PAUSE — дайте осесть]

Apex становится умнее без нас. Каждая ошибка в истории системы — теперь стена которую система пересечь не может.

[PAUSE]

Это как выглядит L3 архитектура в production.

---

## СЕКЦИЯ 5 — ОДИН CASE STUDY (3 мин)

[SCROLL: опционально case study slide, или остаёмся на диаграмме]

Поделюсь одним примером из нашей сентябрьской статьи. Конкретно — третий case study.

[PAUSE]

Sovereign wealth fund. Управляет отношениями с **семидесятью пятью external investment managers.** Традиционные quarterly review процессы. Недостаточная early warning. Manual data compilation, замедляющая strategic decisions.

Фонд имплементировал **L3 monitoring систему.** Daily ingestion performance data, holdings, risk metrics — через всех семидесяти пяти managers. Real-time view всего портфеля. Anomaly detection. Standardized risk metrics через разные strategies.

[PAUSE]

Вот что произошло.

[STRONG] **Система flagged litigation threat affecting одного external manager — за сорок семь дней до official disclosure.**

[PAUSE — дайте осесть]

Сорок семь дней.

Sovereign fund reduced exposure. Избежал losses которые affected каждого другого investor узнавшего через traditional disclosure channels.

[PAUSE]

Это L3 в действии. Не AI заменяющий investment committee. **AI дающий investment committee сорок семь дней дополнительного reaction time.**

[PAUSE]

Вот как выглядит augmentation на этом уровне. **Не более быстрые решения. Лучше informed decisions, раньше.**

[Transition]

Что это значит для каждого в этом зале?

---

## СЕКЦИЯ 6 — ИМПЛИКАЦИИ ДЛЯ ИНДУСТРИИ (3 мин)

[SCROLL: опционально implications slide]

Три импликации. Кратко.

[STRONG] **Первая — audit-grade AI станет baseline ожиданием.** Не differentiator. В течение пяти лет ни один серьёзный институциональный allocator не примет "модель решила" как ответ. Они потребуют те же стандарты что мы применяем к human аналитикам. Documented methodology. Reproducible decisions. Explainable failures. **Фонды которые строили для transparency сейчас будут впереди. Фонды которые прикрутили AI к opaque процессам — столкнутся с дорогим retrofit.**

[STRONG] **Вторая — регуляторы в этом регионе имеют стратегическую возможность.** Большинство глобальных AI-в-инвестициях фреймворков реактивны — написаны после market events. Казахстан, через AIFC и Нацбанк, имеет шанс быть **proactive.** Определить как выглядит auditable AI в asset management *до* того как будет crisis. Установить региональный стандарт. **Это было бы реальным competitive advantage для нашего финансового центра. Не из-за более мягких правил — из-за более ясных.** Welcome такой разговор.

[STRONG] **Третья — и самое важное — Центральная Азия может строить свою собственную institutional asset management infrastructure.** Десятилетиями самая sophisticated research infrastructure жила в трёх местах. Нью-Йорк. Лондон. Гонконг. AI меняет это. Тот же systematic research который требовал сотню людей в 2015 — теперь работает с десятью. **Мы не строим software для Wall Street. Мы строим institutional asset management infrastructure для нашего региона.** Tansar Global Market — первый proof. Self-Driving Portfolio paper — academic foundation. **Следующая глава — ваша allocate to, partner with, или build on.**

---

## СЕКЦИЯ 7 — ЗАКРЫТИЕ + ASK (2 мин)

[SCROLL: closing slide / контакты]

Три предложения подытожить.

[STRONG, медленнее, eye contact — пауза между каждым]

**Раз.** AI в инвестициях сегодня в основном L1. Большая часть того что называется "AI" — маркетинг или opacity. **Есть credible путь к L3 — и наша команда идёт по нему два года.**

[PAUSE]

**Два.** Путешествие произвело три вещи — live track record на Tansar Global Market, фреймворк co-published с одним из самых senior alumni BlackRock, и архитектура rolling в production. **Этот triple — track record, framework, architecture — необычен. Мы думаем это matters.**

[PAUSE]

**Три.** Следующий шаг — региональный. Построено из Алматы. С этим залом. **И мы хотим строить его вместе.**

[PAUSE — досчитайте до трёх]

Ask.

[PAUSE]

[STRONG] **Первое — capital allocation партнёры.** [FILL: ASK_DETAIL]. Если вы цените прозрачную, reproducible, audit-grade методологию — давайте поговорим вечером.

[STRONG] **Второе — стратегические infrastructure партнёры.** Биржи. Custodians. Регуляторы. Если строите rails для next generation региональной asset management — Apex уже работает. Хотим plug in.

[STRONG] **Третье — таланты.** Research engineers. Quant developers. Люди которые хотят работать на самом ambitious AM technology project в этом регионе.

[PAUSE]

Капитал. Инфраструктура. Таланты.

Я буду у бара сегодня вечером. С удовольствием поговорю с любым из вас.

[PAUSE — досчитайте до трёх]

[STRONG, поднимая взгляд] **От Level two — через Level three — к Level four. Построено из Алматы. С Andrew Ang. Для институционального капитала который требует больше чем 'trust the box'.**

Спасибо.

[GESTURE — лёгкий поклон]

[После аплодисментов — улыбка]

С удовольствием отвечу на вопросы.

---

# 📋 ВСПОМОГАТЕЛЬНЫЕ МАТЕРИАЛЫ

## A. Визуалы

**Visual 1: Table 1 (L0-L5 mapping)** — Секция 2 (4 мин). Скриншот из SSRN статьи высокого разрешения.
**Visual 2: v6 architecture diagram** — Секция 4 (8 мин). PNG экспорт в 3x разрешении из dcf-workflow-v6.excalidraw.
**Visual 3 (опционально): Timeline** — Секция 3. Простая горизонтальная timeline: May 2024 → Sep 2025 → Apr 2026 → Today.

## B. Q&A prep на русском (отвечайте по-английски)

### Вопрос 1 [Hamilton Lane]: "Как это масштабируется на private markets?"

> *"Два ответа. Первое — Apex построен для public equities сейчас. Второе — архитектура переносится. Принцип 'агенты для понимания, engines для расчётов, гейты' sector-agnostic. Начали изучать private market применения. Data layer сложнее; архитектура та же."*

### Вопрос 2 [BlackRock / Tony Ashraf]: "Куда это эволюционирует в 3-5 лет?"

> *"Два направления. Первое — vertical specialization. General-purpose investment AI fragments. Второе — auditability становится regulatory requirement. Self-Driving Portfolio paper outlines L3-to-L4 для SAA. Мы операционализируем похожие принципы на equity research layer."*

### Вопрос 3 [Регулятор / Нацбанк / KASE]: "Ваш взгляд на AI risk для asset management?"

> *"Три категории — наш фреймворк адресует все. Model risk: opacity prevents audit. Concentration risk: похожие модели = correlated failures. Explainability gap: когда AI fails, investor protection ломается. Наш published фреймворк defines operational design domains и required oversight per autonomy level."*

### Вопрос 4 [Tansar / ваш host]: "Останется ли Apex сфокусированным на Tansar Global Market?"

> *"Tansar — наш anchor партнёр и Tansar Global Market — proof point сделавший Apex credible. Будем продолжать инвестировать. Следующие продукты — custom mandates, sovereign wealth advisory, дополнительные vehicles — расширяют platform без конкуренции."*

### Вопрос 5 [Скептик]: "Что если Apex сделает плохой call?"

> *"Risk management встроен. Position size conviction-weighted с жёсткими caps. Cycle pillar ловит over-extended позиции. Max drawdown [FILL: MAX_DD], recovered за [FILL: RECOVERY] недель. Система спроектирована не быть правой каждый раз — но терять меньше когда не права, и знать точно почему."*

### Вопрос 6 [Sovereign fund]: "Можете построить custom mandate?"

> *"Да. Apex methodology общая — engine конфигурируется. Custom conviction thresholds, sector tilts, ESG overlays, geographic constraints. Output — custom strategy с full audit trail. Ищем один-два anchor клиента."*

### Вопрос 7 [B Capital]: "Какой ваш moat? Любой может построить."

> *"Три слоя. Methodology refinement: два года edge cases. Data integration: год plumbing. Distribution и credibility: Tansar + две co-published статьи с Andrew Ang + conference visibility. Software воспроизводим. Доверие — нет."*

### Вопрос 8 [Про Andrew Ang]: "Что означает участие Andrew Ang — adviser, investor, co-author?"

> *"Co-author на двух peer-reviewed working papers. Active intellectual партнёр. Коллаборация о установлении rigorous standards для AI в институциональном investing — не только в Altbridge но по индустрии. Его имя на работе из-за работы, не наоборот."*

### Вопрос 9 [Практический]: "Как мне оценить L1/L2/L3 моего AI менеджера?"

> *"Три вопроса. Можно ли replay решение с точными data inputs? Нет = L0 с маркетингом. Есть defined operational design domain? Нет = L1-L2. Когда система ошибалась, объясняют какой input или компонент вызвал error? Да = L3. Нет = black box."*

### Вопрос 10 [Прямой]: "Как allocate в ваш next vehicle?"

> *"Открываем next strategy для небольшого числа LP. [FILL: ASK_DETAIL]. Data room и one-on-one walk-through на этой неделе. Найдите меня у бара."*

## C. Stage tips

- **Mid-morning слот, День 2** — аудитория attentive но не ещё caffeinated. Открывайте с энергией.
- **День 1 covered tokenization.** Можете briefly reference, но тема у вас шире.
- **Skip basics.** DCF, Sharpe, beta — не объясняйте.
- **Andrew Ang — ваше secret weapon.** Открывайте Section 1 с Ang цитаты. Упоминайте его BlackRock background. **Tony Ashraf его узнает.** Это raises peer credibility instantly.
- **Tansar credit критичен.** Лёгкий кивок в сторону первого ряда когда упоминаете TGM.
- **Замедляйтесь на architecture walkthrough.** 3 секунды на концепт.
- **Q&A — тактика:** hostile question → acknowledge ("Fair point"), redirect к published papers или архитектуре. Никогда не defensive.

## D. ОДНОСТРАНИЧНЫЙ CHEAT SHEET

**Открытие** — "Andrew Ang спросил: 'Как принятие AI в инвестициях похоже на driverless cars?' Сегодня расскажу что мы узнали отвечая на это — за два года."

**Фреймворк (4 мин)** — L0-L5 из нашей Sep статьи с Ang. Покажите Table 1. Большинство на L0-L2. L3 достижимо сейчас. L4 следующее десятилетие.

**Путешествие (8 мин)** —
- **Phase 1 (May 2024):** TGM launched. L2-L3. → [TGM_RETURN]%, beat S&P [DELTA_PP]pp.
- **Phase 2 (Sep 2025):** Co-published L0-L5 с Ang. *Intellectual reset.*
- **Phase 3 (Apr 2026):** Co-published Self-Driving Portfolio. 50 агентов. **Backtest: Sharpe 0.39, drawdown -25.6% vs 60/40 -34.3%.**
- **Today:** v6 architecture, rolling в production.

**v6 Architecture (8 мин)** — Диаграмма. A/D/Gates. 5 stages. Modeling = код. Model = JSON. REI loop.

**SWF case (3 мин)** — 75 managers, L3 monitoring. **47 дней до disclosure.** Augmentation, not replacement.

**Implications (3 мин)** — Audit-grade baseline / Регуляторы лидируют / Центральная Азия.

**Закрытие + ask (2 мин)** — "L1 marketing → L3 production. Track record + framework + architecture. Капитал/инфра/таланты. От L2 → L3 → к L4. Из Алматы. С Andrew Ang."

---

**Общее время:** ~28-30 мин на английском
**Слов:** ~3,800 (английская версия)
**Визуалы:** Table 1 + v6 диаграмма + timeline

---

## Заметка

Pronunciation guide остаётся **в английской версии** ([speech-en-v5.md](speech-en-v5.md)). Эта русская — для понимания смысла перед заучиванием английского.

Рекомендуемый workflow:
1. Прочитайте русскую версию **3 раза вслух**
2. Откройте английскую параллельно (английский вслух, русский глазами)
3. Закройте русский, читайте только английский но слышите русский смысл
4. Это даёт двойную опору: знаете *что* сказать (русский в голове) и *как* (английский на сцене)
