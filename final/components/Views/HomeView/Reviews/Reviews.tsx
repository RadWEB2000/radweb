import css from "v-home/Reviews/Reviews.module.scss"
import {tReviews} from "v-home/Reviews/Reviews.models";
import Image from "next/image";

export default function Reviews(props:tReviews){
    return (
        <div
            className={css.wrapper}
        >
            <h2
                className={css.title}
                dangerouslySetInnerHTML={{__html:props.title}}
            />
            {
                props.cards &&
                <ul
                    className={css.cards}
                >
                    {
                        props.cards.map((item, index) => {
                            return (
                                <li
                                    className={css.card}
                                    key={index}
                                >
                                    <div
                                        className={css.details}
                                    >
                                        {
                                            item.image &&
                                            <picture
                                                className={css.media}
                                                data-logo={item.image.logo}
                                            >
                                                <Image
                                                    alt={item.image.altText}
                                                    className={css.image}
                                                    fill
                                                    loading="lazy"
                                                    src={item.image.sourceSrc}
                                                    title={item.image.title}
                                                    quality={12}
                                                />
                                            </picture>
                                        }
                                        <h4
                                            className={css.fullname}
                                        >
                                            <span 
                                                className={css.firstname}
                                                dangerouslySetInnerHTML={{__html:item.fullname.firstname}} 
                                            />
                                            <span 
                                                className={css.lastname}
                                                dangerouslySetInnerHTML={{__html:item.fullname.lastname}} 
                                            />
                                        </h4>
                                        {
                                            item.company &&
                                            <h3
                                                className={css.company}
                                            >
                                                {item.company}
                                            </h3>
                                        }
                                    </div>
                                    <section
                                        className={css.review}
                                    >
                                        <p
                                            className={css.review__content}
                                            dangerouslySetInnerHTML={{__html:item.review}}
                                        />
                                    </section>
                                </li>
                            )
                        })
                    }        
                </ul>
            }
        </div>
    )
}