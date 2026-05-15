import { build } from "./@lib/build.ts"

import "./toolworking/casting.ts"

build(Deno.args[0]);
