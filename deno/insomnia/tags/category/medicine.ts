import * as tags from "@lib/data/tags.ts"
import { categoryTag } from "@root/insomnia/utils.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.medicine, {
    title : "Medicina",
    icon  : "marbledsfirstaid:item/medkit"
})

tags.item(category.medicine, [
    "minecraft:golden_apple",
    "minecraft:enchanted_golden_apple",
])

/// marbledsfirstaid ---------------------------------------------
export const marbledsfirstaid = tags.item(category.medicine, [
    "#marbledsfirstaid:firstaiditems",
    "#marbledsfirstaid:pills",
    "#marbledsfirstaid:ingredients",
    "#marbledsfirstaid:medicines",
    "#marbledsfirstaid:syringes",
])

/// irons_spellbooks ---------------------------------------------
export const irons_spellbooks = tags.item(category.medicine, [
    "irons_spellbooks:greater_healing_potion",
])
