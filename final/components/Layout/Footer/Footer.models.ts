import { tDetails } from "footer/Details/Details.models";
import { tInformations } from "./Informations/Informations.models";
import { tMenu } from "./Menu/Menu.models";

export type tFooter = {
    menu:tMenu[];
    cities:tMenu;
    informations:tInformations;
    details:tDetails;
}