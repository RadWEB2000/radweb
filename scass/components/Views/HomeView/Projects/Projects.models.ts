import { tPrimaryProjectCard } from "cards/PrimaryProjectCard/PrimaryProjectCard.models";

export type tProjects = {
    title:string;
    slogan?:string;
    button?:tLink;
    content:string;
    cards?:tPrimaryProjectCard[];
}