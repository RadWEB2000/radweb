import { AboutUs, Blog, Designation, Hero, HowWeWork, Partners, Projects, Services } from "v-home/index"
import wordpress from "configs/wordpress";
import {query, IResponse,IResult} from "data/queries/home_page"

export default async function HomePage(){

  const connection:IResult = await fetch(`${process.env.WP_ENDPOINT}`, {
    ...wordpress({query:query})
  })
  .then(response => response.json())
  .then((results:IResponse) => {
    const {data: {page: {homePage: {aboutUs,designation,hero,howWeWork,services, projects,partners, blog}}, teammates, services:servicesCards, projects:projectCards, posts}} = results;
    return {
      aboutUs: {
        button:aboutUs.button,
        content:aboutUs.content,
        title:aboutUs.title,
        cards:teammates.nodes.map(({featuredImage,teammatePage:{fullname,industry},uri}) => {
            return {
              image:featuredImage.node,
              fullname,
              industry,
              uri
            }
        })
      },
      designation: {
        content:designation.content,
        image:designation.image.node
      },
      hero:{
        buttons:hero.buttons.map(({button:{title,url}}) => {
          return {
            title,
            url
          }
        }),
        image:hero.image.node,
        slogan:hero.slogan,
        title:hero.title
      },
      howWeWork: {
        cards:howWeWork.cards.map(({title,content}) => {
            return {
              content,
              title
            }
        }),
        content:howWeWork.content,
        title:howWeWork.title
      },
      services: {
        button:services.button,
        buttonCard:services.button_card,
        cards:servicesCards.nodes.map(({excerpt,featuredImage,title,uri}) => {
            return {
              title,
              uri,
              image:featuredImage.node,
              excerpt
            }
        }),
        content:services.content,
        title:services.title
      },
      projects: {
        title:projects.title,
        content:projects.content,
        button:projects.button,
        buttonCard:projects.buttonCard,
        cards:projectCards.nodes.map(({date,excerpt,featuredImage,title,uri}) => {
          return {
            date,
            excerpt,
            image:featuredImage.node,
            title,
            uri
          }
        })
      },
      partners: {
        title:partners.title,
        cards:partners.cards.map(({logo,content,title}) => {
          return {  
            title,
            content,
            logo:logo.node
          }
        }),
        content:partners.content
      },
      blog: {
        button:blog.button,
        cards:posts.nodes.map(({date,excerpt,featuredImage,title,uri}) => {
          return {
            date,
            excerpt,
            image:featuredImage.node,
            title,
            uri
          }
        }),
        content:blog.content,
        title:blog.title
      }
    }
  })


  return (
    <>
      <Hero
        image={{
          altText:connection.hero.image.altText,
          sourceUrl:connection.hero.image.sourceUrl,
          title:connection.hero.image.title
        }}
        slogan={connection.hero.slogan}
        title={connection.hero.title}
        buttons={connection.hero.buttons}
      />
      <main>
        <Designation
          content={connection.designation.content}
          image={connection.designation.image}
        />
        <HowWeWork
          cards={connection.howWeWork.cards}
          content={connection.howWeWork.content}
          title={connection.howWeWork.title}
        />
        <AboutUs
          {...connection.aboutUs}
        />
        <Services
          {...connection.services}
        />
        <Projects
          {...connection.projects}
        />
        <Partners
          {...connection.partners}
        />
        <Blog
          {...connection.blog}
        />
      </main>
    </>
  )
}