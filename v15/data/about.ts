import sunrise_system from "img/sunrise-system.webp";
import iart_4real from "img/4-real.webp";
import lumo from "img/lumo-by-performance-media.webp";
import g_creative from "img/g-creative-globe-group.webp";
import hero_img from "img/profile_no_bg.webp";
import { tCareer } from "v-about/Career/Career.models";
import { tHero } from 'v-about/Hero/Hero.models';
import { tMemoir } from 'v-about/Memoir/Memoir.models';
import { tOverview } from "v-about/Overview/Overview.models";
type t_about = {
    hero:tHero;
    career:tCareer;
    memoir:tMemoir;
    overview:tOverview;
}

export const about:t_about = {
    hero:{
        title:`Radosław Adamczyk`,
        slogan:`Spec. SEO/SEM - Front-end developer`,
        content:`Cześć, wiem, że jesteś na L4, ale firma musi działać niezależnie od twojej choroby, więc nie rób scen tylko poodpisuj na zaległe maile, oddzwoń do kluczowych klientów i zrób w końcu ten zaległy raport. Przynajmniej nie będziesz się nudzić w łóżku`,
        image:{
            altText:"",
            sourceSrc:hero_img.src,
            title:"",
        }
    },
    career:{
        career:[
            {
                button:{
                    title:`Czytaj więcej`,
                    url:'/sunrise-system'
                },
                content:`Pomogłem znaleźć się na pierwszej stronie Google zarówno firmom, które dopiero rozpoczynają swoją działalność, jak i przedsiębiorstwom z wieloletnim doświadczeniem, które mimo wielu działań marketingowych nie były w stanie rozwinąć swojego biznesu. Promowałem klientów z wielu branż, począwszy od motoryzacji aż po medycynę, w każdej z nich osiągając zamierzony cel - zwiększenie widoczności w wyszukiwarce Google.`,
                duration:{
                    start:`Paź 2021`,
                    end:`Sty 2022`
                },
                image:{
                    altText:"",
                    sourceSrc:sunrise_system.src,
                    title:""
                },
                job:`Specjalista SEO`,
                title:"Sunrise System"
            },
            {
                button:{
                    title:`Czytaj więcej`,
                    url:'/4real'
                },
                content:`Pomogłem znaleźć się na pierwszej stronie Google zarówno firmom, które dopiero rozpoczynają swoją działalność, jak i przedsiębiorstwom z wieloletnim doświadczeniem, które mimo wielu działań marketingowych nie były w stanie rozwinąć swojego biznesu. Promowałem klientów z wielu branż, począwszy od motoryzacji aż po medycynę, w każdej z nich osiągając zamierzony cel - zwiększenie widoczności w wyszukiwarce Google.`,
                duration:{
                    start:`Sie 2022`,
                    end:`Mar 2023`
                },
                image:{
                    altText:"",
                    sourceSrc:iart_4real.src,
                    title:""
                },
                job:`Specjalista SEO/SEM`,
                title:"4Real"
            },
            {
                button:{
                    title:`Czytaj więcej`,
                    url:'/lumo-by-performance-media'
                },
                content:`Pomogłem znaleźć się na pierwszej stronie Google zarówno firmom, które dopiero rozpoczynają swoją działalność, jak i przedsiębiorstwom z wieloletnim doświadczeniem, które mimo wielu działań marketingowych nie były w stanie rozwinąć swojego biznesu. Promowałem klientów z wielu branż, począwszy od motoryzacji aż po medycynę, w każdej z nich osiągając zamierzony cel - zwiększenie widoczności w wyszukiwarce Google.`,
                duration:{
                    start:`Mar 2023`,
                    end:`Paź 2024`
                },
                image:{
                    altText:"",
                    sourceSrc:lumo.src,
                    title:""
                },
                job:`Specjalista SEO`,
                title:"Lumo by Performance Media"
            },
            {
                button:{
                    title:`Czytaj więcej`,
                    url:'/g-creative'
                },
                content:`Pomogłem znaleźć się na pierwszej stronie Google zarówno firmom, które dopiero rozpoczynają swoją działalność, jak i przedsiębiorstwom z wieloletnim doświadczeniem, które mimo wielu działań marketingowych nie były w stanie rozwinąć swojego biznesu. Promowałem klientów z wielu branż, począwszy od motoryzacji aż po medycynę, w każdej z nich osiągając zamierzony cel - zwiększenie widoczności w wyszukiwarce Google.`,
                duration:{
                    start:`Wrz 2024`,
                    end:`Teraz`
                },
                image:{
                    altText:"",
                    sourceSrc:g_creative.src,
                    title:""
                },
                job:`Specjalista SEO`,
                title:"G-Creative"
            },
        ],
        content:`Korzystam tylko ze sprawdzonych narzędzi i stosuję bezpieczne praktyki pozycjonowania. Pracę nad stroną rozpoczynam od skrupulatnego audytu i doboru słów kluczowych. Na tej podstawie optymalizuję stronę, dbając również o jej przyjazność dla użytkownika, przejrzystość oferty i intuicyjność. Dużą wagę przywiązuję do content marketingu, poprzez publikowanie wartościowych i unikalnych treści zoptymalizowanych pod kątem SEO.`,
        title:`Moja kariera`
    },
    memoir:{
        title:`Mój życiorys`,
        timeline:[
            {
                date:`9 paź 2000`,
                title:`Urodziny`,
                content:`Urodziłem się 9 października 2000 roku w szpitalu w Śremie`
            },
            {
                date:`1 wrz 2007`,
                title:`Początek szkoły podstawowej`,
                content:`Rozpoczęcie nauki w szkole podstawowej im. gen. Józefa Rufina Wybickiego w Manieczkach`
            },
            {
                date:`1 wrz 2013`,
                title:`Początek gimnazjum`,
                content:`Rozpoczęcie nauki w Gimnazjum im. sw. Jana Pawła II w Śremie`
            },
            {
                date:`1 wrz 2016`,
                title:`Początek liceum`,
                content:`Rozpoczęcie nauki w Katolicikim Publicznym Akademickim Liceum Ogólnokształcącym w Śremie`
            },
            {
                date:`28 gru 2018`,
                title:`Prawo jazdy`
            },
            {
                date:`16 kwi 2019`,
                title:`Ukończenie liceum`,
                content:`Ukończenie liceum o profilu matematyczno-fizyczno-historyczno-informatycznym`
            },
            {
                date:`5 maj 2019`,
                title:`Matury`
            },
            {
                date:`1-23 paź 2019`,
                title:`Arcybiskupie Seminarium Duchowne w Poznaniu`
            }
        ]
    },
    overview:{
        content:`Absolwent Wyższej Szkoły Informatyki i Zarządzania w Rzeszowie. Specjalista SEO działający w branży od wielu lat. Zajmuje się optymalizacją serwisów internetowych zarówno pod kątem technicznym jak i contentowym. Zwiększa widoczność sklepów e-commerce, co przekłada się bezpośrednio na wzrost sprzedaży.<br/><br/>W swojej karierze pracował dla klientów takich jak: Telewizja Polska, Max Elektro, PVGE, Bank Spółdzielczy w Lubaczowie, SklepKawa.pl, Questus, Uczelnia Techniczno-Handlowa im. H. Chodkowskiej, Wyższa Szkoła Prawa we Wrocławiu oraz wielu innych.`
    }
}