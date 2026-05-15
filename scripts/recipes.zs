// remove iron and gold smelting/blasting recipes
furnace.remove(<item:minecraft:iron_ingot>);
furnace.remove(<item:minecraft:gold_ingot>);
furnace.remove(<item:create_ironworks:steel_ingot>);

furnace.remove(<item:minecraft:glass>);

blastFurnace.remove(<item:minecraft:iron_ingot>);
blastFurnace.remove(<item:minecraft:gold_ingot>);
blastFurnace.remove(<item:create_ironworks:steel_ingot>);

craftingTable.removeByName("samurai_dynasty:steel_ingot");
craftingTable.removeByName("samurai_dynasty:steel_ingot_from_nugget");
craftingTable.removeByName("create_ironworks:materials/steel/ingot_from_block");

craftingTable.removeByModid("create_ironworks", (name as string) => !("steel_tag" in name));

<recipetype:create:mixing>.remove(<item:create_ironworks:steel_ingot>);

blastFurnace.addRecipe("iron_ingot_from_raw", <item:minecraft:iron_ingot>, <item:minecraft:raw_iron>, 1, 1200);
blastFurnace.addRecipe("gold_ingot_from_raw", <item:minecraft:gold_ingot>, <item:minecraft:raw_gold>, 1, 1200);

blastFurnace.addRecipe("iron_ingot_from_ore", <item:minecraft:iron_ingot>, <item:minecraft:iron_ore>, 1, 1200);
blastFurnace.addRecipe("gold_ingot_from_ore", <item:minecraft:gold_ingot>, <item:minecraft:gold_ore>, 1, 1200);

blastFurnace.addRecipe("iron_ingot_from_crushed", <item:minecraft:iron_ingot>, <item:create:crushed_raw_iron>, 1, 600);
blastFurnace.addRecipe("gold_ingot_from_crushed", <item:minecraft:gold_ingot>, <item:create:crushed_raw_gold>, 1, 600);

blastFurnace.addRecipe("iron_ingot_from_deepslate_ore", <item:minecraft:iron_ingot>, <item:minecraft:deepslate_iron_ore>, 1, 1200);
blastFurnace.addRecipe("gold_ingot_from_deepslate_ore", <item:minecraft:gold_ingot>, <item:minecraft:deepslate_gold_ore>, 1, 1200);
