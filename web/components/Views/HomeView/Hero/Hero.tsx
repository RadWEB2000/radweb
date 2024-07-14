import css from "v-home/Hero/Hero.module.scss";
import Image from "next/image";
import {tHero} from "v-home/Hero/Hero.models";
import { PrimaryButton as Button } from "buttons/index";
import { BsLayoutThreeColumns } from "react-icons/bs";

export default function Hero({buttons,image,slogan,title}:tHero){
    console.log(BsLayoutThreeColumns)
    return (
        <header
            className={css.wrapper}
        >
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
                    quality={30}
                />
            </picture>
            <section
                className={css.box}
            >
                <h1
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:title}}
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
                        {buttons.map((item,index) => {
                            return (
                                <Button
                                    {...item}
                                    key={index}
                                />
                            )
                        })}
                    </ul>
                }
            </section>
        </header>
    )
}