import { tBrand } from "nav/Brand/Brand.models"
import { tMenu } from "nav/Menu/Menu.models";

export type tNavigation =  tMenu & {
    brand:tBrand;
}