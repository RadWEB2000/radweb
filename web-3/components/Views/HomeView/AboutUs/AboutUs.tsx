import css from "v-home/AboutUs/AboutUs.module.scss"
import {tAboutUs as Props} from "v-home/AboutUs/AboutUs.models"

export default function AboutUs({button,content,title}:Props){
    return (
        <div
            className={css.wrapper}
        >
            <section
                className={css.box}
            >
                <h2
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </section>
        </div>
    )
}