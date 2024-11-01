import css from "footer/Footer.module.scss";
import {tFooter} from "footer/Footer.models";
import {Details, Informations, Menu} from "footer/index";

export default function Footer(props:tFooter){

    return (
        <footer
            className={css.wrapper}
        >
            <div
                className={css.container}
            >
                <div
                    className={css.informations}
                    >
                    <Informations
                        {...props.informations}
                    />
                </div>
                <div
                    className={css.cities}
                >
                    <Menu
                        {...props.cities}
                        size="big"
                    />
                </div>
                <div
                    className={css.menu}
                >
                    {
                        props.menu.map((item) => {
                            return (
                                <Menu
                                    {...item}
                                    size="regular"
                                    key={item.title}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div
                className={css.details}
            >
                <Details
                    {...props.details}
                />
            </div>
        </footer>
    )
}