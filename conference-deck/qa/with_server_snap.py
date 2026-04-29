"""Run a local HTTP server and capture screenshots in one shot.

Wraps qa/snap.py so you don't have to manage the server yourself.
Forwards args: --baseline, --out ...
"""
from __future__ import annotations

import subprocess
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
WITH_SERVER = Path.home() / ".claude" / "plugins" / "marketplaces" / \
    "anthropic-agent-skills" / "skills" / "webapp-testing" / "scripts" / "with_server.py"


def main() -> int:
    if not WITH_SERVER.exists():
        print(f"webapp-testing helper not found at {WITH_SERVER}")
        print("install via: claude plugin install example-skills@anthropic-agent-skills")
        return 2

    cmd = [
        sys.executable, str(WITH_SERVER),
        "--server", f"python3 -m http.server 8765 --directory {REPO}",
        "--port", "8765",
        "--", sys.executable, str(REPO / "qa" / "snap.py"),
    ] + sys.argv[1:]
    return subprocess.call(cmd)


if __name__ == "__main__":
    sys.exit(main())
