import css from "@/footer/Footer.module.scss";
import { tFooter } from "@/footer/Footer.models";
import { Author, Details, Menu, Policies, Socials } from "@/footer/index";

export default function Footer(props: tFooter) {
  return (
    <footer className={css.wrapper}>
      <div className={css.socials}>
        <Socials socials={props.socials} />
      </div>
      <div className={css.container}>
        <Details {...props.details} />
        <Menu menus={props.menus} />
        <span className={css.line} />
        <Author author={props.author} />
        <Policies policies={props.policies} />
      </div>
    </footer>
  );
}
