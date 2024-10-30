import { home } from "data/home"
import { About, Blog, Hero, Industries, Overview, Projects, Reasons, Reviews, Services, WhyWorth } from "v-home/index"

export default function HomePage(){
  return (
    <>
      <Hero
        {...home.hero}
      />
      <main>
        {/* Wstęp */}
        <Overview
          {...home.overview}
        />
         {/* Przejrzyste warunki współpracy / kroki: https://ks.pl/ */}
         <WhyWorth
          {...home.whyWorth}
        />
        {/* O mnie */}
        <About
          {...home.about}
        />
        {/* Usługi */}
        <Services
          {...home.services}
        />
        {/* Projekty */}
        <Projects
          {...home.projects}
        />
        {/* Blog */}
        <Blog
          {...home.blog}
          />
        {/* Dlaczego warto? 1. Mieć stronę? 2. Mieć SEO? */}
        <Reasons
          {...home.reasons}
        />
        {/* Sektory - braże */}
        <Industries
          {...home.industries}
        />
        {/* Opinie klientów */}
        {/* <Reviews
          {...home.reviews}
        /> */}

        {/* Pozostałe usługi? */}
        {/* Case studies */}
        {/* FAQ */}
        {/* Sociale / - ostatnie wpisy z fb / ig/ yt / x */}

      </main>
  
    </>
  )
}