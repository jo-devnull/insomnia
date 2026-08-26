# Allows zinc ore to be mined with stone tools instead of requiring an iron tool
<tag:blocks:minecraft:needs_iron_tool>.remove(<block:create:zinc_ore>);
<tag:blocks:minecraft:needs_iron_tool>.remove(<block:create:deepslate_zinc_ore>);

<tag:blocks:minecraft:needs_stone_tool>.add(<block:create:zinc_ore>);
<tag:blocks:minecraft:needs_stone_tool>.add(<block:create:deepslate_zinc_ore>);

# Makes iron ore only able to be mined with an iron tool (e.g, bronze)
<tag:blocks:minecraft:needs_stone_tool>.remove(<block:minecraft:iron_ore>);
<tag:blocks:minecraft:needs_stone_tool>.remove(<block:minecraft:deepslate_iron_ore>);

<tag:blocks:minecraft:needs_iron_tool>.add(<block:minecraft:iron_ore>);
<tag:blocks:minecraft:needs_iron_tool>.add(<block:minecraft:deepslate_iron_ore>);
