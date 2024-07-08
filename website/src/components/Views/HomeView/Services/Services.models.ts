import {tImage, tButton} from "ts/types"
export type tServices = {
    button:tButton;
    buttonCard:string;
    cards:{
        title:string;
        uri:string;
        image:tImage;
        excerpt:string;
    }[];
    content:string;
    title:string;
}