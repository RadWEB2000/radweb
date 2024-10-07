import { tRelUnion } from "ts/unions";
import { AnchorHTMLAttributes } from "react";

export type tContactItem = tLink & {
    icon:JSX.Element;
    rel:tRelUnion;
    props?:AnchorHTMLAttributes<HTMLAnchorElement>;
}

export type tInformations = {
    address:string;
    brand:string;
    map?:string;
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
}