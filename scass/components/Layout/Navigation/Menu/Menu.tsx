"use client"
import css from "nav/Menu/Menu.module.scss"
import MainContext from "context/MainContext"
import {tMenu} from "./Menu.models"
import {MenuItem, Submenu} from "nav/index"
import {useContext} from "react"

export default function Menu(props:tMenu){
    const {isOpen} = useContext(MainContext);
    return(
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
                                    submenu={item.submenu!}
                                    key={item.title}
                                />
                            )
                        }else{
                            return (
                                <MenuItem
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