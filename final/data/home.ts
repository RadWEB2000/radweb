import { tHero } from 'v-home/Hero/Hero.models';
import hero_img from "img/vr.webp";

type t_home = {
    hero:tHero;
}

export const home:t_home = {
    hero: {
        buttons:[
            {
                title:"Wiedza",
                url:"#"
            },
            {
                title:"Oferta",
                url:"#"
            },
            {
                title:"Kontakt",
                url:"#"
            }
        ],
        media:{
            medium:"image",
            image:{
                altText:"",
                sourceSrc:hero_img.src,
                title:""
            }
        },
        // media:{
        //     medium:"video",
        //     src:"/orange-tech.webm",
        //     type:"video/webm",
        //     props:{
        //         loop:true,
        //         muted:true,
        //         autoPlay:true,
        //         controls:false
        //     }
        // },
        slogan:"Współczesny marketing online",
        title:"RadWEB",
        socials:[
            {
                title:"Facebook",
                url:"https://facebook.com"
            },
            {
                title:"Instagram",
                url:"https://instagram.com"
            },
            {
                title:"Github",
                url:"https://github.com"
            },
            {
                title:"YouTube",
                url:"https://youtube.com"
            },
            {
                title:"Twitter",
                url:"https://x.com"
            }
        ]
    }
}