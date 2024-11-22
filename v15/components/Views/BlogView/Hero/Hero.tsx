import {Breadcrumbs} from 'utils/index';
import {tHero} from "v-blog/Hero/Hero.models";
import css from "v-blog/Hero/Hero.module.scss"
export default function Hero(props:tHero){
    return (
        <header
            className={css.wrapper}
        >
            <div
                className={css.breadcrumbs}
            >
                <Breadcrumbs
                    theme='light'
                    url={props.breadcrumbs}
                />
            </div>
            <section
                className={css.container}
            >
                <h1
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
            </section>
        </header>
    )
}