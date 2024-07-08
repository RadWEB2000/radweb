import {tImage} from "ts/types"

export type tPrimaryPersonCard = {
    image:tImage;
    fullname: {
        firstname:string;
        lastname:string;
    }
    industry:string;
    uri:string;
}