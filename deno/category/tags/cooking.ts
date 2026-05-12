import * as tags from "@lib/data/tags.ts"
import { categoryTag } from "@root/insomnia/utils.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.cooking, {
    title : "Culinária",
    icon  : "farmersdelight:item/stove"
})

tags.item(category.cooking, [
    "minecraft:bucket",
    "minecraft:glass_bottle",
    "minecraft:furnace",
    "minecraft:smoker",
    "minecraft:campfire",
])

/// create ---------------------------------------------
export const create = tags.item(category.cooking, [
    "create:basin",
    "create:whisk",
    "create:honey_bucket",
    "create:chocolate_bucket",
    "create:blaze_burner",
    "create:mechanical_mixer",
    "create:spout",
    "create:depot",
])

/// brewinandchewin ---------------------------------------------
export const brewinandchewin = tags.item(category.cooking, [
    "brewinandchewin:keg",
    "brewinandchewin:heating_cask",
    "brewinandchewin:ice_crate",
    "brewinandchewin:coaster",
    "brewinandchewin:tankard",
    "brewinandchewin:unripe_flaxen_cheese_wheel",
    "brewinandchewin:flaxen_cheese_wheel",
    "brewinandchewin:unripe_scarlet_cheese_wheel",
    "brewinandchewin:scarlet_cheese_wheel",
])

/// farmersdelight ---------------------------------------------
export const farmersdelight = tags.item(category.cooking, [
    "farmersdelight:stove",
    "farmersdelight:cooking_pot",
    "farmersdelight:skillet",
    "farmersdelight:cutting_board",
    "farmersdelight:basket",
    "#farmersdelight:cabinets",
])

/// bakery ---------------------------------------------
export const bakery = tags.item(category.cooking, [
    "bakery:kitchen_sink",
    "bakery:baker_station",
    "bakery:wall_display",
    "bakery:cake_display",
    "bakery:cupcake_display",
    "bakery:cake_stand",
    "bakery:breadbox",
    "bakery:tray",
    "bakery:small_cooking_pot",
    "bakery:rolling_pin",
    "bakery:bread_knife",
    "bakery:bread_crate",
    "bakery:chocolate_box",
    "#c:jams",
])

/// candlelight ---------------------------------------------
export const candlelight = tags.item(category.cooking, [
    "candlelight:cooking_pot",
    "candlelight:cooking_pan",
    "candlelight:bowl",
    "candlelight:plate",
    "candlelight:glass",
    "candlelight:wine_glass",
    "candlelight:napkin",
    "candlelight:cloche",
    "candlelight:dinner_bell",
    "candlelight:cooking_hat",
    "candlelight:chefs_jacket",
    "candlelight:chefs_pants",
    "candlelight:chefs_boots",
    "candlelight:cobblestone_stove",
    "candlelight:cobblestone_kitchen_sink",
])

/// farm_and_charm ---------------------------------------------
export const farm_and_charm = tags.item(category.cooking, [
    "farm_and_charm:stove",
    "farm_and_charm:cooking_pot",
    "farm_and_charm:roaster",
])
