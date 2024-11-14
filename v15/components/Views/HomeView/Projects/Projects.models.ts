import { tPrimaryProjectCard } from "cards/project/PrimaryProjectCard/PrimaryProjectCard.models";

export type tProjects = {
    title:string;
    slogan?:string;
    button:tLink;
    content:string;
    cards?:tPrimaryProjectCard[];
}