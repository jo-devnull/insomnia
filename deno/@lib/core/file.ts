import * as Path from "@std/path"
import * as Toml from "@std/toml"

export type Format = (file: string) => any;

const ROOT = Path.dirname(Path.dirname(Path.dirname(import.meta.dirname!)));

export const TextFormat: Format = (data) => data;
export const JsonFormat: Format = (data) => JSON.parse(data);
export const TomlFormat: Format = (data) => Toml.parse(data);

export function getRootDir() {
    return ROOT;
}

export function read<T = string>(filepath: string, format: Format = TextFormat): T {
    return format(Deno.readTextFileSync(Path.join(ROOT, filepath))) as T;
}
