import { tPrimaryBlogCard } from "cards/blog/PrimaryBlogCard/PrimaryBlogCard.models";

export type tBlog = {
    title:string;
    content:string;
    slogan?:string;
    button:tLink;
    cards?:tPrimaryBlogCard[];
}