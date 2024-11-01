import { tFooter } from 'footer/Footer.models';

type t_main = {
    footer:tFooter;
}

export const main:t_main = {
    footer:{
        details:{
            author:`RadWEB ©️ 2023-${new Date().getFullYear()}`,
            menu:[
                {
                    title:"Start",
                    url:"#"
                },
                {
                    title:"O mnie",
                    url:"#"
                },
                {
                    title:"Blog",
                    url:"#"
                },
                {
                    title:"Oferta",
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
            policies:[
                {
                    title:"Polityka cookies",
                    url:"#"
                },
                {
                    title:"Polityka prywatności",
                    url:"#"
                }
            ],
            socials:[
                {
                    title:'Facebook',
                    url:'https://facebook.com'
                },
                {
                    title:'YouTube',
                    url:'https://youtube.com'
                },
                {
                    title:'Twitter',
                    url:'https://x.com'
                },
                {
                    title:'LinkedIn',
                    url:'https://linkedin.com'
                },
                {
                    title:'Instagram',
                    url:'https://instagram.com'
                },
                {
                    title:'Github',
                    url:'https://github.com'
                },
            ],
        },
        informations: {
            contact:[
                {
                    type:"email",
                    title:"r.adamczyk@radweb.pl",
                    url:"mailto:r.adamczyk@radweb.pl"
                },
                {
                    title:"+48 794-100-413",
                    type:"phone",
                    url:"tel:+48794100413"
                }
            ],
            location:{
                address:`Donatowo 53`,
                zipCode:`64-020 Czempiń`
            },
            slogan:`SEO | Strony internetowe`,
            title:'RadWEB'
        },
        cities:{
            title:"Miasta",
            menu:[
                {
                    title:`Poznań`,
                    url:`#`
                },
                {
                    title:`Chodzież`,
                    url:`#`
                },
                {
                    title:`Czarnków`,
                    url:`#`
                },
                {
                    title:`Gniezno`,
                    url:`#`
                },
                {
                    title:`Gostyń`,
                    url:`#`
                },
                {
                    title:`Grodzisk Wlkp.`,
                    url:`#`
                },
                {
                    title:`Jarocin`,
                    url:`#`
                },
                {
                    title:`Kalisz`,
                    url:`#`
                },
                {
                    title:`Kępno`,
                    url:`#`
                },
                {
                    title:`Koło`,
                    url:`#`
                },
                {
                    title:`Konin`,
                    url:`#`
                },
                {
                    title:`Kościan`,
                    url:`#`
                },
                {
                    title:`Krotoszyn`,
                    url:`#`
                },
                {
                    title:`Leszno`,
                    url:`#`
                },
                {
                    title:`Międzychód`,
                    url:`#`
                },
                {
                    title:`Nowy Tomyśl`,
                    url:`#`
                },
                {
                    title:`Oborniki`,
                    url:`#`
                },
                {
                    title:`Ostrów Wlkp.`,
                    url:`#`
                },
                {
                    title:`Ostrzeszów`,
                    url:`#`
                },
                {
                    title:`Piła`,
                    url:`#`
                },
                {
                    title:`Pleszew`,
                    url:`#`
                },
                {
                    title:`Rawicz`,
                    url:`#`
                },
                {
                    title:`Słupca`,
                    url:`#`
                },
                {
                    title:`Środa Wlkp.`,
                    url:`#`
                },
                {
                    title:`Śrem`,
                    url:`#`
                },
                {
                    title:`Szamotuły`,
                    url:`#`
                },
                {
                    title:`Turew`,
                    url:`#`
                },
                {
                    title:`Wągrowiec`,
                    url:`#`
                },
                {
                    title:`Wolsztyn`,
                    url:`#`
                },
                {
                    title:`Września`,
                    url:`#`
                },
                {
                    title:`Złotowo`,
                    url:`#`
                },
            ]
        },
        menu:[
            {
                title:`SEO`,
                menu:[
                    {
                        title:`SEO lokalne`,
                        url:`#`
                    },
                    {
                        title:`SEO dla firm`,
                        url:`#`
                    },
                    {
                        title:`SEO e-commerce`,
                        url:`#`
                    },
                    {
                        title:`Content marketing`,
                        url:`#`
                    },
                    {
                        title:`Audyty SEO`,
                        url:`#`
                    },
                    {
                        title:`Link building`,
                        url:`#`
                    },
                    {
                        title:`Optymalizacja stron`,
                        url:`#`
                    },
                    {
                        title:`Marketing szeptany`,
                        url:`#`
                    },
                ]
            },
            {
                title:`Strony internetowe`,
                menu:[
                    {
                        title:`Landing page`,
                        url:`#`
                    },
                    {
                        title:`Blogi`,
                        url:`#`
                    },
                    {
                        title:`Portfolio`,
                        url:`#`
                    },
                    {
                        title:`Sklepy e-commerce`,
                        url:`#`
                    },
                    {
                        title:`Bezpieczeństwo stron`,
                        url:`#`
                    },
                    {
                        title:`WordPress`,
                        url:`#`
                    },
                    {
                        title:`Hosting`,
                        url:`#`
                    },
                    {
                        title:`Administracja stron`,
                        url:`#`
                    }
                ]
            },
        ]
    }
}