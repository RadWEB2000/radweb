"use client"

import css from "css/layout/navigation/submenu.module.scss"
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react"

type t_props = {
    url:string;
    title:string;
    submenu: {
        id:number;
        url:string;
        title:string;
    }[];
}

export default function Submenu(props:t_props){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li
            className={`bg-red-200 relative ${css.wrapper}`}
            // onMouseLeave={() => setIsOpen(false)}
            role="menuitem"
        >
            <div>
                <Link
                    href={props.url}
                >
                    {props.title}
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                >
                    +
                </button>
            </div>
            {
                isOpen &&
                <AnimatePresence>
                    <motion.ul
                        className="absolute bg-slate-900 text-yellow-50 px-4 py-2"
                        role="menu"
                    >
                        {props.submenu.map((item) => {
                            return (
                                <li
                                    role="menuitem"
                                    key={item.id}
                                >
                                    <Link
                                        href={item.url}
                                    >
                                        {item.title}
                                    </Link>     
                                </li>
                            )
                        })}
                    </motion.ul>
                </AnimatePresence>
            }
        </li>
    )
}