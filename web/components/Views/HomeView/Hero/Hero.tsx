import { tHero } from "v-home/Hero/Hero.models";
import { PrimaryButton as Button} from "buttons/index";
import css from "v-home/Hero/Hero.module.scss"
import Image from "next/image";

export default function Hero({buttons,image,slogan, title}:tHero){
    return (
        <div
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
                    quality={40}
                />
            </picture>
            <section
                className={css.box}
            >
                <header
                    className={css.headings}
                >
                    <h1
                        className={css.title}
                        dangerouslySetInnerHTML={{__html:title}}
                    />
                    <h2
                        className={css.slogan}
                        dangerouslySetInnerHTML={{__html:slogan}}
                    />
                </header>
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
                                    icon={"arrow"}
                                    theme="primary"
                                    type="link"
                                />
                            )
                        })}
                    </ul>
                }
            </section>
        </div>
    )
}