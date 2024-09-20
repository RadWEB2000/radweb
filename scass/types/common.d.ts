export {};
declare global {
    type tImage = {
        altText:string;
        sourceSrc:string;
        title:string;
    }

    type tImageFile = "image/apng" | "image/avif" | "image/gif" | "image/jpeg" | "image/png" | "image/svg" | "image/webp"

    type tVideoFile = "video/mp4" | "video/webm" | "video/ogg"

    type tLink = {
        title:string;
        url:string;
    }

    type tSocial = tLink & {
        color?:string;
    }
}