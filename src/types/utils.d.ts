import { AnchorHTMLAttributes } from "react";

export { };

declare global {
    type image = {
        attrs?: ImgHTMLAttributes<HTMLImageElement>;
        alt: string;
        src: string;
        title: string;
    }

    type link = {
        label: string;
        uri: string;
        attrs?: AnchorHTMLAttributes<HTMLAnchorElement>;
    }

    type service_type = "www" | "seo" | "insurance"
}