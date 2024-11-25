import css from "v-blog/Articles/Articles.module.scss";
import {tArticles} from "v-blog/Articles/Articles.models"
import { PrimaryBlogCard as Card} from "cards/blog/index";

export default function Articles(props:tArticles){
    return (
        <ul
            className={css.wrapper}
        >
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
    )
}