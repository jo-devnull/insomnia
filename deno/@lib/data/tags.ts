import { Resource, ResourceLocation } from "@lib/core/resource.ts"
import { Tag, TagEntry } from "@lib/tags.ts"

type TagFunction = (id: ResourceLocation, values: TagEntry[] | Tag) => TagEntry[];

function tagFunction(prefix: string): TagFunction {
    return (id, values) => {
        let tags = values;

        if (Array.isArray(values))
            tags = { replace: false, values }

        Resource.data(id, tags).prefix(prefix).register();
        return values as TagEntry[];
    }
}

export const item = tagFunction("tags/item");
export const block = tagFunction("tags/block");
export const entity = tagFunction("tags/entity_type");
export const biome = tagFunction("tags/worldgen/biome");
export const structure = tagFunction("tags/worldgen/structure");
