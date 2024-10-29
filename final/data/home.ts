import { tHero } from 'v-home/Hero/Hero.models';
import hero_img from "img/wolf-head-big.webp";
import projects_img from "img/projekty-i-realizacje-radweb.webp";
import { tOverview } from 'v-home/Overview/Overview.models';
import { tAbout } from 'v-home/About/About.models';
import r_adamczyk from "img/r-adamczyk-gray.webp"
import { tServices } from 'v-home/Services/Services.models';
import { tProjects } from 'v-home/Projects/Projects.models';
import { tBlog } from 'parts/Views/HomeView/Blog/Blog.models';
import { tWhyWorth } from 'v-home/WhyWorth/WhyWorth.models';
import { tReasons } from 'v-home/Reasons/Reasons.models';

type t_home = {
    about:tAbout;
    hero:tHero;
    overview:tOverview;
    services:tServices;
    projects:tProjects;
    blog:tBlog;
    whyWorth:tWhyWorth;
    reasons:tReasons;
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
    blog: {
        button:{
            title:"Wszystkie wpisy",
            url:`#`
        },
        content:`MySQL to jeden z najpopularniejszych obecnie silników bazodanowych, czyli systemów zarządzających relacyjnymi bazami danych. Relacyjne bazy danych są z kolei bardzo intuicyjnym i prostym sposobem na przechowywanie powiązanych ze sobą danych w formie tabel, gdzie każdy wiersz oznacza osobny rekord (wpis) o unikatowym kluczu (elemencie identyfikującym dany rekord).`,
        title:'Blog',
        cards:[
            {
                category:{
                    title:`SEO`,
                    url:`#`
                },
                excerpt:`Osiągnięcie celów biznesowych jest zawsze priorytetem - im szybciej to nastąpi, tym lepiej. Dlatego tak wiele właścicieli firm zastanawia się ile trwa pozycjonowanie strony internetowej w Google, a uzyskana odpowiedź kończy się kolejnym pytaniem: dlaczego tak długo? W tym artykule przyjrzymy się różnym czynnikom mającym wpływ na efekty SEO, a także przeszkodom, z jakimi muszą zmierzyć się nowe witryny.`,
                image:{
                    altText:"",
                    sourceSrc:`https://www.sunrisesystem.pl/wp-content/uploads/2023/09/grafika-1200-x-740-kopia-4_382.png`,
                    title:''
                },
                release:`21 sie 2024`,
                title:`Samodzielne pozycjonowanie strony`,
                url:'#'
            },
            {
                category:{
                    title:`SEO`,
                    url:`#`
                },
                excerpt:`Osiągnięcie celów biznesowych jest zawsze priorytetem - im szybciej to nastąpi, tym lepiej. Dlatego tak wiele właścicieli firm zastanawia się ile trwa pozycjonowanie strony internetowej w Google, a uzyskana odpowiedź kończy się kolejnym pytaniem: dlaczego tak długo? W tym artykule przyjrzymy się różnym czynnikom mającym wpływ na efekty SEO, a także przeszkodom, z jakimi muszą zmierzyć się nowe witryny.`,
                image:{
                    altText:"",
                    sourceSrc:`https://www.sunrisesystem.pl/wp-content/uploads/2020/07/grafika-1200-x-740-kopia-2-1_160.png`,
                    title:''
                },
                release:`21 sie 2024`,
                title:`Ile trwa pozycjonowanie strony internetowej w Google?`,
                url:'#'
            },
            {
                category:{
                    title:`SEO`,
                    url:`#`
                },
                excerpt:`Osiągnięcie celów biznesowych jest zawsze priorytetem - im szybciej to nastąpi, tym lepiej. Dlatego tak wiele właścicieli firm zastanawia się ile trwa pozycjonowanie strony internetowej w Google, a uzyskana odpowiedź kończy się kolejnym pytaniem: dlaczego tak długo? W tym artykule przyjrzymy się różnym czynnikom mającym wpływ na efekty SEO, a także przeszkodom, z jakimi muszą zmierzyć się nowe witryny.`,
                image:{
                    altText:"",
                    sourceSrc:`https://www.sunrisesystem.pl/wp-content/uploads/2023/04/grafika-1200-x-740-kopia-2-1_109.png`,
                    title:''
                },
                release:`21 sie 2024`,
                title:`Black Hat SEO – poznaj niedozwolone techniki`,
                url:'#'
            },
            {
                category:{
                    title:`SEO`,
                    url:`#`
                },
                excerpt:`Osiągnięcie celów biznesowych jest zawsze priorytetem - im szybciej to nastąpi, tym lepiej. Dlatego tak wiele właścicieli firm zastanawia się ile trwa pozycjonowanie strony internetowej w Google, a uzyskana odpowiedź kończy się kolejnym pytaniem: dlaczego tak długo? W tym artykule przyjrzymy się różnym czynnikom mającym wpływ na efekty SEO, a także przeszkodom, z jakimi muszą zmierzyć się nowe witryny.`,
                image:{
                    altText:"",
                    sourceSrc:`https://www.sunrisesystem.pl/wp-content/uploads/2023/09/grafika-1200-x-740_152.png`,
                    title:''
                },
                release:`21 sie 2024`,
                title:`Co to jest SEO?`,
                url:'#'
            },
            {
                category:{
                    title:`Copywriting`,
                    url:`#`
                },
                excerpt:`Osiągnięcie celów biznesowych jest zawsze priorytetem - im szybciej to nastąpi, tym lepiej. Dlatego tak wiele właścicieli firm zastanawia się ile trwa pozycjonowanie strony internetowej w Google, a uzyskana odpowiedź kończy się kolejnym pytaniem: dlaczego tak długo? W tym artykule przyjrzymy się różnym czynnikom mającym wpływ na efekty SEO, a także przeszkodom, z jakimi muszą zmierzyć się nowe witryny.`,
                image:{
                    altText:"",
                    sourceSrc:`https://www.sunrisesystem.pl/wp-content/uploads/2008/04/20211108134246_fb_miniaturacopywritingwarsztat_397.png`,
                    title:''
                },
                release:`21 sie 2024`,
                title:`CTA – czym jest i jak je wykorzystywać?`,
                url:'#'
            },
            {
                category:{
                    title:`Analityka`,
                    url:`#`
                },
                excerpt:`Osiągnięcie celów biznesowych jest zawsze priorytetem - im szybciej to nastąpi, tym lepiej. Dlatego tak wiele właścicieli firm zastanawia się ile trwa pozycjonowanie strony internetowej w Google, a uzyskana odpowiedź kończy się kolejnym pytaniem: dlaczego tak długo? W tym artykule przyjrzymy się różnym czynnikom mającym wpływ na efekty SEO, a także przeszkodom, z jakimi muszą zmierzyć się nowe witryny.`,
                image:{
                    altText:"",
                    sourceSrc:`https://www.sunrisesystem.pl/wp-content/uploads/2023/07/1200x740-google-trends_751.png`,
                    title:''
                },
                release:`21 sie 2024`,
                title:`Jak wykorzystać Google Trends w sprzedaży?`,
                url:'#'
            },
        ]
    },
    whyWorth:{
        content:`Naszą misją jest pomoc przedsiębiorstwom i firmom w działaniach marketingowych. Kierujemy się przy tym etyką i uczciwością w relacjach z naszymi Partnerami.`,
        title:`Przejrzystość współpracy`,
        cards: [
            {
                content:`Zgodnie z polityką naszej agencji marketingowej nie zaproponujemy Państwu długoterminowej umowy na działania marketingowe. Współpraca ma się opłacać i to ma być jej podstawą. Utrzymujemy klientów dzięki skuteczności i wartościowym usługom.`,
                title:`Bez umowy długoterminowej`
            },
            {
                content:`Jasno określamy zasady współpracy i przedstawiamy cennik przed rozpoczęciem działań. Informujemy, na czym polega promocja stron internetowych przez nasz zespół, co zawiera audyt SEO, a także jak wygląda współpraca na każdym etapie realizacji.`,
                title:`Brak ukrytych kosztów`
            },
            {
                content:`Niektóre agencje SEO obiecują szybki efekt kosztem bezpieczeństwa. Nasze działania nie zagrażają Twojej witrynie i marce. Unikamy ryzykownych praktyk. Skupiamy się na osiągnięciu dobrych pozycji oraz szybkiego efektu w działaniach SEO, SEM i innych.`,
                title:`Bezpieczne działania`
            },
            {
                content:`Cyklicznie otrzymasz raporty z działań wykonywanych dla Twojej firmy. Dzięki temu będziesz miał pewność, że prace są wykonywane systematycznie, profesjonalnie i zgodnie z założeniami ustalonymi na początku współpracy.`,
                title:`Cykliczne raporty`
            },
        ]
    },
    reasons:{
        cards:[
            {
                button:{
                    title:'Sprawdź',
                    url:'#'
                },
                cards:[
                    "Lepsza widoczność",
                    "Więcej klientów",
                    "Większa wiarygodoność",
                    "Przewaga nad konkurencją",
                    "Długoterminowy zysk",
                ],
                content:`Zgodnie z polityką naszej agencji marketingowej nie zaproponujemy Państwu długoterminowej umowy na działania marketingowe. Współpraca ma się opłacać i to ma być jej podstawą. Utrzymujemy klientów dzięki skuteczności i wartościowym usługom.`,
                title:'Dlaczego warto mieć SEO?'
            },
            {
                button:{
                    title:'Sprawdź',
                    url:'#'
                },
                cards:[
                    "Budowanie wiarygodności",
                    "Świadomość marki",
                    "Lepsza komunikacja z klientami",
                    "Większa skalowalność biznesu",
                    "Pozyskiwanie partnerów biznesowych"
                ],
                content:`Zgodnie z polityką naszej agencji marketingowej nie zaproponujemy Państwu długoterminowej umowy na działania marketingowe. Współpraca ma się opłacać i to ma być jej podstawą. Utrzymujemy klientów dzięki skuteczności i wartościowym usługom.`,
                title:'Dlaczego warto mieć stronę?'
            },
        ]
    }
}