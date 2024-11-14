import about_img from "img/r-adamczyk-gray.webp"
import hero_img from "img/business_grayscale_no_bg.webp"
import project_img from "img/abstract-one.webp";
import { tHero } from "v-home/Hero/Hero.models";
import { tOffer } from "v-home/Offer/Offer.models";
import { tAbout } from "v-home/About/About.models";
import { tProjects } from "v-home/Projects/Projects.models";
type t_home = {
    hero:tHero;
    offer:tOffer;
    about:tAbout;
    projects:tProjects;
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
    }
}