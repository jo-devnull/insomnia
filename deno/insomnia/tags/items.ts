import * as tags from "@lib/tags.ts"
import * as weaponTags from "@root/category/tags/weapons.ts"

tags.item("swordblockingmechanics:can_perform_sword_blocking", [
    "#minecraft:axes",

    ...weaponTags.aquamirae,
    ...weaponTags.samurai_dynasty
])
