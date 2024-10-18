import { AnchorHTMLAttributes } from "react";

export type tPrimaryLinkButton = tLink & {
    props?:AnchorHTMLAttributes<HTMLAnchorElement>;
    theme:"dark"|"light";
}