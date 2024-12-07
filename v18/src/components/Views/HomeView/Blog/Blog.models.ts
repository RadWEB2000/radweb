import { tRegularBlogCard } from "@/cards/Blog/RegularBlogCard/RegularBlogCard.models";

export type tBlog = {
    title:string;
    content:string;
    button:tLink;
    cards?:tRegularBlogCard[];
}