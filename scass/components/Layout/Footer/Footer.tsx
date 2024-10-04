
import css from "footer/Footer.module.scss";
import  {Author, Informations, Menu, Socials} from "footer/index";
import {tFooter} from "footer/Footer.models";
export default function Footer(props:tFooter){
    return (
        <footer
            className={css.wrapper}
        >
            <div>
                <Informations
                    {...props.informations}
                />
                <Socials
                    {...props.socials}
                />
                <Menu
                    {...props.menu}
                />
            </div>
            <Author
                {...props.author}
            />
        </footer>
    )
}