"use client"

import MainContext from "context/MainContext";
import {tMenuItemExpand} from "nav/Menu/MenuItem/MenuItemExpand/MenuItemExpand.models"
import css from "nav/Menu/MenuItem/MenuItemExpand/MenuItemExpand.module.scss"
import Link from "next/link"
import { useContext } from "react";
import { HiArrowSmDown as Arrow} from "react-icons/hi";

export default function MenuItemExpand(props:tMenuItemExpand){
    const {close} = useContext(MainContext);
    return (
        <li
            className={css.wrapper}
        >
            <Link
                href={props.url}
            >
                {props.title}
            </Link>
            <button
                data-open={props.isOpen}
                onClick={props.toggle}
            >
                <Arrow/>
            </button>
        </li>
    )
}