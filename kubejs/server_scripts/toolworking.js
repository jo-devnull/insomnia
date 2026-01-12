// priority: 0

/**
 * @param {string} id
 */
const materialof = (id) => id.split(":").pop().split("_").shift()
const heated = (id) => `toolworking:heated_${materialof(id)}_ingot`

ServerEvents.recipes(event => {
    const heatedOutput = (type, target) => {
        event.replaceOutput(
            { type: type, output: target },
            target, heated(target)
        )
    }

    heatedOutput("minecraft:smelting", "create:brass_ingot")
    heatedOutput("minecraft:smelting", "minecraft:copper_ingot")
    heatedOutput("minecraft:smelting", "create_ironworks:bronze_ingot")

    heatedOutput("minecraft:blasting", "create:brass_ingot")
    heatedOutput("minecraft:blasting", "minecraft:copper_ingot")
    heatedOutput("minecraft:blasting", "create_ironworks:bronze_ingot")

    heatedOutput("minecraft:blasting", "minecraft:iron_ingot")
    heatedOutput("minecraft:blasting", "minecraft:gold_ingot")
    heatedOutput("minecraft:blasting", "create_ironworks:steel_ingot")

    const heatedInput = (target) => {
        event.replaceInput({
            type: "minecraft:crafting_shaped",
            input: target,
            output: "#forge:tools"
        }, target, heated(target))

        event.replaceInput({
            type: "minecraft:crafting_shaped",
            input: target,
            output: "#c:weapons"
        }, target, heated(target))

        event.replaceInput({
            type: "minecraft:crafting_shaped",
            input: target,
            output: "#forge:armors"
        }, target, heated(target))
    }

    heatedInput("minecraft:iron_ingot")
    heatedInput("minecraft:copper_ingot")
    heatedInput("minecraft:gold_ingot")
    heatedInput("create:brass_ingot")
    heatedInput("create_ironworks:bronze_ingot")
    heatedInput("create_ironworks:steel_ingot")
})

ServerEvents.recipes(event => {
    event.remove({ type: "minecraft:smelting", output: "minecraft:iron_ingot" })
    event.remove({ type: "minecraft:smelting", output: "minecraft:gold_ingot" })

    event.remove({ type: "minecraft:blasting", input : "#minecraft:iron_ores" })
    event.remove({ type: "minecraft:blasting", input : "#minecraft:gold_ores" })

    event.remove({ type: "minecraft:blasting", input : "minecraft:raw_iron" })
    event.remove({ type: "minecraft:blasting", input : "minecraft:raw_gold" })
})
