import { ConfigFile } from "@lib/core/resource.ts"

import * as Files from "@lib/core/file.ts"

const pack = (name: string) => {
    const file = "packs/resources/" + name + ".pw.toml"
    const meta = Files.read<{ filename: string }>(file, Files.TomlFormat);
    return "file/" + meta.filename;
}

const required_packs = [
    "file/integrated",
    "file/wetbackpacks",
    "file/insomnia.zip",
    "file/vanillatweaks.zip",

    pack("mace-3d"),
    pack("improved-crafting-table-squarzy"),
    pack("c418-songs-only"),
    pack("gentler-weather-sounds"),
    pack("visual-enchantments"),
    pack("smooth-drawers"),
    pack("create-style-hopper")
];

ConfigFile.from("resourcepackoverrides.json", {
    failed_reloads_per_session: 5,
    schema_version: 2,
    default_packs: required_packs.toReversed(),

    default_overrides: {
        force_compatible: true
    },

    pack_overrides: {
        vanilla: {
            title: `"Vanilla Assets"`,
            description: `"Resourcepacks from Minecraft"`
        },

        mod_resources: {
            title: `"Modded Assets"`,
            description: `"Resourcepacks from mods"`
        },

        server: {
            default_position: "BOTTOM",
            force_compatible: true,
            fixed_position: false
        },

        "1": required_packs.toReversed(),
        "$$1": { hidden: false, required: true }
    }
})
