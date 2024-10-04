import { tRelUnion } from "ts/unions";
import { AnchorHTMLAttributes } from "react";

export type tInformations = {
    address:string;
    brand:string;
    contact?:{ 
        phone:tLink & {
            rel:tRelUnion;
            props?:AnchorHTMLAttributes<HTMLAnchorElement>;
        };
        email:tLink & {
            rel:tRelUnion;
            props?:AnchorHTMLAttributes<HTMLAnchorElement>;
        }
    };
    cta:string;
    slogan:string;
}