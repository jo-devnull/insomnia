#priority 999

import crafttweaker.api.tag.MCTag;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.item.ItemDefinition;

<tag:blocks:minecraft:needs_iron_tool>.remove(
  <block:create:zinc_ore>,
  <block:create:deepslate_zinc_ore>
);

<tag:blocks:minecraft:needs_stone_tool>.add(
  <tag:blocks:forge:ores/zinc>
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

<tag:items:notreepunching:mattocks>.add(
  <item:create_ironworks:copper_paxel>,
  <item:create_ironworks:gold_paxel>,
  <item:create_ironworks:iron_paxel>,
  <item:create_ironworks:bronze_paxel>,
  <item:create_ironworks:brass_paxel>,
  <item:create_ironworks:steel_paxel>,
  <item:create_ironworks:diamond_paxel>,
  <item:create_ironworks:netherite_paxel>
);

<tag:entity_types:friendlyfire:player_protection>.add(
  <entitytype:minecraft:player>,
  <entitytype:minecraft:villager>,
  <entitytype:minecraft:iron_golem>,
  <entitytype:all_bark_all_bite:dog>,
  <entitytype:minecraft:horse>,
  <entitytype:alexsmobs:crow>,
  <entitytype:alexsmobs:raccoon>
);

<tag:entity_types:friendlyfire:player_protection>.add(
  <tag:entity_types:migamigos:amigo>,
  <tag:entity_types:irons_spellbooks:summons>
);

<tag:entity_types:migamigos:undead>.add(
  <entitytype:undeadnights:horde_zombie>,
  <entitytype:undeadnights:demolition_zombie>
);
