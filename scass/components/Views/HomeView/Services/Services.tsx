import css from "v-home/Services/Services.module.scss"
import { PrimaryButton as Button} from "buttons/index";
import {tServices} from "v-home/Services/Services.models"
import { SecondaryServiceCard as Card} from "cards/index";
import Image from "next/image";

export default function Services(props:tServices){
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
                {
                    props.button &&
                    <Button
                        {...props.button}
                    />
                }
            </section>
            {
                props.cards &&
                <ul
                    className={css.cards}
                >
                    {
                        props.cards.map((item) => {
                            return (
                                <Card
                                    {...item}
                                    key={item.title}
                                />
                            )
                        })
                    }
                </ul>
            }
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
                        quality={50}
                    />
                </picture>
            }
        </div>
    )
}