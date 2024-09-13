export type tMenu = {
    menu:{
        title:string;
        url:string;
        submenu?:tLink[];
    }[];
}