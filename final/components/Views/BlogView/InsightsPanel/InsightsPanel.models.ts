import { tSecondaryBlogCard } from "cards/SecondaryBlogCard/SecondaryBlogCard.models";

export type tInsightsPanel = {
    title:string;
    button:tLink;
    content:string;
    cards:tSecondaryBlogCard[];
}