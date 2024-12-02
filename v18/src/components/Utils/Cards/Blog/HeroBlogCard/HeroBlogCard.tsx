"use client";

import css from "@/cards/Blog/HeroBlogCard/HeroBlogCard.module.scss";
import Link from "next/link";
import { tHeroBlogCards } from "@/cards/Blog/HeroBlogCard/HeroBlogCard.models";
import { RiArrowRightUpLine as Arrow } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { useCarousel } from "@/hooks/useCarousel";

export default function HeroBlogCard(props: tHeroBlogCards) {
  const { currentIndex, setIsPaused } = useCarousel(props.cards.length);

  const slideVariants = {
    enter: { x: 25, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -25, opacity: 0 },
  };

  return (
    <ul
      className={`${props.className} ${css.wrapper}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence>
        {props.cards.slice(currentIndex, currentIndex + 1).map((item) => {
          return (
            <motion.li
              className={css.container}
              key={item.title}
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <p className={css.release}>{item.release}</p>
              <h3 className={css.title}>{item.title}</h3>
              <Link
                className={css.button}
                href={item.button.url}
                {...item.button.props}
              >
                <Arrow />
              </Link>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ul>
  );
}
