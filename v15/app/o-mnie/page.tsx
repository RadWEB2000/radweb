import { about } from "data/about"
import { Career, Hero, Memoir, Overview } from "v-about/index"

export default function AboutPage() {
    return (
        <>
            <Hero
                {...about.hero}
            />
            <main>
                <Overview
                    {...about.overview}
                />
                <Memoir
                    {...about.memoir}
                />
                <Career
                    {...about.career}
                />
            </main>
        </>
    )
}