for item in game.items {
  if (item.registryName.namespace == "createfood") {
    if (item.isEdible) {
      if (item.registryName.path.endsWith("bottle")) {
        <tag:items:category:beverages>.add(item);
      } else {
        <tag:items:category:foods>.add(item);
      }
    }
  }

  if (item.registryName.namespace == "mcwholidays") {
    <tag:items:category:decoration>.add(item);
  }
}
