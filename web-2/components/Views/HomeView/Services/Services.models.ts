import { tPrimaryServiceCard  as tCard} from "cards/PrimaryServiceCard/PrimaryServiceCard.models";
import { tButton } from "ts/common";

export type tServices = {
    title:string;
    content:string;
    button:tButton;
    cards?:tCard[];
}