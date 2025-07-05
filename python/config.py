import os
import sys

from glob import glob
from pathlib import Path

ROOT = Path(__file__).parent.parent
INST = Path(sys.argv[1]).resolve()
CONFIG = INST / "config"
CONFIG.mkdir(exist_ok=True)

sources = [
    "datapacks/@packdata/",

    "config/almostunified/**/*.json",
    "config/rootoffear/**/*.toml",
    "config/incontrol/**/*.json",

    "config/emi.css",
    "config/mca.json",
    "config/embeddium-options.json",
    "config/chloride-client.json",
    "config/resourcepackoverrides.json",
    "config/parcool-client.toml",
    "config/xaero*.txt",

    "config/simpleclouds*.toml",
    "config/map_atlases*.toml",

    "emi.json",
    "options.txt",
]

def link_file(path: Path, target: Path):
    if target.exists():
        print(f'File {target} already exists. Removing...')
        target.unlink()

    print(f"linking file: {target}")
    target.parent.mkdir(parents=True, exist_ok=True)
    target.symlink_to(ROOT / path)

def link_dir(path: Path, target: Path):
    if target.exists():
        print(f'Directory {target} already exists. Removing...')
        target.rmdir()

    print(f"linking dir: {target}")
    target.parent.mkdir(parents=True, exist_ok=True)
    target.symlink_to(ROOT / path, target_is_directory=True)

for pattern in sources:
    for path in map(Path, glob(pattern, root_dir=ROOT, recursive=True)):
        if path.is_file():
            link_file(ROOT / path, INST / path)
        elif path.is_dir():
            link_dir(path, INST / path)
