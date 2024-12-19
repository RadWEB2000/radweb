import { tBrand } from "@/nav/Brand/Brand.models";
import { tMenu } from "@/nav/Menu/Menu.models";
import { tLanguages } from "@/nav/Settings/Languages/Languages.models";

export type tNavigation = tMenu &
  tLanguages & {
    brand: tBrand;
    search: {
      label: string;
      placeholder: string;
    };
    menuButton: string;
  };
