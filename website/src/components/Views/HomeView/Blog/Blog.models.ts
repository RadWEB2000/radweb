import {tButton} from "ts/types"
import {tPrimaryBlogCard} from "c-blog/PrimaryBlogCard/PrimaryBlogCard.models"

export type tBlog = {
    title:string;
    content:string;
    button:tButton;
    cards:tPrimaryBlogCard[]
}