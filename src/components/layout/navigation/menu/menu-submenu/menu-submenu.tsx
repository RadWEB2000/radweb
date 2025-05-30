"use client";
import { FaArrowDown as Arrow } from "react-icons/fa6";
import { MenuItem } from "@/nav/index";
import { useContext, useState } from "react";
import { MenuContext } from "@/context";
import css from "@/nav/menu/menu-submenu/menu-submenu.module.scss";
import { AnimatePresence, motion } from "framer-motion";

type menu_submenu = link & {
    submenu: Array<link>
}

export default function MenuSubmenu({ label, submenu, uri, attrs }: menu_submenu) {

    const { close } = useContext(MenuContext);
    const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

    function handleToggle() {
        setIsOpenDropdown(!isOpenDropdown)
    }

    function handleClose() {
        setIsOpenDropdown(false);
        close();
    }

    return (
        <li className={css.wrapper} onMouseEnter={() => setIsOpenDropdown(true)} onMouseLeave={() => setIsOpenDropdown(false)} >
            <div className={css.box} >
                <MenuItem
                    {...{ label, uri }}
                />
                <button className={css.button} onClick={() => handleToggle()} >
                    <Arrow />
                </button>
            </div>
            <AnimatePresence>
                {
                    isOpenDropdown &&
                    <motion.ul
                        className={css.dropdown}
                        data-expand={isOpenDropdown}
                        transition={{
                            duration: 0.12,
                            delay: 0,
                            type: 'spring',

                        }}
                        initial={{
                            opacity: 0,
                            visibility: "hidden"
                        }}
                        animate={{
                            opacity: 1,
                            visibility: 'visible'
                        }}
                        exit={{
                            opacity: 0,
                            visibility: 'hidden'
                        }}
                    >
                        {
                            submenu.map(({ label, uri }) => {
                                return (
                                    <MenuItem
                                        {...{ label, uri }}
                                        attrs={{
                                            onClick: () => handleClose()
                                        }}
                                        key={label}
                                        variant='secondary'
                                    />
                                )
                            })
                        }
                    </motion.ul>
                }
            </AnimatePresence>
        </li>
    )
}