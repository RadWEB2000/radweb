import { tHero } from 'v-home/Hero/Hero.models';
import { tAboutUs } from 'v-home/AboutUs/AboutUs.models';
import { tOffer } from 'v-home/Offer/Offer.models';
import radek_img from "img/radek-adamczyk.webp";
import filip_img from "img/fillip-bukowiecki.webp"
import head_img from "img/head.webp"

interface i_home {
    hero:tHero;
    aboutUs:tAboutUs;
    offer:tOffer;
}

export const home:i_home = {
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
        slogan:"Strony internetowe / SEO / Copywriting / Video",
        title:"RadWEB"
    },
    offer: {
        title:"Czym się zajmujemy?",
        cards:[
            {
                content:"Praesentium repudiandae ex necessitatibus veniam soluta officiis quod maxime eius accusantium d",
                title:"Strona internetowa",
                },
                {
                content:"Praesentium repudiandae ex necessitatibus veniam soluta officiis quod maxime eius accusantium d",
                title:"Widoczność w Google",
                },
                {
                content:"Praesentium repudiandae ex necessitatibus veniam soluta officiis quod maxime eius accusantium d",
                title:"Tworzenie treści",
                },
                {
                content:"Praesentium repudiandae ex necessitatibus veniam soluta officiis quod maxime eius accusantium d",
                title:"Identyfikacja video",
                },
        ],
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic vero inventore a est recusandae dolor perferendis magni voluptatem illum architecto perspiciatis id omnis, doloremque nobis ipsam quae cupiditate! Cumque, perferendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic vero inventore a est recusandae dolor perferendis magni voluptatem illum architecto perspiciatis id omnis, doloremque nobis ipsam quae cupiditate! Cumque, perferendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic vero inventore a est recusandae dolor perferendis magni voluptatem illum architecto perspiciatis id omnis, doloremque nobis ipsam quae cupiditate! Cumque, perferendis."
    },
    aboutUs: {
        button:{
            title:"Poznaj nas",
            url:"#"
        },
        cards:[
            {
                fullname:{
                    firstname:"Radosław",
                    lastname:"Adamczyk"
                },
                image:{
                    altText:"",
                    sourceUrl:radek_img.src,
                    title:""
                },
                industry:"web",
                occupation:"Strony internetowe - SEO - Copywriting",
                uri:"#"
            },
            {
                fullname:{
                    firstname:"Filip",
                    lastname:"Bukowiecki"
                },
                image:{
                    altText:"",
                    sourceUrl:filip_img.src,
                    title:""
                },
                industry:"video",
                occupation:"Videomaking - montaż filmów",
                uri:"#"
            },
        ],
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic vero inventore a est recusandae dolor perferendis magni voluptatem illum architecto perspiciatis id omnis, doloremque nobis ipsam quae cupiditate! Cumque, perferendis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic vero inventore a est recusandae dolor perferendis magni voluptatem illum architecto perspiciatis id omnis, doloremque nobis ipsam quae cupiditate! Cumque, perferendis.",
        image:{
            altText:"",
            sourceUrl:head_img.src,
            title:""
        },
        title:"Kim jesteśmy"
    }
}