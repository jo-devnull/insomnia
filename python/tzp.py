import os
import sys
import shutil
import random

from typing import List
from pathlib import Path

input = Path(sys.argv[1]).resolve()
textures = input / "assets/minecraft/optifine/random/entity/zombie"

output = Path(os.getcwd()) / "TZP-Reduced"
assets = output / "assets/minecraft/optifine/random/entity/zombie"

if output.exists():
  shutil.rmtree(output)

output.mkdir()
assets.mkdir(parents=True)

for file in [
  "assets/minecraft/optifine/emissive.properties",
  "assets/minecraft/sounds.json",
  "pack.png"
]:
  shutil.copyfile(input / file, output / file)

shutil.copytree(
  input / "assets/minecraft/textures",
  output / "assets/minecraft/textures"
)

shutil.copytree(
  input / "assets/minecraft/sounds",
  output / "assets/minecraft/sounds"
)

selected = random.sample([
  file for file in textures.glob("zombie*.png")
  if not file.name.endswith("_e.png") and not file.name.endswith("-e.png")
], 128)

for i, file in enumerate(selected):
  texture = assets / f"zombie{i}.png"
  emissive = file.with_name(file.name.replace(".png", "_e.png"))

  shutil.copyfile(file, texture)
  shutil.copyfile(emissive, assets / f"zombie{i}_e.png")

(output / "pack.mcmeta").write_text('''{
  "pack": {
      "pack_format": 15,
      "description": "Tissou's Zombie Pack - Reduced."
  }
}''')

shutil.make_archive(output, "zip", output)