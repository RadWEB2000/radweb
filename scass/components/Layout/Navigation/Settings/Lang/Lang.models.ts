export type tLang = {
    title:string;
    langs: Array<
        tLink & {
            image:tImage;
            lang:string;
        }
    >;
}