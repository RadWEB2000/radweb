"use client"
import css from "v-home/Testimonials/Testimonials.module.scss"
import {tTestimonials} from "v-home/Testimonials/Testimonials.models"
import { TestimonialCard as Card} from "cards/index"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials(props:tTestimonials){
    const settings = {
        dots: true,
        infinite: true,
        className:css.cards,
        speed: 350,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2250,
        pauseOnHover:true,
        responsive: [
            {
                breakpoint:1080,
                settings: {
                    arrows:false,
                    slidesToShow: 3,
                }
            }, 
            {
                breakpoint:780,
                settings: {
                    slidesToShow: 2,
                }
            }, 
            {
                breakpoint:550,
                settings: {
                    slidesToShow: 1,
                }
            },
            
        ]
    }
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
                <Slider
                    {...settings}

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
                </Slider>
            }
            
        </div>
    )
}