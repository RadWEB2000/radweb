import { ImageProps } from "next/image";

export type tAbout = {
    title:string;
    content:string;
    button:tLink;
    image:tImage;
    tags?:tLink[];
}