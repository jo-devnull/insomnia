import { Resource, ResourceLocation } from "@root/@lib/core/resource.ts"
import * as Recipe from "@lib/types/recipe.ts"

export const minecraft = {
    shaped(id: ResourceLocation, recipe: Recipe.CraftingShaped) {
        Resource.data(id, recipe)
            .amends({ type: "minecraft:crafting_shaped" })
            .prefix("recipe/crafting")
            .register();
    },

    shapeless(id: ResourceLocation, recipe: Recipe.CraftingShapeless) {
        Resource.data(id, recipe)
            .amends({ type: "minecraft:crafting_shapeless" })
            .prefix("recipe/crafting")
            .register();
    },

    smelting(id: ResourceLocation, recipe: Recipe.Smelting) {
        Resource.data(id, recipe)
            .amends({ type: "minecraft:smelting" })
            .prefix("recipe/smelting")
            .register();
    },

    blasting(id: ResourceLocation, recipe: Recipe.Blasting) {
        Resource.data(id, recipe)
            .amends({ type: "minecraft:blasting" })
            .prefix("recipe/blasting")
            .register();
    }
}

export const create = {
    mixing(id: ResourceLocation, recipe: Recipe.CreateMixing) {
        Resource.data(id, recipe)
            .amends({ type: "create:mixing" })
            .prefix("recipe/mixing")
            .register();
    },

    pressing(id: ResourceLocation, recipe: Recipe.CreatePressing) {
        Resource.data(id, recipe)
            .amends({ type: "create:pressing" })
            .prefix("recipe/pressing")
            .register();
    },

    splashing(id: ResourceLocation, recipe: Recipe.CreateSplashing) {
        Resource.data(id, recipe)
            .amends({ type: "create:splashing" })
            .prefix("recipe/splashing")
            .register();
    },

    polishing(id: ResourceLocation, recipe: Recipe.SandpaperPolishing) {
        Resource.data(id, recipe)
            .amends({ type: "create:sandpaper_polishing" })
            .prefix("recipe/polishing")
            .register();
    },
}

export const metallurgy = {
    castingInTable(id: ResourceLocation, recipe: Recipe.CastingInTable) {
        Resource.data(id, recipe)
            .amends({ type: "createmetallurgy:casting_in_table" })
            .prefix("recipe/casting")
            .register();
    },

    castingInBasin(id: ResourceLocation, recipe: Recipe.CastingInBasin) {
        Resource.data(id, recipe)
            .amends({ type: "createmetallurgy:casting_in_basin" })
            .prefix("recipe/casting")
            .register();
    },

    melting(id: ResourceLocation, recipe: Recipe.Melting) {
        Resource.data(id, recipe)
            .amends({ type: "createmetallurgy:melting" })
            .prefix("recipe/melting")
            .register();
    },
}


export const farmersdelight = {
    cutting(id: ResourceLocation, recipe: Recipe.Cutting) {
        Resource.data(id, recipe)
            .amends({ type: "farmersdelight:cutting" })
            .prefix("recipe/cutting")
            .register();
    }
}
