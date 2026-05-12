import * as tags from "@lib/data/tags.ts"
import { categoryTag } from "@root/insomnia/utils.ts";
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.armor, {
    title : "Armaduras",
    icon  : "deeperdarker:item/warden_chestplate"
})

tags.item(category.armor, [
    "#forge:armors",
    "#forge:armor/helmets",
    "#forge:armor/chestplates",
    "#forge:armor/leggings",
    "#forge:armor/boots",
    "#minecraft:head_armor",
    "#minecraft:chest_armor",
    "#minecraft:leg_armor",
    "#minecraft:foot_armor",
])

/// immersive_armors ---------------------------------------------
for (const armor of [
    "bone",
    "wither",
    "warrior",
    "heavy",
    "robe",
    "slime",
    "divine",
    "prismarine",
    "wooden",
    "steampunk",
]) {
    tags.item(category.armor, [
        `immersive_armors:${armor}_helmet`,
        `immersive_armors:${armor}_chestplate`,
        `immersive_armors:${armor}_leggings`,
        `immersive_armors:${armor}_boots`,
    ])
}

/// aquamirae ---------------------------------------------
export const aquamirae = tags.item(category.armor, [
    "aquamirae:terrible_helmet",
    "aquamirae:terrible_chestplate",
    "aquamirae:terrible_leggings",
    "aquamirae:terrible_boots",
    "aquamirae:abyssal_heaume",
    "aquamirae:abyssal_brigantine",
    "aquamirae:abyssal_leggings",
    "aquamirae:abyssal_boots",
    "aquamirae:abyssal_tiara",
    "aquamirae:three_bolt_helmet",
    "aquamirae:three_bolt_suit",
    "aquamirae:three_bolt_leggings",
    "aquamirae:three_bolt_boots",
])

/// cataclysm ---------------------------------------------
export const cataclysm = tags.item(category.armor, [
    "cataclysm:bone_reptile_helmet",
    "cataclysm:bone_reptile_chestplate",
    "cataclysm:ignitium_helmet",
    "cataclysm:ignitium_chestplate",
    "cataclysm:ignitium_elytra_chestplate",
    "cataclysm:ignitium_leggings",
    "cataclysm:ignitium_boots",
    "cataclysm:cursium_helmet",
    "cataclysm:cursium_chestplate",
    "cataclysm:cursium_leggings",
    "cataclysm:cursium_boots",
    "cataclysm:monstrous_helm",
    "cataclysm:bloom_stone_pauldrons",
])
