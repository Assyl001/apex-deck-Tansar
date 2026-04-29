"""Capture screenshots of every slide in the deck.

Usage:
    python qa/snap.py                      # write to qa/current/
    python qa/snap.py --baseline           # write to qa/baseline/ (freeze current look)
    python qa/snap.py --out /tmp/foo       # custom output dir

Always run from conference-deck/ with a local server already up on :8765, e.g.:
    python3 -m http.server 8765 &
    python qa/snap.py

Or via the bundled with_server wrapper (recommended):
    python qa/with_server_snap.py
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

SLIDE_COUNT = 19
VIEWPORT = {"width": 1920, "height": 1080}
URL_TEMPLATE = "http://localhost:8765/index.html#/{i}"
SETTLE_MS = 900  # time for stagger animation + title flow field to reach a stable frame


def capture(out_dir: Path) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport=VIEWPORT)
        page = context.new_page()
        page.goto(URL_TEMPLATE.format(i=0))
        page.wait_for_load_state("networkidle")
        page.wait_for_timeout(1500)

        for i in range(SLIDE_COUNT):
            page.goto(URL_TEMPLATE.format(i=i))
            page.wait_for_load_state("networkidle")
            page.wait_for_timeout(SETTLE_MS)
            out = out_dir / f"slide_{i + 1:02d}.png"
            page.screenshot(path=str(out), full_page=False)
            print(f"  {out.name}")

        browser.close()


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--baseline", action="store_true",
                        help="write to qa/baseline/ (use after an approved design change)")
    parser.add_argument("--out", type=Path, default=None, help="custom output directory")
    args = parser.parse_args()

    repo = Path(__file__).resolve().parent.parent
    if args.out is not None:
        out_dir = args.out
    elif args.baseline:
        out_dir = repo / "qa" / "baseline"
    else:
        out_dir = repo / "qa" / "current"

    print(f"snapping {SLIDE_COUNT} slides -> {out_dir}")
    capture(out_dir)
    print("done.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
