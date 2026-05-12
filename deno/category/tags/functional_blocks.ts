import * as tags from "@lib/data/tags.ts"
import { categoryTag } from "@root/insomnia/utils.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.functional_blocks, {
    title: "Blocos Funcionais",
    icon: "create:item/controls"
})

tags.item(category.functional_blocks, [
    "minecraft:soul_campfire",
    "minecraft:composter",
    "minecraft:note_block",
    "minecraft:jukebox",
    "minecraft:cauldron",
    "minecraft:bell",
    "minecraft:beacon",
    "minecraft:ladder",
    "minecraft:scaffolding",
    "minecraft:armor_stand",
    "minecraft:bookshelf",
    "minecraft:chiseled_bookshelf",
    "minecraft:lectern",
    "minecraft:chest",
    "minecraft:barrel",
    "minecraft:ender_chest",
])

/// create ---------------------------------------------
export const create = tags.item(category.functional_blocks, [
    "create:andesite_scaffolding",
    "create:brass_scaffolding",
    "create:copper_scaffolding",
    "create:contraption_controls",
    "create:deployer",
    "create:track_station",
    "create:track_signal",
    "create:track_observer",
    "create:controls",
    "create:content_observer",
    "create:item_hatch",
    "create:display_board",
    "create:nixie_tube",
    "create:peculiar_bell",
    "create:haunted_bell",
])

/// supplementaries ---------------------------------------------
export const supplementaries = tags.item(category.functional_blocks, [
    "supplementaries:speaker_block",
    "supplementaries:urn",
    "supplementaries:hat_stand",
    "supplementaries:hourglass",
    "supplementaries:jar",
    "supplementaries:cage",
    "supplementaries:safe",
    "supplementaries:sack",
    "supplementaries:wind_vane",
    "supplementaries:turn_table",
    "supplementaries:spring_launcher",
    "supplementaries:cannon",
    "supplementaries:faucet",
    "supplementaries:relayer",
    "supplementaries:crystal_display",
    "supplementaries:bellows",
    "supplementaries:lock_block",
])

/// brewinandchewin ---------------------------------------------
export const brewinandchewin = tags.item(category.functional_blocks, [
    "brewinandchewin:keg",
    "brewinandchewin:heating_cask",
    "brewinandchewin:ice_crate",
    "brewinandchewin:coaster",
])

/// waystones ---------------------------------------------
export const waystones = tags.item(category.functional_blocks, [
    "waystones:waystone",
    "waystones:mossy_waystone",
    "waystones:sandy_waystone",
    "waystones:sharestone",
])

/// cold_sweat ---------------------------------------------
export const cold_sweat = tags.item(category.functional_blocks, [
    "cold_sweat:thermolith",
    "cold_sweat:hearth",
    "cold_sweat:boiler",
    "cold_sweat:icebox",
    "cold_sweat:smokestack",
])

/// clanginghowl ---------------------------------------------
export const clanginghowl = tags.item(category.functional_blocks, [
    "clanginghowl:crystal_former",
])

/// farm_and_charm ---------------------------------------------
export const farm_and_charm = tags.item(category.functional_blocks, [
    "farm_and_charm:water_sprinkler",
    "farm_and_charm:silo_wood",
    "farm_and_charm:silo_copper",
    "farm_and_charm:chicken_coop",
])

/// alexscaves ---------------------------------------------
export const alexscaves = tags.item(category.functional_blocks, [
    "alexscaves:quarry",
])

/// simpleradio ---------------------------------------------
export const simpleradio = tags.item(category.functional_blocks, [
    "simpleradio:radio",
    "simpleradio:speaker",
    "simpleradio:microphone",
    "simpleradio:transmitter",
    "simpleradio:receiver",
])
