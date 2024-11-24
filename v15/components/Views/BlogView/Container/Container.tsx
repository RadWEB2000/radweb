import css from "v-blog/Container/Container.module.scss";
import {tContainer} from "v-blog/Container/Container.models"
import {Categories, ControlPanel as Panel} from "v-blog/index"

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
                <h2>teksty</h2>
            </div>
        </div>
    )
}