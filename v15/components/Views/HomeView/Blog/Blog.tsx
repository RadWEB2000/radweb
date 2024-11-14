import css from "v-home/Blog/Blog.module.scss";
import {tBlog} from "v-home/Blog/Blog.models"
import { PrimaryButton as Button } from "buttons/index";
import { PrimaryBlogCard as Card} from "cards/blog/index";

export default function Blog(props:tBlog){
    return (
        <div>
            <section>
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
                    theme="light"
                    type="link"
                />
            </section>
            {
                props.cards &&
                <ul>
                    {
                        props.cards.map((item) => {
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