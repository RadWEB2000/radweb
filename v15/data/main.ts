import { tFooter } from "footer/Footer.models"

type t_main = {
    footer:tFooter;
}

export const main:t_main = {
    footer: {
        author:`RadWEB &copy; ${new Date().getFullYear()}`,
        details:{
            address:{
                location:`Donatowo 53`,
                zipCode:`64-020 Czempiń`
            },
            contact:[
                {
                    type:"e-mail",
                    title:"r.adamczyk@radweb.pl",
                    url:"mailto:radoslaw.adamczyk2000@gmail.com"
                },
                {
                    type:"phone",
                    title:"+48 794-100-413",
                    url:"tel:+48794100413"
                },
            ],
            slogan:`Marketing online`,
            title:`RadWEB`
        },
        socials: [
            {
                title:`Facebook`,
                url:`https://facebook.com`,
                props:{
                    rel:"index nofollow",
                    target:"_blank", 
                }
            },
            {
                title:`Instagram`,
                url:`https://instagram.com`,
                props:{
                    rel:"index nofollow",
                    target:"_blank", 
                }
            },
            {
                title:`YouTube`,
                url:`https://youtube.com`,
                props:{
                    rel:"index nofollow",
                    target:"_blank", 
                }
            },
            {
                title:`LinkedIn`,
                url:`https://linkedin.com`,
                props:{
                    rel:"index nofollow",
                    target:"_blank", 
                }
            },
            {
                title:`Github`,
                url:`https://github.com`,
                props:{
                    rel:"index nofollow",
                    target:"_blank", 
                }
            }
        ],
        menus:[
            {
                title:`Szybkie linki`,
                menu:[
                    {
                        title:`Start`,
                        url:`#`
                    },
                    {
                        title:`O mnie`,
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
                        title:`Oferta`,
                        url:`#`
                    },
                    {
                        title:`Słownik`,
                        url:`#`
                    },
                    {
                        title:`Kontakt`,
                        url:`#`
                    },
                ]
            },
            {
                title:`SEO`,
                menu:[
                    {
                        title:`SEO Google`,
                        url:`#`
                    },
                    {
                        title:`SEO Bing`,
                        url:`#`
                    },
                    {
                        title:`SEO lokalne`,
                        url:`#`
                    },
                    {
                        title:`Content marketing`,
                        url:`#`
                    },
                    {
                        title:`Link building`,
                        url:`#`
                    },
                    {
                        title:`Audyty SEO`,
                        url:`#`
                    },
                    {
                        title:`Usługi SEO`,
                        url:`#`
                    },
                ]
            },
            {
                title:`WWW`,
                menu:[
                    {
                        title:`Strony internetowe`,
                        url:`#`
                    },
                    {
                        title:`Portfolia`,
                        url:`#`
                    },
                    {
                        title:`Blogi`,
                        url:`#`
                    },
                    {
                        title:`Landing page`,
                        url:`#`
                    },
                    {
                        title:`Optymalizacje stron`,
                        url:`#`
                    },
                    {
                        title:`Aplikacje webowe`,
                        url:`#`
                    },
                    {
                        title:`Usługi WWW`,
                        url:`#`
                    },
                ]
            },
            {
                title:`Web Care`,
                menu:[
                    {
                        title:`Certyfikaty SSL`,
                        url:`#`
                    },
                    {
                        title:`Hosting stron`,
                        url:`#`
                    },
                    {
                        title:`Domeny`,
                        url:`#`
                    },
                    {
                        title:`Aktualizacje WordPress`,
                        url:`#`
                    },
                    {
                        title:`Wsparcie techniczne`,
                        url:`#`
                    },
                    {
                        title:`Backup'y`,
                        url:`#`
                    },
                    {
                        title:`Usługi Web Care`,
                        url:`#`
                    },
                ]
            },
            {
                title:`Wiedza`,
                menu:[
                    {
                        title:`Co nowego w content marketingu?`,
                        url:`#`
                    },
                    {
                        title:`Jak wykorzystać social media do promocji wydarzeń?`,
                        url:`#`
                    },
                    {
                        title:`Jak wykorzystać social media do promocji wydarzeń?`,
                        url:`#`
                    },
                    {
                        title:`Wykorzystanie SEO w pozycjonowaniu brand'u`,
                        url:`#`
                    },
                ]
            },
            {
                title:`Informacje`,
                menu:[
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
                    {
                        title:`Regulamin`,
                        url:`#`
                    },
                    {
                        title:`Zgody`,
                        url:`#`
                    },
                ]
            },
        ]
    }
}