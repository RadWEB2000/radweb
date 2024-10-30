import { tFooter } from 'footer/Footer.models';

type t_main = {
    footer:tFooter;
}

export const main:t_main = {
    footer:{
        author:`RadWEB &copy; ${new Date().getFullYear()}`,
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
        title:`RadWEB`
    }
}