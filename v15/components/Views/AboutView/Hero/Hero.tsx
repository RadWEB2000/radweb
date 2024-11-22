import css from "v-about/Hero/Hero.module.scss";
import Image from "next/image";
import {tHero} from "v-about/Hero/Hero.models"
import { Breadcrumbs } from "utils/index";

export default function Hero(props:tHero){
    return (
        <header
            className={css.wrapper}
        >
            <div
                className={css.breadcrumbs}
            >
                <Breadcrumbs
                    theme="dark"
                    url={[
                        {
                            title:"Start",
                            url:"/"
                        },
                        {
                            title:"O mnie",
                            url:"/o-mnie"
                        },
                    ]}
                />
            </div>
            <section
                className={css.container}
            >
                <hgroup
                    className={css.headings}
                >
                    <h1
                        className={css.title}
                        dangerouslySetInnerHTML={{__html:props.title}}
                    />
                    <h2
                        className={css.slogan}
                        dangerouslySetInnerHTML={{__html:props.slogan}}
                    />
                </hgroup>
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
            </section>
            <picture
                className={css.media}
            >
                <Image
                    alt={props.image.altText}
                    className={css.image}
                    fill
                    loading="eager"
                    priority
                    src={props.image.sourceSrc}
                    title={props.image.title}
                    quality={40}
                    {...props.image.props}
                />
            </picture>
        </header>
    )
}