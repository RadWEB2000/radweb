import whyUs_img from "img/why_us.svg";
import hero_img from "img/hero.svg"
import { tWhyUs } from "v-home/WhyUs/WhyUs.models";
import { tHero } from "v-home/Hero/Hero.models";
import { tAboutUs } from "v-home/AboutUs/AboutUs.models";

interface i_home_page {
    aboutUs:tAboutUs;
    hero:tHero;
    whyUs:tWhyUs;
}

export const home_page:i_home_page = {
    aboutUs: {
        button: {
            title:"Poznaj nas",
            url:"#"
        },
        content:`Projektujemy w taki sposób, aby zawsze realizować Twoje cele. Oferując tworzenie stron internetowych, wykorzystujemy wiodące technologie, aby dać Ci zupełnie nową jakość. Projektowanie stron www, jak również identyfikacja wizualna to nie tylko nasza praca, ale również ogromna pasja. Zaoferujemy Tobie tylko świeże i unikatowe rozwiązania.`,
        title:"Kim jesteśmy?"
    },
    hero: {
        buttons: [
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
        content:`Działamy na rynku od 2013 roku. Specjalizujemy się w produkcji siatek ogrodzeniowych zarówno ocynkowanych, jak i powlekanych.`,
        image:{
            altText:"",
            sourceUrl:hero_img,
            title:""
        },
        slogan:"Współczesny marketing online",
        socials:[
            {
                title:"Facebook",
                url:"facebook.com"
            },
            {
                title:"Twitter",
                url:"x.com"
            },
            {
                title:"Instagram",
                url:"instagram.com"
            },
            {
                title:"Twitch",
                url:"twitch.com"
            },
            {
                title:"Medium",
                url:"medium.com"
            },
        ],
        title:"RadWEB"
    },
    whyUs: {
        content:`W nowoczesnym rolnictwie i ogrodnictwie dominują innowacyjne metody podlewania. Pozwalają one zaoszczędzić wodę i zintensyfikować wzrost silnych oraz zdrowych gatunków roślin. Ważną częścią nowoczesnych systemów nawadniania są m.in. linie i taśmy kroplujące. Oba rozwiązania idealnie sprawdzają się w przypadku podlewania zarówno dużych areałów rolnych, jak i terenów zielonych. Dowiedz się, które rozwiązanie będzie dla Ciebie idealne.`,
        image:{
            altText:"",
            sourceUrl:whyUs_img,
            title:""
        },
        title:"Dlaczego my?"
    }
}