import { ResourceLocation } from "@lib/core/resource.ts"
import { pathof } from "@lib/core/utils.ts"

import * as assets from "@lib/assets.ts"

export const BlockColors = [
    "white",
    "light_gray",
    "gray",
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "cyan",
    "light_blue",
    "blue",
    "purple",
    "magenta",
    "pink"
]

export const VanillaWood = [
    "oak",
    "spruce",
    "birch",
    "jungle",
    "acacia",
    "dark_oak",
    "mangrove",
    "cherry",
    "bamboo",
    "crimson",
    "warped"
]

export type CategoryTag = {
    title: string,
    icon: ResourceLocation
}

export const categoryTag = (tag: ResourceLocation, { title, icon }: CategoryTag) => {
    const langkey = "tag.item.category." + pathof(tag)

    assets.lang("category:pt_br", { [langkey]: title })
    assets.model.tag(tag, { parent: icon })
}
