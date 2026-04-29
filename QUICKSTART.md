# Apex Conference Deck — Quickstart

## Содержимое архива

```
conference-deck/              ← ОСНОВНОЙ deck (открывать index.html)
├── index.html                Reveal.js презентация, 20 слайдов
├── README.md                 Инструкции (навигация, placeholders, структура)
└── v6-diagram.png            Архитектурная диаграмма v6 (встроена в Slide 10)

dcf-workflow-v6.excalidraw    Исходник диаграммы. Открой на excalidraw.com → File → Open
speech-en-v5.md               Полный спич на английском (для понимания нарратива)
speech-ru-v5.md               Русская версия спича
```

## Запустить локально (2 варианта)

**Быстро — прямо в браузере:**
Двойной клик по `conference-deck/index.html`. Откроется, но некоторые браузеры (Chrome) могут ругаться на CORS при загрузке CDN — если видишь битые шрифты или сломанный layout, используй вариант с сервером.

**Надёжно — через локальный сервер:**
```bash
cd conference-deck
python3 -m http.server 8000
```
Открыть http://localhost:8000

## В VSCode

Открыть корень архива:
```bash
code .
```

Рекомендуемые расширения:
- **Live Server** (ritwickdey.liveserver) — правый клик по `index.html` → "Open with Live Server". Авто-рефреш при сохранении.
- **HTML CSS Support** (ecmel.vscode-html-css) — автокомплит классов.

## Что ещё предстоит сделать перед выступлением

Всё перечислено в `conference-deck/README.md`:

1. **Slide 6 (Phase 1 Results)** — цифры заполнены по Altbridge pitch-dek (33% / 2.28 / −5% / +12.6 pp / $490K→$650K). Если цифры обновятся к маю 2026 — синхронизировать.
2. **Slide 10 (v6 diagram)** — диаграмма уже встроена, но если хочешь экспортировать новую версию из excalidraw в более высоком разрешении:
   ```bash
   npx -y excalidraw-brute-export-cli -i dcf-workflow-v6.excalidraw -s 4 -f png -o conference-deck/v6-diagram.png
   ```
   (требует `npx playwright install firefox` один раз)

## Клавиши на сцене

| Клавиша | Действие |
|---------|----------|
| `→` / Space | следующий слайд |
| `←` | предыдущий |
| `F` | fullscreen |
| `ESC` | grid overview |
| `S` | Speaker Notes view (отдельное окно с notes + таймером) |
| `B` | затемнить экран |

## Экспорт в PDF (отправить Назыму)

1. Запустить сервер: `python3 -m http.server 8000`
2. Открыть http://localhost:8000/?print-pdf
3. `Cmd+P` → Save as PDF → Layout: Landscape, Margins: None, Background graphics: ✓
