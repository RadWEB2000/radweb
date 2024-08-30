import { tTestimonialCard } from "cards/TestimonialCard/TestimonialCard.models";

export type tTestimonials = {
    title:string;
    content:string;
    cards?:tTestimonialCard[]
}