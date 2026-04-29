# Visual QA

Screenshot every slide, diff against a frozen baseline, catch regressions before 6 мая.

## Freeze a baseline

После того как дизайн согласован — зафиксируй эталон:

```bash
python qa/with_server_snap.py --baseline
```

Картинки лягут в `qa/baseline/slide_01.png … slide_19.png`. Закоммить их (или не закоммить — как удобно, папка локальная).

## Прогнать текущее состояние

```bash
python qa/with_server_snap.py
```

Картинки лягут в `qa/current/`.

## Сравнить

```bash
python qa/diff.py
```

Выведет per-slide отчёт:

```
  slide_01.png      SKIP    0.00% changed       # title exempted (generative bg)
  slide_02.png      OK      0.00% changed
  ...
  slide_10.png      FAIL   3.24% changed
```

Exit code: `0` если все в пределах 2%, `1` если есть FAIL'ы.

HTML-отчёт с side-by-side:

```bash
python qa/diff.py --html
open qa/diff/report.html
```

## Зависимости

- Playwright (`pip install playwright && playwright install chromium`) — уже стоит через Anthropic `webapp-testing` skill
- Pillow (`pip install pillow`) — для pixel-diff

## Что исключено из diff'а

`slide_01.png` (title) — у него генеративный flow-field фон, каждый запуск слегка другой. Диф там шумит всегда. Если нужен baseline для title — снимай отдельно с фиксированным seed и сравнивай визуально.
