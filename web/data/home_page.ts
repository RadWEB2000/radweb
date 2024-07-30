import hero_img from "img/hero.webp"
import { tHero } from 'v-home/Hero/Hero.models';
interface i_home_page {
    hero:tHero;
}

export const home_page:i_home_page = {
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
            },
        ],
        image:{
            altText:"",
            sourceUrl:hero_img.src,
            title:""
        },
        slogan:"Współczesny marketing online",
        socials:[
            {
                title:"Facebook",
                url:"facebook.com"
            },
            {
                title:"Instagram",
                url:"instagram.com"
            },
            {
                title:"Twitter",
                url:"twitter.com"
            },
            {
                title:"Medium",
                url:"medium.com"
            },
        ],
        title:"RadWEB"
    }
}