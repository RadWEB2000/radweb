import { PrimaryServiceCard as Card } from "cards/service/index";
import Carousel from "carousel/Carousel";
import { Settings } from "react-slick";
import {tServices} from "v-home/Services/Services.models";
import css from "v-home/Services/Services.module.scss"


export default function Services(props:tServices){
   
    const carouselSettings:Settings = {
        adaptiveHeight:false,
        className:css.slider,
        dotsClass:css.dots,
        arrows:false,
        autoplay:true,
        autoplaySpeed:2400,
        dots:true,
        draggable:true,
        infinite:true,
        slidesToScroll: 1,
        lazyLoad: "ondemand",
        pauseOnDotsHover:true,
        pauseOnHover:true,
        swipeToSlide: true,
        rows:3,
        slidesPerRow:1,
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
                <Carousel
                    settings={carouselSettings}
                >
                    {
                        props.cards.map((item )=> {
                            return (
                                <Card
                                    {...item}
                                    key={item.title}
                                />
                            )
                        })
                    }
                </Carousel>
            }
        </div>
    )
}