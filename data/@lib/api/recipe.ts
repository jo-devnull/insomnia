import * as Recipe from "./types/recipe.ts"

import { ResourceLocation } from "./types/types.ts"
import { pathof, withprefix } from "../utils.ts"
import { register } from "../core.ts"

function recipeType<R>(type: ResourceLocation, prefix: string = "*") {
    if (prefix == "*")
        prefix = pathof(type);

    return (id: ResourceLocation, recipe: R) => {
        register("data", withprefix(id, "recipe/" + prefix) + ".json", { type, ...recipe })
    }
}

export const shaped = recipeType<Recipe.Shaped>("minecraft:crafting_shaped", "crafting");
export const shapeless = recipeType<Recipe.Shapeless>("minecraft:crafting_shapeless", "crafting");
export const smelting = recipeType<Recipe.Smelting>("minecraft:smelting");
export const blasting = recipeType<Recipe.Blasting>("minecraft:blasting");

export const smithingTrim = recipeType<Recipe.SmithingTrim>("minecraft:smithing_trim", "smithing");
export const smithingTransform = recipeType<Recipe.SmithingTransform>("minecraft:smithing_transform", "smithing");

export const mixing = recipeType<Recipe.Mixing>("create:mixing");
export const pressing = recipeType<Recipe.Pressing>("create:pressing");
export const compacting = recipeType<Recipe.Compacting>("create:compacting");
export const splashing = recipeType<Recipe.Splashing>("create:splashing");
export const haunting = recipeType<Recipe.Haunting>("create:haunting");
export const fanSmoking = recipeType<Recipe.FanBlasting>("create:fan_smoking", "smoking");
export const fanBlasting = recipeType<Recipe.FanBlasting>("create:fan_blasting", "blasting");
export const sequencedAssembly = recipeType<Recipe.SequencedAssembly>("create:sequenced_assembly", "processing");

export const alloying = recipeType<Recipe.Alloying>("createmetallurgy:alloying");
export const castingInTable = recipeType<Recipe.CastingInTable>("createmetallurgy:casting_in_table");
export const castingInBasin = recipeType<Recipe.CastingInBasin>("createmetallurgy:casting_in_basin");
