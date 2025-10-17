import crafttweaker.api.bracket.BracketHandlers;

craftingTable.removeByName("notreepunching:iron_mattock");
craftingTable.removeByName("notreepunching:gold_mattock");
craftingTable.removeByName("notreepunching:diamond_mattock");
craftingTable.removeByName("notreepunching:flint_knife");
craftingTable.removeByName("notreepunching:iron_knife");
craftingTable.removeByName("notreepunching:gold_knife");
craftingTable.removeByName("notreepunching:diamond_knife");

blastFurnace
  .removeByName("samurai_dynasty:steel_ingot_from_blasting_iron_ingot");

<recipetype:create:mixing>
  .removeByName(["samurai_dynasty:steel_ingot_create_compat"]);