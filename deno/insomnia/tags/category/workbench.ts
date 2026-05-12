import * as tags from "@lib/data/tags.ts"
import { categoryTag } from "@root/insomnia/utils.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.workbench, {
    title: "Mesa de Trabalho",
    icon: "minecraft:item/crafting_table"
})

tags.item(category.workbench, [
    "minecraft:crafting_table",
    "minecraft:stonecutter",
    "minecraft:cartography_table",
    "minecraft:fletching_table",
    "minecraft:smithing_table",
    "minecraft:grindstone",
    "minecraft:loom",
    "minecraft:furnace",
    "minecraft:smoker",
    "minecraft:blast_furnace",
    "minecraft:beehive",
    "minecraft:campfire",
    "minecraft:anvil",
    "minecraft:brewing_stand",
    "minecraft:enchanting_table",
])

/// create ---------------------------------------------
export const create = tags.item(category.workbench, [
    "create:schematic_table",
    "create:schematicannon",
    "create:crushing_wheel",
    "create:millstone",
    "create:basin",
    "create:mechanical_mixer",
    "create:mechanical_saw",
    "create:mechanical_press",
    "create:mechanical_drill",
    "create:mechanical_arm",
])

/// automobility ---------------------------------------------
export const automobility = tags.item(category.workbench, [
    "automobility:auto_mechanic_table",
    "automobility:automobile_assembler",
])

/// betterarcheology ---------------------------------------------
export const betterarcheology = tags.item(category.workbench, [
    "betterarcheology:archeology_table",
])

/// cold_sweat ---------------------------------------------
export const cold_sweat = tags.item(category.workbench, [
    "cold_sweat:sewing_table",
])

/// bakery ---------------------------------------------
export const bakery = tags.item(category.workbench, [
    "bakery:baker_station",
])

/// clanginghowl ---------------------------------------------
export const clanginghowl = tags.item(category.workbench, [
    "clanginghowl:stationary_charging_station",
])

/// disenchanting_table ---------------------------------------------
export const disenchanting_table = tags.item(category.workbench, [
    "disenchanting_table:disenchanting_table",
])

/// powergrid ---------------------------------------------
export const powergrid = tags.item(category.workbench, [
    "powergrid:circuit_design_table",
])

/// createmetallurgy ---------------------------------------------
export const createmetallurgy = tags.item(category.workbench, [
    "createmetallurgy:foundry_basin",
    "createmetallurgy:casting_basin",
    "createmetallurgy:casting_table",
    "createmetallurgy:mechanical_belt_grinder",
])

/// simpleradio ---------------------------------------------
export const simpleradio = tags.item(category.workbench, [
    "simpleradio:radiosmither",
])

/// storagedrawers ---------------------------------------------
export const storagedrawers = tags.item(category.workbench, [
    "storagedrawers:framing_table",
])
