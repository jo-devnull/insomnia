import os
import sys
import shutil
import random

from typing import List
from pathlib import Path

input = Path(sys.argv[1]).resolve()
textures = input / "assets/minecraft/optifine/random/entity/zombie"

output = Path(os.getcwd()) / "TZP-MMV-Patch"
data = output / "data/moremobvariants/variants/zombie/"
assets = output / "assets/moremobvariants/textures/entity/zombie/"

if output.exists():
  shutil.rmtree(output)

output.mkdir()
data.mkdir(parents=True)
assets.mkdir(parents=True)

selected = random.sample([
  file for file in textures.glob("zombie*.png")
  if not file.name.endswith("_e.png")
], 128)

for i, file in enumerate(selected):
  data_file = data / f"zombie{i}.json"
  asset_file = assets / f"zombie{i}.png"

  shutil.copyfile(file, asset_file)
  data_file.write_text('{ "weight": 1 }')

(output / "pack.mcmeta").write_text('''{
  "pack": {
      "pack_format": 15,
      "description": "Tissou's Zombie Pack - Patched to work with MoreMobVariants."
  }
}''')

shutil.make_archive(output, "zip", output)