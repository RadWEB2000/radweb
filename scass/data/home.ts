import { tHero } from 'v-home/Hero/Hero.models';
import abstract from "assets/images/blob.webp"
type t_home = {
    hero:tHero;
}

export const home:t_home = {
    hero:{
        tiles:[
            {
                title:"Oferta",
                cta:"Co u nas znajdziesz?",
                url:"#"
            },
            {
                title:"Blog",
                cta:"Co słychać?",
                url:"#"
            },
            {
                title:"Kontakt",
                cta:"Masz jakieś pytania?",
                url:"#"
            },
        ],
        media:{
            type:"image",
            image:{
                altText:"",
                sourceSrc:abstract.src,
                title:""
            },
            file:"image/jpeg"
        },

        // media : {
        //     type:"movie",
        //     video:"https://youtu.be/HU5lzrPIH-c",
        //     file:"video/mp4",
        //     props:{
        //         autoPlay:true,
        //         loop:true,
        //         muted:true,
        //     }
        // },
        socials: [
            {
                title:"Facebook",
                url:"facebook.com"
            },
            {
                title:"Github.com",
                url:"github.com"
            },
            {
                title:"Twitter",
                url:"x.com"
            },
            {
                title:"YouTube",
                url:"youtube.com"
            },
        ],
        slogan:"Współczesny marketing online",
        title:"RadWEB"
    }
}