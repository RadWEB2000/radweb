import { tPrimaryBlogCard } from "cards/PrimaryBlogCard/PrimaryBlogCard.models";
import { tButton, tFullname, tImage } from "ts/common";

export type tBlog = {
    title:string;
    button:tButton;
    content:string;
    cards?: tPrimaryBlogCard[]
}