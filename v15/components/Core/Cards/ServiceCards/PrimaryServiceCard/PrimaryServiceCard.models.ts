import { AnchorHTMLAttributes } from "react";

export type tPrimaryServiceCard = {
    title:string;
    content:string;
    button: {
        url:string;
        props?:AnchorHTMLAttributes<HTMLAnchorElement>;
    }
}