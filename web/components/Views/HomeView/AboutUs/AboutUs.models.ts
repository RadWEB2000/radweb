import { tButton, tImage } from 'ts/common';
import {tPrimaryPersonCard} from "cards/PersonCard/PrimaryPersonCard/PrimaryPersonCard.models";
export type tAboutUs = {
    title:string;
    content:string;
    image:tImage;
    button:tButton;
    cards : tPrimaryPersonCard[];
}