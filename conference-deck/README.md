# Apex Conference Deck — Reveal.js

Интерактивная HTML-презентация для keynote-выступления на Investors Annual Meeting 2026 (6 мая, 11:15-11:45, Swissôtel Almaty).

## Запустить локально

**Вариант 1: Прямое открытие**
```bash
open index.html
```
Откроется в вашем браузере. Работает без сервера.

**Вариант 2: Через Python сервер (если в браузере не грузится CDN)**
```bash
cd conference-deck
python3 -m http.server 8000
```
Потом открыть: http://localhost:8000

## Навигация на сцене

| Клавиша | Действие |
|---------|----------|
| `→` / `Space` | Следующий слайд |
| `←` | Предыдущий слайд |
| `F` | Полноэкранный режим |
| `ESC` | Обзор всех слайдов |
| `S` | Открыть Speaker Notes view (отдельное окно с заметками + таймером) |
| `B` | Затемнить экран (pause the show) |
| `?` | Справка |

## Speaker Notes

У каждого слайда есть детальные speaker notes (что говорить + timing cues). Нажмите **`S`** чтобы открыть Speaker View — появится отдельное окно с:

- Текущим слайдом
- Следующим слайдом
- Speaker notes
- Таймером
- Часами

**Идеально для сцены:** ставите ноутбук на выступлении с Speaker View на приватном экране, а основной экран (projector) показывает только слайды.

## Что нужно заполнить ПЕРЕД выступлением

### Слайд 10 — Phase 1 Results
Цифры заполнены (источник: Altbridge pitch-dek 2026, слайд "Our Traction"):
- +33% gross return (2025)
- Sharpe 2.28
- Max DD −5%
- +12.6 pp vs S&P 500 TR (+20.4%)
- Capital: $490K → $650K

Если подтвердятся обновлённые цифры к маю 2026 — обновить здесь.

### Слайд 14 — Architecture (how Apex solves the three failures)
Упрощённая архитектура (не отдельная v6-диаграмма, а встроенная визуализация). При желании собрать полноразмерную v6-диаграмму из `dcf-workflow-v6.excalidraw`: `npx excalidraw-brute-export-cli` → PNG scale 3x → сохранить как `v6-diagram.png` и вставить в нужную секцию.

## Структура (19 слайдов, ~30 мин)

Актуальная структура HTML (порядок в index.html). Architecture сжата в один слайд "How Apex solves this"; три failure-mode-слайда раскрывают проблему перед framework'ом.

| # | Slide | Section |
|---|-------|---------|
| 1 | Title | Open |
| 2 | Ang hook quote ("driverless cars?") | Section 1 |
| 3 | "You've tried this" — current state of AI | Section 1 |
| 4 | Failure 1 of 3 — Numerical hallucination | Section 1 |
| 5 | Failure 2 of 3 — Corner cutting (data gaps) | Section 1 |
| 6 | Failure 3 of 3 — No normalization / one-time blindness | Section 1 |
| 7 | L0-L5 table (SSRN 5468687) | Section 2 |
| 8 | Where the industry is today (L0-L2 / L3-L4 / L5) | Section 2 |
| 9 | Phase 1 · First live deployment | Section 3 |
| 10 | Phase 1 Results · big numbers (+33%, 2.28 Sharpe, −5% DD, +12.6 pp) | Section 3 |
| 11 | Phase 2 · L0-L5 paper (Sep 2025) | Section 3 |
| 12 | Phase 3 · Self-Driving Portfolio (Apr 2026) | Section 3 |
| 13 | Backtest numbers (1996-2026) | Section 3 |
| 14 | How Apex solves the three failures (simplified architecture) | Section 4 |
| 15 | REI Feedback Loop (Part 3 of 3) | Section 4 |
| 16 | SWF case intro — one real case | Section 5 |
| 17 | SWF result (big-number slide) | Section 5 |
| 18 | Three sentences close | Section 6/7 |
| 19 | Final · Thank you | Close |

**Total:** ~30 мин (без The Ask — формат keynote, не pitch)

## Экспорт в PDF (для отправки Назыму)

В браузере:
1. Откройте http://localhost:8000/?print-pdf (или `index.html?print-pdf`)
2. `Cmd+P` (Mac) / `Ctrl+P` (Win)
3. Destination → Save as PDF
4. Layout → Landscape
5. Margins → None
6. Background graphics → ✓ Enabled
7. Save

Получится PDF с каждым слайдом = одна страница. Можно отправить Назыму по email.

## Brand palette (уже применена)

- Navy deep: `#0a1a4a`
- Navy: `#0f2c6c`
- Blue: `#194bb9`
- Magenta: `#ee3a65`
- Purple: `#a7237b`
- White: `#ffffff`
- Off-white: `#fafbfc`

## Шрифты

- **Inter** — заголовки + основной текст
- **JetBrains Mono** — метаданные, pill-метки, числа

Оба загружены через Google Fonts CDN — работают везде где есть интернет.

## Если нет интернета на конференции

CDN ссылки работают только с интернетом. Если нужна **offline версия**:

1. Скачать reveal.js: `npm install reveal.js` или с github.com/hakimel/reveal.js
2. Заменить CDN ссылки на локальные пути
3. Скачать Google Fonts локально (через google-webfonts-helper)

Это 20-минутная работа. Могу помочь если будет нужно.

## Источники контента

Презентация собрана на основе:
- [speech-en-v5.md](../speech-en-v5.md) — полный спич (английский)
- [speech-ru-v5.md](../speech-ru-v5.md) — для понимания смысла (русский)
- [../../dcf-workflow-v6.excalidraw](../../dcf-workflow-v6.excalidraw) — v6 architecture diagram
- [SSRN paper — Investing in AI for Investing](../../ssrn-5468687%20(1).pdf) — L0-L5 framework
- arxiv 2604.02279 — Self-Driving Portfolio (backtest numbers)
