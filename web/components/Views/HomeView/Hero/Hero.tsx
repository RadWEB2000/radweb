import { PrimarySocial as Social } from "socials/index";
import Image from "next/image";
import { tHero } from "v-home/Hero/Hero.models";

export default function Hero({buttons,image,slogan,socials,title}:tHero){
    return (
        <div>
            <picture>
                <Image
                    alt={image.altText}
                    fill
                    loading="lazy"
                    priority
                    src={image.sourceUrl}
                    title={image.title}
                    quality={20}
                />
            </picture>
            <div>
                <section>
                    <header>
                        <h1
                            dangerouslySetInnerHTML={{__html:title}}
                        />
                        <h2
                            dangerouslySetInnerHTML={{__html:slogan}}
                        />
                    </header>
                    <ul>

                    </ul>
                </section>
                {
                    socials &&
                    <ul>
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