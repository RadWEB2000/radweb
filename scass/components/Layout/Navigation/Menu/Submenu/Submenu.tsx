"use client"
import css from "nav/Menu/Submenu/Submenu.module.scss"
import Link from "next/link";
import {tSubmenu} from "nav/Menu/Submenu/Submenu.models"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuArrowDown as Arrow } from "react-icons/lu";

export default function Submenu(props:tSubmenu){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <li
            className={css.wrapper}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div
                className={css.box}
            >
                <Link 
                    className={css.link}
                    href={props.url}
                >
                    {props.title}
                </Link>
                <button
                    className={css.button}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Arrow/>
                </button>
            </div>
            <AnimatePresence>
            {
                isOpen &&
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
                            return(
                                <Link
                                    className={css.submenu__item}
                                    href={item.url}
                                    key={item.title}
                                >
                                    {item.title}
                                </Link>
                            )
                        })
                    }
                </motion.ul>
            }
            </AnimatePresence>
        </li>
    )
}