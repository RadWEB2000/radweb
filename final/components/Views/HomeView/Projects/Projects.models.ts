import { tPrimaryProjectCard } from "cards/PrimaryProjectCard/PrimaryProjectCard.models";

export type tProjects = {
    title:string;
    content:string;
    button:tLink;
    media:tImage;
    cards?:tPrimaryProjectCard[];
}