import { tPrimaryProjectCard } from "cards/PrimaryProjectCard/PrimaryProjectCard.models";
import { tButton, tImage } from "ts/common";

export type tProjects = {
    button:tButton;
    title:string;
    content:string;
    cards?:tPrimaryProjectCard[];
}