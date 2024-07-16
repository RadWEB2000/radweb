import { tHero } from 'v-home/Hero/Hero.models';
import { tAboutUs } from 'v-home/AboutUs/AboutUs.models';
import { tOffer } from 'v-home/Offer/Offer.models';
import radek_img from "img/radek-adamczyk.webp";
import filip_img from "img/fillip-bukowiecki.webp"
import web_img from "img/strony-internetowe.webp"
import head_img from "img/head.webp"
import { tServices } from 'v-home/Services/Services.models';

interface i_home {
    hero:tHero;
    aboutUs:tAboutUs;
    offer:tOffer;
    services:tServices;
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
    },
    services: {
        title:"Nasza oferta",
        button:{
            title:"Wszystkie usługi",
            url:"#"
        },
        content:`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). `,
        cards:[
            {
                content:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
                image:{
                    altText:"",
                    sourceUrl:web_img.src,
                    title:""
                },
                title:"Strony internetowe",
                uri:"#"
            },
            {
                content:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
                image:{
                    altText:"",
                    sourceUrl:web_img.src,
                    title:""
                },
                title:"SEO",
                uri:"#"
            },
            {
                content:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
                image:{
                    altText:"",
                    sourceUrl:web_img.src,
                    title:""
                },
                title:"Videomaking",
                uri:"#"
            },
        ]
    }
}