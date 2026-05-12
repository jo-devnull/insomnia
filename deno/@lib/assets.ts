import { ResourceLocation } from "@lib/core/resource.ts"
import { Resource } from "@lib/core/resource.ts"
import { Mapping } from "@lib/recipe.ts"

export type Model = {
    parent?: ResourceLocation,
}

export const lang = (id: ResourceLocation, lang: Mapping<string>) =>
    Resource.asset(id, lang).prefix("lang").register();

export const model = {
    tag: (id: ResourceLocation, model: Model) =>
        Resource.asset(id, model).prefix("models/tag/item").register(),

    item: <T>(id: ResourceLocation, model: T & Model) =>
        Resource.asset(id, model).prefix("models/item").register(),

    block: <T>(id: ResourceLocation, model: T & Model) =>
        Resource.asset(id, model).prefix("models/block").register(),
}
