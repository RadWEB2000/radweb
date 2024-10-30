export type tFooter = {
    author:string;
    socials:tLink[];
    title:string;
    location: {
        address:string;
        zipCode:string;
    };
    contact: Array<tLink & {
        type:"email"|"phone";
    }>;

    menu:tLink[];
    policies:tLink[];
}