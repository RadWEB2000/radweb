import { tHero } from 'v-home/Hero/Hero.models';
import hero_img from "img/wolf-head-big.webp";
import projects_img from "img/projekty-i-realizacje-radweb.webp";
import { tOverview } from 'v-home/Overview/Overview.models';
import { tAbout } from 'v-home/About/About.models';
import r_adamczyk from "img/r-adamczyk-gray.webp"
import { tServices } from 'v-home/Services/Services.models';
import { tProjects } from 'v-home/Projects/Projects.models';

type t_home = {
    about:tAbout;
    hero:tHero;
    overview:tOverview;
    services:tServices;
    projects:tProjects;
}

export const home:t_home = {
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
            }
        ],
        image:{
            altText:"",
            sourceSrc:hero_img.src,
            title:""
        },
        slogan:"Współczesny marketing online",
        title:"RadWEB",
        socials:[
            {
                title:"Facebook",
                url:"https://facebook.com"
            },
            {
                title:"Instagram",
                url:"https://instagram.com"
            },
            {
                title:"Github",
                url:"https://github.com"
            },
            {
                title:"YouTube",
                url:"https://youtube.com"
            },
            {
                title:"Twitter",
                url:"https://x.com"
            }
        ]
    },
    overview: {
        content:`Its our commitment to excellence that distinguishes us. Our expertise spans the realms of branding, UI/UX design, and development, where we employ a strategic approach. We seamlessly coordinate across various disciplines and services to craft exceptional products.<br/><br/>
        Our mission is to empower global enterprises to unlock their maximum capabilities.`,
        title:'WE BELIEVE IN THE POWER OF DESIGN AND ITS ABILITY TO DEFINE AND TRANSFORM BRANDS.'
    },
    about:{
        button:{
            title:"Poznaj mnie",
            url:"#"
        },
        content:`We delve deep into research, putting users at the heart of our design process. By testing with real customers, we craft digital interfaces and experiences that are not just well-informed but also resonate with authenticity. Our aim? To enrich lives and revolutionize businesses through innovation and empathy.`,
        image:{
            altText:"",
            sourceSrc:r_adamczyk.src,
            title:"",
        },
        title:"Kim jestem?",
        tags:[
            {
                title:"Doświadczenie",
                url:"#"
            },
            {
                title:"Certyfikaty",
                url:"#"
            },
            {
                title:"Szkolenia",
                url:"#"
            }
        ]
    },
    services: {
        content:`Wir sind spezialisiert auf Employer Branding und strategische Personalberatung in den Bereichen Legal, Finance und Advisory. <br/><br/>
        „Raising Standards in Work and Life“ bedeutet für uns, gemeinsam skalierbare Strukturen zu schaffen, die langfristigen Erfolg sichern. Denn zufriedene und motivierte Mitarbeiter sind der Schlüssel zu nachhaltigem Wachstum und Erfolg.`,
        title:"Oferta",
        button:{
            title:"Wszystkie usługi",
            url:"#"
        },
        slogan:`Twój sukces to moja motywacja`,
        cards:[
            {
                content:`We're like treasure hunters, uncovering gems of insight to chart your path to growth and genuine connections. `,
                title:`SEO`,
                button:{
                    title:`Sprawdź usługę`,
                    url:`#`
                },
                cards:[
                    {
                        title:`Content marketing`,
                        url:`#`
                    },
                    {
                        title:`SEO Google`,
                        url:`#`
                    },
                    {
                        title:`Link building`,
                        url:`#`
                    },
                    {
                        title:`SEO lokalne`,
                        url:`#`
                    }
                ]
            },
            {
                content:`We're like treasure hunters, uncovering gems of insight to chart your path to growth and genuine connections. `,
                title:`Strony internetowe`,
                button:{
                    title:`Sprawdź usługę`,
                    url:`#`
                },
                cards:[
                    {
                        title:`Landing page`,
                        url:`#`
                    },
                    {
                        title:`Portfolio`,
                        url:`#`
                    },
                    {
                        title:`Blog`,
                        url:`#`
                    },
                    {
                        title:`Utrzymanie stron`,
                        url:`#`
                    }
                ]
            },
            {
                content:`We're like treasure hunters, uncovering gems of insight to chart your path to growth and genuine connections. `,
                title:`Web Care`,
                button:{
                    title:`Sprawdź usługę`,
                    url:`#`
                },
                cards:[
                    {
                        title:`Certyfikaty SSL`,
                        url:`#`
                    },
                    {
                        title:`Hosting`,
                        url:`#`
                    },
                    {
                        title:`Wsparcie techniczne`,
                        url:`#`
                    }
                ]
            },
        ]
    },
    projects: {
        button:{
            title:`Wszystkie prace`,
            url:`#`
        },
        content:`At Creedz, we’re here to bring your brand to life. Whether you need eye-catching graphics, a responsive website or effective marketing strategies. Our goal is to exceed your expectations and turn your vision into reality with creativity and expertise.`,
        title:`Projekty`,
        media:{
            altText:"",
            sourceSrc:projects_img.src,
            title:""
        },
        cards:[
            {
                button:{
                    title:`Zobacz`,
                    url:'#'
                },
                categories:[
                    "SEO",
                    "Strona internetowa",
                ],
                content:`Creedz, a and aga-łcy, transforms ideas into stunning digital experiences. The
                talented team creates sleek websites and powerful apps with metictlous attention to detail. Known for capturing the essence Of brands, has earned a reputation for quality and creativity. Today, they continue to innovate and push the of design and development.`,
                title:`Borówkowy Gaj`,
                media:{
                    altText:"",
                    sourceSrc:`https://cdn.pixabay.com/photo/2020/03/13/07/45/aspiration-4927227_1280.jpg`,
                    title:``
                }
            },
            {
                button:{
                    title:`Zobacz`,
                    url:'#'
                },
                categories:[
                    "Strona internetowa",
                    "SEO",
                    "Web Care",
                ],
                content:`Creedz, a and aga-łcy, transforms ideas into stunning digital experiences. The
                talented team creates sleek websites and powerful apps with metictlous attention to detail. Known for capturing the essence Of brands, has earned a reputation for quality and creativity. Today, they continue to innovate and push the of design and development.`,
                title:`Agromar`,
                media:{
                    altText:"",
                    sourceSrc:`https://cdn.pixabay.com/photo/2020/03/13/07/45/aspiration-4927227_1280.jpg`,
                    title:""
                }
            },
            {
                button:{
                    title:`Zobacz`,
                    url:'#'
                },
                categories:[
                    "Strona internetowa",
                ],
                content:`Creedz, a and aga-łcy, transforms ideas into stunning digital experiences. The
                talented team creates sleek websites and powerful apps with metictlous attention to detail. Known for capturing the essence Of brands, has earned a reputation for quality and creativity. Today, they continue to innovate and push the of design and development.`,
                title:`Mechanik Ludomy`,
                media:{
                    altText:"",
                    sourceSrc:`https://cdn.pixabay.com/photo/2020/03/13/07/45/aspiration-4927227_1280.jpg`,
                    title:""
                }
            },
        ]
    },
  
}