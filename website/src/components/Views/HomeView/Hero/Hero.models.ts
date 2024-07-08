import { tButton, tImage } from "ts/types"

export type tHero = {
    image:tImage;
    title:string;
    slogan:string;
    buttons?:tButton[];
}