export type tReviews = {
    title:string;
    cards:{
        image?:tImage & {
            logo:boolean;
        };
        fullname:tFullname;
        company?:string;
        review:string;
    }[]
}