import * as tags from "@lib/data/tags.ts"
import { categoryTag } from "@root/insomnia/utils.ts";
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.brewing, {
    title : "Bebidas & Poções",
    icon  : "minecraft:item/potion"
})

tags.item(category.brewing, [
    "minecraft:honey_bottle",
    "minecraft:glass_bottle",
    "minecraft:milk_bucket",
    "minecraft:potion",
])

/// irons_spellbooks ---------------------------------------------
export const irons_spellbooks = tags.item(category.brewing, [
    "irons_spellbooks:oakskin_elixir",
    "irons_spellbooks:greater_oakskin_elixir",
    "irons_spellbooks:greater_healing_potion",
    "irons_spellbooks:invisibility_elixir",
    "irons_spellbooks:greater_invisibility_elixir",
    "irons_spellbooks:evasion_elixir",
    "irons_spellbooks:greater_evasion_elixir",
    "irons_spellbooks:fire_ale",
    "irons_spellbooks:netherward_tincture",
])

/// create ---------------------------------------------
export const create = tags.item(category.brewing, [
    "create:builders_tea",
])

/// brewinandchewin ---------------------------------------------
export const brewinandchewin = tags.item(category.brewing, [
    "brewinandchewin:tankard",
    "brewinandchewin:beer",
    "brewinandchewin:vodka",
    "brewinandchewin:mead",
    "brewinandchewin:rice_wine",
    "brewinandchewin:pale_jane",
    "brewinandchewin:egg_grog",
    "brewinandchewin:glittering_grenadine",
    "brewinandchewin:saccharine_rum",
    "brewinandchewin:salty_folly",
    "brewinandchewin:bloody_mary",
    "brewinandchewin:red_rum",
    "brewinandchewin:strongroot_ale",
    "brewinandchewin:steel_toe_stout",
    "brewinandchewin:dread_nog",
    "brewinandchewin:withering_dross",
])
