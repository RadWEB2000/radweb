"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { tCarousel } from "carousel/Carousel.models";

export default function Carousel(props:tCarousel){

    return (
        <Slider 
            {...props.settings}
        >
            {props.children}
        </Slider>
    )
}