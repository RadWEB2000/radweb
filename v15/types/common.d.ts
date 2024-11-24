
export {};

import { ImageProps } from "next/image";
import { AnchorHTMLAttributes, InputHTMLAttributes, VideoHTMLAttributes } from "react";
declare global {
    type tImage = {
        altText:string;
        sourceSrc:string;
        title:string;
        props?:ImageProps;
    }

    type tImageFile = "image/apng" | "image/avif" | "image/gif" | "image/jpeg" | "image/png" | "image/svg" | "image/webp"

    type tVideoFile = "video/mp4" | "video/webm" | "video/ogg"

    type tVideo = {
        src:string;
        file?:tVideoFile;
        props?:VideoHTMLAttributes<HTMLVideoElement>
    }
    type tLink = {
        title:string;
        url:string;
        props?:AnchorHTMLAttributes<HTMLAnchorElement>;
    }

    type tSocial = tLink & {
        color?:string;
    }

    type tFullname = {
        firstname:string;
        lastname:string;
    }

    type tTheme = "dark" | "light";

    type tInput = InputHTMLAttributes<HTMLInputElement>;
}