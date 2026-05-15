import * as Path from "@std/path"
import * as FileSystem from "@std/fs"

import { getResources, register } from "./core.ts"

register("*", "pack.mcmeta", {
    "pack": {
        "pack_format": 35,
        "description": "Insomnia Main Resources"
    }
});

export function build(outputDir: string) {
    if (FileSystem.existsSync(outputDir))
        Deno.removeSync(outputDir, { recursive: true });

    FileSystem.ensureDirSync(outputDir);

    for (const [key, resource] of getResources()) {
        const path = Path.join(outputDir, key);
        const json = JSON.stringify(resource, null, 4);

        console.info("Writing file", key);
        FileSystem.ensureDirSync(Path.dirname(path));
        Deno.writeTextFileSync(path, json);
    }
}
