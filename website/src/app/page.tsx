import { Designation, Hero } from "v-home/index"
import wordpress from "configs/wordpress";
import { homePageQuery, iHomePageResult, iHomePageQuery } from 'data/homePageQuery';




export default async function HomePage(){

  const {designation,hero,howWeWork}:iHomePageResult = await fetch(`${process.env.WP_ENDPOINT}`, 
    {
      ...wordpress({query:homePageQuery})
    }
  )
  .then(res => res.json())
  .then( ({data:{page:{homePage:{hero,designation,howWeWork}}}}:iHomePageQuery) => {
    return {
      hero:{
          title:hero.title,
          slogan:hero.slogan,
          image:hero.image.node,
          buttons: hero.buttons.map(({button}) => {
            return {
              label:button.title,
              uri:button.url
            }
          })
      },
      designation: {
        content:designation.content,
        image:designation.image.node
      },
      howWeWork: {
        cards:howWeWork.cards,
        content:howWeWork.content,
        title:howWeWork.title
      }
    }
  });

  
  return (
    <>
      <Hero
        image={{
          altText:hero.image.altText,
          sourceUrl:hero.image.sourceUrl,
          title:hero.image.title
        }}
        slogan={hero.slogan}
        title={hero.title}
        buttons={hero.buttons}
      />
      <main>
        <Designation
          content={designation.content}
          image={designation.image}
        />
      </main>
    </>
  )
}