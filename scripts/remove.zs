# Remove iron recipes from regular furnace
furnace.remove(<item:minecraft:iron_ingot>);

# Remove Ironworks recipes
craftingTable.removeByName("create_ironworks:tools/shovel/bronze");
craftingTable.removeByName("create_ironworks:tools/pickaxe/bronze");
craftingTable.removeByName("create_ironworks:tools/axe/bronze");
craftingTable.removeByName("create_ironworks:tools/hoe/bronze");

craftingTable.removeByRegex("create_ironworks:compat/.*_axe");
craftingTable.removeByRegex("create_ironworks:compat/.*_hoe");
craftingTable.removeByRegex("create_ironworks:compat/.*_paxel");
craftingTable.removeByRegex("create_ironworks:compat/.*_shovel");
craftingTable.removeByRegex("create_ironworks:compat/.*_hammer");
craftingTable.removeByRegex("create_ironworks:compat/.*_pickaxe");

craftingTable.removeByRegex("create_ironworks:armor/.*/bronze");

craftingTable.removeByName("create_ironworks:compat/bronze_helmet");
craftingTable.removeByName("create_ironworks:compat/bronze_chestplate");
craftingTable.removeByName("create_ironworks:compat/bronze_leggings");
craftingTable.removeByName("create_ironworks:compat/bronze_boots");

<recipetype:create:pressing>.removeByName("create_ironworks:materials/plates/bronze_sheet2");

craftingTable.removeByName("create_ironworks:materials/bronze/crafting_block_from_ingot");
craftingTable.removeByName("create_ironworks:materials/bronze/crafting_nugget_from_ingot");
craftingTable.removeByName("create_ironworks:materials/bronze/crafting_ingot_from_block");
craftingTable.removeByName("create_ironworks:materials/bronze/crafting_ingot_from_nugget");

craftingTable.removeByName("create_ironworks:materials/tin/crafting_block_from_ingot");
craftingTable.removeByName("create_ironworks:materials/tin/crafting_nugget_from_ingot");
craftingTable.removeByName("create_ironworks:materials/tin/crafting_ingot_from_block");
craftingTable.removeByName("create_ironworks:materials/tin/crafting_ingot_from_nugget");
