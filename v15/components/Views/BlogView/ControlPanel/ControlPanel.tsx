import {tControlPanel} from "v-blog/ControlPanel/ControlPanel.models";
import css from "v-blog/ControlPanel/ControlPanel.module.scss";
import {Search, Sort} from "v-blog/index"

export default function ControlPanel(props:tControlPanel){
    return (
        <div
            className={css.wrapper}
        >
            <Search
                {...props.search}
            />
            <Sort
                {...props.sort}
            />
        </div>
    )
}