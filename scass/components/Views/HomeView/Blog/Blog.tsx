import css from "v-home/Blog/Blog.module.scss";
import { PrimaryBlogCard as Card} from "cards/index"
import { PrimaryButton as Button } from "buttons/index"
import {tBlog} from "v-home/Blog/Blog.models"

export default function Blog(props:tBlog){
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
                {
                    props.button &&
                    <Button
                        {...props.button}
                    />
                }
            </section>
            {
                props.cards &&
                <ul
                    className={css.cards}
                >
                    {
                        props.cards.slice(0,6).map((item) => {
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