import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type tSecondaryButton = {
    theme?:"light"|"dark";
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