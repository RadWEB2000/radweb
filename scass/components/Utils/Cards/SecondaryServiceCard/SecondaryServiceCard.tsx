import css from "cards/SecondaryServiceCard/SecondaryServiceCard.module.scss"
import {tSecondaryServiceCard} from "cards/SecondaryServiceCard/SecondaryServiceCard.models"
import { SecondaryButton } from "../../Buttons"

export default function SecondaryServiceCard(props:tSecondaryServiceCard) {
    return (
        <li
            className={css.wrapper}
        >
            <hgroup
                className={css.headings}
            >
                <h4
                    className={css.slogan}
                    dangerouslySetInnerHTML={{__html:props.slogan}}
                />
                <h3
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
            </hgroup>
            <p
                className={css.content}
                dangerouslySetInnerHTML={{__html:props.content}}
            />
            <SecondaryButton
                {...props.button}
                theme="dark"
            />
        </li>
    )
}