export type tInformations = {
    contact: Array<tLink & {
        type:"email"|"phone";
    }>;
    location: {
        address:string;
        zipCode:string;
    };
    slogan:string;
    title:string;
}