import sys
import shutil
import random

from glob import glob
from typing import List
from pathlib import Path

folder = Path(sys.argv[1]).resolve()
path = folder / "assets/minecraft/optifine/random/entity/zombie"
temp = path / ".temp"

if temp.exists():
  shutil.rmtree(temp)

temp.mkdir()

def get_textures(entity, size):
  files = [file.name for file in path.glob(f"{entity}*.png") if not_emissive(file)]
  selected = random.sample(files, size)
  return sorted(selected)

def not_emissive(file: Path):
  if file.name.endswith("_e.png"):
    return False

  if file.name.endswith("-e.png"):
    return False

  if not file.with_name(file.name.replace(".png", "_e.png")).exists():
    return False

  return True

def emissive(file: Path):
  return file.with_name(file.name.replace(".png", "_e.png"))

def copy_selected(files: List[Path]):
  for file in files:
    tempfile = temp / file
    shutil.copyfile(path / file, tempfile)
    shutil.copyfile(emissive(path / file), emissive(tempfile))

def move_selected(prefix, files: List[Path]):
  for i, name in enumerate(files):
    num = str(i + 1) * int(i + 1 > 1)
    shutil.move(temp/name, path/f"{prefix}{num}.png")
    shutil.move(emissive(temp/name), path/f"{prefix}{num}_e.png")

husk = get_textures("husk", 32)
zombie = get_textures("zombie", 64)
drowned = get_textures("drowned", 24)

copy_selected(husk)
copy_selected(zombie)
copy_selected(drowned)

for file in path.glob("*.png"):
  if file.is_file() and file.exists():
    file.unlink()

move_selected("husk", husk)
move_selected("zombie", zombie)
move_selected("drowned", drowned)
