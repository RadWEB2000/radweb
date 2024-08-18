import { Hero, WhyUs } from "v-home/index";
import hero_img from "img/blop.png"
import squares from "img/squares.svg"
import Image from "next/image";
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
      {/* <Image src={squares} alt="" height={400} width={1200} /> */}
      <main>
        <WhyUs
          content={`Na pochwałę zasługuje profesjonalizm, otwartość na nasze potrzeby oraz skuteczność. Gwarantowana po 3 miesiącach współpracy widoczność strony została spełniona na ponad 1000%! Serwis nie tylko jest lepiej indeksowany przez roboty Google, ale`}
          image={{
            altText:"",
            sourceUrl:squares,
            title:""
          }}
        />
      </main>
    </>
  )
}