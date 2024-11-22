import css from "v-about/Overview/Overview.module.scss"
import {tOverview} from "v-about/Overview/Overview.models";

export default function Overview(props:tOverview){
    return (
        <section
            className={css.wrapper}
        >
            <p
                className={css.content}
                dangerouslySetInnerHTML={{__html:props.content}}
            />
        </section>
    )
}