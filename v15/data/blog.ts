import { tSort } from 'v-blog/Sort/Sort.models';
import { tHero } from 'v-blog/Hero/Hero.models';
import { tSearch } from 'v-blog/Search/Search.models';
import { tCategories } from 'v-blog/Categories/Categories.models';
import { tArticles } from 'v-blog/Articles/Articles.models';
import article_img from "img/dashes.webp";

type t_blog = {
    hero:tHero;
    sort:tSort;
    search:tSearch;
    categories:tCategories;
    articles:tArticles;
}

export const blog:t_blog = {
    hero: {
        breadcrumbs:[
            {
                title:"Start",
                url:"/"
            },
            {
                title:"Blog",
                url:"/blog"
            }
        ],
        content:`W swojej karierze pracował dla klientów takich jak: Telewizja Polska, Max Elektro, PVGE, Bank Spółdzielczy w Lubaczowie, SklepKawa.pl, Questus, Uczelnia Techniczno-Handlowa im. H. Chodkowskiej, Wyższa Szkoła Prawa we Wrocławiu oraz wielu innych.`,
        title:"Blog"
    },
    sort: {
        title:`Sortowanie`,
        options: {
            default:"Domyślnie",
            "release-asc":"Od najnowszego",
            "release-des":"Od najstarszego",
            "alphabetic-asc":"A-Z", 
            "alphabetic-des":"Z-A",
        }
    },
    search:{
        label:`Szukaj`,
        placeholder:`Wpisz tutaj`
    },
    categories:{
        title:`Kategorie`,
        categories:[
            {
                title:`Strony internetowe`,
                url:`/blog/strony-internetowe`
            },
            {
                title:`SEO`,
                url:`/blog/seo`
            },
            {
                title:`PPC`,
                url:`/blog/ppc`
            },
            {
                title:`Social media`,
                url:`/blog/social-media`
            }
        ]
    },
    articles:{
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