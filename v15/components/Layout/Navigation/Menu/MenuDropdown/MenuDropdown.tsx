"use client"
import css from "nav/Menu/MenuDropdown/MenuDropdown.module.scss"
import {MenuItem as Item} from "nav/index";
import {tMenuDropdown} from "nav/Menu/MenuDropdown/MenuDropdown.models"
import { FaArrowDownLong as Arrow} from "react-icons/fa6";
import { useState } from "react";

export default function MenuDropdown(props:tMenuDropdown){
    
    const [isOpen, toggleOpen] = useState<boolean>(false);

    return (
        <li
            className={css.wrapper}
            onMouseLeave={() => toggleOpen(false)}
        >
            <div
                className={css.container}
            >
                <Item 
                    title={props.title}
                    url={props.url}
                    theme="regural"
                    {...props.props}
                />
                <button
                    className={css.button}
                    onClick={() => toggleOpen(!isOpen)}
                >
                    <Arrow/>
                </button>
            </div>
            {
                isOpen &&
                <ul
                    className={css.submenu}
                >
                    {
                        props.submenu.map((item) => {
                            return (
                                <Item 
                                    {...item}
                                    key={item.title}
                                    theme="submenu"
                                    props={{
                                        onClick:() => toggleOpen(false)
                                    }}
                                    {...item.props}
                                />              
                            )
                        })
                    }
                </ul>
            }
        </li>
    )
}