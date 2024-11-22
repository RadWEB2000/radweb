import { tPrimaryCareerCard as tCard } from "cards/career/PrimaryCareerCard/PrimaryCareerCard.models";

export type tCareer = {
    title:string;
    content:string;
    career: tCard[];
}