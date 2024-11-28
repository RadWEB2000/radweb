import marketing_img from "img/uslugi-marketingu-online.webp";
import { tHero } from 'v-services/Hero/Hero.models';

type t_services = {
    main:{
        hero:tHero
    }
}

export const services:t_services = {
    main: {
        hero:{
            breadcrumbs:[
                {
                    title:`Start`,
                    url:`/`
                },
                {
                    title:`Usługi`,
                    url:`/`
                },
            ],
            content:`Podnosimy rentowność biznesów średnio o 24% rocznie! Posiadamy najwyższy status partnerstwa z Google. Oferujemy skuteczne reklamy, a nasz 100 osobowy zespół ekspertek i ekspertów posiada kompetencje w każdym kanale marketingu internetowego. Nasi klienci cenią nas za skuteczność, wygodę oraz proaktywność w dziedzinie wykorzystywania nowych technologii i podejść w reklamie.`,
            image:{
                altText:`Usługi martketingu online - SEO & WWW & Web Care`,
                sourceSrc:marketing_img.src,
                title:`Usługi marketingu online`
            },
            title:`Usługi marketingu online`
        },
    }
}