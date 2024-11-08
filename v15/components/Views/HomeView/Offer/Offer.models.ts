export type tOffer = {
    title:string;
    content:string;
    button:tLink;
    cards ?: {
        title:string;
        content:string;
        button:tLink;
    }[];
}