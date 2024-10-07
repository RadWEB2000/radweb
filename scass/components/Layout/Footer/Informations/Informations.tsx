import css from "footer/Informations/Informations.module.scss";
import {tContactItem,tInformations} from "footer/Informations/Informations.models"
import Link from "next/link";
import { PiPhoneListBold  as Phone} from "react-icons/pi";
import { RiMailSendLine as Mail} from "react-icons/ri";


function ContactItem(props:tContactItem){
    return (
        <Link
            className={css.contact__item}
            href={props.url}
            rel={props.rel}
            {...props.props}
        >
            <i
                className={css.contact__item__icon}
            >
                {props.icon}
            </i>
            <span
                className={css.contact__item__title}
                dangerouslySetInnerHTML={{__html:props.title}}
            />
        </Link>
    )
}

export default function Informations(props:tInformations){
    return (
        <div
            className={css.wrapper}
        >
            <h3
                className={css.brand}
                dangerouslySetInnerHTML={{__html:props.brand}}
            />
            <h4
                className={css.cta}
                dangerouslySetInnerHTML={{__html:props.cta}}
            />
            {
                props.contact &&
                <ul
                    className={css.contact}
                >
                    {
                        props.contact.email &&
                        <ContactItem
                            {...props.contact.email}
                            icon={<Mail/>}
                        />
                    }
                    {
                        props.contact.phone &&
                        <ContactItem
                            {...props.contact.phone}
                            icon={<Phone/>}
                        />
                    }
                </ul>
            }
            <address
                className={css.address}
            >
                <p
                    className={css.address__location}
                    dangerouslySetInnerHTML={{__html:props.address}}
                />
                {
                    props.map &&
                    <figure
                        className={css.address__map}
                    >
                        <iframe
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src={props.map}
                        />
                    </figure>
                }
            </address>
        </div>
    )
}