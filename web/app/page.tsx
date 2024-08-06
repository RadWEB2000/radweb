import Hero from "@/components/Views/HomeView/Hero/Hero"
import "css/Views/HomeView.scss"
import { home_page } from "data/home_page"

export default function HomePage(){
  return(
    <>
      <Hero
        {...home_page.hero}
      />
    </>
  )
}