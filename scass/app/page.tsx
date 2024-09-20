import { Hero } from "v-home/index";
import { home } from "data/home";

export default function HomePage(){
  return(
    <>
      <Hero
        {...home.hero}
      />  
      <h1>okkokfgokdokoko</h1>
    </>
  )
}