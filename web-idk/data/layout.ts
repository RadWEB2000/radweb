import { tFooter } from 'footer/Footer.models';
import unicorn_img from "img/unicorn.png"
interface iLayout {
    footer:tFooter;
}

export const layout:iLayout = {
    footer:{
        author:"RadWEB &copy; prawa zastrzeżone",
        company:"RadWEB",
        email:{
            title:"r.adamczyk@radweb.pl",
            url:"mailto:r.adamczyk@radweb.pl"
        },
        image:{
            altText:"",
            sourceUrl:unicorn_img.src,
            title:""
        },
        location:"Donatowo 53<br/>64-020 Czempiń",
        phone:{
            title:"+48 794-100-413",
            url:"tel:+48794100413"
        },
        slogan:"Współczesny marketing online",
        year:2021,
        menu:[
            {
                label:"RadWEB",
                items:[
                    {
                        title:"Start",
                        url:"#"
                    },
                    {
                        title:"Kim jesteśmy",
                        url:"#"
                    },
                    {
                        title:"Blog",
                        url:"#"
                    },
                    {
                        title:"Usługi",
                        url:"#"
                    },
                    {
                        title:"Słownik",
                        url:"#"
                    },
                    {
                        title:"Projekty",
                        url:"#"
                    },
                    {
                        title:"Kontakt",
                        url:"#"
                    },
                ],
            },
            {
                label:"Wiedza",
                items:[
                    {
                        title:"Programowanie",
                        url:"#"
                    },
                    {
                        title:"Pozycjonowanie",
                        url:"#"
                    },
                    {
                        title:"Google Ads",
                        url:"#"
                    },
                    {
                        title:"Social media",
                        url:"#"
                    },
                    {
                        title:"Copywriting",
                        url:"#"
                    },
                    {
                        title:"Videomaking",
                        url:"#"
                    },
                ],
            },
            {
                label:"Oferta",
                items:[
                    {
                        title:"Strony internetowe",
                        url:"#"
                      },
                      {
                        title:"SEO",
                        url:"#"
                      },
                      {
                        title:"SEM",
                        url:"#"
                      },
                      {
                        title:"Copywriting",
                        url:"#"
                      },
                      {
                        title:"Videomaking",
                        url:"#"
                      },
                      {
                        title:"Audyty",
                        url:"#"
                      }
                ],
            },
        ],
        nip:{
            content:123321123312,
            label:"NIP"
        },
        regulations:[
            {
                title:"Polityka cookies",
                url:"#"
            },
            {
                title:"Polityka prywatności",
                url:"#"
            },
        ],
        socials:[
            "facebook.com",
            "linkedin.com",
            "instagram.com",
            "x.com",
            "youtube.com",
            "medium.com",
            "github.com"
        ]
    }
}