import tomllib
from pathlib import Path

ROOT = Path(__file__).parent.parent

MODRINTH = 'https://modrinth.com/mod'
CURSEFORGE = 'https://www.curseforge.com/minecraft/mc-mods'

mods = {}

for file in (ROOT / "mods").glob("**/*.pw.toml"):
  category = file.parent.name

  if category not in mods:
    mods[category] = []

  mods[category].append(file)

for category in mods:
  print(f'# {category.title()}')
  print()

  for mod in mods[category]:
    with open(mod, 'rb') as io:
      meta = tomllib.load(io)
      url = CURSEFORGE if 'curseforge' in meta['update'] else MODRINTH
      print(f'- {meta['name']} | {url}/{mod.name.replace('.pw.toml', '')}')

  print()
