import {Hero,WhyUs} from "v-home/index"
import "css/Views/HomeView.scss"
import { home_page } from "data/home_page"

export default function HomePage(){
  return(
    <>
      <Hero
        {...home_page.hero}
      />
      <main>
        <WhyUs
          {...home_page.whyUs}
        />
      </main>
    </>
  )
}