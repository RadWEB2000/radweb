import css from "v-home/Overview/Overview.module.scss";
import {tOverview} from "v-home/Overview/Overview.models";

export default function Overview(props:tOverview){
    return (
        <section
            className={css.wrapper}
        >
            <h2
                className={css.title}
                dangerouslySetInnerHTML={{__html:props.title}}
            />
            <div
                 className={css.container}
            >
                <span className={css.line}/>
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:` ${props.content}`}}
                />
            </div>
        </section>
    )
}