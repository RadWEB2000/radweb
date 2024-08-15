import { Hero } from "v-home/index";
import hero_img from "img/blop.png"

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
        slogan="Współczesny marketing online"
        title="RadWEB"
      />
    </>
  )
}