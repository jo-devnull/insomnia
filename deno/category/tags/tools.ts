import * as tags from "@lib/data/tags.ts"
import { ResourceLocation } from "@lib/core/resource.ts"
import { categoryTag } from "@root/insomnia/utils.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.tools, {
    title : "Ferramentas",
    icon  : "kobolds:item/kobold_iron_pickaxe"
})

tags.item(category.tools, [
    "#forge:tools/knives",
    "#minecraft:axes",
    "#forge:tools/axes",
    "#minecraft:hoes",
    "#forge:tools/hoes",
    "#minecraft:shovels",
    "#forge:tools/shovels",
    "#minecraft:pickaxes",
    "#forge:tools/pickaxes",
])

/// create ---------------------------------------------
export const create = tags.item(category.tools, [
    "create:potato_cannon",
    "create:extendo_grip",
    "create:wand_of_symmetry",
])

/// create_ironworks ---------------------------------------------
export const create_ironworks = tags.item(category.tools,
    [
        "copper",
        "gold",
        "iron",
        "bronze",
        "brass",
        "steel",
        "netherite",
    ].flatMap<ResourceLocation>(mat => [
        `create_ironworks:${mat}_paxel`,
        `create_ironworks:${mat}_hammer`
    ])
)
