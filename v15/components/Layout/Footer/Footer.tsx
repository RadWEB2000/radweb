import css from "footer/Footer.module.scss";
import {tFooter} from "footer/Footer.models";
import {Author, Details, Menus, Socials} from "footer/index";

export default function Footer(props:tFooter){
    return (
        <footer
            className={css.wrapper}
        >
            <div
                className={css.main}
            >
                <Details
                    {...props.details}
                />
                <Menus
                    menus={props.menus}
                />
            </div>
            <span
                className={css.line}
            />
            <div
                className={css.details}
            >
                <Author
                    author={props.author}
                />
                <Socials
                    socials={props.socials}
                />
            </div>
        </footer>
    )
}