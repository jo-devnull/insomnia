import * as Path from "@std/path"
import * as FileSystem from "@std/fs"
import * as ZipFile from "@zip-js/zip-js"

import { appendFiles } from "./core.ts"

import "../../build.ts"

export async function build() {
    const [outputFile] = Deno.args;

    const rootDir = Path.dirname(Path.dirname(Path.dirname(import.meta.dirname!)));
    const packFilePath = Path.join(rootDir, outputFile);

    FileSystem.ensureDirSync(Path.dirname(packFilePath));

    if (FileSystem.existsSync(packFilePath)) {
        Deno.removeSync(packFilePath);
    }

    // Creates a BlobWriter object where the zip content will be written.
    const zipFileWriter = new ZipFile.BlobWriter();

    const zipWriter = new ZipFile.ZipWriter(zipFileWriter);
    appendFiles(zipWriter, rootDir);

    const blob = await zipWriter.close();
    const bytes = await blob.bytes();

    console.info("Writing file to: ", packFilePath);
    Deno.writeFile(packFilePath, bytes);
}

await build();
