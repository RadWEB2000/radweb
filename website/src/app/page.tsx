import { Designation, Hero, HowWeWork } from "v-home/index"
import wordpress from "configs/wordpress";
import {query, IResponse,IResult} from "data/queries/home_page"



export default async function HomePage(){

  const connection = await fetch(`${process.env.WP_ENDPOINT}`, {
    ...wordpress({query:query})
  })
  
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
        <HowWeWork
          cards={howWeWork.cards}
          content={howWeWork.content}
          title={howWeWork.title}
        />
      </main>
    </>
  )
}