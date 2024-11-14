
export type tPrimaryProjectCard = {
    button:tLink;
    category:string;
    excerpt:string;
    image:tImage;
    release:string;
    title:string;
}

export type tPrimaryProjectCardWithTheme = tPrimaryProjectCard & {
    theme?:tTheme;
}