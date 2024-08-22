import css from "v-home/WhyUs/WhyUs.module.scss"
import {tWhyUs} from "v-home/WhyUs/WhyUs.models"

export default function WhyUs(props:tWhyUs) {
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