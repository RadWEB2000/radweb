import { tButton, tImage } from "ts/common";

export type tHero  = (
    {
        media:"img";
        image:tImage;
    } | {
        media:"movie";
        video:{
            source:string;
            poster?:string;
            type:"video/mp4"|"video/ogg"|"video/webm"
        };
    }
) & {
    title:string;
    slogan:string;
    buttons?:tButton[];
    statistics?: {
        label:string;
        value:string|number;
    }[];
    socials?:string[];
}