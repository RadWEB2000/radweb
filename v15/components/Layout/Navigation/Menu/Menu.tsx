"use client"
import css from "nav/Menu/Menu.module.scss";
import {tMenu} from "nav/Menu/Menu.models"
import { Dropdown, MenuItem } from "nav/index";
import { useContext } from "react";
import MainContext from "context/MainContext";

export default function Menu(props:tMenu){

    const {isOpen} = useContext(MainContext);

    return (
        <div
            data-open={isOpen}
            className={css.wrapper}
        >
            <menu
                className={css.container}
            >
                {
                    props.menu.map((item) => {
                        if(item.submenu){
                            return(
                                <Dropdown
                                    {...item}
                                    key={item.title}
                                    submenu={item!.submenu}
                                />
                            )
                        }else{
                            return (
                                <MenuItem
                                    {...item}
                                    key={item.title}
                                    theme="regural"
                                />
                            )
                        }
                    })
                }
            </menu>
        </div>
    )
}