import { services } from "data/services";
import { Hero } from "v-services/index";

export default function ServicesPage() {
    return (
        <>
            <Hero
                {...services.main.hero}
            />
            <main>
                <h2>Czym jest marketing online?</h2>
                <h2>Z czego się składa marketing online?</h2>
                <h2>Co ja oferuję</h2>
                <h2>Dlaczego ja</h2>
                <h2>Z jakimi branżami współpracowałem</h2>
                <h2>Moja oferta marketingu obejmuje cały kraj</h2>
            </main>
        </>
    )
}