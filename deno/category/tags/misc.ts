import * as tags from "@lib/data/tags.ts"
import { categoryTag } from "@root/insomnia/utils.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.misc, {
    title : "Miscelâneos",
    icon  : "coldsweat:item/thermometer"
})

tags.item(category.misc, [
    "minecraft:bucket",
    "minecraft:fishing_rod",
    "minecraft:flint_and_steel",
    "minecraft:shears",
    "minecraft:brush",
    "minecraft:name_tag",
    "minecraft:lead",
    "minecraft:compass",
    "minecraft:recovery_compass",
    "minecraft:clock",
    "minecraft:spyglass",
    "minecraft:map",
    "minecraft:writable_book",
    "minecraft:elytra",
    "minecraft:firework_rocket",
    "minecraft:saddle",
    "minecraft:carrot_on_a_stick",
    "minecraft:warped_fungus_on_a_stick",
    "minecraft:goat_horn",
    "#forge:shears",
])

/// create ---------------------------------------------
export const create = tags.item(category.misc, [
    "create:wrench",
    "create:brown_toolbox",
    "create:clipboard",
    "create:goggles",
    "create:super_glue",
    "create:crafting_blueprint",
    "create:sand_paper",
    "create:red_sand_paper",
])

/// supplementaries ---------------------------------------------
export const supplementaries = tags.item(category.misc, [
    "supplementaries:lunch_basket",
    "supplementaries:wrench",
    "supplementaries:key",
    "supplementaries:slingshot",
    "supplementaries:rope_arrow",
    "supplementaries:soap",
    "supplementaries:bubble_blower",
    "supplementaries:flute",
    "supplementaries:altimeter",
    "supplementaries:slice_map",
    "supplementaries:confetti_popper",
    "supplementaries:quiver",
])

/// toolbelt ---------------------------------------------
export const toolbelt = tags.item(category.misc, [
    "toolbelt:belt",
    "toolbelt:pouch",
])

/// all_bark_all_bite ---------------------------------------------
export const all_bark_all_bite = tags.item(category.misc, [
    "all_bark_all_bite:whistle",
])

/// redeco ---------------------------------------------
export const redeco = tags.item(category.misc, [
    "redeco:hammer",
])

/// alexsmobs ---------------------------------------------
export const alexsmobs = tags.item(category.misc, [
    "alexsmobs:chorus_on_a_stick",
])

/// automobility ---------------------------------------------
export const automobility = tags.item(category.misc, [
    "automobility:crowbar",
])

/// betterarcheology ---------------------------------------------
export const betterarcheology = tags.item(category.misc, [
    "betterarcheology:iron_brush",
    "betterarcheology:diamond_brush",
    "betterarcheology:netherite_brush",
])

/// createdieselgenerators ---------------------------------------------
export const createdieselgenerators = tags.item(category.misc, [
    "createdieselgenerators:wire_cutters",
    "createdieselgenerators:hammer",
    "createdieselgenerators:engine_silencer",
    "createdieselgenerators:engine_turbocharger",
    "createdieselgenerators:oil_scanner",
    "createdieselgenerators:chemical_sprayer",
    "createdieselgenerators:chemical_sprayer_lighter",
])

/// createmetallurgy ---------------------------------------------
export const createmetallurgy = tags.item(category.misc, [
    "createmetallurgy:faucet",
])

/// domesticationinnovation ---------------------------------------------
export const domesticationinnovation = tags.item(category.misc, [
    "domesticationinnovation:collar_tag",
    "domesticationinnovation:feather_on_a_stick",
    "domesticationinnovation:deed_of_ownership",
    "domesticationinnovation:pet_bed_white",
])

/// notreepunching ---------------------------------------------
export const notreepunching = tags.item(category.misc, [
    "notreepunching:clay_tool",
    "notreepunching:fire_starter",
])

/// travelersbackpack ---------------------------------------------
export const travelersbackpack = tags.item(category.misc, [
    "travelersbackpack:standard",
    "travelersbackpack:backpack_tank",
    "travelersbackpack:blank_upgrade",
])

/// redstonepen ---------------------------------------------
export const redstonepen = tags.item(category.misc, [
    "redstonepen:pen",
    "redstonepen:quill",
])

/// measurements ---------------------------------------------
export const measurements = tags.item(category.misc, [
    "measurements:tape_measure",
])

/// paintable ---------------------------------------------
export const paintable = tags.item(category.misc, [
    "paintable:paint_bucket",
    "paintable:paint_brush",
])

/// thirstcanteen ---------------------------------------------
export const thirstcanteen = tags.item(category.misc, [
    "thirstcanteen:leather_canteen",
    "thirstcanteen:military_bottle",
    "thirstcanteen:dragon_bottle",
])

/// cold_sweat ---------------------------------------------
export const cold_sweat = tags.item(category.misc, [
    "cold_sweat:waterskin",
    "cold_sweat:filled_waterskin",
    "cold_sweat:soulspring_lamp",
    "cold_sweat:thermometer",
    "cold_sweat:minecart_insulation",
])

/// backpacked ---------------------------------------------
export const backpacked = tags.item(category.misc, [
    "backpacked:backpack",
])
