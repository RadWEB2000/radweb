import { ImageProps } from "next/image";
import { VideoHTMLAttributes } from "react";

export type tHero = {
    buttons:tLink[];
    slogan:string;
    media:(
        {
            medium:"image"
            image:tImage;
            props?:ImageProps;
        } | {
            medium:"video"
            src:string;
            type:tVideoFile;
            props?:VideoHTMLAttributes<HTMLVideoElement>
        }
    )
    socials?:tLink[];
    title:string;
}