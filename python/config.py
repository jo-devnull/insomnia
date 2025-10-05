import os
import sys
import shutil

from glob import glob
from pathlib import Path

ROOT = Path(os.getcwd()) / "minecraft"
INST = Path(sys.argv[1]).resolve()
CONFIG = INST / "config"
CONFIG.mkdir(exist_ok=True)

sources = [
    "datapacks/@packdata/",
    "resourcepacks/@integrated/",
    "resourcepacks/@insomnia.zip",

    "defaultconfigs/"
    "config/legendarysurvivaloverhaul/",
    "config/almostunified/**/*.json",
    "config/incontrol/**/*.json",
    "config/sanitydim/**/*.toml",
    "config/enhancedai/**/*.toml",
    "config/thirst/**/*.toml",

    "config/emi.css",
    "config/embeddium-options.json",
    "config/chloride-client.json",
    "config/resourcepackoverrides.json",
    "config/parcool-client.toml",
    "config/notreepunching.toml"
    "config/structurify.json",
    "config/xaero*.*",

    "scripts/*.zs",
    "emi.json",
    "options.txt",
]

def link_file(path: Path, target: Path):
    if target.exists(follow_symlinks=False):
        target.unlink()

    print(f"linking file: {target}")
    target.parent.mkdir(parents=True, exist_ok=True)
    target.symlink_to(ROOT / path)

def link_dir(path: Path, target: Path):
    if target.exists(follow_symlinks=False):
        if target.is_symlink():
            target.unlink()
        else:
            shutil.rmtree(target)

    print(f"linking dir: {target}")
    target.parent.mkdir(parents=True, exist_ok=True)
    target.symlink_to(ROOT / path, target_is_directory=True)

for pattern in sources:
    for path in glob(pattern, root_dir=ROOT, recursive=True):
        source = ROOT / path
        target = INST / path

        if source == target:
            raise Exception(f"Source and target are equal, this shouldn't happen...")

        if source.is_file():
            link_file(source, target)
        elif source.is_dir():
            link_dir(path, target)
