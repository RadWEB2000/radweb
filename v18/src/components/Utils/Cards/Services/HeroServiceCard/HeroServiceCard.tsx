"use client";
import css from "@/cards/Services/HeroServiceCard/HeroServiceCard.module.scss";
import { tHeroServiceCards } from "@/cards/Services/HeroServiceCard/HeroServiceCard.models";
import Link from "next/link";
import { RiArrowRightUpLine as Arrow } from "react-icons/ri";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCarousel } from "@/hooks/useCarousel";

export default function HeroServiceCard(props: tHeroServiceCards) {
  const { currentIndex, setIsPaused } = useCarousel(props.cards.length);

  const slideVariants = {
    enter: { y: 25, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -25, opacity: 0 },
  };

  return (
    <ul
      className={`${css.wrapper} ${props.className}`}
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
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <picture className={css.media}>
                <Image
                  alt={item.image.altText}
                  className={css.image}
                  loading="lazy"
                  fill
                  src={item.image.sourceSrc}
                  title={item.image.title}
                  quality={25}
                  {...item.image.props}
                />
              </picture>
              <article className={css.box}>
                <h3 className={css.title}>{item.title}</h3>
                <Link
                  className={css.button}
                  href={item.button.url}
                  {...item.button.props}
                >
                  <Arrow />
                </Link>
                <p className={css.excerpt}>{item.excerpt.substring(0, 120)}</p>
              </article>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ul>
  );
}
