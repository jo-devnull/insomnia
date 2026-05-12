import * as tags from "@lib/data/tags.ts"
import { ResourceLocation } from "@lib/core/resource.ts"
import { categoryTag } from "@root/insomnia/utils.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.metalworking, {
    title : "Metalurgia",
    icon  : "createmetallurgy:item/foundry_basin"
})

tags.item(category.metalworking, [
    "minecraft:furnace",
    "minecraft:blast_furnace",
    "minecraft:anvil",
    "minecraft:cauldron",
    "minecraft:bucket",
    "minecraft:lava_bucket",
    "minecraft:flint_and_steel",
    "#toolworking:ingots",
    "#forge:nuggets",
    "#forge:plates",
])

/// create ---------------------------------------------
export const create = tags.item(category.metalworking, [
    "create:basin",
    "create:mechanical_mixer",
    "create:mechanical_press",
    "create:crushing_wheel",
    "create:blaze_burner",
    "create:fluid_tank",
    "#create:crushed_raw_materials",
])

/// createlowheated ---------------------------------------------
export const createlowheated = tags.item(category.metalworking, [
    "createlowheated:basic_burner",
])

/// createdieselgenerators ---------------------------------------------
export const createdieselgenerators = tags.item(category.metalworking, [
    "createdieselgenerators:burner",
])

/// create_ironworks ---------------------------------------------
export const create_ironworks = tags.item(category.metalworking, [
    "create_ironworks:coal_dust",
    "create_ironworks:charcoal_dust",
    "create_ironworks:crushed_raw_tin",
    "create_ironworks:bronze_ingot",
])

/// createmetallurgy ---------------------------------------------
export const createmetallurgy = tags.item(category.metalworking, [
    "#forge:dirty_dusts",
    "#forge:graphite_molds",

    "createmetallurgy:refractory_mortar",
    "createmetallurgy:foundry_lid",
    "createmetallurgy:foundry_basin",
    "createmetallurgy:foundry_mixer",
    "createmetallurgy:foundry_unit",
    "createmetallurgy:casting_table",
    "createmetallurgy:casting_basin",
    "createmetallurgy:industrial_crucible",
    "createmetallurgy:faucet",
    "createmetallurgy:wolframite_dust",
    "createmetallurgy:gold_dust",
    "createmetallurgy:iron_dust",
    "createmetallurgy:copper_dust",
    "createmetallurgy:zinc_dust",

    ...[
        "iron",
        "gold",
        "copper",
        "zinc",
        "brass",
        "tungsten",
        "steel",
        "netherite",
        "silver",
        "tin",
        "obdurium",
        "bronze",
        "slag",
    ].map<ResourceLocation>(material => `createmetallurgy:molten_${material}_bucket`)
])
