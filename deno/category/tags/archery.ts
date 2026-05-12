import * as tags from "@lib/data/tags.ts"
import { categoryTag } from "@root/insomnia/utils.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.archery, {
    title : "Arquearia",
    icon  : "minecraft:item/bow"
})

tags.item(category.archery, [
    "#c:bows",
    "#forge:bows",
    "#minecraft:arrows",
])
