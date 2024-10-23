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
      </main>
      <h1>home page</h1>
    </>
  )
}