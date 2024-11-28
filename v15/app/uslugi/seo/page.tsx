import hero_img from "img/uslugi-pozycjonowania.webp";
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
                        title:`SEO`,
                        url:`/uslugi/seo`
                    },
                ]}
                content={`Podnosimy rentowność biznesów średnio o 24% rocznie! Posiadamy najwyższy status partnerstwa z Google. Oferujemy skuteczne reklamy, a nasz 100 osobowy zespół ekspertek i ekspertów posiada kompetencje w każdym kanale marketingu internetowego. Nasi klienci cenią nas za skuteczność, wygodę oraz proaktywność w dziedzinie wykorzystywania nowych technologii i podejść w reklamie.`}
                title="Usługi marketingu online"
                image={{
                    altText:``,
                    sourceSrc:hero_img.src,
                    title:``
                }}
            />
            <main>
                <h2>Czym jest SEO?</h2>
                <h2>Moje doświadczenie z SEO</h2>
                <h2>Artykuły rekomendowane </h2>
                <h2>Metoda działania</h2>
                <h2>Oferta SEO</h2>
                <h2>Realizacje</h2>
                {/* Content */}
                <h2>Pozycjonowanie - co to jest?</h2>
                <h2>Pozycjonowanie - KPI</h2>
                <h2>Ile kosztuje SEO?</h2>
                <h2>Od czego zależy koszt SEO?</h2>
                <h2>Plusy i minusy pozycjonowania</h2>
                <h2>Budżet a efekty SEO</h2>
                <h2>Rodzaje pozycjonowania</h2>
                <h2>Metody SEO</h2>
                <h2>Ambitny specjalista SEO</h2>
                <h2>Słowniczek pojęć</h2>
                <h2>Pytania nt. SEO</h2>
            </main>
            <h1>blog</h1>
        </>
    )
}