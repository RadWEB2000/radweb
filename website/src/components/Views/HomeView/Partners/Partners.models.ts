import {tImage} from "ts/types"

export type tPartners = {
    title:string;
    content:string;
    cards: {
        logo:tImage;
        title:string;
        content:string;
    }[];
}