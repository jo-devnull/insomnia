import { ResourceLocation } from "@lib/core/resource.ts";

export type Int = number;
export type Float = number;
export type Mapping<V> = { [key: string]: V }

export type IIngredient = {
    tag?: ResourceLocation;
    item?: ResourceLocation;
    fluid?: ResourceLocation;
}

export type Ingredient = IIngredient | IIngredient[];
