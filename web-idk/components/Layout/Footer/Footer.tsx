import Image from "next/image";
import {tFooter} from "layout/Footer/Footer.models"
import css from "layout/Footer/Footer.module.scss"
import Link from "next/link";
import { HiOutlineMail as Mail, HiPhone as Phone} from "react-icons/hi";

export default function Footer(props:tFooter){
    return (
        <footer
            className={css.wrapper}
        >
            <address
                className={css.container}
            >
                <picture
                    className={css.image__wrapper}
                >
                    <Image
                        alt={props.image.altText}
                        className={css.image}
                        fill
                        loading="lazy"
                        src={props.image.sourceUrl}
                        title={props.image.title}
                        quality={10}
                    />
                </picture>
                {
                    (props.nip || props.email || props.phone || props.location) && 
                    <ul
                        className={css.container}
                    >
                        {
                            props.nip &&
                            <li
                                className={css.nip}
                            >
                                <strong
                                    className={css.nip__label}
                                    dangerouslySetInnerHTML={{__html:props.nip.label}}
                                />
                                <p
                                    className={css.nip__content}
                                    dangerouslySetInnerHTML={{__html:props.nip.content}}
                                />
                            </li>
                        }
                        {
                            props.location &&
                            <p
                                className={css.location}
                                dangerouslySetInnerHTML={{__html:props.location}}
                            />
                        }
                        {
                            props.email &&
                            <Link
                                className={css.contact}
                                href={props.email.url}
                            >
                                <i
                                    className={css.contact__icon}
                                >
                                    <Mail/>
                                </i>
                                <span
                                    className={css.contact__title}
                                    dangerouslySetInnerHTML={{__html:props.email.title}}
                                />
                            </Link>
                        }
                        {
                            props.phone &&
                            <Link
                                className={css.contact}
                                href={props.phone.url}
                            >
                                <i
                                    className={css.contact__icon}
                                >
                                    <Phone/>
                                </i>
                                <span
                                    className={css.contact__title}
                                    dangerouslySetInnerHTML={{__html:props.phone.title}}
                                />
                            </Link>
                        }
                    </ul>
                }
            </address>
            {
                props.menu &&
                <menu
                    className={css.menu}
                >
                    {
                        props.menu.map((item,index) => {
                            return (
                                <li
                                    className={css.menu__column}
                                    key={index}
                                >
                                    <b
                                        className={css.menu__column__title}
                                        dangerouslySetInnerHTML={{__html:item.label}}
                                    />
                                    {
                                        item.items &&
                                        <ul
                                            className={css.menu__column__cards}
                                        >
                                            {item.items.map((item,index) => {
                                                return (
                                                    <Link
                                                        className={css.menu__column__cards__item}
                                                        dangerouslySetInnerHTML={{__html:item.title}}
                                                        href={item.url}
                                                        key={item.title}
                                                    />
                                                )
                                            })}
                                        </ul>
                                    }
                                </li>
                            )
                        })
                    }
                </menu>
            }
            <div
                className={css.box}
            >
                <p
                    className={css.author}
                    dangerouslySetInnerHTML={{__html:`${props.author} | ${props.year} - ${new Date().getFullYear}`}}
                />
                <ul
                    className={css.socials}
                ></ul>
            </div>
        </footer>
    )
}