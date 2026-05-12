import * as tags from "@lib/data/tags.ts"
import { categoryTag } from "@root/insomnia/utils.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.enchanting, {
    title : "Encantamento",
    icon  : "minecraft:item/bookshelf"
})

tags.item(category.enchanting, [
    "minecraft:enchanting_table",
    "minecraft:bookshelf",
    "minecraft:chiseled_bookshelf",
    "minecraft:lectern",
    "minecraft:book",
    "minecraft:enchanted_book",
])

/// disenchanting_table ---------------------------------------------
export const disenchanting_table = tags.item(category.enchanting, [
    "disenchanting_table:disenchanting_table",
])
