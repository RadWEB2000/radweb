import { tPrimaryServiceCard } from "cards/PrimaryServiceCard/PrimaryServiceCard.models";
import { tButton, tImage } from "ts/common";

export type tServices = {
    title:string;
    content:string;
    button:tButton;
    grid?:tServicesGrid[];
}

export type tServicesGrid = {
    title:string;
    content:string;
    button:tButton;
    cards?:tPrimaryServiceCard[];
}