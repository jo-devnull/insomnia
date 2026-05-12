import { ConfigFile } from "@lib/core/resource.ts"

interface RuleType {
    result?: "default" | "allow" | "deny"
    hostile?: boolean
    spawner?: boolean
    dimension?: string
}

const makeRules = <T>(rules: T & RuleType) => Object.assign({
    result: "default",
    hostile: true,
    spawner: false,
    dimension: "overworld",
}, rules);

const rule = <T>(rules: T & RuleType) => makeRules(rules);
const deny = <T>(rules: T & RuleType) => makeRules({ result: "deny", ...rules });

ConfigFile.from("incontrol/spawn.json", [
    deny({ dimension: "superflat:superflat" }),

    rule({
        result: "default",
        structure: ["minecraft:pillager_outpost"]
    }),

    deny({
        mod: "zoniex",
        biome: [
            "alexscaves:candy_cavity",
            "alexscaves:abyssal_chasm",
            "alexscaves:forlorn_hollows",
            "alexscaves:magnetic_caves",
            "alexscaves:primordial_caves",
            "alexscaves:toxic_caves",
        ]
    }),

    rule({
        result: "default",
        lunar: [
            "enhancedcelestials:blood_moon",
            "enhancedcelestials:super_blood_moon"
        ]
    }),

    deny({
        lunar: ["enhancedcelestials:blue_moon"],
        minheight: 27
    }),

    rule({
        result: "default",
        biometags: "modpack:always_unsafe"
    }),

    deny({
        biometags: "modpack:safe_biomes",
        minheight: 40,
        phase: "extended_safe"
    })
]);

ConfigFile.from("incontrol/phases.json", [
    {
        name: "safe_phase",
        conditions: {
            maxdaycount: 3
        }
    },
    {
        name: "extended_safe",
        conditions: {
            maxdaycount: 16
        }
    }
])
