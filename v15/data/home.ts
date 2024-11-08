import { tHero } from 'v-home/Hero/Hero.models';
// import main_head_img from "img/main_head.webp";
import hero_img from "img/wallpaper.jpg"
import { tOverview } from 'v-home/Overview/Overview.models';
import { tOffer } from 'v-home/Offer/Offer.models';
import { tServices } from 'v-home/Services/Services.models';
type t_home = {
    hero:tHero;
    overview:tOverview;
    offer:tOffer;
    services:tServices;
}

export const home:t_home = {
    hero: {
        title:`RadWEB`,
        slogan:`Marketing online`,
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
            },
        ],
        media: {
            type:"image",
            altText:"",
            sourceSrc:hero_img.src,
            title:""
        }
    },
    overview: {
        content:`Nasz zespół tworzą osoby o bardzo zróżnicowanych i wysokich kompetencjach, potwierdzonych licznymi certyfikatami, a przede wszystkim sukcesami wdrożonych strategii e-marketingu. Twoją stroną opiekuje się Agencja SEO z świetnie wykfalifikowanym zespołem specjalistów. Zapewniamy Ci sprawny i bieżący kontakt z dedykowanym Tobie Doradcą!`,
        title:`Ludzie z branży SEO`
    },
    offer: {
        button:{
            title:`Oferta`,
            url:'/uslugi'
        },
        content:`Osobiście nie uświadczyłem tego problemu na żadnym sprzęcie do jakiego mam stały dostęp (Różne systemy, specyfikacje i karty graficzne) a co za tym idzie nie jestem w stanie osobiście znaleźć rozwiązania na problem, którego nie dane jest mi przeanalizować. Zatem poniższe rozwiązania to swoiste podstawowe rady + potencjalne rozwiązania od innych graczy. Nie daje żadnej gwarancji że którakolwiek metoda/podpowiedź poniżej naprawi Ci grę.`,
        title:`Co oferuję?`,
        cards:[
            {
                button:{
                    title:`Więcej`,
                    url:`/uslugi/seo`
                },
                content:`Zainstaluj jakiś bardziej popularny pakiet codeców (np. K-lite codec pack) następnie zrestartuj komputer i spróbuj ponownie uruchomić grę.`,
                title:`SEO`
            },
            {
                button:{
                    title:`Więcej`,
                    url:`/uslugi/strony-internetowe`
                },
                content:`Zainstaluj jakiś bardziej popularny pakiet codeców (np. K-lite codec pack) następnie zrestartuj komputer i spróbuj ponownie uruchomić grę.`,
                title:`Strony internetowe`
            },
            {
                button:{
                    title:`Więcej`,
                    url:`/uslugi/web-care`
                },
                content:`Zainstaluj jakiś bardziej popularny pakiet codeców (np. K-lite codec pack) następnie zrestartuj komputer i spróbuj ponownie uruchomić grę.`,
                title:`Web Care`
            },
        ]
    },
    services: {
        content:`Zrealizowaliśmy już ponad 1 000 serwisów internetowych. Pracowaliśmy dla niezliczonej ilości małych, średnich i dużych firm, banków, uczelni, miast, a nawet prokuratur. Działamy na rynku od 22 lat, czyli niemalże od początków Internetu w Polsce i wciąż jesteśmy jego entuzjastami! Zrealizowaliśmy przez ten czas tysiące stron www, pracując dla niezliczonej ilości przedsiębiorców, banków, uczelni, a nawet sądów i prokuratur. `,
        title:`Pozostałe usługi`,
        cards:[
            {
                content:`Nasi Klienci mówią często, że jesteśmy ich zewnętrznym działem marketingu. A co to właściwie oznacz Cały zespół specjalistów do dyspozycji. Kompleksowe działania dające efekt synergii. Lepsze efekty, mniejszym nakładem.`,
                title:`SEO lokalne`,
                tag:"SEO",
                url:`#`
            },
            {
                content:`Nasi Klienci mówią często, że jesteśmy ich zewnętrznym działem marketingu. A co to właściwie oznacz Cały zespół specjalistów do dyspozycji. Kompleksowe działania dające efekt synergii. Lepsze efekty, mniejszym nakładem.`,
                title:`SEO Bing`,
                tag:"SEO",
                url:`#`
            },
            {
                content:`Nasi Klienci mówią często, że jesteśmy ich zewnętrznym działem marketingu. A co to właściwie oznacz Cały zespół specjalistów do dyspozycji. Kompleksowe działania dające efekt synergii. Lepsze efekty, mniejszym nakładem.`,
                title:`Content marketing`,
                tag:"SEO",
                url:`#`
            },
            {
                content:`Nasi Klienci mówią często, że jesteśmy ich zewnętrznym działem marketingu. A co to właściwie oznacz Cały zespół specjalistów do dyspozycji. Kompleksowe działania dające efekt synergii. Lepsze efekty, mniejszym nakładem.`,
                title:`Audyty SEO`,
                tag:"SEO",
                url:`#`
            },
            {
                content:`Nasi Klienci mówią często, że jesteśmy ich zewnętrznym działem marketingu. A co to właściwie oznacz Cały zespół specjalistów do dyspozycji. Kompleksowe działania dające efekt synergii. Lepsze efekty, mniejszym nakładem.`,
                tag:"SEO",
                title:`Link building`,
                url:`#`
            },
            {
                content:`Nasi Klienci mówią często, że jesteśmy ich zewnętrznym działem marketingu. A co to właściwie oznacz Cały zespół specjalistów do dyspozycji. Kompleksowe działania dające efekt synergii. Lepsze efekty, mniejszym nakładem.`,
                title:`Hosting stron`,
                tag:"WWW",
                url:`#`
            },
            {
                content:`Nasi Klienci mówią często, że jesteśmy ich zewnętrznym działem marketingu. A co to właściwie oznacz Cały zespół specjalistów do dyspozycji. Kompleksowe działania dające efekt synergii. Lepsze efekty, mniejszym nakładem.`,
                title:`Core Web Vitals`,
                tag:"SEO",
                url:`#`
            },
            {
                content:`Nasi Klienci mówią często, że jesteśmy ich zewnętrznym działem marketingu. A co to właściwie oznacz Cały zespół specjalistów do dyspozycji. Kompleksowe działania dające efekt synergii. Lepsze efekty, mniejszym nakładem.`,
                title:`Landing page`,
                tag:"WWW",
                url:`#`
            },
            {
                content:`Nasi Klienci mówią często, że jesteśmy ich zewnętrznym działem marketingu. A co to właściwie oznacz Cały zespół specjalistów do dyspozycji. Kompleksowe działania dające efekt synergii. Lepsze efekty, mniejszym nakładem.`,
                title:`Bezpieczeństwo stron`,
                tag:"Care",
                url:`#`
            },
            {
                content:`Nasi Klienci mówią często, że jesteśmy ich zewnętrznym działem marketingu. A co to właściwie oznacz Cały zespół specjalistów do dyspozycji. Kompleksowe działania dające efekt synergii. Lepsze efekty, mniejszym nakładem.`,
                title:`Optymalizacje SEO`,
                tag:"SEO",
                url:`#`
            },
            {
                content:`Nasi Klienci mówią często, że jesteśmy ich zewnętrznym działem marketingu. A co to właściwie oznacz Cały zespół specjalistów do dyspozycji. Kompleksowe działania dające efekt synergii. Lepsze efekty, mniejszym nakładem.`,
                title:`Administracja serwerów`,
                tag:"WWW",
                url:`#`
            },
            {
                content:`Nasi Klienci mówią często, że jesteśmy ich zewnętrznym działem marketingu. A co to właściwie oznacz Cały zespół specjalistów do dyspozycji. Kompleksowe działania dające efekt synergii. Lepsze efekty, mniejszym nakładem.`,
                title:`Analityka`,
                tag:"SEO",
                url:`#`
            },
            {
                content:`Nasi Klienci mówią często, że jesteśmy ich zewnętrznym działem marketingu. A co to właściwie oznacz Cały zespół specjalistów do dyspozycji. Kompleksowe działania dające efekt synergii. Lepsze efekty, mniejszym nakładem.`,
                title:`Strony dla firm`,
                tag:"WWW",
                url:`#`
            },
            {
                content:`Nasi Klienci mówią często, że jesteśmy ich zewnętrznym działem marketingu. A co to właściwie oznacz Cały zespół specjalistów do dyspozycji. Kompleksowe działania dające efekt synergii. Lepsze efekty, mniejszym nakładem.`,
                title:`Wizytówki Google`,
                tag:"SEO",
                url:`#`
            },
            {
                content:`Nasi Klienci mówią często, że jesteśmy ich zewnętrznym działem marketingu. A co to właściwie oznacz Cały zespół specjalistów do dyspozycji. Kompleksowe działania dające efekt synergii. Lepsze efekty, mniejszym nakładem.`,
                title:`Audyty UI/UX`,
                tag:"SEO",
                url:`#`
            },
        ]
    }
}