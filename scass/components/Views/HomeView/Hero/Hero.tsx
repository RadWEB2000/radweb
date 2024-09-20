import css from "v-home/Hero/Hero.module.scss"
import getSocial from "lib/getSocial";
import Image from "next/image"
import Link from "next/link";
import { FiArrowUpRight as Arrow } from "react-icons/fi";
import {tHero} from "v-home/Hero/Hero.models"

// className={css.}

export default function Hero(props:tHero){
    return(
        <header
            className={css.wrapper}
        >
            <div
                className={css.container}
            >
                {
                    props.media &&
                    <figure
                        className={css.media}
                    >
                        {
                            props.media.type === "image" &&
                            <Image
                                alt={props.media.image.altText}
                                className={css.image}
                                fill
                                loading="eager"
                                priority
                                src={props.media.image.sourceSrc}
                                title={props.media.image.title}
                                quality={35}
                            />
                        }
                        {
                            props.media.type === "movie" &&
                            <video
                                autoPlay
                                className={css.video}
                                loop
                                muted
                            >
                                <source
                                    src="/childrens.mp4"
                                />
                            </video>
                        }
                    </figure>
                }
                <section
                    className={css.box}
                >
                    <h1
                        className={css.heading}
                    >
                        <span
                            className={css.title}
                            dangerouslySetInnerHTML={{__html:`${props.title} `}}
                        />
                        <span
                            className={css.slogan}
                            dangerouslySetInnerHTML={{__html:props.slogan}}
                        />
                    </h1>
                </section>
            </div>
            {
                props.tiles &&
                <ul
                    className={css.tiles}
                >
                    {
                        props.tiles.slice(0,3).map((item) => {
                            return (
                                <li
                                    className={css.tile}
                                    key={item.title}
                                >
                                    <p
                                        className={css.tile__cta}
                                        dangerouslySetInnerHTML={{__html:item.cta}}
                                    />
                                    <Link
                                        className={css.tile__button}
                                        href={item.url}
                                    >
                                        <Arrow/>
                                    </Link>
                                    <h3
                                        className={css.tile__title}
                                        dangerouslySetInnerHTML={{__html:item.title}}
                                    />
                                </li>
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
                    {
                        props.socials.map((item) => {
                            const {icon} = getSocial(item.url)
                            return (
                                <Link
                                    className={css.social}
                                    href={item.url}
                                    key={item.title}
                                    title={item.title}
                                >
                                    {icon}
                                </Link>
                            )
                        })
                    }
                </ul>
            }
        </header>
    )
}