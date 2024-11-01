import css from "footer/Informations/Informations.module.scss"
import {tInformations} from "footer/Informations/Informations.models"
import { FaPhoneAlt as Phone} from "react-icons/fa";
import { LuMail as Mail} from "react-icons/lu";
import Link from "next/link";
export default function Informations(props:tInformations){

    function getIcon(type:"phone"|"email"){
        if(type === "email"){
            return <Mail/>
        }else {
            return <Phone/>
        }
    }

    return (
        <div
            className={css.wrapper}
        >   
            <hgroup>
                <h3
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <h4
                    className={css.slogan}
                    dangerouslySetInnerHTML={{__html:props.slogan}}
                />
            </hgroup>
            <address
                className={css.location}
            >
                <span
                    className={css.address}
                    dangerouslySetInnerHTML={{__html:props.location.address}}
                />
                <span
                    className={css.zipCode}
                    dangerouslySetInnerHTML={{__html:props.location.zipCode}}
                />
            </address>
            {
                props.contact &&
                <ul
                    className={css.contacts}
                >
                    {
                        props.contact.map((item) => {
                            return (
                                <Link
                                    className={css.contact}
                                    key={item.title}
                                    href={item.url}
                                >
                                    <i
                                        className={css.contact__icon}
                                    >
                                        {getIcon(item.type)}
                                    </i>
                                    <span
                                        className={css.contact__label}
                                    >
                                        {item.title}
                                    </span>
                                </Link>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}