import {tImage, tButton} from "ts/types"
export type tProjects = {
    title:string;
    content:string;
    button:tButton;
    buttonCard:string;
    cards:{
      title:string;
      uri:string;
      date:string;
      excerpt:string;
      image:tImage;
    }[];
}