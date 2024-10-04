import { AboutUs, Blog, Hero, Offer, Projects, Services } from "v-home/index"
import { home } from "data/home"

export default function HomePage(){
  return(
    <>
      <Hero
        {...home.hero}
      />
      <main>
        <Offer
          {...home.offer}
        />
        <AboutUs
          {...home.aboutUs}
        />
        <Blog
          {...home.blog}
        />
        <Projects
          {...home.projects}
        />
        <Services
          {...home.services}
        />
      </main>
    </>
  )
}