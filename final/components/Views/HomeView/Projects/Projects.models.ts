export type tProjects = {
    title:string;
    content:string;
    button:tLink;
    cards?:{
        title:string;
        content:string;
        button:tLink;
        categories:string[];
        media:{
            main:tImage;
            gallery?:tImage[];
        }
    }[];
}