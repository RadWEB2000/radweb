
import man_img from "img/man-with-phone-holiday.webp";
import { tHero } from 'v-home/Hero/Hero.models';
interface i_home_page {
    hero:tHero;
}

export const home_page:i_home_page = {
    hero: {
        image:{
            altText:"",
            sourceUrl:man_img.src,
            title:""
        },
        buttons:[
            {
                title:"Wiedza",
                url:"#"
            },
            {
                title:"Zespół",
                url:"#"
            },
            {
                title:"Kontakt",
                url:"#"
            },
        ],
        content:`Over the past 10 years, we’ve perfected our Design & Development game and are eager to help passionate Founders perfect theirs. Success is a team play, right? Let’s aim for the top together!`,
        industries:[
            {
                label:"Strony internetowe",
                uri:"#"
            },
            {
                label:"SEO",
                uri:"#"
            },
            {
                label:"Kampanie reklamowe",
                uri:"#"
            },
            {
                label:"Videomaking",
                uri:"#"
            },
            {
                label:"Tworzenie treści",
                uri:"#"
            },
            {
                label:"Audyty stron",
                uri:"#"
            },
        ],
        slogan:"Współczesny marketing online",
        title:"RadWEB"
    }
}