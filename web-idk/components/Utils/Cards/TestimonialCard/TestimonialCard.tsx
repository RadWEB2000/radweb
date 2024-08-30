import css from "cards/TestimonialCard/TestimonialCard.module.scss";
import Image from "next/image";
import {tTestimonialCard} from "cards/TestimonialCard/TestimonialCard.models"


export default function TestimonialCard(props:tTestimonialCard){
    return (
        <li
            className={css.wrapper}
        >
            <p
                className={css.content}
                dangerouslySetInnerHTML={{__html:props.content}}
            />
            <div
                className={css.details}
            >

                <picture
                    className={css.image__wrapper}
                >
                    <Image
                        alt={props.image.altText}
                        className={css.image}
                        height={45}
                        loading="lazy"
                        src={props.image.sourceUrl}
                        title={props.image.title}
                        quality={40}
                        width={45}
                    />
                </picture>
                <hgroup
                    className={css.person}
                >
                    <h4
                        className={css.fullname}
                        dangerouslySetInnerHTML={{__html:`${props.fullname.firstname} ${props.fullname.lastname}`}}
                    />
                    <h5
                        className={css.company}
                        dangerouslySetInnerHTML={{__html:props.company}}
                    />
                </hgroup>
            </div>

        </li>
    )
}



// TestimonialCard