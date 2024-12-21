import { AnchorHTMLAttributes } from "react";

export type tDetails = {
    logo?:tImage;
    brand:string;
    identificationData?: {
        title:string;
        content:string;
    }[];
    contact?:{
        attributes?:AnchorHTMLAttributes<HTMLAnchorElement>;
        type:'e-mail'|'telephone';
        title:string;
        content:string;
        url:string;
    }[]
}