import * as tags from "@lib/tags.ts"
import * as weaponTags from "./category/weapons.ts"

tags.item("swordblockingmechanics:can_perform_sword_blocking", [
    "#minecraft:axes",

    ...weaponTags.aquamirae,
    ...weaponTags.samurai_dynasty
])
