import { Banner, Hero } from "v-home/index";
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
      <div></div>
    </>
  )
}