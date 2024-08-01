import { tButton, tImage } from 'ts/common';
export type tServices = {
    title:string;
    content:string;
    cardButton:string;
    button:tButton;
    cards: {
        icon:tImage;
        title:string;
        content:string;
        url:string;
    }[];
}