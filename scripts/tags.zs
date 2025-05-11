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
  <entitytype:mca:female_villager>,
  <entitytype:mca:male_villager>
);

<tag:entity_types:friendlyfire:player_protection>.add(
  <tag:entity_types:migamigos:amigo>,
  <tag:entity_types:irons_spellbooks:summons>
);

<tag:entity_types:migamigos:undead>.add(
  <entitytype:undeadnights:horde_zombie>,
  <entitytype:undeadnights:demolition_zombie>
);

<tag:worldgen/biome:modpack:safe>.addId(
  <resource:minecraft:beach>,
  <resource:minecraft:forest>,
  <resource:minecraft:plains>,
  <resource:minecraft:meadow>,
  <resource:minecraft:taiga>,
  <resource:minecraft:snowy_taiga>,
  <resource:minecraft:birch_forest>,
  <resource:minecraft:old_growth_birch_forest>,
  <resource:minecraft:jungle>,
  <resource:minecraft:sparse_jungle>,
  <resource:minecraft:bamboo_jungle>,
  <resource:minecraft:cherry_grove>,

  <resource:biomesoplenty:dune_beach>,
  <resource:biomesoplenty:jacaranda_glade>,
  <resource:biomesoplenty:lavender_field>,
  <resource:biomesoplenty:woodland>,
  <resource:biomesoplenty:moor>,
  <resource:biomesoplenty:highland>,
  <resource:biomesoplenty:prairie>,
  <resource:biomesoplenty:redwood_forest>,
  <resource:biomesoplenty:coniferous_forest>,
  <resource:biomesoplenty:seasonal_forest>,
  <resource:biomesoplenty:mediterranean_forest>
);

<tag:worldgen/structure:modpack:unsafe>.addId(
  <resource:minecraft:pillager_outpost>,
  <resource:irons_spellbooks:evoker_fort>,
  <resource:irons_spellbooks:mountain_tower>,
  <resource:irons_spellbooks:pyromancer_tower>,
  <resource:scguns:asgharian_citadel>,
  <resource:scguns:asgharian_tower>,
  <resource:scguns:osgood_lab>,
  <resource:scguns:osgood_lab_outpost>,
  <resource:scguns:trench>
);
