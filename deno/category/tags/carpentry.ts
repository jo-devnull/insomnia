import * as tags from "@lib/data/tags.ts"
import { categoryTag } from "@root/insomnia/utils.ts";
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.carpentry, {
    title : "Carpintaria",
    icon  : "ecologics:item/azalea_door"
})

tags.item(category.carpentry, [
    "#minecraft:planks",
    "#minecraft:wooden_doors",
    "#minecraft:wooden_trapdoors",
    "#minecraft:wooden_stairs",
    "#minecraft:wooden_slabs",
    "#minecraft:wooden_fences",
    "#minecraft:fence_gates",
])

/// supplementaries ---------------------------------------------
export const supplementaries = tags.item(category.carpentry, [
    "supplementaries:fine_wood",
    "supplementaries:fine_wood_stairs",
    "supplementaries:fine_wood_slab",
])
