import * as Path from "@std/path"
import { TextReader, ZipWriter} from "@zip-js/zip-js"
import { MCMeta, Resource } from "@root/@lib/core/resource.ts";
import { Tag } from "@root/@lib/tags.ts";
import { ensureDirSync } from "@std/fs/ensure-dir";

// all resources to be included in the pack
const RESOURCES = [] as Resource[];

export function appendFiles(stream: ZipWriter<Blob>, rootDir: string) {
    MCMeta.create().register();

    for (const resource of RESOURCES) {
        console.info("Adding resource: ", resource.getPath());

        if (resource.type != "config") {
            const reader = new TextReader(resource.getContents());
            stream.add(resource.getPath(), reader);
        } else {
            const filepath = Path.join(rootDir, resource.getPath());
            ensureDirSync(Path.dirname(filepath));
            Deno.writeTextFileSync(filepath, resource.getContents());
        }
    }
}

export function getResources() {
    return RESOURCES;
}

export function register(resource: Resource) {
    for (let i = 0; i < RESOURCES.length; i++) {
        const res = RESOURCES[i] as Resource;

        // we merge tag and lang assets
        if (res.id == resource.id) {
            if (res.id.includes("tags/")) {
                const tag = res as Resource<Tag>;

                RESOURCES[i] = Resource.data<Tag>(res.id, {
                    replace : tag.content.replace,
                    values  : [...tag.content.values, ...(resource as Resource<Tag>).content.values]
                })

                return;
            }

            else if (res.id.includes("lang/")) {
                RESOURCES[i] = Resource.asset(res.id, {
                    ...res.content as any,
                    ...(resource.content as any)
                })

                return;
            }

            else {
                throw new Error("duplicated resource (not tag or lang): " + resource.getPath());
            }
        }

    }

    RESOURCES.push(resource);
}
