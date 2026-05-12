import * as tags from "@lib/data/tags.ts"
import { categoryTag } from "@root/insomnia/utils.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.fishing, {
    title : "Pescaria",
    icon  : "aquaculture:item/iron_fishing_rod"
})

tags.item(category.fishing, [
    "#forge:tools/fishing_rods",
    "minecraft:bucket",
    "#c:entity_water_buckets",
    "#minecraft:fishes",
])

/// fishermans_trap ---------------------------------------------
export const fishermans_trap = tags.item(category.fishing, [
    "fishermans_trap:fishtrap",
])

/// aquaculture ---------------------------------------------
export const aquaculture = tags.item(category.fishing, [
    "aquaculture:worm",
    "aquaculture:fishing_line",
    "aquaculture:bobber",
    "aquaculture:oak_fish_mount",
    "aquaculture:spruce_fish_mount",
    "aquaculture:birch_fish_mount",
    "aquaculture:jungle_fish_mount",
    "aquaculture:acacia_fish_mount",
    "aquaculture:dark_oak_fish_mount",
    "aquaculture:tackle_box",
    "aquaculture:worm_farm",
    "aquaculture:iron_hook",
    "aquaculture:gold_hook",
    "aquaculture:diamond_hook",
    "aquaculture:light_hook",
    "aquaculture:heavy_hook",
    "aquaculture:double_hook",
    "aquaculture:redstone_hook",
    "aquaculture:note_hook",
    "aquaculture:nether_star_hook",
])
