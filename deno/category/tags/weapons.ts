import * as tags from "@lib/data/tags.ts"
import { categoryTag } from "@root/insomnia/utils.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.weapons, {
    title : "Armas",
    icon  : "simply_swords:item/iron_katana"
})

tags.item(category.weapons, [
    "#minecraft:axes",
    "#minecraft:swords",
    "#c:weapons",
    "#c:swords",
    "#c:axes",
    "minecraft:trident",
    "minecraft:shield",
    "minecraft:mace"
])

/// aquamirae ---------------------------------------------
export const aquamirae = tags.item(category.weapons, [
    "aquamirae:terrible_sword",
    "aquamirae:fin_cutter",
    "aquamirae:divider",
    "aquamirae:whisper_of_the_abyss",
    "aquamirae:remnants_saber",
    "aquamirae:poisoned_blade",
    "aquamirae:coral_lance",
    "aquamirae:dagger_of_greed",
])

/// samurai_dynasty ---------------------------------------------
export const samurai_dynasty = tags.item(category.weapons, [
    "samurai_dynasty:katana",
    "samurai_dynasty:wakizashi",
    "samurai_dynasty:naginata",
    "samurai_dynasty:nagamaki",
    "samurai_dynasty:shuko",
    "samurai_dynasty:tetsubo",
    "samurai_dynasty:odachi",
    "samurai_dynasty:tonbukiri",
    "samurai_dynasty:kamayari",
    "samurai_dynasty:kunai",
    "samurai_dynasty:kama",
    "samurai_dynasty:sai",
    "samurai_dynasty:shuriken",
    "samurai_dynasty:katana_netherite",
    "samurai_dynasty:wakizashi_netherite",
    "samurai_dynasty:katana_oni",
    "samurai_dynasty:katana_kitsune",
    "samurai_dynasty:katana_kitsune_blue",
    "samurai_dynasty:katana_akaname",
    "samurai_dynasty:katana_jorogumo",
    "samurai_dynasty:naginata_netherite",
    "samurai_dynasty:nagamaki_netherite",
    "samurai_dynasty:shuko_netherite",
    "samurai_dynasty:tetsubo_netherite",
    "samurai_dynasty:odachi_netherite",
    "samurai_dynasty:tonbukiri_netherite",
    "samurai_dynasty:kamayari_netherite",
    "samurai_dynasty:kunai_netherite",
    "samurai_dynasty:kama_netherite",
    "samurai_dynasty:sai_netherite",
])
