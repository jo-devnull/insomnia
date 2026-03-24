// priority: 0

ServerEvents.recipes(event => {
    event.remove({ type: "minecraft:smelting", output: "minecraft:iron_ingot" })
    event.remove({ type: "minecraft:smelting", output: "minecraft:gold_ingot" })

    event.remove({ type: "minecraft:blasting", input : "#minecraft:iron_ores" })
    event.remove({ type: "minecraft:blasting", input : "#minecraft:gold_ores" })

    event.remove({ type: "minecraft:blasting", input : "minecraft:raw_iron" })
    event.remove({ type: "minecraft:blasting", input : "minecraft:raw_gold" })

    event.remove({ type: "minecraft:smelting", output: "minecraft:glass" })

    event.replaceInput({ output: "backpacked:backpack" }, "minecraft:iron_ingot", "create:andesite_alloy")
})
