import { tBanner } from "v-home/Banner/Banner.models";
import hero_img from "img/hero-small.webp"
import person_img from "img/man-with-phone-holiday.webp";
import { tHero } from 'v-home/Hero/Hero.models';
import { tServices } from "v-home/Services/Services.models";
import web_icon  from "icons/strony-internetowe-radweb.webp"
import seo_icon from "icons/pozycjonowanie-stron-interntowych-radweb.webp";
import ppc_icon from "icons/reklamy-google-ads-radweb.webp";
import video_icon from "icons/videomaking-radweb.webp";
interface i_home_page {
    hero:tHero;
    banner:tBanner;
    services:tServices;
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
                url:"https://facebook.com"
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
        content:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        image:{
            altText:"",
            sourceUrl:person_img.src,
            title:""
        },
        title:"Jaki mamy cel?"
    },
    services:{
        button:{
            title:"Nasza oferta",
            url:"#"
        },
        content:`ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.`,
        title:"Usługi RadWEB",
        cards: [
            {
                button:{
                    title:"Więcej",
                    url:"#"
                },
                content:`Lorem ipsum odor amet, consectetuer adipiscing elit. Faucibus potenti ad nulla sociosqu ultrices. Himenaeos justo amet consectetur porta himenaeos ultrices sapien. Ipsum viverra vivamus arcu sodales consequat pellentesque venenatis sagittis.`,
                icon: {
                    altText:"",
                    sourceUrl:web_icon.src,
                    title:""
                },
                title:"Strony internetowe"
            },    {
                button:{
                    title:"Więcej",
                    url:"#"
                },
                content:`Lorem ipsum odor amet, consectetuer adipiscing elit. Faucibus potenti ad nulla sociosqu ultrices. Himenaeos justo amet consectetur porta himenaeos ultrices sapien. Ipsum viverra vivamus arcu sodales consequat pellentesque venenatis sagittis.`,
                icon: {
                    altText:"",
                    sourceUrl:seo_icon.src,
                    title:""
                },
                title:"Pozycjonowanie"
            },    {
                button:{
                    title:"Więcej",
                    url:"#"
                },
                content:`Lorem ipsum odor amet, consectetuer adipiscing elit. Faucibus potenti ad nulla sociosqu ultrices. Himenaeos justo amet consectetur porta himenaeos ultrices sapien. Ipsum viverra vivamus arcu sodales consequat pellentesque venenatis sagittis.`,
                icon: {
                    altText:"",
                    sourceUrl:ppc_icon.src,
                    title:""
                },
                title:"Reklamy Google Ads"
            },    {
                button:{
                    title:"Więcej",
                    url:"#"
                },
                content:`Lorem ipsum odor amet, consectetuer adipiscing elit. Faucibus potenti ad nulla sociosqu ultrices. Himenaeos justo amet consectetur porta himenaeos ultrices sapien. Ipsum viverra vivamus arcu sodales consequat pellentesque venenatis sagittis.`,
                icon: {
                    altText:"",
                    sourceUrl:video_icon.src,
                    title:""
                },
                title:"Videomaking"
            },
        ]
    }
    
}