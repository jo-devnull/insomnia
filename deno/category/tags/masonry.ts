import * as tags from "@lib/data/tags.ts"
import { ResourceLocation } from "@lib/core/resource.ts"
import { categoryTag } from "@root/insomnia/utils.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.masonry, {
    title : "Alvenaria",
    icon  : "minecraft:item/bricks"
})

tags.item(category.masonry, [
    "minecraft:stone",
    "minecraft:stone_stairs",
    "minecraft:stone_slab",
    "minecraft:cobblestone",
    "minecraft:cobblestone_stairs",
    "minecraft:cobblestone_slab",
    "minecraft:cobblestone_wall",
    "minecraft:mossy_cobblestone",
    "minecraft:mossy_cobblestone_stairs",
    "minecraft:mossy_cobblestone_slab",
    "minecraft:mossy_cobblestone_wall",
    "minecraft:smooth_stone",
    "minecraft:smooth_stone_slab",
    "minecraft:stone_bricks",
    "minecraft:stone_brick_stairs",
    "minecraft:stone_brick_slab",
    "minecraft:stone_brick_wall",
    "minecraft:cracked_stone_bricks",
    "minecraft:chiseled_stone_bricks",
    "minecraft:mossy_stone_bricks",
    "minecraft:mossy_stone_brick_stairs",
    "minecraft:mossy_stone_brick_slab",
    "minecraft:mossy_stone_brick_wall",
    "minecraft:diorite",
    "minecraft:diorite_stairs",
    "minecraft:diorite_slab",
    "minecraft:diorite_wall",
    "minecraft:smooth_diorite",
    "minecraft:smooth_diorite_stairs",
    "minecraft:smooth_diorite_slab",
    "minecraft:andesite",
    "minecraft:andesite_stairs",
    "minecraft:andesite_slab",
    "minecraft:andesite_wall",
    "minecraft:polished_andesite",
    "minecraft:polished_andesite_stairs",
    "minecraft:polished_andesite_slab",
    "minecraft:deepslate",
    "minecraft:chiseled_deepslate",
    "minecraft:cobbled_deepslate",
    "minecraft:cobbled_deepslate_stairs",
    "minecraft:cobbled_deepslate_slab",
    "minecraft:cobbled_deepslate_wall",
    "minecraft:polished_deepslate",
    "minecraft:polished_deepslate_stairs",
    "minecraft:polished_deepslate_slab",
    "minecraft:polished_deepslate_wall",
    "minecraft:deepslate_bricks",
    "minecraft:deepslate_brick_stairs",
    "minecraft:deepslate_brick_slab",
    "minecraft:deepslate_brick_wall",
    "minecraft:cracked_deepslate_bricks",
    "minecraft:deepslate_tiles",
    "minecraft:deepslate_tile_stairs",
    "minecraft:deepslate_tile_slab",
    "minecraft:deepslate_tile_wall",
    "minecraft:cracked_deepslate_tiles",
    "minecraft:reinforced_deepslate",
    "minecraft:bricks",
    "minecraft:brick_stairs",
    "minecraft:brick_slab",
    "minecraft:brick_wall",
    "minecraft:mud_bricks",
    "minecraft:mud_brick_stairs",
    "minecraft:mud_brick_slab",
    "minecraft:mud_brick_wall",
])

/// create ---------------------------------------------
export const create = tags.item(category.masonry, [
    ...[
        "granite",
        "diorite",
        "andesite",
        "calcite",
        "dripstone",
        "deepslate",
        "tuff",
        "asurine",
        "crimsite",
        "limestone",
        "ochrum",
        "scoria",
        "scorchia",
        "veridium"
    ].flatMap<ResourceLocation>(material => [
        `create:cut_${material}`,
        `create:polished_cut_${material}`,
        `create:cut_${material}_bricks`,
        `create:small_${material}_bricks`,
        `create:layered_${material}`,
    ])
])

/// supplementaries ---------------------------------------------
export const supplementaries = tags.item(category.masonry, [
    "supplementaries:slidy_block",
    "supplementaries:gravel_bricks",

    ...["stone_tile", "ash_bricks", "blackstone_tile"].flatMap<ResourceLocation>(type => [
        `supplementaries:${type}_stairs`,
        `supplementaries:${type}_slab`,
        `supplementaries:${type}_wall`,
    ])
])

/// createdieselgenerators ---------------------------------------------
export const createdieselgenerators = tags.item(category.masonry, [
    "createdieselgenerators:asphalt_block",
    "createdieselgenerators:asphalt_stairs",
    "createdieselgenerators:asphalt_slab",
])

/// createdeco ---------------------------------------------
for (const type in ["verdant", "red", "dean", "pearl", "umber", "scarlet", "dusk", "blue"]) {
    tags.item(category.masonry, [
        `createdeco:${type}_bricks`,
        `createdeco:short_${type}_bricks`,
        `createdeco:tiled_${type}_bricks`,
        `createdeco:long_${type}_bricks`,
        `createdeco:corner_${type}_bricks`,
        `createdeco:cracked_${type}_bricks`,
        `createdeco:mossy_${type}_bricks`,
    ])

    for (const block of ["stairs", "slab", "wall"]) {
        tags.item(category.masonry, [
            `createdeco:${type}_brick_${block}`,
            `createdeco:short_${type}_brick_${block}`,
            `createdeco:tiled_${type}_brick_${block}`,
            `createdeco:long_${type}_brick_${block}`,
            `createdeco:cracked_${type}_brick_${block}`,
            `createdeco:mossy_${type}_brick_${block}`,
        ])
    }
}
