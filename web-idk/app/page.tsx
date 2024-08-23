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
          images={[
            {
              altText:"",
              sourceUrl:"https://img.freepik.com/free-photo/top-view-group-friends-holding-hands_23-2148212319.jpg?t=st=1724430348~exp=1724433948~hmac=cbf127337c46897f77b44098a79098ad3f210dbcaf5910d2ed1260bf60d0b0aa&w=740",
              title:""
            },
            {
              altText:"",
              sourceUrl:"https://img.freepik.com/free-photo/front-view-friends-high-five_23-2148342044.jpg?t=st=1724429941~exp=1724433541~hmac=a752f411a1802af63a39cbb81e7af0d95b707addb412577a22eacb13f016b1f3&w=740",
              title:""
            },
            {
              altText:"",
              sourceUrl:"https://img.freepik.com/free-photo/coworkers-working-plans-break_23-2147707751.jpg?t=st=1724430344~exp=1724433944~hmac=bf2bcc6586ccea14baaf1f352e3fb986f02c88b9dea6d820c89ed185cf05a8ed&w=740",
              title:""
            },
          ]}
        />
      </main>
    </>
  )
}