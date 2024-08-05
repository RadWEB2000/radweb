import css from "v-home/Projects/Projects.module.scss";
import {tProjects} from "v-home/Projects/Projects.models";
import { PrimaryProjectCard as Card} from "cards/index";

export default function Projects({button,cards,content,title}:tProjects){
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
                <ul className={css.cards}>
                    {cards.map((item,index) => {
                        return (
                            <Card
                                {...item}
                                key={index}
                            />
                        )
                    })}
                </ul>
            }
        </div>
    )
}