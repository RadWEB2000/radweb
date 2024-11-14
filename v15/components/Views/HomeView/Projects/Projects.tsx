import { PrimaryButton as Button} from "buttons/index";
import { PrimaryProjectCard as Card} from "cards/project/index";
import {tProjects} from "v-home/Projects/Projects.models";
import css from "v-home/Projects/Projects.module.scss"

export default function Projects(props:tProjects){
    return (
        <div
            className={css.wrapper}
        >
            <section
                className={css.container}
            >
                {
                    props.slogan &&
                    <h3
                        className={css.slogan}
                        dangerouslySetInnerHTML={{__html:props.slogan}}
                    />
                }
                <h2
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
                <Button
                    {...props.button}
                    theme="dark"
                    type="link"
                />
            </section>
            {
                props.cards &&
                <ul
                    className={css.cards}
                >
                    {
                        props.cards.map((item) => {
                            return(
                                <Card
                                    {...item}
                                    key={item.title}
                                    theme="dark"
                                />
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}