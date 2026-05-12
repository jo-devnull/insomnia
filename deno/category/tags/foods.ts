import * as tags from "@lib/data/tags.ts"
import { categoryTag } from "@root/insomnia/utils.ts"
import { namespace } from "@lib/core/utils.ts"

const category = namespace("category")

categoryTag(category.foods, {
    title : "Comidas",
    icon  : "create:item/honeyed_apple"
})

tags.item(category.foods, [
    "#salt:can_be_salted",
    "#c:foods",
    "#forge:food",
])

/// create ---------------------------------------------
export const create = tags.item(category.foods, [
    "create:bar_of_chocolate",
    "create:sweet_roll",
    "create:chocolate_glazed_berries",
    "create:honeyed_apple",
])

/// brewinandchewin ---------------------------------------------
export const brewinandchewin = tags.item(category.foods, [
    "brewinandchewin:flaxen_cheese_wedge",
    "brewinandchewin:scarlet_cheese_wedge",
    "brewinandchewin:vegetable_omelet",
    "brewinandchewin:creamy_onion_soup",
    "brewinandchewin:cheesy_pasta",
    "brewinandchewin:horror_lasagna",
    "brewinandchewin:scarlet_pierogi",
    "brewinandchewin:fiery_fondue",
    "brewinandchewin:pizza_slice",
    "brewinandchewin:quiche_slice",
    "brewinandchewin:ham_and_cheese_sandwich",
    "brewinandchewin:kimchi",
    "brewinandchewin:jerky",
    "brewinandchewin:pickled_pickles",
    "brewinandchewin:kippers",
    "brewinandchewin:cocoa_fudge",
    "brewinandchewin:sweet_berry_jam",
    "brewinandchewin:glow_berry_marmalade",
    "brewinandchewin:apple_jelly",
])

/// ecologics ---------------------------------------------
export const ecologics = tags.item(category.foods, [
    "ecologics:coconut_slice",
    "ecologics:crab_meat",
    "ecologics:tropical_stew",
    "ecologics:prickly_pear",
    "ecologics:cooked_prickly_pear",
    "ecologics:walnut",
])
