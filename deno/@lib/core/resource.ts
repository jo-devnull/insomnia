import { namespaceof, pathof } from "@lib/core/utils.ts"
import { register } from "@lib/core/core.ts"

export type ResourceLocation = "*" | `${string}:${string}`
export type ResourceType = "assets" | "data" | "resource" | "config"

export interface Serializer {
    serialize: (obj: unknown) => string
}

export class Resource<T = unknown> {
    id : ResourceLocation
    type : ResourceType
    content : T

    constructor(id: ResourceLocation, type: ResourceType, content: T) {
        this.id = id;
        this.type = type;
        this.content = content;
    }

    public static asset<T>(path: ResourceLocation, content: T) {
        return new Resource(path, "assets", content);
    }

    public static data<T>(path: ResourceLocation, content: T) {
        return new Resource(path, "data", content);
    }

    public amends<S>(object: S) {
        return new Resource<S & T>(this.id, this.type, { ...object, ...this.content })
    }

    public prefix(prefix: string): Resource<T> {
        const newPath: ResourceLocation = `${namespaceof(this.id)}:${prefix}/${pathof(this.id)}`;
        return new Resource(newPath, this.type, this.content);
    }

    public getPath() {
        const [namespace, path] = this.id.split(":");
        return `${this.type}/${namespace}/${path}.json`
    }

    public getSerializer(): Serializer {
        return {
            serialize: (object) => JSON.stringify(object, null, 4)
        }
    }

    public getContents() {
        return this.getSerializer().serialize(this.content)
    }

    public register() {
        register(this);
    }
}

export class MCMeta extends Resource {
    constructor() {
        super("resource:pack.mcmeta", "resource", {
            pack: {
                pack_format: 48,
                description: "Generated data pack"
            }
        })
    }

    public static create() {
        return new MCMeta();
    }

    override getPath(): string {
        return "pack.mcmeta"
    }
}

export class ConfigFile<T> extends Resource<T> {
    constructor(filePath: string, data: T) {
        super(`config:${filePath}`, "config", data);
    }

    public static from<T>(filePath: string, data: T) {
        return new ConfigFile(filePath, data).register();
    }

    override getPath(): string {
        return "config/" + pathof(this.id);
    }
}
