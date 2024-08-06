import "css/Views/HomeView.scss"
import { Banner, Hero, Projects, Services } from "v-home/index"
import { home_page } from "data/home_page"

export default function HomePage(){
  return(
    <>
      <Hero
        {...home_page.hero}
      />
      <main>
        <Banner
          {...home_page.banner}
        />
        <div
          className="hp_tile"
        >
          <Services
            {...home_page.services}
          />
        </div>
        <Projects
          {...home_page.projects}
        />
      </main>
      <div></div>
    </>
  )
}