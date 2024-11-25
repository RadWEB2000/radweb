import css from "v-blog/Container/Container.module.scss";
import {tContainer} from "v-blog/Container/Container.models"
import {Articles, Categories, ControlPanel as Panel} from "v-blog/index"

export default function Container(props:tContainer){
    return (
        <div
            className={css.wrapper}
        >
            <Panel
                {...props.controlPanel}
            />
            <span
                className={css.line__horizontal}
            />
            <Categories
                {...props.categories}
            />
            <span
                className={css.line__vertical}
            />
            <div
                className={css.articles}
            >
                {
                    props.articles ?
                    <Articles
                        {...props.articles}
                    /> :
                    <p>Brak wpisów</p>
                
                }
            </div>
        </div>
    )
}