import { ResourceLocation } from "@root/@lib/core/resource.ts";

export type Namespace = { [key: string]: ResourceLocation };

export function namespaceof(location: ResourceLocation) {
    return location.split(":").at(0)?.trim()
}

export function pathof(location: ResourceLocation) {
    return location.split(":").at(1)?.trim()
}

export function namespace(name: string): Namespace {
    return new Proxy({}, {
        get: (_, k) => `${name}:${k.toString()}`
    });
}

export function mapping(namespace: string, ...entries: string[]) {
    return entries.map(id => {
        if (id.startsWith("#"))
            return id;

        return namespace + ":" + id;
    }) as ResourceLocation[];
}
