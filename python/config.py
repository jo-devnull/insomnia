import os
import sys

from glob import glob
from pathlib import Path

ROOT = Path(__file__).parent.parent
INST = Path(sys.argv[1]).resolve()
CONFIG = INST / "config"
CONFIG.mkdir(exist_ok=True)

sources = [
    "resourcepacks/@emi/*",
    "datapacks/@packdata/*",
    "datapacks/@category/*",
    #"config/starterkit/*",

    "config/almostunified/",
    "config/incontrol/",
    "config/rootoffear/",
    # "config/thirst/",
    # "journeymap/",

    "config/emi.css",
    "config/mca.json",
    "config/embeddium-options.json",
    "config/chloride-client.json",
    "config/resourcepackoverrides.json",
    "config/parcool-client.toml",

    "emi.json",
    "options.txt",
]

def link_file(path: Path, target: Path):
    if target.exists():
        return

    print(f"linking file: {target}")
    target.parent.mkdir(parents=True, exist_ok=True)
    target.symlink_to(ROOT / path)

def link_dir(path: Path, target: Path):
    if target.exists():
        return

    print(f"linking dir: {target}")
    target.symlink_to(ROOT / path, target_is_directory=True)

for path in sources:
    if path.endswith("/"):
        for file in glob("**/*.*", root_dir=ROOT / path, recursive=True):
            entry = Path(path) / file
            link_file(ROOT / entry, INST / entry)
    elif path.endswith("/*"):
        link_dir(Path(path[:-2]), INST / path[:-2])
    else:
        link_file(Path(path), INST / path)
