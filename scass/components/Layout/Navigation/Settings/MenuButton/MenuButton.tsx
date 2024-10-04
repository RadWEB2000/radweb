"use client"
import css from "nav/Settings/MenuButton/MenuButton.module.scss";
import MainContext from "context/MainContext"
import { useContext } from "react";

export default function MenuButton(){
    const {isOpen,toggle} = useContext(MainContext)
    return (
        <button
            className={css.wrapper}
            data-open={isOpen}
            onClick={toggle}
        >
            <span className={css.line} />
            <span className={css.line} />
            <span className={css.line} />
        </button>
    )
}