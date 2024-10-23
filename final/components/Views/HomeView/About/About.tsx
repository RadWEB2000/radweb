import css from "v-home/About/About.module.scss"
import Image from "next/image";
import {tAbout} from "v-home/About/About.models"
import Link from "next/link";

export default function About(props:tAbout){
    return (
        <div
            className={css.wrapper}
        >
            <div
                className={css.container}
            >
                <section
                    className={css.box}
                >
                    <h2 
                        className={css.title}
                        dangerouslySetInnerHTML={{__html:props.title}}
                    />
                    <p
                        dangerouslySetInnerHTML={{__html:props.content}}
                        className={css.content}
                    />
                </section>
                {
                    props.tags &&
                    <ul
                        className={css.tags}
                    >
                        {
                            props.tags.map((item) => {
                                return (
                                    <Link
                                        className={css.tag}
                                        dangerouslySetInnerHTML={{__html:`#${item.title}`}}
                                        key={item.title}
                                        href={item.url}
                                    />
                                )
                            })
                        }
                    </ul>
                }
            </div>
            <picture
                className={css.media}
            >
                <Image
                    alt={props.image.altText}
                    className={css.image}
                    fill
                    loading="lazy"
                    src={props.image.sourceSrc}
                    title={props.image.title}
                    quality={40}
                    {...props.image.props}
                />
            </picture>
        </div>
    )
}