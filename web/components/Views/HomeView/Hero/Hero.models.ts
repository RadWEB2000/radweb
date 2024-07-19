import { tButton, tImage } from "ts/common";

export type tHero = {
    image:tImage;
    title:string;
    content:string;
    industries:{
        label:string;
        uri:string;
    }[];
    slogan:string;
    buttons:tButton[];
}