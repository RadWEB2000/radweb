export type tFooter = {
    details: {
        image?:tImage;
        title:string;
        slogan:string;
        contact:Array<tLink & {
            type:"e-mail"|"phone"
        }>;
        address: {
            location:string;
            zipCode:string;
        }
    };
    socials:tLink[];
    menus:{
        title:string;
        links:tLink[];
    }[];
    author:string;
}