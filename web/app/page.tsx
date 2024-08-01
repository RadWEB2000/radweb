import { Banner, Hero, Services } from "v-home/index";
import { home_page } from "data/home_page";

export default function HomePage(){
  return(
    <>
      <Hero
        {...home_page.hero}
      />
      <Banner
        {...home_page.banner}
      />
      <main>
        <Services
          {...home_page.services}
        />
      </main>
      <div></div>
    </>
  )
}