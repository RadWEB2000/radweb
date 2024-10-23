export type tServices = {
    title:string;
    slogan:string;
    content:string;
    button?:tLink;
    cards?:{
        title:string;
        content:string;
        button?:tLink;
        cards?:tLink[];
    }[];
}