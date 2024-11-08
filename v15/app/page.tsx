import { home } from "data/home"
import { Hero, Offer, Overview, Services } from "v-home/index"

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
        <Services
          {...home.services}
        />
      </main>
      <p>radweb</p>
    </>
  )
}