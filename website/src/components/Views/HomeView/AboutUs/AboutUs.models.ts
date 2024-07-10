import { tPrimaryPersonCard } from "c-person/PrimaryPersonCard/PrimaryPersonCard.models";
import {tImage, tButton} from "ts/types"
export type tAboutUs = {
    title:string;
    content:string;
    button:tButton;
    cards :tPrimaryPersonCard[];
}