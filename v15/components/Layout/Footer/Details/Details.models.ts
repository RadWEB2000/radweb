export type tDetails = {
    title:string;
    slogan?:string;
    contact:Array<tLink & {
        type:"e-mail"|"phone"
    }>;
    address: {
        location:string;
        zipCode:string;
    }
}