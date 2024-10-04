import de_flag from "assets/flags/de.png"
import en_flag from "assets/flags/en.png"
import fr_flag from "assets/flags/fr.png"
import pl_flag from "assets/flags/pl.png"
import logo from "img/logo.png"
import { tFooter } from "footer/Footer.models"
import { tNavigation } from 'nav/Navigation.models';
type t_layout = {
    nav:tNavigation;
    footer:tFooter;
}

export const layout:t_layout = {
    nav:{
        brand:{
            title:"RadWEB",
            url:"/",
            logo:{
                altText:"",
                sourceSrc:logo.src,
                title:""
            }
        },
        menu: {
            menu:[
                {
                    title:"Start",
                    url:"#"
                },
                {
                    title:"O nas",
                    url:"#",
                    submenu:[
                        {
                            title:"Radosław Adamczyk",
                            url:"#"
                        },
                        {
                            title:"Filip Bukowiecki",
                            url:"#"
                        },
                        {
                            title:"Historia RadWEB",
                            url:"#"
                        }
                    ]
                },
                {
                    title:"Blog",
                    url:"#",
                    submenu:[
                        {
                            title:"Programowanie",
                            url:"#"
                        },
                        {
                            title:"SEO",
                            url:"#"
                        },
                        {
                            title:"Systemy operacyjne",
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
                            title:"Social media",
                            url:"#"
                        },
                        {
                            title:"Google Ads",
                            url:"#"
                        },
                    ]
                },
                {
                    title:"Usługi",
                    url:"#",
                    submenu:[
                        {
                            title:"Strony internetowe",
                            url:"#"
                        },
                        {
                            title:"SEO",
                            url:"#"
                        },
                        {
                            title:"Videomaking",
                            url:"#"
                        },
                    ]
                },
                {
                    title:"Projekty",
                    url:"#",
                },
                {
                    title:"Słownik",
                    url:"#",
                },
                {
                    title:"Kontakt",
                    url:"#",
                },
            ]
        },
        search:{
            field:{
                action:"",
                placeholder:"Wpisz frazę"
            },
        },
        settings:{
            langs:{
                title:"Wybierz język",
                langs:[
                    {
                        image:{
                            altText:"",
                            sourceSrc:pl_flag.src,
                            title:""
                        },
                        lang:"pl",
                        title:"Polski",
                        url:"#"
                    },
                    {
                        image:{
                            altText:"",
                            sourceSrc:en_flag.src,
                            title:""
                        },
                        lang:"en",
                        title:"English",
                        url:"#"
                    },
                    {
                        image:{
                            altText:"",
                            sourceSrc:fr_flag.src,
                            title:""
                        },
                        lang:"fr",
                        title:"France",
                        url:"#"
                    },
                    {
                        image:{
                            altText:"",
                            sourceSrc:de_flag.src,
                            title:""
                        },
                        lang:"de",
                        title:"Deutch",
                        url:"#"
                    },
                ]
            }
        }
    },
    footer:{
        author:{
            content:`RadWEB &copy; 2021 - ${new Date().getFullYear()}`
        },
        informations:{
            address:`Donatowo 53,<br/>64-020 Czempiń`,
            brand:`RadWEB`,
            cta:``,
            slogan:`Współczesny marketing online`,
            contact:{
                email:{
                    rel:"index nofollow",
                    title:"r.adamczyk@radweb.pl",
                    url:"mailto:r.adamczyk@radweb.pl",
                },
                phone:{
                    rel:"index nofollow",
                    title:"(+48) 794-100-413",
                    url:"tel:+48794100413",
                },
            },
        },
        menu:{
            menu:[
                {
                    title:`RadWEB`,
                    submenu:[
                        {
                            title:`Start`,
                            url:`#`
                        },
                        {
                            title:`Kim jesteśmy`,
                            url:`#`
                        },
                        {
                            title:`Blog`,
                            url:`#`
                        },
                        {
                            title:`Projekty`,
                            url:`#`
                        },
                        {
                            title:`Usługi`,
                            url:`#`
                        },
                        {
                            title:`Słownik`,
                            url:`#`
                        },
                    ],
                },
                {
                    title:`Oferta`,
                    submenu:[
                        {
                            title:`Strony internetowe`,
                            url:`#`
                        },
                        {
                            title:`Pozycjonowanie`,
                            url:`#`
                        },
                        {
                            title:`SEO lokalne`,
                            url:`#`
                        },
                        {
                            title:`Copywriting`,
                            url:`#`
                        },
                    ],
                },
                {
                    title:`Kontakt`,
                    submenu:[
                        {
                            title:`Kontakt`,
                            url:`#`
                        },
                        {
                            title:`Polityka prywatności`,
                            url:`#`
                        },
                        {
                            title:`Polityka cookies`,
                            url:`#`
                        },
                    ],
                },
                {
                    title:`Pozycjonowanie`,
                    submenu:[
                        {
                            title:`Pozycjonowanie Poznań`,
                            url:`#`
                        },
                        {
                            title:`Pozycjonowanie Warszawa`,
                            url:`#`
                        },
                        {
                            title:`Pozycjonowanie Kraków`,
                            url:`#`
                        },
                        {
                            title:`Pozycjonowanie Wrocław`,
                            url:`#`
                        },
                        {
                            title:`Pozycjonowanie Katowice`,
                            url:`#`
                        },
                        {
                            title:`Pozycjonowanie Łódź`,
                            url:`#`
                        },
                        {
                            title:`Pozycjonowanie Szczecin`,
                            url:`#`
                        },
                        {
                            title:`Pozycjonowanie Gdańsk`,
                            url:`#`
                        },
                        {
                            title:`Pozycjonowanie Elbląg`,
                            url:`#`
                        },
                        {
                            title:`Pozycjonowanie Białystok`,
                            url:`#`
                        },
                        {
                            title:`Pozycjonowanie Lublin`,
                            url:`#`
                        },
                    ],
                },
                {
                    title:`Strony internetowe`,
                    submenu:[
                        {
                            title:`Strony internetowe Poznań`,
                            url:`#`
                        },
                        {
                            title:`Strony internetowe Warszawa`,
                            url:`#`
                        },
                        {
                            title:`Strony internetowe Kraków`,
                            url:`#`
                        },
                        {
                            title:`Strony internetowe Wrocław`,
                            url:`#`
                        },
                        {
                            title:`Strony internetowe Katowice`,
                            url:`#`
                        },
                        {
                            title:`Strony internetowe Łódź`,
                            url:`#`
                        },
                        {
                            title:`Strony internetowe Szczecin`,
                            url:`#`
                        },
                        {
                            title:`Strony internetowe Gdańsk`,
                            url:`#`
                        },
                        {
                            title:`Strony internetowe Elbląg`,
                            url:`#`
                        },
                        {
                            title:`Strony internetowe Białystok`,
                            url:`#`
                        },
                        {
                            title:`Strony internetowe Lublin`,
                            url:`#`
                        },
                    ],
                },
            ]
        },
        socials:{
            socials:[
                "facebook.com",
                "x.com",
                "instagram.com",
                "youtube.com",
                "github.com",
            ]
        }
    }
}