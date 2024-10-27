import { home } from "data/home"
import { About, Hero, Overview, Projects, Services } from "v-home/index"

export default function HomePage(){
  return (
    <>
      <Hero
        {...home.hero}
      />
      <main>
        <Overview
          {...home.overview}
        />
        <About
          {...home.about}
        />
        <Services
          {...home.services}
        />
        <Projects
          {...home.projects}
        />
        {/* Blog */}
        {/* Dlaczego ja? */}
        {/* Marketing Twojej firmy w dobrych rękach */}
        {/* Sektory */}
        {/* Przejrzyste warunki współpracy / kroki: https://ks.pl/ */}
        {/* Pozostałe usługi? */}
        {/* Dlaczego warto? 1. Mieć stronę? 2. Mieć SEO? */}
        {/* Opinie klientów */}
        {/* Case studies */}
        {/* FAQ */}
        {/* Sociale / - ostatnie wpisy z fb / ig/ yt / x */}

      </main>
      <h1>home page</h1>
    </>
  )
}