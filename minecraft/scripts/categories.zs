var cookingMods = [
  "bakery",
  "candlelight",
  "farm_and_charm",
  "farmersdelight",
  "oceanic_delight",
  "dungeonsdelight",
  "miners_delight",
  "rusticdelight"
] as string[];

for item in game.items {
  if (item.registryName.namespace in cookingMods) {
    if (item.isEdible) {
      <tag:items:category:foods>.add(item);
    }
  }

  if (item.registryName.namespace == "mcwholidays") {
    <tag:items:category:decoration>.add(item);
  }

  if (item.registryName.namespace == "marbledsfirstaid") {
    <tag:items:category:medicine>.add(item);
  }
}
