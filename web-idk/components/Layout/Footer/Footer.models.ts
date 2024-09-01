import { tButton, tImage } from "ts/common"

export type tFooter = {
    image:tImage;
    company:string;
    nip?:{
        label:string;
        content:number|string;
    };
    phone:tButton;
    email:tButton;
    location:string;
    socials?:string[];
    menu?:{
        label:string;
        items:tButton[];
    }[];
    slogan:string;
}