import radek from "assets/images/radek-adamczyk.webp";
import abstract from "assets/images/blob.webp"
import { tAboutUs } from 'v-home/AboutUs/AboutUs.models';
import { tBlog } from 'v-home/Blog/Blog.models';
import { tHero } from 'v-home/Hero/Hero.models';
import { tOffer } from 'v-home/Offer/Offer.models';
import { tProjects } from "v-home/Projects/Projects.models";
type t_home = {
    hero:tHero;
    offer:tOffer;
    aboutUs:tAboutUs;
    blog:tBlog;
    projects:tProjects;
}

export const home:t_home = {
    hero:{
        buttons:[
            {
                title:"Oferta",
                url:"#"
            },
            {
                title:"Blog",
                url:"#"
            },
            {
                title:"Kontakt",
                url:"#"
            },
        ],
        media:{
            altText:"",
            sourceSrc:abstract.src,
            title:""
        },
        socials: [
            {
                title:"Facebook",
                url:"facebook.com"
            },
            {
                title:"Github.com",
                url:"github.com"
            },
            {
                title:"Twitter",
                url:"x.com"
            },
            {
                title:"YouTube",
                url:"youtube.com"
            },
        ],
        slogan:"Współczesny marketing online",
        title:"RadWEB"
    },
    offer: {
        content:`Defined scope and careful planning ensured seamless <strong>site creation</strong> and effective problem solving`,
        cards:[
            {
                title:"SEO",
                url:"#",
                buttons:[
                    {
                        title:"Pozycjonowanie lokalne",
                        url:"#", 
                    },
                    {
                        title:"E-commerce",
                        url:"#", 
                    },
                    {
                        title:"Audyty",
                        url:"#", 
                    },
                    {
                        title:"Copywriting",
                        url:"#", 
                    },
                ]
            },
            {
                title:"WWW",
                url:"#",
                buttons:[
                    {
                        title:"Strony internetowe",
                        url:"#", 
                    },
                    {
                        title:"Aplikacje webowe",
                        url:"#", 
                    },
                    {
                        title:"Optymalizacja stron",
                        url:"#", 
                    },
                    {
                        title:"Utrzymywanie stron",
                        url:"#", 
                    },
                ]
            },
            {
                title:"Ads",
                url:"#",
                buttons:[
                    {
                        title:"Reklamy Google",
                        url:"#", 
                    },
                    {
                        title:"Reklamy Bing",
                        url:"#", 
                    },
                    {
                        title:"Facebook Ads",
                        url:"#", 
                    },
                ]
            }
        ],
        title:"Co oferujemy?"
    },
    aboutUs:{
        content:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo illum debitis, nisi expedita ipsum ut voluptatibus error! Aperiam explicabo eveniet enim illo iste quis? Dignissimos delectus illum perspiciatis expedita id? Laborum quis fuga eligendi deserunt numquam, molestiae sint minima enim necessitatibus voluptatum autem adipisci quam, nam maxime laudantium? Vel, libero nesciunt autem inventore voluptatibus rem obcaecati! Sunt omnis dolor eum? Ullam mollitia sequi exercitationem suscipit optio eius commodi neque saepe aliquam quae qui, ab accusantium odio, quasi cum distinctio. Maiores labore magnam nam assumenda dicta`,
        image:{
            altText:"",
            sourceSrc:radek.src,
            title:""
        },
        title:"Poznaj RadWEB",
        button:{
            title:"Twój zespół",
            url:"#"
        }
    },
    blog:{
        content:`Troszczymy się o to, by praca w naszym zespole była źródłem osobistego rozwoju i dawała satysfakcję. Cenimy różnorodność i stawiamy na partnerstwo w relacjach zawodowych. Pamiętamy, że pracujemy po to, żeby żyć i realizować swoje pasje oraz marzenia! Nasza Agencja SEO ma oddziały w doskonałych lokalizacjach, w sześciu polskich miastach: Poznaniu, Bydgoszczy, Katowicach, Toruniu, Wrocławiu i Warszawie. Wiele osób z naszego zespołu pracuje też zdalnie z Polski oraz z zagranicy. Mamy świetne rozwiązania, wspierające naszą codzienną komunikację.`,
        title:"Blog",
        button:{
            title:"Wszystkie wpisy",
            url:"#"
        },
        slogan:`Co w trawie piszczy?`,
        cards:[
            {
                category:{
                    title:"Copywriting",
                    url:"#"
                },
                excerpt:`Jakie treści wypuszczać dziś na TikToku, żeby zyskać zainteresowanie? Czy każda marka powinna podążać ślepo za wszystkimi trendami? TikTok jest jedną z największych platform społecznościowych i warto poważnie zainteresować się prowadzeniem tu profilu. Warto też dobrze przemyśleć, jak to robić.
`,
                image:{
                    altText:"",
                    sourceSrc:"https://www.sunrisesystem.pl/wp-content/uploads/2008/04/20211108134246_fb_miniaturacopywritingwarsztat_397.png",
                    title:""
                },
                release:`27 lip 2024`,
                title:`CTA – czym jest i jak je wykorzystywać?`,
                url:`#`
            },
            {
                category:{
                    title:"SEO",
                    url:"#"
                },
                excerpt:`Jakie treści wypuszczać dziś na TikToku, żeby zyskać zainteresowanie? Czy każda marka powinna podążać ślepo za wszystkimi trendami? TikTok jest jedną z największych platform społecznościowych i warto poważnie zainteresować się prowadzeniem tu profilu. Warto też dobrze przemyśleć, jak to robić.
`,
                image:{
                    altText:"",
                    sourceSrc:"https://www.sunrisesystem.pl/wp-content/uploads/2022/11/7365e5a8-4dea-4b47-aeec-6cb7d8882e5f_850.jpg",
                    title:""
                },
                release:`21 kwi 2024`,
                title:`Cross-selling i Up-selling – jak je stosować, aby zwiększyć sprzedaż w swoim sklepie?`,
                url:`#`
            },
            {
                category:{
                    title:"SEO",
                    url:"#"
                },
                excerpt:`Jakie treści wypuszczać dziś na TikToku, żeby zyskać zainteresowanie? Czy każda marka powinna podążać ślepo za wszystkimi trendami? TikTok jest jedną z największych platform społecznościowych i warto poważnie zainteresować się prowadzeniem tu profilu. Warto też dobrze przemyśleć, jak to robić.
`,
                image:{
                    altText:"",
                    sourceSrc:"https://www.sunrisesystem.pl/wp-content/uploads/2023/07/1200x740-google-trends_751.png",
                    title:""
                },
                release:`21 kwi 2024`,
                title:`Jak wykorzystać Google Trends w sprzedaży?`,
                url:`#`
            },
            {
                category:{
                    title:"Copywriting",
                    url:"#"
                },
                excerpt:`Jakie treści wypuszczać dziś na TikToku, żeby zyskać zainteresowanie? Czy każda marka powinna podążać ślepo za wszystkimi trendami? TikTok jest jedną z największych platform społecznościowych i warto poważnie zainteresować się prowadzeniem tu profilu. Warto też dobrze przemyśleć, jak to robić.
`,
                image:{
                    altText:"",
                    sourceSrc:"https://www.sunrisesystem.pl/wp-content/uploads/2022/12/thumb_matketing_internetowy_140.png",
                    title:""
                },
                release:`21 kwi 2024`,
                title:`Co to jest storytelling?`,
                url:`#`
            },
            {
                category:{
                    title:"Copywriting",
                    url:"#"
                },
                excerpt:`Jakie treści wypuszczać dziś na TikToku, żeby zyskać zainteresowanie? Czy każda marka powinna podążać ślepo za wszystkimi trendami? TikTok jest jedną z największych platform społecznościowych i warto poważnie zainteresować się prowadzeniem tu profilu. Warto też dobrze przemyśleć, jak to robić.
`,
                image:{
                    altText:"",
                    sourceSrc:"https://www.sunrisesystem.pl/wp-content/uploads/2008/04/20211108134246_fb_miniaturacopywritingwarsztat_397.png",
                    title:""
                },
                release:`21 kwi 2024`,
                title:`Czym jest evergreen content i jak go stworzyć?`,
                url:`#`
            },
            {
                category:{
                    title:"Pozycjonowanie",
                    url:"#"
                },
                excerpt:`Jakie treści wypuszczać dziś na TikToku, żeby zyskać zainteresowanie? Czy każda marka powinna podążać ślepo za wszystkimi trendami? TikTok jest jedną z największych platform społecznościowych i warto poważnie zainteresować się prowadzeniem tu profilu. Warto też dobrze przemyśleć, jak to robić.
`,
                image:{
                    altText:"",
                    sourceSrc:"https://www.sunrisesystem.pl/wp-content/uploads/2024/04/czy-seo-jest-trudne-2_973.jpg",
                    title:""
                },
                release:`21 kwi 2024`,
                title:`Czy pozycjonowanie stron internetowych jest trudne?`,
                url:`#`
            },
            {
                category:{
                    title:"Wordpress",
                    url:"#"
                },
                excerpt:`Która wtyczka jest lepsza: Rank Math SEO czy Yoast SEO? Sprawdziliśmy to i znamy werdykt. Poznaj szczegóły tego starcia.
`,
                image:{
                    altText:"",
                    sourceSrc:"https://www.sunrisesystem.pl/wp-content/uploads/2024/03/frame-44_830.jpg",
                    title:""
                },
                release:`21 kwi 2024`,
                title:`Rank Math SEO vs Yoast SEO – pojedynek gigantów o tytuł najlepszej wtyczki do pozycjonowania`,
                url:`#`
            },
        ]
    },
    projects: {
        content:`Zrealizowaliśmy już ponad 1 000 serwisów internetowych. Pracowaliśmy dla niezliczonej ilości małych, średnich i dużych firm, banków, uczelni, miast, a nawet prokuratur. Z naszych stron korzystają prawie wszystkie sądy w Polsce (ponad 200 jednostek). Mimo 20 lat doświadczenia wciąż jesteśmy entuzjastami Internetu :) A jednym zdaniem?`,
        title:"Projekty",
        button:{
            title:"Nasze realizacje",
            url:"#"
        },
        slogan:"Co robimy?",
        cards:[
            {
                button:{
                    title:"Przeczytaj więcej",
                    url:"#"
                },
                categories:[
                    "SEO",
                    "Strony internetowe",
                ],
                color:"#2682a8",
                excerpt:`s reiciendis, ipsa explicabo commodi officia minima veritatis saepe alias? Voluptatibus facere voluptatem recusandae, quam optio neque voluptas voluptate unde, explicabo iure minus ipsa sapiente excepturi minima. Totam excepturi ducimus, repudiandae earum, rem dicta perferendis accusantium doloribus recusandae sunt praesentium quae itaque dolor natus minus.`,
                image:{
                    altText:"",
                    sourceSrc:"https://cdn.pixabay.com/photo/2017/04/21/02/16/car-2247439_1280.jpg",
                    title:""
                },
                slogan:`Biznes lokalny`,
                theme:"dark",
                title:"Mechanik Ludomy"
            },
            {
                button:{
                    title:"Przeczytaj więcej",
                    url:"#"
                },
                categories:[
                    "Strona internetowa",
                    "SEO",
                ],
                color:"#f6e8d4",
                excerpt:`s reiciendis, ipsa explicabo commodi officia minima veritatis saepe alias? Voluptatibus facere voluptatem recusandae, quam optio neque voluptas voluptate unde, explicabo iure minus ipsa sapiente excepturi minima. Totam excepturi ducimus, repudiandae earum, rem dicta perferendis accusantium doloribus recusandae sunt praesentium quae itaque dolor natus minus.`,
                image:{
                    altText:"",
                    sourceSrc:"https://cdn.pixabay.com/photo/2014/02/15/14/21/greens-266560_1280.jpg",
                    title:""
                },
                slogan:`Warzywa lokalne`,
                theme:"light",
                title:"Agromar"
            },
        ]
    }
}