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
        content:`However, with the introduction of a new version, it became necessary to separate them according to the new client and server system. A server component cannot be imported into a component that uses client-only hooks, and vice versa.`,
        image:{
            altText:"",
            sourceUrl:hero_img.src,
            title:""
        },
        services: [
            {
                title:"Strony internetowe",
                url:"#"
            },
            {
                title:"Pozycjonowanie",
                url:"#"
            },
            {
                title:"Videomaking",
                url:"#"
            },
            {
                title:"Copywriting",
                url:"#"
            },
            {
                title:"Reklamy Google",
                url:"#"
            },
            {
                title:"Audyty stron",
                url:"#"
            },
        ],
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