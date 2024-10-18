import { home } from "data/home"
import { Hero } from "v-home/index"

export default function HomePage(){
  return (
    <>
      <Hero
        {...home.hero}
      />
      <h1>home page</h1>
    </>
  )
}