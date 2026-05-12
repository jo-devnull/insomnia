import * as tags from "@lib/data/tags.ts"
import { BlockColors, categoryTag } from "@root/insomnia/utils.ts"
import { ResourceLocation } from "@lib/core/resource.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.decoration, {
    title : "Decoração",
    icon  : "supplementaries:item/present_red"
})

tags.item(category.decoration, [
    "#minecraft:wool_carpets",
    "minecraft:cyan_banner",
    "minecraft:carved_pumpkin",
    "minecraft:jack_o_lantern",
    "#minecraft:candles",
    "minecraft:torch",
    "minecraft:soul_torch",
    "minecraft:lantern",
    "minecraft:soul_lantern",
    "minecraft:redstone_lamp",
    "minecraft:bell",
    "minecraft:flower_pot",
    "minecraft:decorated_pot",
    "minecraft:item_frame",
    "minecraft:glow_item_frame",
    "minecraft:painting",
    "#forge:heads",
    "#forge:chimneys",
])

/// create ---------------------------------------------
export const create = tags.item(category.decoration, [
    "create:peculiar_bell",
    "create:haunted_bell",
    "create:desk_bell",
    "create:red_table_cloth",
    "create:andesite_table_cloth",
    "create:copper_table_cloth",
    "create:rose_quartz_lamp",
])

/// supplementaries ---------------------------------------------
export const supplementaries = tags.item(category.decoration, [
    "supplementaries:statue",
    "supplementaries:globe",
    "supplementaries:globe_sepia",
    "supplementaries:goblet",
    "supplementaries:flag_purple",
    "supplementaries:sconce",
    "supplementaries:sconce_soul",
    "supplementaries:sconce_lever",
    "supplementaries:stone_lamp",
    "supplementaries:blackstone_lamp",
    "supplementaries:deepslate_lamp",
    "supplementaries:fire_pit",
    "supplementaries:pedestal",
    "supplementaries:blackboard",
    "supplementaries:notice_board",
    "supplementaries:clock_block",
    "supplementaries:awning",
    "supplementaries:present",
    "supplementaries:candle_holder",

    ...BlockColors.flatMap<ResourceLocation>(color => [
        `supplementaries:candle_holder_${color}`,
        `supplementaries:awning_${color}`,
        `supplementaries:present_${color}`,
    ])
])

/// redeco ---------------------------------------------
export const redeco = tags.item(category.decoration, BlockColors.flatMap<ResourceLocation>(color => [
    `redeco:${color}_lamp`,
    `redeco:${color}_paper_lantern`,
    `redeco:${color}_fluffy_carpet`,
    `redeco:${color}_awning`,
]))

/// chimes ---------------------------------------------
export const chimes = tags.item(category.decoration, [
    "chimes:bamboo_chimes",
    "chimes:iron_chimes",
    "chimes:carved_bamboo_chimes",
    "chimes:copper_chimes",
    "chimes:amethyst_chimes",
    "chimes:glass_bells",
])

/// wallpapers ---------------------------------------------
export const wallpapers = tags.item(category.decoration, [
    "#wallpapers:wallpaper_rolls",
    "#wallpapers:skirting_boards",
])

/// paintable ---------------------------------------------
export const paintable = tags.item(category.decoration, [
    "#paintable:filled_paint_bucket",
])
