import * as tags from "@lib/data/tags.ts"
import { ResourceLocation } from "@lib/core/resource.ts"
import { categoryTag } from "@root/insomnia/utils.ts";
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.construction, {
    title : "Construção Industrial",
    icon  : "create:item/industrial_iron_block"
})

for (const type of [
    "exposed",
    "weathered",
    "oxidized",
    "waxed",
    "waxed_exposed",
    "waxed_weathered",
    "waxed_oxidized",
]) {
    tags.item(category.construction, [
        `minecraft:${type}_copper`,
        `minecraft:${type}_cut_copper`,
        `minecraft:${type}_cut_copper_stairs`,
        `minecraft:${type}_cut_copper_slab`,
    ])
}

tags.item(category.construction, [
    "minecraft:iron_block",
    "minecraft:iron_bars",
    "minecraft:iron_door",
    "minecraft:iron_trapdoor",
    "minecraft:heavy_weighted_pressure_plate",
    "minecraft:gold_block",
    "minecraft:light_weighted_pressure_plate",
    "minecraft:copper_block",
    "minecraft:cut_copper",
    "minecraft:cut_copper_stairs",
    "minecraft:cut_copper_slab"
])

/// create ---------------------------------------------
export const create = tags.item(category.construction, [
    "create:metal_girder",
    "create:copycat_step",
    "create:copycat_panel",
    "create:zinc_block",
    "create:andesite_alloy_block",
    "create:industrial_iron_block",
    "create:weathered_iron_block",
    "create:brass_block",
    "create:bound_cardboard_block",
    "create:copper_shingle_slab",
    "create:exposed_copper_shingle_slab",
    "create:weathered_copper_shingle_slab",
    "create:oxidized_copper_shingle_slab",
    "create:copper_shingle_stairs",
    "create:exposed_copper_shingle_stairs",
    "create:weathered_copper_shingle_stairs",
    "create:oxidized_copper_shingle_stairs",
    "create:waxed_copper_shingle_slab",
    "create:waxed_exposed_copper_shingle_slab",
    "create:waxed_weathered_copper_shingle_slab",
    "create:waxed_oxidized_copper_shingle_slab",
    "create:waxed_copper_shingle_stairs",
    "create:waxed_exposed_copper_shingle_stairs",
    "create:waxed_weathered_copper_shingle_stairs",
    "create:waxed_oxidized_copper_shingle_stairs",
    "create:copper_tile_slab",
    "create:exposed_copper_tile_slab",
    "create:weathered_copper_tile_slab",
    "create:oxidized_copper_tile_slab",
    "create:copper_tile_stairs",
    "create:exposed_copper_tile_stairs",
    "create:weathered_copper_tile_stairs",
    "create:oxidized_copper_tile_stairs",
    "create:waxed_copper_tile_slab",
    "create:waxed_exposed_copper_tile_slab",
    "create:waxed_weathered_copper_tile_slab",
    "create:waxed_oxidized_copper_tile_slab",
    "create:waxed_copper_tile_stairs",
    "create:waxed_exposed_copper_tile_stairs",
    "create:waxed_weathered_copper_tile_stairs",
    "create:waxed_oxidized_copper_tile_stairs",
    "create:copper_shingles",
    "create:exposed_copper_shingles",
    "create:weathered_copper_shingles",
    "create:oxidized_copper_shingles",
    "create:waxed_copper_shingles",
    "create:waxed_exposed_copper_shingles",
    "create:waxed_weathered_copper_shingles",
    "create:waxed_oxidized_copper_shingles",
    "create:copper_tiles",
    "create:exposed_copper_tiles",
    "create:weathered_copper_tiles",
    "create:oxidized_copper_tiles",
    "create:waxed_copper_tiles",
    "create:waxed_exposed_copper_tiles",
    "create:waxed_weathered_copper_tiles",
    "create:waxed_oxidized_copper_tiles",
])

/// createdeco ---------------------------------------------
export const createdeco = tags.item(category.construction,
    [
        "andesite",
        "brass",
        "iron",
        "copper",
        "industrial_iron",
        "zinc"
    ].flatMap<ResourceLocation>(material => [
        `createdeco:${material}_bars`,
        `createdeco:${material}_bars_overlay`,
        `createdeco:${material}_catwalk`,
        `createdeco:${material}_catwalk_stairs`,
        `createdeco:${material}_catwalk_railing`,
        `createdeco:${material}_support_wedge`,
        `createdeco:${material}_facade`,
        `createdeco:${material}_hull`,
        `createdeco:${material}_support`,
        `createdeco:${material}_sheet_metal`,
        `createdeco:${material}_door`,
        `createdeco:${material}_trapdoor`,
        `createdeco:locked_${material}_door`,
    ])
)
