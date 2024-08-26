import css from "v-home/Projects/Projects.module.scss"
import { tProjects } from "v-home/Projects/Projects.models";
import { PrimaryProjectCard as Card } from "cards/index";

export default function Projects(props:tProjects){
    return (
        <div
            className={css.wrapper}
        >
            <section
                className={css.container}
            >
                <h2
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
            </section>
            {
                props.cards &&
                <ul
                    className={css.cards}
                >
                    {
                        props.cards.map((item,index) => {
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
        </div>
    )
}