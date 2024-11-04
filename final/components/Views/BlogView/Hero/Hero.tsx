import Image from "next/image";
import css from "v-blog/Hero/Hero.module.scss";
import {tHero} from "v-blog/Hero/Hero.models"

export default function Hero(props:tHero){
    return (
        <header
            className={css.wrapper}
        >
            
                <h1
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
       
        </header>
    )
}