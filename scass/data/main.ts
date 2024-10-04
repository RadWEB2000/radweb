import de_flag from "assets/flags/de.svg"
import en_flag from "assets/flags/en.svg"
import fr_flag from "assets/flags/fr.svg"
import pl_flag from "assets/flags/pl.svg"
import logo from "assets/images/logo.png"

export const main = {
    nav: {
        flags: {
            de: de_flag,
            en: en_flag,
            fr: fr_flag,
            pl: pl_flag,
        },
        logo:{
            image:{
                altText:"",
                sourceSrc:logo.src,
                title:""
            },
            url:"/"
        },
        menu: [
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
    }
}