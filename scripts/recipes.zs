// remove iron and gold smelting/blasting recipes
furnace.remove(<item:minecraft:iron_ingot>);
furnace.remove(<item:minecraft:gold_ingot>);

blastFurnace.remove(<item:minecraft:iron_ingot>);
blastFurnace.remove(<item:minecraft:gold_ingot>);

furnace.removeByName("create:blasting/gold_ingot_from_crushed");
