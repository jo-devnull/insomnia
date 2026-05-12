import * as tags from "@lib/data/tags.ts"
import { categoryTag } from "@root/insomnia/utils.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.transport, {
    title : "Transporte",
    icon  : "minecraft:item/minecart"
})

tags.item(category.transport, [
    "#minecraft:rails",
    "minecraft:elytra",
    "minecraft:saddle",
    "minecraft:lead",
    "minecraft:minecart",
    "minecraft:hopper_minecart",
    "minecraft:chest_minecart",
    "minecraft:furnace_minecart",
    "minecraft:tnt_minecart",
    "minecraft:oak_boat",
    "minecraft:oak_chest_boat",
])

/// create ---------------------------------------------
export const create = tags.item(category.transport, [
    "create:cart_assembler",
    "create:controller_rail",
    "create:track",
    "create:railway_casing",
    "create:schedule",
    "create:track_station",
    "create:track_signal",
    "create:track_observer",
    "create:controls",
])

/// alexscaves ---------------------------------------------
export const alexscaves = tags.item(category.transport, [
    "alexscaves:submarine",
])

/// automobility ---------------------------------------------
export const automobility = tags.item(category.transport, [
    "automobility:automobile",
])

/// vanillabackport ---------------------------------------------
export const vanillabackport = tags.item(category.transport, [
    "vanillabackport:white_harness",
])

/// immersive_aircraft ---------------------------------------------
export const immersive_aircraft = tags.item(category.transport, [
    "#immersive_aircraft:aircraft",
])

/// hangglider ---------------------------------------------
export const hangglider = tags.item(category.transport, [
    "hangglider:hang_glider",
    "hangglider:reinforced_hang_glider",
])
