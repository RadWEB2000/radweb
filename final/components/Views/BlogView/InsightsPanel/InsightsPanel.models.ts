import { tSecondaryBlogCard } from "cards/SecondaryBlogCard/SecondaryBlogCard.models";

export type tInsightsPanel = {
    sections: Array<{
        title:string;
        button:tLink;
        content?:string;
        overview:string;
        cards:tSecondaryBlogCard[];
    }>
}