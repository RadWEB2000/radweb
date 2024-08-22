import css from "v-home/Hero/Hero.module.scss";
import Image from "next/image"
import {tHero} from "v-home/Hero/Hero.models"
import { PrimaryButton as Button } from "ui/index";
import getSocial from "@/lib/getSocial";
import Link from "next/link";

export default function Hero(props:tHero){
    return (
        <div
            className={css.wrapper}
        >
            <header
                className={css.container}
            >
                <figure
                    className={css.media}
                >
                    {
                        props.media === "img" &&
                        <Image
                            alt={props.image.altText}
                            className={css.image}
                            fill
                            loading="eager"
                            priority
                            src={props.image.sourceUrl}
                            title={props.image.title}
                            quality={30}
                        />
                    }
                    {
                        props.media === "movie" &&
                        <video
                            autoPlay 
                            className={css.video}
                            loop 
                            muted
                            poster={props.video.poster ? props.video.poster : ""}
                        >
                            <source 
                                src={props.video.source}
                                type={props.video.type}
                            />
                        </video>
                    }
                </figure>
                <section
                    className={css.box}
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
                    {
                        props.buttons &&
                        <ul className={css.buttons}>
                            {
                                props.buttons.map((item,index) => {
                                    return (
                                        <Button
                                            {...item}
                                            mode="link"
                                            arrow={"short"}
                                            key={index}
                                        />
                                    )
                                })
                            }
                        </ul>
                    }
                </section>
            </header>
            {
                props.statistics &&
                <ul
                    className={css.cards}
                >
                    {
                        props.statistics.map((item,index) => {
                            return (
                                <li
                                    className={css.card}
                                    key={item.label}
                                >
                                    <p
                                    className={css.card__label}          dangerouslySetInnerHTML={{__html:item.label}}
                                    />
                                    <span
                                        className={css.card__value}
                                        dangerouslySetInnerHTML={{__html:item.value}}
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
                        props.socials.slice(0,4).map((item,index) => {
                            const social = getSocial(item)

                            return (
                                <Link
                                    className={css.social}           href={item}            key={item}
                                    target="_blank"   rel="noindex nofollow"
                                    style={{
                                        backgroundColor:social?.color
                                    }}
                                    title={item}
                                >
                                    {social?.icon}
                                </Link>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}