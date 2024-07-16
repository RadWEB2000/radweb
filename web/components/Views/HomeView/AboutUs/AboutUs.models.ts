import { tButton,tCommonSection, tImage } from 'ts/common';
import {tPrimaryPersonCard} from "cards/PersonCard/PrimaryPersonCard/PrimaryPersonCard.models";
export type tAboutUs = tCommonSection & {
    image:tImage;
    button:tButton;
    cards : tPrimaryPersonCard[];
}