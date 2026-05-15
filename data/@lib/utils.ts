import { ResourceLocation } from "./core.ts";

export const splitloc = (id: ResourceLocation) => id.split(":");

export const namespaceof = (id: ResourceLocation): string =>
    splitloc(id).at(0)!.trim();

export const pathof = (id: ResourceLocation): string =>
    splitloc(id).at(1)!.trim();

export const withprefix = (id: ResourceLocation, prefix: string): ResourceLocation => {
    const [nms, path] = splitloc(id);
    return `${nms}:${prefix}/${path}`;
}
