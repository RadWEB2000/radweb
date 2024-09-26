import { tSecondaryServiceCard } from "cards/SecondaryServiceCard/SecondaryServiceCard.models";

export type tServices = {
    title:string;
    slogan?:string;
    image?:tImage;
    content:string;
    button?:tLink;
    cards?:tSecondaryServiceCard[];
}