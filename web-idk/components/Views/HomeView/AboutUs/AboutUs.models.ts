import { tButton, tFullname, tImage } from 'ts/common';
export type tAboutUs = {
    title:string;
    content:string;
    button:tButton;
    cards: {
        image:tImage;
        fullname:tFullname;
        occupation:string;
        url:string;
    }[]
}