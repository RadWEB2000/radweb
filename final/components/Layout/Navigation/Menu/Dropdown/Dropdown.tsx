"use client"
import {MenuItemExpand as Expand, MenuItemSubmenu as Item} from "nav/index";
import { useState } from "react";
import css from "nav/Menu/Dropdown/Dropdown.module.scss"
import {tDropdown} from "nav/Menu/Dropdown/Dropdown.models"

export default function Dropdown(props:tDropdown){
    const [isOpen,setOpen] = useState<boolean>(false);
    return (
        <li
            className={css.wrapper}
        >
            <Expand
                isOpen={isOpen}
                title={props.title}
                toggle={() => setOpen(!isOpen)}
                url={props.url}
            />
            {/* <AnimatePresence> */}
            {
                isOpen &&
                <ul
                    className={css.dropdown}
                >
                    {
                        props.dropdown.map((item) => {
                            return (
                                <Item
                                    {...item}
                                    key={item.title}
                                />
                            )
                        })
                    }
                </ul>
            }
            {/* </AnimatePresence> */}
        </li>
    )
}