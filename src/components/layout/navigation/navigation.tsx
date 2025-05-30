"use client"
import css from "@/nav/navigation.module.scss";
import { motion } from 'framer-motion'
import logo from "@/img/logo.webp"
import { Brand, Menu } from "@/nav/index";
import { MenuButton } from "@/buttons/index";
import { useContext } from "react";
import { MenuContext } from "@/context";

const menu: Array<{
    label: string;
    uri: string;
    submenu: Array<{
        label: string;
        uri: string;
    }> | null;
}> = [
        {
            label: 'Start',
            uri: '/',
            submenu: null
        },
        {
            label: 'O mnie',
            uri: '/o-mnie',
            submenu: null
        },
        {
            label: 'Pozycjonowanie',
            uri: '/seo',
            submenu: [
                {
                    label: 'SEO lokalne',
                    uri: '/seo/lokalne'
                },
                {
                    label: 'SEO e-commerce',
                    uri: '/seo/e-commerce'
                },
                {
                    label: 'SEO zagraniczne',
                    uri: '/seo/zagraniczne'
                },
                {
                    label: 'Wizytówka Google',
                    uri: '/seo/gmf'
                },
                {
                    label: 'Miasta',
                    uri: '/seo/miasta'
                },
            ]
        },
        {
            label: 'Strony internetowe',
            uri: '/www',
            submenu: [
                {
                    label: 'Portfolio',
                    uri: '/www/portfolio'
                },
                {
                    label: 'Blog',
                    uri: '/www/blog'
                },
                {
                    label: 'Sklep internetowy',
                    uri: '/www/e-commerce'
                },
                {
                    label: 'Utrzymanie',
                    uri: '/www/utrzymanie'
                },
                {
                    label: 'Miasta',
                    uri: '/www/miasta'
                }
            ]
        },
        {
            label: 'Blog',
            uri: '/blog',
            submenu: [
                {
                    label: 'SEO',
                    uri: '/blog/seo'
                },
                {
                    label: 'Programowanie',
                    uri: '/blog/programowanie'
                },
                {
                    label: 'Prasówki',
                    uri: '/blog/prasowki'
                },
                {
                    label: 'Systemy operacyjne',
                    uri: '/blog/systemy-operacyjne'
                },
                {
                    label: 'SEM',
                    uri: '/blog/sem'
                },
            ]
        },
        {
            label: 'Projekty',
            uri: '/projekty',
            submenu: null
        },
        {
            label: 'Case studies',
            uri: '/case-studies',
            submenu: null
        },
        {
            label: 'Kontakt',
            uri: '/kontakt',
            submenu: null
        }
    ]

export default function Navigation() {

    const { isOpen } = useContext(MenuContext);

    return (
        <nav className={css.wrapper} data-expand={isOpen} >
            <Brand
                logo={{
                    alt: 'RadWEB Logo',
                    src: logo.src,
                    title: 'RadWEB Logo'
                }}
                label="RadWEB"
                uri="/"
            />
            <Menu
                menu={menu}
            />
            <div className={css.settings}>
                <MenuButton />
            </div>
        </nav>
    )
}