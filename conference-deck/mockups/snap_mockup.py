"""Screenshot a standalone mockup HTML file.

Usage:
    python mockups/snap_mockup.py slide10_v2.html
"""
from __future__ import annotations
import subprocess
import sys
import time
from pathlib import Path
from playwright.sync_api import sync_playwright


def main() -> int:
    if len(sys.argv) < 2:
        print("usage: python snap_mockup.py <mockup.html>", file=sys.stderr)
        return 1

    mockup_name = sys.argv[1]
    here = Path(__file__).resolve().parent
    repo = here.parent  # conference-deck/
    mockup_path = here / mockup_name
    if not mockup_path.exists():
        print(f"not found: {mockup_path}", file=sys.stderr)
        return 1

    out_png = mockup_path.with_suffix(".png")

    # launch local server from conference-deck/
    port = 8766
    server = subprocess.Popen(
        ["python3", "-m", "http.server", str(port), "--bind", "127.0.0.1"],
        cwd=str(repo),
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    try:
        time.sleep(0.8)
        url = f"http://127.0.0.1:{port}/mockups/{mockup_name}"
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            context = browser.new_context(viewport={"width": 1920, "height": 1080})
            page = context.new_page()
            page.goto(url)
            page.wait_for_load_state("networkidle")
            page.wait_for_timeout(2200)  # let fonts load + animations settle
            page.screenshot(path=str(out_png), full_page=False)
            browser.close()
        print(f"wrote {out_png}")
    finally:
        server.terminate()
        server.wait(timeout=3)
    return 0


if __name__ == "__main__":
    sys.exit(main())
