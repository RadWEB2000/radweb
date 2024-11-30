"use client";
import css from "@/cards/Services/HeroServiceCard/HeroServiceCard.module.scss";
import { tHeroServiceCard } from "@/cards/Services/HeroServiceCard/HeroServiceCard.models";
import Link from "next/link";
import { RiArrowRightUpLine as Arrow } from "react-icons/ri";
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion"
import {useEffect, useState} from "react";

export default function HeroServiceCard(props: tHeroServiceCard) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Kontroluje zatrzymywanie animacji

  const cardCount = props.cards.length;

  // Funkcja zmieniająca slajd automatycznie co 3s
    useEffect(() => {
      if (!isPaused) {
        const timer = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % cardCount);
        }, 3000);

        return () => clearInterval(timer); // Czyści timer przy unmount
      }
    }, [isPaused, cardCount]);

  // Funkcja animacji
  const slideVariants = {
    enter: { y: 50, opacity: 0 }, // Slajd wchodzi z prawej
    center: { y: 0, opacity: 1},  // Slajd w centrum
    exit: { y: -50, opacity: 0}, // Slajd wychodzi w lewo
  };

  return (
    <ul 
      className={`${css.wrapper} ${props.className}`}
      onMouseEnter={() => setIsPaused(true)} // Zatrzymuje animację na hover
      onMouseLeave={() => setIsPaused(false)} // Wznawia animację po opuszczeniu
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
                  fill
                  loading="lazy"
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
                <p className={css.excerpt}>{item.excerpt}</p>
              </article>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ul>
  );
}
