import { tButton, tFullname, tImage } from "ts/common";

export type tPrimaryBlogCard = {
    category:tButton;
    excerpt:string;
    fullname:tFullname;
    image:tImage;
    title:string;
    url:string;
}