import css from "footer/Author/Author.module.scss"
import {tAuthor} from "footer/Author/Author.models"

export default function Author(props:tAuthor){
    return (
        <div
            className={css.wrapper}
        >
            <p
                className={css.author}
                dangerouslySetInnerHTML={{__html:props.author}}
            />
        </div>
    )
}