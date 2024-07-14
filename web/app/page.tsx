import { Hero } from "v-home/index"
import hero_img from "img/hero.jpg"
export default function HomePage(){
  return (
    <>
      <Hero
        buttons={[
          {
            title:"Wiedza",
            url:"#"
          },
          {
            title:"Oferta",
            url:"#"
          },
          {
            title:"Kontakt",
            url:"#"
          },
        ]}
        image={{
          altText:"",
          sourceUrl:hero_img.src,
          title:""
        }}
        slogan="Strony internetowe / SEO / Copywriting / Video"
        title="RadWEB"
      />
      <main>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic vero inventore a est recusandae dolor perferendis magni voluptatem illum architecto perspiciatis id omnis, doloremque nobis ipsam quae cupiditate! Cumque, perferendis.
      </main>
    </>
  )
}