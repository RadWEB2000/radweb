import { PrimaryProjectCard as Card} from "cards/index"
import {tProjects} from "v-home/Projects/Projects.models"
import css from "v-home/Projects/Projects.module.scss"

export default function Projects({button,buttonCard,cards,content,title}:tProjects){
    return (
        <div
            className={css.wrapper}
        >
            <section
                className={css.box}
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
                    {cards.map((item,index) => {
                        return (
                            <Card
                                {...item}
                                button={buttonCard}
                                key={index}
                            />
                        )
                    })}
                </ul>
            }
        </div>
    )
}