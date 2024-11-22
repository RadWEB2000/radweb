export type tCard = {
    date:string;
    title:string;
    content?:string;
}

export type tMemoir = {
    title:string;
    timeline:tCard[];
}