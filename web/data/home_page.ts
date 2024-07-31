import { tBanner } from "v-home/Banner/Banner.models";
import hero_img from "img/hero.webp"
import person_img from "img/man-with-phone-holiday.webp";
import { tHero } from 'v-home/Hero/Hero.models';
interface i_home_page {
    hero:tHero;
    banner:tBanner;
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
    },
    banner: {
        image: {
            altText:"",
            sourceUrl:person_img.src,
            title:""
        },
        text:`Over the past 10 years, we’ve perfected our Design & Development game and are eager to help passionate Founders perfect theirs. Success is a team play, right? Let’s aim for the top together!`
    }
}