import css from "footer/Details/Details.module.scss";
import {tDetails} from "footer/Details/Details.models";
import Link from "next/link";
import { IoMailOutline as Mail, IoPhonePortraitOutline as Phone } from "react-icons/io5";

export default function Details(props:tDetails){
    return (
        <address
            className={css.wrapper}
        >
            <hgroup
                className={css.headings}
            >
                <h3
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                {
                    props.slogan &&
                    <h4
                        className={css.slogan}
                        dangerouslySetInnerHTML={{__html:props.slogan}}
                    />
                }
            </hgroup>
            {
                props.address &&
                <p
                    className={css.address}
                >
                    <span
                        className={css.location}
                        dangerouslySetInnerHTML={{__html:props.address.location}}
                    />
                    <span
                        className={css.zipCode}
                        dangerouslySetInnerHTML={{__html:props.address.zipCode}}
                    />
                </p>
            }
            {
                props.contact &&
                <ul
                    className={css.contact}
                >
                    {
                        props.contact.map((item) => {
                            return (
                                <Link
                                    className={css.contact__item}
                                    href={item.url}
                                    key={item.title}
                                    title={item.title}
                                    {...item.props}
                                >
                                    <i
                                        className={css.contact__item__icon}
                                    >
                                        {item.type === "e-mail" ? <Mail/> : <Phone/> }
                                    </i>
                                    <span
                                        className={css.contact__item__title}
                                    >
                                        {item.title}
                                    </span>
                                </Link>
                            )
                        })
                    }
                </ul>
            }
        </address>
    )
}