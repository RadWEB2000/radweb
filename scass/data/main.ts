import de_flag from "assets/flags/de.svg"
import en_flag from "assets/flags/en.svg"
import fr_flag from "assets/flags/fr.svg"
import pl_flag from "assets/flags/pl.svg"
import logo from "assets/images/logo.png"

type t_main = {
    nav: {
        flags: {
            de:string;
            en:string;
            fr:string;
            pl:string;
        };
        logo: {
            image:tImage;
            url:string;
        }
        menu: {
            id:number;
            title:string;
            url:string;
            submenu?:{
                id:number;
                parentId:number;
                title:string;
                url:string;
            }[];
        }[];
    }
}

export const main:t_main = {
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
                id:0,
                title:"Start",
                url:"#"
            },
            {
                id:1,
                title:"O nas",
                url:"#",
                submenu:[
                    {
                        id:0,
                        parentId:1,
                        title:"Radosław Adamczyk",
                        url:"#"
                    },
                    {
                        id:1,
                        parentId:1,
                        title:"Filip Bukowiecki",
                        url:"#"
                    },
                    {
                        id:2,
                        parentId:1,
                        title:"Historia RadWEB",
                        url:"#"
                    }
                ]
            },
            {
                id:2,
                title:"Blog",
                url:"#",
                submenu:[
                    {
                        id:0,
                        parentId:2,
                        title:"Programowanie",
                        url:"#"
                    },
                    {
                        id:1,
                        parentId:2,
                        title:"SEO",
                        url:"#"
                    },
                    {
                        id:2,
                        parentId:2,
                        title:"Systemy operacyjne",
                        url:"#"
                    },
                    {
                        id:3,
                        parentId:2,
                        title:"Copywriting",
                        url:"#"
                    },
                    {
                        id:4,
                        parentId:2,
                        title:"Videomaking",
                        url:"#"
                    },
                    {
                        id:5,
                        parentId:2,
                        title:"Social media",
                        url:"#"
                    },
                    {
                        id:6,
                        parentId:2,
                        title:"Google Ads",
                        url:"#"
                    },
                ]
            },
            {
                id:3,
                title:"Usługi",
                url:"#",
                submenu:[
                    {
                        id:0,
                        parentId:3,
                        title:"Strony internetowe",
                        url:"#"
                    },
                    {
                        id:1,
                        parentId:3,
                        title:"SEO",
                        url:"#"
                    },
                    {
                        id:2,
                        parentId:3,
                        title:"Videomaking",
                        url:"#"
                    },
                ]
            },
            {
                id:4,
                title:"Projekty",
                url:"#",
            },
            {
                id:5,
                title:"Słownik",
                url:"#",
            },
            {
                id:6,
                title:"Kontakt",
                url:"#",
            },
        ]
    }
}