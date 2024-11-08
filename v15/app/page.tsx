import { home } from "data/home"
import { Hero, Offer, Overview } from "v-home/index"

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
        <Offer
          {...home.offer}
        />
      </main>
      <p>radweb</p>
    </>
  )
}