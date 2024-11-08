import { tPrimaryServiceCard } from "cards/service/PrimaryServiceCard/PrimaryServiceCard.models";

export type tServices = {
    title:string;
    content:string;
    cards?:tPrimaryServiceCard[]
}