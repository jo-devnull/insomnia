#priority 999

import crafttweaker.api.tag.MCTag;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.item.ItemDefinition;

<tag:blocks:minecraft:needs_iron_tool>.remove(
  <block:create:zinc_ore>,
  <block:create:deepslate_zinc_ore>,

  <block:minecraft:gold_ore>,
  <block:minecraft:deepslate_gold_ore>
);

<tag:blocks:minecraft:needs_iron_tool>.add(
  <block:minecraft:iron_ore>,
  <block:minecraft:deepslate_iron_ore>
);

<tag:blocks:minecraft:needs_stone_tool>.remove(
  <block:minecraft:iron_ore>,
  <block:minecraft:deepslate_iron_ore>
);

<tag:blocks:minecraft:needs_stone_tool>.add(
  <tag:blocks:forge:ores/zinc>,
  <tag:blocks:forge:ores/gold>
);

<tag:items:minecraft:axes>
  .remove(<item:minecraft:wooden_axe>);

<tag:items:forge:tools/axes>
  .remove(<item:minecraft:wooden_axe>);

<tag:items:minecraft:pickaxes>
  .remove(<item:minecraft:wooden_pickaxe>);

<tag:items:forge:tools/pickaxes>
  .remove(<item:minecraft:wooden_pickaxe>);

<tag:items:notreepunching:weak_saws>
  .add(<tag:items:minecraft:axes>);
