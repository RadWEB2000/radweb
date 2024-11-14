import css from "v-home/About/About.module.scss"
import {tAbout} from "v-home/About/About.models";
import { PrimaryButton as Button} from "buttons/index";
import Image from "next/image";
import Link from "next/link";

export default function About(props:tAbout){
    return (
        <div
            className={css.wrapper}
        >
            <section
                className={css.container}
            >
                {
                    props.slogan &&
                    <h3
                        className={css.slogan}
                        dangerouslySetInnerHTML={{__html:props.slogan}}
                    />
                }
                <h2
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
                <Button
                    {...props.button}
                    theme="light"
                    type="link"
                />
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
                                        href={item.url}
                                        key={item.title}
                                        {...item.props}
                                    >
                                        {`#${item.title}`}
                                    </Link>
                                )
                            })
                        }
                    </ul>
                }
            </section>
            {
                props.image &&
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
                        quality={45}
                        {...props.image.props}
                    />
                </picture>
            }
        </div>
    )
}