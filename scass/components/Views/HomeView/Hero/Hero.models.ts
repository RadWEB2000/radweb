import { VideoHTMLAttributes } from "react";

export type tHero = {
    media?:(
        {
            image:tImage;
            type:"image"
            file?:tImageFile;
        } | {
            video:string;
            type:"movie";
            file?:tVideoFile;
            props?:VideoHTMLAttributes<HTMLVideoElement>;
        }   
    );
    title:string;
    slogan:string;
    tiles:Array<tLink & {
        cta:string;
    }>;
    socials?:tSocial[];
}