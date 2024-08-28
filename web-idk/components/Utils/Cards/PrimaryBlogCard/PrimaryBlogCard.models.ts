import { tButton, tFullname, tImage } from "ts/common";

export type tPrimaryBlogCard = {
    category:tButton;
    excerpt:string;
    fullname:tFullname;
    release:string;
    image:tImage;
    title:string;
    url:string;
}