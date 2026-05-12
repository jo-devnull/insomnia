import * as tags from "@lib/data/tags.ts"
import { categoryTag } from "@root/insomnia/utils.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.farming, {
    title : "Agricultura",
    icon  : "farmersdelight:item/tomato"
})

tags.item(category.farming, [
    "#minecraft:dirt",
    "#minecraft:saplings",
    "#forge:mushrooms",
    "#forge:seeds",
    "#forge:crops",

    "minecraft:bamboo",
    "minecraft:sugar_cane",
    "minecraft:cactus",
    "minecraft:pumpkin",
    "minecraft:melon",
    "minecraft:bee_nest",
    "minecraft:beehive",
    "minecraft:honeycomb_block",
    "minecraft:honey_block",
    "minecraft:composter",
    "minecraft:bone_meal",
    "minecraft:water_bucket",
])

/// farmersdelight ---------------------------------------------
export const farmersdelight = tags.item(category.farming, [
    "farmersdelight:carrot_crate",
    "farmersdelight:potato_crate",
    "farmersdelight:beetroot_crate",
    "farmersdelight:cabbage_crate",
    "farmersdelight:tomato_crate",
    "farmersdelight:onion_crate",
    "farmersdelight:rice_bag",
])

/// farm_and_charm ---------------------------------------------
export const farm_and_charm = tags.item(category.farming, [
    "farm_and_charm:lettuce_bag",
    "farm_and_charm:tomato_bag",
    "farm_and_charm:carrot_bag",
    "farm_and_charm:potato_bag",
    "farm_and_charm:onion_bag",
    "farm_and_charm:beetroot_bag",
    "farm_and_charm:corn_bag",
    "farm_and_charm:strawberry_bag",
    "farm_and_charm:flour_bag",
    "farm_and_charm:oat_ball",
    "farm_and_charm:barley_ball",
    "farm_and_charm:fertilized_soil",
    "farm_and_charm:fertilized_farmland",
    "farm_and_charm:feeding_trough",
    "farm_and_charm:water_sprinkler",
    "farm_and_charm:silo_wood",
    "farm_and_charm:silo_copper",
    "farm_and_charm:pitchfork",
    "farm_and_charm:supply_cart",
    "farm_and_charm:plow",
    "farm_and_charm:mincer",
    "farm_and_charm:crafting_bowl",
    "farm_and_charm:fertilizer",
    "farm_and_charm:compost",
    "farm_and_charm:scarecrow",
])
