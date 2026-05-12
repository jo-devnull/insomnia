import * as tags from "@lib/data/tags.ts"
import { VanillaWood, BlockColors, categoryTag } from "@root/insomnia/utils.ts"
import { ResourceLocation } from "@lib/core/resource.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.furniture, {
    title : "Mobília",
    icon  : "create:item/white_seat"
})

tags.item(category.furniture, [
    "#minecraft:beds",
    "minecraft:cauldron",
    "minecraft:armor_stand",
    "minecraft:bookshelf",
    "minecraft:chiseled_bookshelf",
    "minecraft:lectern",
    "minecraft:chest",
    "minecraft:barrel",
    "minecraft:ender_chest",
])

/// create ---------------------------------------------
export const create = tags.item(category.furniture, [
    "#create:seats",
    "create:cuckoo_clock",
])

/// farmersdelight ---------------------------------------------
export const farmersdelight = tags.item(category.furniture, [
    "#farmersdelight:cabinets",
])

/// redeco ---------------------------------------------
export const redeco = tags.item(category.furniture, [
    ...VanillaWood.flatMap<ResourceLocation>(woodType => [
        `redeco:${woodType}_table`,
        `redeco:${woodType}_side_table`,
        `redeco:${woodType}_drawers`,
        `redeco:${woodType}_drawer_counter`,
        `redeco:${woodType}_cabinet_counter`,
        `redeco:${woodType}_coffee_table`,
        `redeco:${woodType}_chair`,
        `redeco:${woodType}_stool`,
        `redeco:${woodType}_bench`,
        `redeco:${woodType}_shelf`,
        `redeco:${woodType}_display_case`,
        `redeco:${woodType}_sword_mount`,
        `redeco:${woodType}_pedestal`,
    ]),

    ...BlockColors.flatMap<ResourceLocation>(color => [
        `redeco:${color}_sofa`,
        `redeco:${color}_ottoman`,
        `redeco:${color}_cushion`,
        `redeco:${color}_pet_bed`,
    ])
])

/// candlelight ---------------------------------------------
export const candlelight = tags.item(category.furniture, [
    ...["cobblestone",
        "sandstone",
        "stone_bricks",
        "deepslate",
        "granite",
        "end",
        "mud",
        "quartz",
        "red_nether_bricks",
        "basalt",
        "bamboo",
    ].flatMap<ResourceLocation>(type => [
        `candlelight:${type}_stove`,
        `candlelight:${type}_kitchen_sink`,
        `candlelight:${type}_counter`,
    ]),

    ...VanillaWood.flatMap<ResourceLocation>(wood => [
        `candlelight:${wood}_cabinet`,
        `candlelight:${wood}_drawer`,
        `candlelight:${wood}_table`,
        `candlelight:${wood}_chair`,
        `candlelight:${wood}_shelf`,
        `candlelight:${wood}_big_table`,
    ])
])
