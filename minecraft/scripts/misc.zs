import crafttweaker.api.item.IItemStack;
import crafttweaker.api.loot.condition.LootConditions;
import crafttweaker.api.loot.modifier.ILootModifier;
import crafttweaker.api.loot.modifier.CommonLootModifiers;

import stdlib.List;

<tag:items:c:hidden_from_recipe_viewers>.add(
  <item:notreepunching:iron_mattock>,
  <item:notreepunching:gold_mattock>,
  <item:notreepunching:diamond_mattock>,
  <item:notreepunching:netherite_mattock>,

  <item:notreepunching:iron_knife>,
  <item:notreepunching:gold_knife>,
  <item:notreepunching:diamond_knife>,
  <item:notreepunching:netherite_knife>
);

loot.modifiers.register("disable_scrolls",
  LootConditions.none(),
  CommonLootModifiers.removeAll(<item:irons_spellbooks:scroll>)
);