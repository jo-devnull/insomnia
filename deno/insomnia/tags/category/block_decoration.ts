import * as tags from "@lib/data/tags.ts"
import { BlockColors, categoryTag } from "@root/insomnia/utils.ts"
import { ResourceLocation } from "@lib/core/resource.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.block_decoration, {
    title : "Blocos Decorativos",
    icon  : "minecraft:item/lime_stained_glass"
})

tags.item(category.block_decoration, [
    "#forge:glass",
    "#forge:glass_panes",
    "#minecraft:terracotta",
    "#forge:concrete",
    "#forge:concrete_powders",

    ...BlockColors.map<ResourceLocation>(color => `minecraft:${color}_glazed_terracotta`)
])

/// create ---------------------------------------------
export const create = tags.item(category.block_decoration, [
    "create:cardboard_block",
    "create:oak_window",
    "create:spruce_window",
    "create:birch_window",
    "create:jungle_window",
    "create:acacia_window",
    "create:dark_oak_window",
    "create:mangrove_window",
    "create:crimson_window",
    "create:warped_window",
    "create:cherry_window",
    "create:bamboo_window",
    "create:ornate_iron_window",
    "create:industrial_iron_window",
    "create:weathered_iron_window",
    "create:rose_quartz_block",
    "create:small_rose_quartz_tiles",
])

/// supplementaries ---------------------------------------------
export const supplementaries = tags.item(category.block_decoration, [
    "supplementaries:checker_block",
    "supplementaries:checker_slab",
])
