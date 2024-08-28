import css from "v-home/Blog/Blog.module.scss";
import { PrimaryBlogCard as Card} from "cards/index"
import {tBlog} from "v-home/Blog/Blog.models"

export default function Blog(props:tBlog){
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
                        props.cards.slice(0,4).map((item, index) => {
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