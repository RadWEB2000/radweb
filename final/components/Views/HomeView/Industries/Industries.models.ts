export type tIndustries = {
    title:string;
    content:string;
    cards?:{
        title:string;
        image:tImage;
        content:string;
        button:tLink;
    }[];
}