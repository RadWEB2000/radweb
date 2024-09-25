import { tPrimaryServiceCard } from "cards/PrimaryServiceCard/PrimaryServiceCard.models";

export type tOffer = {
    cards?:tPrimaryServiceCard[];
    content:string;
    title:string;
}