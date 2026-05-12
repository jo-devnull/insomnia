import { ResourceLocation } from "@root/@lib/core/resource.ts";
import { Int, Float, Mapping, Ingredient, IIngredient } from "@root/@lib/types/types.ts";

export interface RecipeOutput {
    id: ResourceLocation;
    count?: Int
}

// deno-lint-ignore no-empty-interface
export interface Recipe { }

export interface CraftingShaped extends Recipe {
    key: Mapping<Ingredient>
    pattern: Array<string>
    result: RecipeOutput
}

export interface CraftingShapeless extends Recipe {
    ingredients: Mapping<Ingredient>
    result: RecipeOutput
}

export interface Smelting extends Recipe {
    result: RecipeOutput
    ingredient: IIngredient
    experience: Float
    cookingtime: Float
}

export interface Blasting extends Recipe {
    result: RecipeOutput
    ingredients: IIngredient
    experience: Float
    cookingtime: Float
}

export interface SmithingTransform extends Recipe {
    template: IIngredient
    base: IIngredient
    addition: IIngredient
    result: RecipeOutput
}

export interface LycheeItemInside extends Recipe {
    item_in: IIngredient
    block_in: IIngredient
    post: Array<any>
}

export interface LycheeBlockInteract extends Recipe {
    item_in: IIngredient
    block_in: IIngredient
    post: Array<any>
}

export interface CreateMixing extends Recipe {
    heatRequirement: "heated" | "superheated" | "none"
    ingredients: IIngredient[]
    results: RecipeOutput[]
}

export interface CreatePressing extends Recipe {
    heatRequirement: "heated" | "superheated" | "none"
    ingredients: Ingredient[]
    results: RecipeOutput[]
}

export interface CreateSplashing extends Recipe {
    ingredients: Ingredient[]
    results: RecipeOutput[]
}

export interface CastingInTable extends Recipe {
    processingTime: Float
    ingredients: Ingredient[]
    result: unknown
}

export interface Melting extends Recipe {
    heatRequirement: "lowheated" | "heated" | "superheated" | "none"
    processingTime: Float
    ingredients: Ingredient[]
    results: RecipeOutput[]
}

export interface Cutting extends Recipe {
    ingredients: Ingredient[]
    result: Array<RecipeOutput>
    tool: IIngredient
}

export interface SandpaperPolishing extends Recipe {
    ingredients: Ingredient[]
    results: RecipeOutput[]
}

export interface CastingInBasin extends Recipe {
    ingredients: Ingredient[]
    mold_consumed: boolean
    processingTime: Float
    result: RecipeOutput
}
