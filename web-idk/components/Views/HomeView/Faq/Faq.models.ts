import { tFaqCard } from "cards/FaqCard/FaqCard.models"

export type tFaq = {
    cards?:tFaqCard[];
    content:string;
    title:string;
}