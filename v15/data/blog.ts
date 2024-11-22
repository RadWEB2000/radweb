import { tHero } from 'v-blog/Hero/Hero.models';

type t_blog = {
    hero:tHero;
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
    }
}