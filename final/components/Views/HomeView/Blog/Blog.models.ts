import { tPrimaryBlogCard } from "cards/PrimaryBlogCard/PrimaryBlogCard.models";

export type tBlog = {
    title:string;
    content:string;
    button:tLink;
    cards?:tPrimaryBlogCard[];
}