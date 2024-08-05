import { tPrimaryProjectCard as Card } from "cards/PrimaryProjectCard/PrimaryProjectCard.models";
import { tButton } from "ts/common";

export type tProjects = {
    title:string;
    cards:Card[];
    content:string;
    button:tButton;
}