import { AnchorHTMLAttributes } from "react";

export type tPrimaryBlogCard = {
    title:string;
    release:string;
    tag:"seo"|"www"|"care"|"news"|"other";
    category:string;
    button:{
        url:string;
        props?:AnchorHTMLAttributes<HTMLAnchorElement>;
    }
    image:tImage;
    excerpt?:string;
}