import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type tPrimaryButton = {
    isDark?:boolean;
    title:string;
} & (
    {
        type:"button";
        props?:ButtonHTMLAttributes<HTMLButtonElement>;
    } | {
        type:"link";
        url:string;
        props?:AnchorHTMLAttributes<HTMLAnchorElement>;
    }
)