import css from "v-home/Hero/Hero.module.scss";
import Image from "next/image"
import { PrimaryLinkButton as Button} from "link/index"
import { PrimarySocialButton as Social} from "socials/index"
import {tHero} from "v-home/Hero/Hero.models"

export default function Hero(props:tHero){
    return (
        <header
            className={css.wrapper}
        >
           {
                props.media.medium === "image" &&
                <picture
                    className={css.medium}
                >
                    <Image
                        alt={props.media.image.altText}
                        className={css.image}
                        fill
                        loading="eager"
                        priority
                        src={props.media.image.sourceSrc}
                        title={props.media.image.title}
                        {...props.media.props}
                    />
                </picture>
           }
           {
                props.media.medium === "video" && 
                <figure
                    className={css.medium}
                >
                    <video
                        className={css.video}
                        {...props.media.props}
                    >
                        <source
                            src={props.media.src}
                            type={props.media.type}
                        />
                    </video>
                </figure>
           }
            <section
                className={css.container}
            >
                <h1
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <h2
                    className={css.slogan}
                    dangerouslySetInnerHTML={{__html:props.slogan}}
                />
                {
                    props.buttons &&
                    <ul
                        className={css.buttons}
                    >
                        {
                            props.buttons.map((item) => {
                                return (
                                    <Button
                                        {...item}
                                        theme="dark"
                                        key={item.title}
                                    />
                                )
                            })
                        }
                    </ul>
                }
                {
                    props.socials &&
                    <ul
                        className={css.socials}
                    >
                        {props.socials.map((item) => {
                            return (
                                <Social
                                    {...item}
                                    key={item.url}
                                />
                            )
                        })}
                    </ul>   
                }
            </section>
        </header>
    )
}