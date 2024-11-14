import { ButtonHTMLAttributes, LinkHTMLAttributes } from "react";

export type tPrimaryButton = {
    title:string;
    theme:tTheme;
} & (
    {
        type:"button";
        props?:ButtonHTMLAttributes<HTMLButtonElement>;
    } | {
        type:"link";
        url:string;        
        props?:LinkHTMLAttributes<HTMLAnchorElement>;
    }
)