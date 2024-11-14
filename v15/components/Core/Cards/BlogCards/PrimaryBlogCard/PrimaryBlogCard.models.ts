import { AnchorHTMLAttributes } from "react";

export type tPrimaryBlogCard = {
    title:string;
    release:string;
    category:string;
    button:{
        url:string;
        props?:AnchorHTMLAttributes<HTMLAnchorElement>;
    }
    image:tImage;
}