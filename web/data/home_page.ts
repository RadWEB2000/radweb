import hero_img from "img/hero.svg"
import { tHero } from "v-home/Hero/Hero.models";

interface i_home_page {
    hero:tHero;
}

export const home_page:i_home_page = {
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
    }
}