import { Banner, Hero } from "v-home/index";
import { home_page } from "data/home_page";

export default function HomePage(){
  return(
    <>
      <Hero
        {...home_page.hero}
      />
      <Banner
        text={`Over the past 10 years, we’ve perfected our Design & Development game and are eager to help passionate Founders perfect theirs. Success is a team play, right? Let’s aim for the top together!`}
      />
      <div></div>
    </>
  )
}