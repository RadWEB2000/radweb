export type tDetails = {
    image?:tImage;
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