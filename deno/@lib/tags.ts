import { Resource, ResourceLocation } from "@root/@lib/core/resource.ts";

export type TagEntry = ResourceLocation;
export type Tag = { replace: boolean, values: TagEntry[] };

type TagFunction = (id: ResourceLocation, values: TagEntry[] | Tag) => TagEntry[];

function tagFunction(prefix: string): TagFunction {
    return (id, values) => {
        let tags = values;

        if (Array.isArray(values))
            tags = { replace: false, values }

        Resource.data<Tag>(id, tags as Tag).prefix(prefix).register();
        return values as TagEntry[];
    }
}

export const item = tagFunction("tags/item");
export const block = tagFunction("tags/block");
export const entity = tagFunction("tags/entity_type");
export const biome = tagFunction("tags/worldgen/biome");
export const structure = tagFunction("tags/worldgen/structure");
