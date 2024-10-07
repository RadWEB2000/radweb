
import css from "footer/Footer.module.scss";
import  {Author, Informations, Menu, Socials} from "footer/index";
import {tFooter} from "footer/Footer.models";
export default function Footer(props:tFooter){
    return (
        <footer
            className={css.wrapper}
        >
            <div
                className={css.container}
            >
                <Informations
                    {...props.informations}
                />
                <Menu
                    {...props.menu}
                />
            </div>
            <div
                className={css.box}
            >
                <Author
                    {...props.author}
                />
                <Socials
                    {...props.socials}
                />
            </div>
        </footer>
    )
}