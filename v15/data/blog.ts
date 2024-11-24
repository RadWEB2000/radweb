import { tSort } from 'v-blog/Sort/Sort.models';
import { tHero } from 'v-blog/Hero/Hero.models';
import { tSearch } from 'v-blog/Search/Search.models';
import { tCategories } from 'v-blog/Categories/Categories.models';

type t_blog = {
    hero:tHero;
    sort:tSort;
    search:tSearch;
    categories:tCategories;
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
    }
}