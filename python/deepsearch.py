import io
import sys
import tomllib
import zipfile
import glob

from pathlib import Path

ROOT = Path(sys.argv[1])
MODS = ROOT / "mods"

def get_modinfo(path: Path):
    try:
        with zipfile.ZipFile(path, 'r') as zip:
            with io.TextIOWrapper(zip.open('META-INF/mods.toml'), encoding='utf-8') as file:
                return tomllib.loads(file.read())
    except:
        return None

def get_modid(info: dict):
    return info["mods"][0]["modId"]

def get_deps(info: dict):
    if not "dependencies" in info:
        return []

    modid = get_modid(info)
    deps =  info["dependencies"]

    if not modid in deps:
        return []

    return deps[modid]

for jar in glob.glob("*.jar", root_dir=MODS):
    info = get_modinfo(MODS / jar)

    if info is None:
        continue

    modid = get_modid(info)

    for obj in get_deps(info):
        if obj["modId"] == "create":
            print(modid)
