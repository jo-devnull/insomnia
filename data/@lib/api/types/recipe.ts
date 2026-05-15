import { ResourceLocation, Int, Float } from "./types.ts"

export type IIngredient = {
    tag?: ResourceLocation,
    item?: ResourceLocation,
    type?: ResourceLocation,
    fluid?: ResourceLocation,
    amount?: Int
}

export type Output = {
    id: ResourceLocation;
    count?: Int;
    chance?: Float;
}

export type Ingredient = IIngredient | IIngredient[] | Ingredient[];

export interface VanillaRecipe {
    category?: string
    group?: string
}

export interface Shaped extends VanillaRecipe {
    key: Record<string, Ingredient>
    pattern: string[]
    result: Output
}

export interface Shapeless extends VanillaRecipe {
    ingredients: Ingredient[]
    result: Output
}

export interface Smelting extends VanillaRecipe {
    cookingtime: Float
    experience: Float
    ingredient: Ingredient
    result: Output
}

export interface Blasting extends VanillaRecipe {
    cookingtime: Float
    experience: Float
    ingredient: Ingredient
    result: Output
}

export interface SmithingTrim extends VanillaRecipe {
    addition: IIngredient
    base: IIngredient
    template: IIngredient
}

export interface SmithingTransform extends VanillaRecipe {
    template: IIngredient
    base: IIngredient
    addition: IIngredient
    result: Output
}

export type HeatType = "none" | "lowheated" | "heated" | "superheated";

export interface ProcessingRecipe {
    heat_requirement?: HeatType
    ingredients: Ingredient[]
    results: Output[]
}

export interface Mixing      extends ProcessingRecipe {}
export interface Compacting  extends ProcessingRecipe {}
export interface Pressing    extends ProcessingRecipe {}
export interface FanBlasting extends ProcessingRecipe {}
export interface FanSmoking  extends ProcessingRecipe {}
export interface Splashing   extends ProcessingRecipe {}
export interface Haunting    extends ProcessingRecipe {}

export interface SequencedAssembly {
    loops: Int
    sequence: ProcessingRecipe[]
    ingredient: Ingredient
    transitional_item: IIngredient
    results: Output[]
}

export interface CastingInBasin {
    heat_requirement?: HeatType
    ingredients: Ingredient[]
    processing_time: Float
    result: { item: Output }
}

export interface CastingInTable extends CastingInBasin {}

export interface Alloying {
    heat_requirement?: HeatType
    ingredients: Ingredient[]
    processing_time: Float
    results: Output[]
}
