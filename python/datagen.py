import shutil
from subprocess import run

from pathlib import Path

ROOT = Path(__file__).parent.parent
NAME = ROOT / "resourcepacks/@insomnia"

print("[1] building datagen/build.pkl...")
run("pkl eval -m . datagen/build.pkl")

print("[2] Making zip archive...")
shutil.make_archive(NAME, "zip", NAME)
shutil.rmtree(NAME)

print("[3] Refreshing packwiz...")
run("packwiz refresh")

print("Done!")
