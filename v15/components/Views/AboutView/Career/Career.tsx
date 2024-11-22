import css from "v-about/Career/Career.module.scss";
import Image from "next/image";
import {tCareer} from "v-about/Career/Career.models"
import { PrimaryCareerCard as Card} from "cards/career/index";

export default function Career(props:tCareer){
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
                props.career &&
                <ul
                    className={css.cards}
                >
                    {
                        props.career.map((item) => {
                            return (
                                <Card
                                    {...item}
                                    key={item.title}
                                />
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}