import css from "v-home/Hero/Hero.module.scss"
import Image from "next/image";
import { tHero } from "v-home/Hero/Hero.models";
import { PrimaryButton as Button} from "buttons/index";
import { PrimarySocial as Social } from "socials/index";

export default function Hero({buttons,image,slogan,socials,title}:tHero){
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
                    quality={60}
                />
            </picture>
            <div
                className={css.box}
            >
                <section
                    className={css.details}
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
                            {
                                buttons.map((item,index) => {
                                    return (
                                        <Button
                                            {...item}
                                            theme="dark"
                                            key={index}
                                        />
                                    )
                                })
                            }
                        </ul>
                    }
                </section>
                {
                    socials &&
                    <ul
                    className={css.socials}
                    >
                        {
                            socials.map((item,index) => {
                                return (
                                    <Social
                                        {...item}
                                        key={index}
                                    />
                                )
                            })
                        }
                    </ul>
                }
            </div>
        </div>
    )
}