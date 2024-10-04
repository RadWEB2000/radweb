"use client"
import css from "nav/Menu/MenuSubmenu/MenuSubmenu.module.scss"
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IoArrowDownSharp as Arrow } from "react-icons/io5";
import {tMenuSubmenu} from "nav/Menu/MenuSubmenu/MenuSubmenu.models"
import { useState } from "react";

export default function MenuSubmenu(props:tMenuSubmenu){
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <li
            className={css.wrapper}
        >
            <div
                className={css.box}
            >
                <Link className={css.link} href={props.url}>
                    {props.title}
                </Link>
                <button
                    className={css.button}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Arrow/>
                </button>
            </div>
            {
                isOpen &&
                <AnimatePresence>
                    {
                        props.submenu &&
                        <motion.ul
                            animate={{
                                opacity:1,
                                visibility:"visible"
                            }}
                            className={css.submenu}
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
                                props.submenu.map((item) => {
                                    return (
                                        <li
                                            className={css.submenu__item}
                                            key={item.title}
                                        >
                                            <Link
                                                onClick={() => setIsOpen(false)}
                                                href={item.url}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
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