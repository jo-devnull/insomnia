import crafttweaker.api.ingredient.type.TagIngredient;
import crafttweaker.api.data.IData;
import crafttweaker.api.item.IItemStack;

// remove iron and gold smelting/blasting recipes
furnace.remove(<item:minecraft:iron_ingot>);
furnace.remove(<item:minecraft:gold_ingot>);
furnace.remove(<item:create_ironworks:steel_ingot>);

furnace.remove(<item:minecraft:glass>);

blastFurnace.remove(<item:minecraft:iron_ingot>);
blastFurnace.remove(<item:minecraft:gold_ingot>);
blastFurnace.remove(<item:create_ironworks:steel_ingot>);

craftingTable.removeByName("minecraft:stick");

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

craftingTable.addShaped("sticks_from_planks", <item:minecraft:stick> * 4, [[<tag:item:minecraft:axes>.asIIngredient().anyDamage().transformDamage(1).reuse(), <tag:item:minecraft:planks>]]);

craftingTable.addShapeless("leather_from_chestplate_or_leggings",
    <item:minecraft:leather> * 4,

    [
        <tag:item:c:tools/knives>.asIIngredient().anyDamage().transformDamage(1).reuse(),
        <item:minecraft:leather_chestplate> | <item:minecraft:leather_leggings>
    ]
);

craftingTable.addShapeless("leather_from_helmet_or_boots",
    <item:minecraft:leather> * 2,

    [
        <tag:item:c:tools/knives>.asIIngredient().anyDamage().transformDamage(1).reuse(),
        <item:minecraft:leather_helmet> | <item:minecraft:leather_boots>
    ]
);

// Replace logs -> planks recipes, requiring an axe
for holder in craftingTable.getRecipesByOutput(<tag:item:minecraft:planks>) {
    var recipe = holder.value;

    if recipe.ingredients.length == 1 {
        var input = recipe.ingredients[0];

        if input is TagIngredient && input in <tag:item:minecraft:logs>.asIIngredient() {
            var output = (recipe.resultItem as IData)["base"]["item"];
            craftingTable.removeByName(holder.id);

            var id = recipe.resultItem.registryName.path + "_from_logs";
            craftingTable.addShaped(id, recipe.resultItem, [[<tag:item:minecraft:axes>.asIIngredient().anyDamage().transformDamage(1).reuse()], [input]]);
        }
    }
}
