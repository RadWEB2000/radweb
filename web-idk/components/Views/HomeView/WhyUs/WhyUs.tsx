import css from "v-home/WhyUs/WhyUs.module.scss"
import {tWhyUs} from "v-home/WhyUs/WhyUs.models"
import Image from "next/image"

export default function WhyUs(props:tWhyUs) {
    return (
        <div
            className={css.wrapper}
        >
            <section
                className={css.container}
            >
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
            </section>
            {
                props.images &&
                <ul
                    className={css.gallery}
                >
                    {
                        props.images.map((item,index) => {
                            return (
                                <picture
                                    className={css.image__wrapper}
                                    key={index}
                                >
                                    <Image
                                        alt={item.altText}
                                        className={css.image}
                                        height={165}
                                        loading="lazy"
                                        src={item.sourceUrl}
                                        title={item.title}
                                        quality={30}
                                        width={165}
                                    />
                                </picture>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}