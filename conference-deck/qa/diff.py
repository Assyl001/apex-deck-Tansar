"""Pixel-diff every current screenshot against baseline.

Usage:
    python qa/diff.py            # compare qa/current/ vs qa/baseline/, print report
    python qa/diff.py --html     # also write qa/diff/report.html with side-by-side views

Flags any slide whose diff ratio exceeds THRESHOLD (default 0.02 = 2% pixels changed).
Title slide (slide_01) is exempted automatically because its flow-field background
is non-deterministic in settled state.
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

from PIL import Image, ImageChops

THRESHOLD = 0.02  # fail if > 2% of pixels changed
EXEMPT_SLIDES = {"slide_01.png"}  # title has generative background


def diff_ratio(a_path: Path, b_path: Path) -> tuple[float, Image.Image]:
    a = Image.open(a_path).convert("RGB")
    b = Image.open(b_path).convert("RGB")
    if a.size != b.size:
        # resize b to a — shouldn't happen in practice, but be safe
        b = b.resize(a.size)
    d = ImageChops.difference(a, b)
    bbox = d.getbbox()
    if bbox is None:
        return 0.0, d
    bands = d.split()
    # per-pixel "changed" if any channel differs by more than 6 (ignore AA noise)
    changed_px = 0
    for band in bands:
        data = band.getdata()
        changed_px += sum(1 for v in data if v > 6)
    total = a.width * a.height * 3
    return changed_px / total, d


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--html", action="store_true", help="write HTML side-by-side report")
    ap.add_argument("--threshold", type=float, default=THRESHOLD)
    args = ap.parse_args()

    repo = Path(__file__).resolve().parent.parent
    baseline = repo / "qa" / "baseline"
    current = repo / "qa" / "current"
    diff_out = repo / "qa" / "diff"

    if not baseline.exists() or not any(baseline.iterdir()):
        print("no baseline found. freeze a baseline first:")
        print("  python qa/with_server_snap.py --baseline")
        return 2
    if not current.exists() or not any(current.iterdir()):
        print("no current snapshots. run:")
        print("  python qa/with_server_snap.py")
        return 2

    diff_out.mkdir(exist_ok=True)
    failures: list[tuple[str, float]] = []
    rows: list[tuple[str, float, str]] = []

    for baseline_file in sorted(baseline.glob("slide_*.png")):
        name = baseline_file.name
        current_file = current / name
        if not current_file.exists():
            print(f"  {name:16s}  MISSING in current/")
            failures.append((name, 1.0))
            continue

        ratio, d_img = diff_ratio(baseline_file, current_file)
        status = "OK   "
        if name in EXEMPT_SLIDES:
            status = "SKIP "
        elif ratio > args.threshold:
            status = "FAIL "
            failures.append((name, ratio))

        print(f"  {name:16s}  {status}  {ratio * 100:5.2f}% changed")
        rows.append((name, ratio, status))

        if args.html:
            d_img.save(diff_out / f"diff_{name}")

    if args.html:
        html_path = diff_out / "report.html"
        with open(html_path, "w") as f:
            f.write("<html><head><title>Apex deck — visual diff</title>")
            f.write("<style>body{font:14px/1.4 system-ui;padding:24px;background:#fafbfc}"
                    "h2{font-size:1.1em;margin-top:40px}"
                    ".row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:12px 0}"
                    ".row img{width:100%;border:1px solid #e2e8f0}"
                    ".fail{color:#ee3a65;font-weight:700}"
                    ".skip{color:#718096}"
                    "</style></head><body>")
            f.write(f"<h1>Apex deck — visual diff</h1><p>threshold: {args.threshold * 100:.0f}%</p>")
            for name, ratio, status in rows:
                cls = "fail" if status.strip() == "FAIL" else "skip" if status.strip() == "SKIP" else ""
                f.write(f'<h2 class="{cls}">{name} — {status.strip()} — {ratio * 100:.2f}%</h2>')
                f.write('<div class="row">')
                f.write(f'<div>baseline<br><img src="../baseline/{name}"></div>')
                f.write(f'<div>current<br><img src="../current/{name}"></div>')
                f.write(f'<div>diff<br><img src="diff_{name}"></div>')
                f.write("</div>")
            f.write("</body></html>")
        print(f"\nreport: {html_path}")

    print()
    if failures:
        print(f"{len(failures)} slide(s) failed threshold {args.threshold * 100:.1f}%:")
        for name, ratio in failures:
            print(f"  {name}  {ratio * 100:.2f}%")
        return 1
    print("all slides within threshold.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
