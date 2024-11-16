import about_img from "img/r-adamczyk-gray.webp"
import hero_img from "img/business_grayscale_no_bg.webp"
import project_img from "img/abstract-one.webp";
import article_img from "img/dashes.webp";
import { tHero } from "v-home/Hero/Hero.models";
import { tOffer } from "v-home/Offer/Offer.models";
import { tAbout } from "v-home/About/About.models";
import { tProjects } from "v-home/Projects/Projects.models";
import { tServices } from "v-home/Services/Services.models";
import { tBlog } from "v-home/Blog/Blog.models";
type t_home = {
    hero:tHero;
    offer:tOffer;
    about:tAbout;
    projects:tProjects;
    services:tServices;
    blog:tBlog;
}

export const home:t_home = {
    hero:{
        image:{
            altText:``,
            sourceSrc:hero_img.src,
            title:``
        },
        slogan:`Marketing online`,
        title:`RadWEB`,
        buttons:[
            {
                title:`Blog`,
                url:`/blog`
            },
            {
                title:`Oferta`,
                url:`/oferta`
            },
            {
                title:`Kontakt`,
                url:`/kontakt`
            }
        ]
    },
    offer: {
        button: {
            title:`Sprawdź ofertę`,
            url:`/uslugi`
        },
        content:`Headless CMS to system zarządzania treścią, który pomaga zarządzać zawartością przed opublikowaniem jej w określonych kanałach cyfrowych. Pozwala to na generowanie i dostarczanie ustrukturyzowanej zawartości, która zasila wszystko, od aplikacji mobilnych po cyfrowe doświadczenia, takie jak kioski i inne urządzenia Internetu rzeczy. Aby to osiągnąć, zarządzanie zawartością odbywa się w oddzielnej bazie danych od zaplecza witryny. Obejmuje warstwę prezentacji, z której można wyświetlać zawartość, a następnie dystrybuować ją do wielu kanałów.`,
        title:`Co oferuję?`,
        cards:[
            {
                button:{
                    title:`Więcej`,
                    url:`/uslugi/seo`
                },
                content:`Headless CMS to system zarządzania treścią, który pomaga zarządzać zawartością przed opublikowaniem jej w określonych kanałach cyfrowych. Pozwala to na generowanie i dostarczanie ustrukturyzowanej zawartości`,
                image:{
                    altText:``,
                    sourceSrc:`/seo-icon.svg`,
                    title:``
                },
                title:`SEO`,
                type:"seo"
            },
            {
                button:{
                    title:`Więcej`,
                    url:`/uslugi/strony-internetowe`
                },
                content:`Headless CMS to system zarządzania treścią, który pomaga zarządzać zawartością przed opublikowaniem jej w określonych kanałach cyfrowych. Pozwala to na generowanie i dostarczanie ustrukturyzowanej zawartości`,
                image:{
                    altText:``,
                    sourceSrc:`/websites-icon.svg`,
                    title:``
                },
                title:`WWW`,
                type:"www"
            },
            {
                button:{
                    title:`Więcej`,
                    url:`/uslugi/web-care`
                },
                content:`Headless CMS to system zarządzania treścią, który pomaga zarządzać zawartością przed opublikowaniem jej w określonych kanałach cyfrowych. Pozwala to na generowanie i dostarczanie ustrukturyzowanej zawartości`,
                image:{
                    altText:``,
                    sourceSrc:`/web-care-icon.svg`,
                    title:``
                },
                title:`Web Care`,
                type:"web_care"
            },
        ]
    },
    about: {
        button:{
            title:`Poznaj mnie`,
            url:`/o-mnie`
        },
        content:`Via Zdrowy rozsądek Jako bezgłowy system zarządzania zawartością o otwartym kodzie źródłowym, Sanity zapewnia programistom stopień dostosowania, którego nie znajdą łatwo gdzie indziej. Traktując zawartość jako dane, Sanity pozwala na rozbudowaną analizę danych, dane powstania i opcje dystrybucji. <br/><br/>Intuicyjne oprogramowanie Sanity umożliwia współpracę w czasie rzeczywistym w całym zespole, w tym marketerów zarządzających zawartością i programistów, którzy chcą niestandardowych i publikowanych treści w odpowiednich obszarach. Rozbudowane integracje pozwalają na łatwe przenoszenie treści do dowolnej aplikacji.`,
        image:{
            altText:``,
            sourceSrc:about_img.src,
            title:``
        },
        title:`Kim jestem?`,
        tags:[
            {
                title:`Certyfikaty`,
                url:`/o-mnie/certyfikaty`
            },
            {
                title:`Doswiadczenie`,
                url:`/o-mnie/doswiadczenie`
            }
        ]
    },
    projects: {
        button:{
            title:`Wszystkie prace`,
            url:`/projekty`
        },
        content:`Unleash the full potential of your AI startup with our cutting-edge Startaily page Webflow template specifically designed for Artificial Intelligence ventures. Elevate your Saas startup's online presence to unprecedented heights and seamlessly showcase your innovative AI solutions to the world. With our customizable template, you have the power to tailor every aspect of your website and optimize it for maximum visibility, ensuring that your groundbreaking AI technologies capture the attention they deserve. Propel your Saas startup forward into the future of AI technology today with our exceptional template.`,
        title:`Projekty`,
        slogan:`Moje realizacje`,
        cards:[
           {
                button:{
                    title:`Więcej`,
                    url:`#`
                },
                category:`SEO`,
                excerpt:`Fully responsive, The Webflow Ai Website Template ensures optimal viewing experiences across various devices, including desktops, tablets, and mobile phones. Offering a seamless user experience on all platforms expands your reach`,
                image:{
                    altText:``,
                    sourceSrc:project_img.src,
                    title:``
                },
                release:`Marzec 2023`,
                title:`Agromar`
           }, 
           {
                button:{
                    title:`Więcej`,
                    url:`#`
                },
                category:`SEO`,
                excerpt:`Fully responsive, The Webflow Ai Website Template ensures optimal viewing experiences across various devices, including desktops, tablets, and mobile phones. Offering a seamless user experience on all platforms expands your reach`,
                image:{
                    altText:``,
                    sourceSrc:project_img.src,
                    title:``
                },
                release:`Marzec 2023`,
                title:`Mechanik Ludomy`
           }, 
           {
                button:{
                    title:`Więcej`,
                    url:`#`
                },
                category:`SEO`,
                excerpt:`Fully responsive, The Webflow Ai Website Template ensures optimal viewing experiences across various devices, including desktops, tablets, and mobile phones. Offering a seamless user experience on all platforms expands your reach`,
                image:{
                    altText:``,
                    sourceSrc:project_img.src,
                    title:``
                },
                release:`Marzec 2023`,
                title:`Borówkowy Gaj`
           }, 
           {
                button:{
                    title:`Więcej`,
                    url:`#`
                },
                category:`SEO`,
                excerpt:`Fully responsive, The Webflow Ai Website Template ensures optimal viewing experiences across various devices, including desktops, tablets, and mobile phones. Offering a seamless user experience on all platforms expands your reach`,
                image:{
                    altText:``,
                    sourceSrc:project_img.src,
                    title:``
                },
                release:`Marzec 2023`,
                title:`Filip Bukowiecki`
           }, 
        ]
    },
    services: {
        button:{
            title:`Wszystkie usługi`,
            url:`/uslugi`
        },
        content:`G2A.COM is trusted by users from 180 countries, where visitors can choose from more than 75,000 digital offerings. The global nature of its business required G2A.COM to scale its fraud prevention and payments program to meet growing demand. Forter was selected for its fully automated decisioning, global network of identities and market-leading service. Forter’s technology uses the speed and sophistication of AI to detect patterns across vast datasets and the savvy of fraud experts to continuously update its models.`,
        title:`Moje usługi`,
        cards:[
            {
                button:{
                    url:`#`
                },
                content:`no i tak - trochę jestem w szoku.
                w najśmielszych oczekiwaniach nie  spodziewałam się takich technik. słyszałam o tym, że Duolingo jest mistrzem budowania poczucia winy i postanowiłam to sprawdzić.`,
                title:`SEO Google`
            },
            {
                button:{
                    url:`#`
                },
                content:`no i tak - trochę jestem w szoku.
                w najśmielszych oczekiwaniach nie  spodziewałam się takich technik. słyszałam o tym, że Duolingo jest mistrzem budowania poczucia winy i postanowiłam to sprawdzić.`,
                title:`SEO Bing`
            },
            {
                button:{
                    url:`#`
                },
                content:`no i tak - trochę jestem w szoku.
                w najśmielszych oczekiwaniach nie  spodziewałam się takich technik. słyszałam o tym, że Duolingo jest mistrzem budowania poczucia winy i postanowiłam to sprawdzić.`,
                title:`Link building`
            },
            {
                button:{
                    url:`#`
                },
                content:`no i tak - trochę jestem w szoku.
                w najśmielszych oczekiwaniach nie  spodziewałam się takich technik. słyszałam o tym, że Duolingo jest mistrzem budowania poczucia winy i postanowiłam to sprawdzić.`,
                title:`Content marketing`
            },
            {
                button:{
                    url:`#`
                },
                content:`no i tak - trochę jestem w szoku.
                w najśmielszych oczekiwaniach nie  spodziewałam się takich technik. słyszałam o tym, że Duolingo jest mistrzem budowania poczucia winy i postanowiłam to sprawdzić.`,
                title:`Audyty SEO`
            },
            {
                button:{
                    url:`#`
                },
                content:`no i tak - trochę jestem w szoku.
                w najśmielszych oczekiwaniach nie  spodziewałam się takich technik. słyszałam o tym, że Duolingo jest mistrzem budowania poczucia winy i postanowiłam to sprawdzić.`,
                title:`Analityka`
            },
            {
                button:{
                    url:`#`
                },
                content:`no i tak - trochę jestem w szoku.
                w najśmielszych oczekiwaniach nie  spodziewałam się takich technik. słyszałam o tym, że Duolingo jest mistrzem budowania poczucia winy i postanowiłam to sprawdzić.`,
                title:`Audyt UI/UX`
            },
            {
                button:{
                    url:`#`
                },
                content:`no i tak - trochę jestem w szoku.
                w najśmielszych oczekiwaniach nie  spodziewałam się takich technik. słyszałam o tym, że Duolingo jest mistrzem budowania poczucia winy i postanowiłam to sprawdzić.`,
                title:`Portfolio`
            },
            {
                button:{
                    url:`#`
                },
                content:`no i tak - trochę jestem w szoku.
                w najśmielszych oczekiwaniach nie  spodziewałam się takich technik. słyszałam o tym, że Duolingo jest mistrzem budowania poczucia winy i postanowiłam to sprawdzić.`,
                title:`Blog`
            },
            {
                button:{
                    url:`#`
                },
                content:`no i tak - trochę jestem w szoku.
                w najśmielszych oczekiwaniach nie  spodziewałam się takich technik. słyszałam o tym, że Duolingo jest mistrzem budowania poczucia winy i postanowiłam to sprawdzić.`,
                title:`Landing page`
            },
            {
                button:{
                    url:`#`
                },
                content:`no i tak - trochę jestem w szoku.
                w najśmielszych oczekiwaniach nie  spodziewałam się takich technik. słyszałam o tym, że Duolingo jest mistrzem budowania poczucia winy i postanowiłam to sprawdzić.`,
                title:`Certyfikaty SSL`
            },
            {
                button:{
                    url:`#`
                },
                content:`no i tak - trochę jestem w szoku.
                w najśmielszych oczekiwaniach nie  spodziewałam się takich technik. słyszałam o tym, że Duolingo jest mistrzem budowania poczucia winy i postanowiłam to sprawdzić.`,
                title:`Hosting stron`
            },
            {
                button:{
                    url:`#`
                },
                content:`no i tak - trochę jestem w szoku.
                w najśmielszych oczekiwaniach nie  spodziewałam się takich technik. słyszałam o tym, że Duolingo jest mistrzem budowania poczucia winy i postanowiłam to sprawdzić.`,
                title:`Wizytówki Google`
            },
            {
                button:{
                    url:`#`
                },
                content:`no i tak - trochę jestem w szoku.
                w najśmielszych oczekiwaniach nie  spodziewałam się takich technik. słyszałam o tym, że Duolingo jest mistrzem budowania poczucia winy i postanowiłam to sprawdzić.`,
                title:`SEO lokalne`
            },
            {
                button:{
                    url:`#`
                },
                content:`no i tak - trochę jestem w szoku.
                w najśmielszych oczekiwaniach nie  spodziewałam się takich technik. słyszałam o tym, że Duolingo jest mistrzem budowania poczucia winy i postanowiłam to sprawdzić.`,
                title:`Optymalizacje stron`
            },
            {
                button:{
                    url:`#`
                },
                content:`no i tak - trochę jestem w szoku.
                w najśmielszych oczekiwaniach nie  spodziewałam się takich technik. słyszałam o tym, że Duolingo jest mistrzem budowania poczucia winy i postanowiłam to sprawdzić.`,
                title:`Aktualizacje Wordpress`
            },
            {
                button:{
                    url:`#`
                },
                content:`no i tak - trochę jestem w szoku.
                w najśmielszych oczekiwaniach nie  spodziewałam się takich technik. słyszałam o tym, że Duolingo jest mistrzem budowania poczucia winy i postanowiłam to sprawdzić.`,
                title:`WhiteHat SEO`
            }
        ]
    },
    blog:{
        button:{
            title:`Wszystkie wpisy`,
            url:`/blog`
        },
        content:`The Forter Trust Platform makes real-time identity-based decisions for known and unknown forms of fraud, enabling G2A.COM to scale seamlessly to meet any burst in demand and accommodate growth without additional resources. Forter’s identity and risk insights are also helping G2A.COM approve more borderline transactions – increasing approval rates and minimizing friction for customers.`,
        title:`Blog`,
        cards:[
            {
                button:{
                    url:`#`
                },
                category:`SEO`,
                tag:"www",
                image:{
                    altText:"",
                    sourceSrc:article_img.src,
                    title:""
                },
                excerpt:`Something to note as we create this layout is that we haven't needed to explicitly position every element on the grid at each breakpoint. We have been able to inherit the placement set up for earlier breakpoints `,
                release:`21 Sie 2023`,
                title:`Marketing internetowy dla branży TSL`
            },
            {
                button:{
                    url:`#`
                },
                category:`SEO`,
                tag:"www",
                image:{
                    altText:"",
                    sourceSrc:article_img.src,
                    title:""
                },
                excerpt:`Something to note as we create this layout is that we haven't needed to explicitly position every element on the grid at each breakpoint. We have been able to inherit the placement set up for earlier breakpoints `,
                release:`21 Sie 2023`,
                title:`Co zmieniają i jak wpływają na SEO nowe aktualizacje algorytmów Google`
            },
            {
                button:{
                    url:`#`
                },
                tag:"www",
                category:`SEO`,
                image:{
                    altText:"",
                    sourceSrc:article_img.src,
                    title:""
                },
                excerpt:`Something to note as we create this layout is that we haven't needed to explicitly position every element on the grid at each breakpoint. We have been able to inherit the placement set up for earlier breakpoints `,
                release:`21 Sie 2023`,
                title:`Co nowego w content marketingu?`
            },
            {
                button:{
                    url:`#`
                },
                category:`SEO`,
                tag:"seo",
                image:{
                    altText:"",
                    sourceSrc:article_img.src,
                    title:""
                },
                excerpt:`Something to note as we create this layout is that we haven't needed to explicitly position every element on the grid at each breakpoint. We have been able to inherit the placement set up for earlier breakpoints `,
                release:`21 Sie 2023`,
                title:`Jak wykorzystać social media do promocji wydarzeń?`
            },
            {
                button:{
                    url:`#`
                },
                category:`SEO`,
                tag:"care",
                image:{
                    altText:"",
                    sourceSrc:article_img.src,
                    title:""
                },
                excerpt:`Something to note as we create this layout is that we haven't needed to explicitly position every element on the grid at each breakpoint. We have been able to inherit the placement set up for earlier breakpoints `,
                release:`21 Sie 2023`,
                title:`Monitoring social media sposobem na internetowych oszustów`
            },
            {
                button:{
                    url:`#`
                },
                category:`SEO`,
                tag:"news",
                image:{
                    altText:"",
                    sourceSrc:article_img.src,
                    title:""
                },
                excerpt:`Something to note as we create this layout is that we haven't needed to explicitly position every element on the grid at each breakpoint. We have been able to inherit the placement set up for earlier breakpoints `,
                release:`21 Sie 2023`,
                title:`Wykorzystanie SEO w pozycjonowaniu brand'u`
            },
        ]
    }
}