import { AnchorHTMLAttributes } from "react";

export type tPrimaryButton = tLink & {
    hrefLang?:string | "pl";
    props?:AnchorHTMLAttributes<HTMLAnchorElement>;
};