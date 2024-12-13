"use client";
import css from "@/carousels/HomeBlogCarousel/HomeBlogCarousel.module.scss";
import { tHomeBlogCarousel } from "@/carousels/HomeBlogCarousel/HomeBlogCarousel.models";
import { useRef } from "react";
import { FiArrowLeft as Left, FiArrowRight as Right } from "react-icons/fi";
import { scrollCards } from "@/functions/scrollCards";
import { motion } from "framer-motion";

export default function HomeBlogCarousel(props: tHomeBlogCarousel) {
  const container = useRef<HTMLUListElement>(null);

  return (
    <>
      <ul className={props.className} ref={container}>
        {/* Karty różnego typu */}
        {props.children}
      </ul>
      <div
        className={css.buttons}
        style={{
          justifyContent: props.buttonsPosition ?? "flex-end",
        }}
      >
        <motion.button
          className={`${css.button} ${css.button__left}`}
          onClick={() => scrollCards(container, -200, "smooth")}
          whileTap={{
            scale: 0.93,
          }}
          whileHover={{
            scale: 1.02,
          }}
        >
          <Left />
        </motion.button>
        <motion.button
          className={`${css.button} ${css.button__right}`}
          onClick={() => scrollCards(container, 200, "smooth")}
          whileTap={{
            scale: 0.93,
          }}
          whileHover={{
            scale: 1.02,
          }}
        >
          <Right />
        </motion.button>
      </div>
    </>
  );
}
