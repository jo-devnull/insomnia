import * as tags from "@lib/data/tags.ts"
import { categoryTag, VanillaWood } from "@root/insomnia/utils.ts"
import { ResourceLocation } from "@lib/core/resource.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.storage, {
    title : "Armazenamento",
    icon  : "storagedrawers:item/oak_full_drawers_4"
})

tags.item(category.storage, [
    "minecraft:chest",
    "minecraft:ender_chest",
    "minecraft:chest_minecart",
    "minecraft:trapped_chest",
    "minecraft:barrel",
    "minecraft:bookshelf",
    "minecraft:chiseled_bookshelf",
    "minecraft:oak_chest_boat",
    "#minecraft:shulker_boxes",
    "#forge:chests",
])

/// create ---------------------------------------------
export const create = tags.item(category.storage, [
    "#create:packages",
    "create:item_vault",
    "create:item_hatch",
    "#create:postboxes",
])

/// farmersdelight ---------------------------------------------
export const farmersdelight = tags.item(category.storage, [
    "#farmersdelight:cabinets",
])

/// storagedrawers ---------------------------------------------
export const storagedrawers = tags.item(category.storage, [
    "#storagedrawers:drawers",
])

/// storagedelight ---------------------------------------------
export const storagedelight = tags.item(category.storage, VanillaWood.flatMap<ResourceLocation>(wood => [
    `storagedelight:${wood}_drawer`,
    `storagedelight:${wood}_drawer_with_door`,
    `storagedelight:${wood}_drawer_with_books`,
    `storagedelight:${wood}_bookshelf_with_door`,
    `storagedelight:${wood}_cabinet_with_glass_doors`,
    `storagedelight:${wood}_single_door_cabinet`,
    `storagedelight:glass_${wood}_cabinet`,
]))

/// redeco ---------------------------------------------
export const redeco = tags.item(category.storage, VanillaWood.flatMap<ResourceLocation>(wood => [
    `redeco:${wood}_crate`,
    `redeco:${wood}_drawers`,
    `redeco:${wood}_drawer_counter`,
    `redeco:${wood}_cabinet_counter`,
]))
