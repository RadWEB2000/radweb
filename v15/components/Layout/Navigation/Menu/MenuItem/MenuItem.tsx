"use client"
import css from "nav/Menu/MenuItem/MenuItem.module.scss";
import Link from "next/link";
import {tMenuItem} from "nav/Menu/MenuItem/MenuItem.models"
import { useContext } from "react";
import MainContext from "context/MainContext";


export default function MenuItem(props:tMenuItem){

    const {toggle} = useContext(MainContext);

    return (
        <Link
            className={css.wrapper}
            href={props.url}
            data-theme={props.theme}
            onClick={toggle}
            prefetch
            {...props.props}
        >
            {props.title}
        </Link>
    )
}