// File: scripts/createfood_edible_tag.zs

import crafttweaker.api.tag.MCTag;
import crafttweaker.api.game.Game;

// Loop through all items
for item in game.items {
    // Only check items from the createfood mod
    if (item.registryName.namespace == "createfood") {

        if (item.isEdible()) {
            // Add the item to the tag
            <tag:items:category:cooking/foods>.add(item);
        }
    }
}
