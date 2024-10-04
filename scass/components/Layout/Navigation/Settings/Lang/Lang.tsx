"use client"
import css from "nav/Settings/Lang/Lang.module.scss"
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { GrFlagFill as Flag} from "react-icons/gr";
import {tLang} from "nav/Settings/Lang/Lang.models"
import { useState } from "react";

export default function Lang(props:tLang){
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <li
            className={css.wrapper}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                aria-label={props.title}
                className={css.button}
                data-active={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Flag/>
            </button>
            {
                isOpen &&
                <AnimatePresence
                    initial={true}
                    mode="sync"
                >
                    {
                        props.langs &&
                        <motion.ul
                            animate={{
                                opacity:1,
                                visibility:"visible"
                            }}
                            className={css.langs}
                            exit={{
                                opacity:0,
                                visibility:"hidden"
                            }}
                            initial={{
                                opacity:0,
                                visibility:"hidden"
                            }}
                        >
                            {
                                props.langs.map((item) => {
                                    return (
                                        <Link
                                            className={css.lang}
                                            key={item.lang}
                                            href={item.url}
                                            hrefLang={item.lang}
                                            title={item.title}
                                        >
                                            <Image
                                                alt={item.image.altText}
                                                className={css.image}
                                                fill
                                                loading="lazy"
                                                src={item.image.sourceSrc}
                                                title={item.image.title}
                                                quality={40}
                                            />
                                        </Link>
                                    )
                                })
                            }
                        </motion.ul>
                    }
                </AnimatePresence>
            }
        </li>
    )
}