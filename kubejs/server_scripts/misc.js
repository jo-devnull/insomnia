// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.tags("block", event => {
    const needsIronTool = "minecraft:needs_iron_tool"
    const needsStoneTool = "minecraft:needs_stone_tool"

    event.add(needsIronTool, "iron_ore")
    event.add(needsIronTool, "deepslate_iron_ore")
    event.add(needsStoneTool, "#forge:ores/zinc")
    event.remove(needsIronTool, "create:zinc_ore")
    event.remove(needsIronTool, "create:deepslate_zinc_ore")
    event.remove(needsIronTool, "minecraft:gold_ore")
    event.remove(needsIronTool, "minecraft:deepslate_gold_ore")
    event.remove(needsStoneTool, "iron_ore")
    event.remove(needsStoneTool, "deepslate_iron_ore")
})


ServerEvents.tags("item", event => {
    event.add("notreepunching:weak_saws", "#minecraft:axes")

    event.add("forge:ingots", "toolworking:heated_copper_ingot")
    event.add("forge:ingots", "toolworking:heated_gold_ingot")
    event.add("forge:ingots", "toolworking:heated_iron_ingot")
    event.add("forge:ingots", "toolworking:heated_bronze_ingot")
    event.add("forge:ingots", "toolworking:heated_brass_ingot")
    event.add("forge:ingots", "toolworking:heated_steel_ingot")

    event.add("forge:ingots", "create_ironworks:tin_ingot")
    event.add("forge:plates", "create_ironworks:tin_sheet")
})
