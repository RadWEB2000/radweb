import css from "v-home/Testimonials/Testimonials.module.scss"
import {tTestimonials} from "v-home/Testimonials/Testimonials.models"
import { TestimonialCard as Card} from "cards/index"
import { FaChevronLeft as Left,FaChevronRight as Right } from "react-icons/fa";



export default function Testimonials(props:tTestimonials){
    return (
        <div
            className={css.wrapper}
        >
            <section
                className={css.container}
            >
                <h2
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
            </section>
            {
                props.cards &&
                <>
                    <ul
                        className={css.cards}
                    >
                        {
                            props.cards.map((item, index) => {
                                return (
                                    <Card
                                        {...item}
                                        key={index}
                                    />
                                )
                            })
                        }
                    </ul>
                    <div 
                        className={css.buttons}
                    >
                        <button
                            className={css.button}
                        >
                            <Left/>
                        </button>
                        <button
                            className={css.button}
                        >
                            <Right/>
                        </button>
                    </div>
                </>
            }
            
        </div>
    )
}