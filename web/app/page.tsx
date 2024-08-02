import { Hero } from "v-home/index"
import { home_page } from "data/home_page"

export default function HomePage(){
  return(
    <>
      <Hero
        {...home_page.hero}
      />
      <main>
      
      </main>
      <div></div>
    </>
  )
}