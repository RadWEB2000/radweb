"use client"
import css from "nav/Menu/Menu.module.scss"
import {tMenu} from "nav/Menu/Menu.models"
import {MenuItem as Item, MenuSubmenu as Submenu} from "nav/index"
import MainContext from "context/MainContext"
import { useContext } from "react";
export default function Menu(props:tMenu){
    const {isOpen} = useContext(MainContext)

    return (
        <div
            className={css.wrapper}
            data-open={isOpen}
    >
            <menu
                className={css.container}
            >
                {
                    props.menu.map((item) => {
                        if(item.submenu){
                            return (
                                <Submenu
                                    {...item}
                                    submenu={item.submenu}
                                    key={item.title}
                                />
                            )
                        }else{
                            return (
                                <Item
                                    {...item}
                                    key={item.title}
                                />
                            )
                        }
                    })
                }
            </menu>
        </div>
    )
}