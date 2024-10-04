import { tBrand } from "nav/Brand/Brand.models"
import { tMenu } from "nav/Menu/Menu.models";
import { tSearch } from "nav/Search/Search.models";
import { tSettings } from "nav/Settings/Settings.models";

export type tNavigation = {
    brand:tBrand;
    menu:tMenu;
    search:tSearch;
    settings:tSettings;
}