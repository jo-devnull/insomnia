import { Resource, ResourceLocation, ResourceType } from "./api/types/types.ts";
import { splitloc } from "./utils.ts";

export type MergeFunc = (input: Resource, res: Resource) => Resource;

const Resources : Map<string, Resource> = new Map();
const MergeMap  : Map<string, MergeFunc> = new Map();

export const getResources = () => Resources.entries();

export function register(type: ResourceType, id: string, res: Resource) {
    const path = (type == "*" ? "" : type + "/") + splitloc(id as ResourceLocation).join("/");

    if (Resources.has(path)) {
        const input = Resources.get(path);

        for (const [pattern, fun] of MergeMap.entries()) {
            if (id.includes(pattern)) {
                res = fun(input!, res);
            }
        }
    }

    Resources.set(path, res);
}

// merge tags
MergeMap.set(":tags/", (input, res) => {
    type Tag = { replace: boolean, values: ResourceLocation[], remove: ResourceLocation[] };

    return {
        replace : (input as Tag).replace,
        values  : (input as Tag).values.concat((res as Tag).values),
        remove  : (input as Tag).remove.concat((res as Tag).remove),
    }
});
