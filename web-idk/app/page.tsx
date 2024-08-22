import { Hero, WhyUs } from "v-home/index";

export default function Page(){
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
          media="movie"
          slogan="Współczesny marketing online"
          title="RadWEB"
          video={{
            source:"https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4",
            type:"video/mp4"
          }}
          socials={[
            "facebook.com",
            "instagram.com",
            "medium.com",
            "x.com",
          ]}
          statistics={[
            {
              label:"Lat doświadczenia",
              value:new Date().getFullYear() - 2016
            },
            {
              label:"Zrealizowanych prac",
              value:13
            },
          ]}
      />
      <main>
        <WhyUs
          content={`There Are Some Things Money Can’t Buy. For Everything Else, There’s Mastercard.`}
        />
      </main>
    </>
  )
}