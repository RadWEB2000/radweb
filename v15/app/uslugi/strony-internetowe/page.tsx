import hero_img from "img/uslugi-stron-internetowych.webp";
import { Hero } from "v-services/index";
export default function ServicePage() {
    return (
        <>
             <Hero
                breadcrumbs={[
                    {
                        title:`Start`,
                        url:`/`
                    },
                    {
                        title:`Usługi`,
                        url:`/uslugi`
                    },
                    {
                        title:`Strony internetowe`,
                        url:`/uslugi/strony-internetowe`
                    },
                ]}
                content={`Podnosimy rentowność biznesów średnio o 24% rocznie! Posiadamy najwyższy status partnerstwa z Google. Oferujemy skuteczne reklamy, a nasz 100 osobowy zespół ekspertek i ekspertów posiada kompetencje w każdym kanale marketingu internetowego. Nasi klienci cenią nas za skuteczność, wygodę oraz proaktywność w dziedzinie wykorzystywania nowych technologii i podejść w reklamie.`}
                title="Usługi stron internetowych"
                image={{
                    altText:``,
                    sourceSrc:hero_img.src,
                    title:``
                }}
            />
            <h1>blog</h1>
        </>
    )
}