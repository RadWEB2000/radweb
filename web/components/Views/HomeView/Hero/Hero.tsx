import { PrimaryButton as Button, SecondaryButton } from "buttons/index";
import Image from "next/image";
import Link from "next/link";
import {tHero} from "v-home/Hero/Hero.models";
import css from "v-home/Hero/Hero.module.scss";

export default function Hero({buttons,image,slogan,title, content,industries}:tHero){
    return (
        <div
            className={css.wrapper}
        >
            <section
                className={css.box}
            >
                <video
                    autoPlay
                    className={css.video}
                    loop
                    muted
                >
                    <source
                        src="/pixels.mp4"
                    />
                </video>
                <picture
                    className={css.image__wrapper}
                >
                    <Image
                        alt={image.altText}
                        className={css.image}
                        fill
                        loading="eager"
                        priority
                        src={image.sourceUrl}
                        title={image.title}
                    />
                </picture>
                <header
                    className={css.details}
                >
                    <h1
                        className={css.title}
                        dangerouslySetInnerHTML={{__html:`[${title}]`}}
                    />
                    <h2
                        className={css.slogan}
                        dangerouslySetInnerHTML={{__html:slogan}}
                    />
                    {
                        buttons &&
                        <ul
                            className={css.buttons}
                        >   
                            {
                                buttons.map((item,index) => {
                                    return (
                                        <Button
                                            {...item}   
                                            theme="light"
                                            key={index}
                                        />
                                    )
                                })
                            }
                        </ul>
                    }
                </header>
            </section>
            <div
                className={css.content}
            >
                <p
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </div>
            <ul
                className={css.indursties}
            >
                {industries.map(({label,uri}) => {
                    return (
                        <SecondaryButton
                            title={label}
                            key={label}
                            url={uri}
                        />
                    )
                })}
            </ul>
        </div>
    )
}