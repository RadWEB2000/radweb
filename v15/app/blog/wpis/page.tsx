import hero_img from "img/article.webp"
import { Hero } from "v-article/index"
import { article } from 'data/article';
import { TableOfContents } from "utils/index";

export default function ArticlePage() {
    return (
        <>
            <Hero
                breadcrumbs={[
                    {
                        title:`Start`,
                        url:`/`
                    },
                    {
                        title:`Blog`,
                        url:`/blog`
                    },
                    {
                        title:`Dokumentacje React: która jest najlepsza?`,
                        url:`/blog/dokumentacje-react-ktora-jest-najlepsza`
                    },
                ]}
                excerpt={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ab, asperiores exercitationem labore recusandae nesciunt dignissimos omnis odio consectetur, laboriosam id ex inventore corrupti consequuntur. Praesentium vero aliquid ex exercitationem?`}
                image={{
                    altText:"",
                    sourceSrc:hero_img.src,
                    title:"Dokumentacje React: która jest najlepsza?"
                }}
                release="21 października 2024"
                title="Dokumentacje React: która jest najlepsza?"
            />
            <main
                style={{
                    margin:`2rem auto`,
                    width:`clamp(5rem, 140rem, 90vw)`
                }}
            >
                <TableOfContents
                    title="Spis treści"
                    menu={[
                        {
                            title:`Jak wybrać i umieścić słowa kluczowe, aby Twoja strona była łatwiej znaleziona?`,
                            url:`#jak-wybrac-i-umiescic-slowa-kluczowe-aby-twoja-strona-byla-latwiej-znaleziona`
                        },
                        {
                            title:`Co musisz wiedzieć o long tail?`,
                            url:`#co-musisz-wiedziec-o-long-tail`
                        },
                        {
                            title:`Dlaczego wydajność stron internetowych jest ważnym czynnikiem rankingowym?`,
                            url:`#dlaczego-wydajnosc-stron-internetowych-jest-waznym-czynnikiem-rankingowym`
                        },
                        {
                            title:`Statystyki i ich wpływ na SEO`,
                            url:`#statystyki-i-ich-wplyw-na-seo`
                        },
                        {
                            title:`Jak zdobyć wartościowe linki zwrotne i dlaczego mają one tak duże znaczenie?`,
                            url:`#jak-zdobyc-wartosciowe-linki-zwrotne-i-dlaczego-maja-one-tak-duze-znaczenie`
                        },
                        {
                            title:`Linkowanie wewnętrzne vs. zewnętrzne`,
                            url:`#linkowanie-wewnetrzne-vs-zewnetrzne`
                        },
                        {
                            title:`Dlaczego wartościowe linki zwrotne są tak ważne?`,
                            url:`#dlaczego-wartosciowe-linki-zwrotne-sa-tak-wazne`
                        },
                        {
                            title:`Sztuka wewnętrznego linkowania: Jak prowadzić czytelników przez swoją stronę?`,
                            url:`#sztuka-wewnetrznego-linkowania-jak-prowadzic-czytelnikow-przez-swoja-strone`
                        },
                        {
                            title:`Jak skutecznie linkować treści wewnętrznie i dlaczego jest to ważne?`,
                            url:`#jak-skutecznie-linkowac-tresci-wewnetrznie-i-dalczego-jest-to-wazne`
                        },
                        {
                            title:`Jak UX wpływa na Twoje pozycje w wyszukiwarce?`,
                            url:`#jak-ux-wplywa-na-twoje-pozycje-w-wyszukiwarce`
                        },
                    ]}
                />
                <article
                    dangerouslySetInnerHTML={{__html:article}}                
                />
            </main>
        </>
    )
}