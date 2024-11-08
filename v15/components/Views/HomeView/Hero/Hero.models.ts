export type tHero = {
    title:string;
    slogan:string;
    buttons?:tLink[];
    media?: 
    | (tImage & {type:"image"}) 
    | (tVideo & {type:"video"})
}