import { PrimaryPersonCard as Card } from "cards/index"
import {tAboutUs} from "v-home/AboutUs/AboutUs.models"
import css from "v-home/AboutUs/AboutUs.module.scss"
export default function AboutUs({button,cards,content,title}:tAboutUs){
    return (
        <>
            <section 
                className={css.wrapper} 
            >
                <h2
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </section>
            {
                cards &&
                <ul 
                    className={css.cards} 
                >
                    {
                        cards.reverse().map((item,index) => {
                            return (
                                <Card
                                    {...item}
                                    key={index}
                                />
                            )
                        })
                    }
                </ul>
            }
        </>
    )
}