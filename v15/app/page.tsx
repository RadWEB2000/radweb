import { home } from "data/home"
import { About, Blog, Hero, Offer, Projects, Services } from "v-home/index"

export default function HomePage(){
  return (
    <>
      <Hero
        {...home.hero}
      />      
      <main>
        <Offer
          {...home.offer}
        />
        <About
          {...home.about}
        />
        <Projects
          {...home.projects}
        />
        <Services
          {...home.services}
        />
        <Blog
          {...home.blog}
        />
     
      </main>
    </>
  )
}