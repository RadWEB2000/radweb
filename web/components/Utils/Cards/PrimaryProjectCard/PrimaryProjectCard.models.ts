import { tButton, tFullname, tImage } from "ts/common";

export type tPrimaryProjectCard = {
    author: {
        fullname:tFullname;
        uri:string;
    };
    categories:string[];
    content:string;
    image:tImage;
    release: string;
    title:string;
    url:string;
}