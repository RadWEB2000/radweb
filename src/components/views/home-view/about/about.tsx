import css from "@/views/home-view/about/about.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function About(){
    return (
        <div className={css.wrapper} >
            <section className={css.container}>
                <div>
                <strong className={css.container__slogan} >O mnie</strong>
                <h2 className={css.container__title}>Empower youre business<br/>Financal Future Ettorlessy</h2>
                </div>
                <p className={css.container__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo et maxime beatae sapiente aut officiis voluptate? Exercitationem illo voluptatum nihil minima impedit necessitatibus repudiandae inventore, asperiores, dolorem ratione corrupti consectetur?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae sunt commodi temporibus alias enim optio mollitia porro nam veritatis nihil inventore culpa ad unde necessitatibus et, velit cum aut est!</p>
            </section>
            <ul className={css.cards} >
                <li className={`${css.card} ${css.card__big}`} >
                    <figure className={css.card__big__media} >
                        <Image
                            alt="Historia RadWEB"
                        className={css.card__big__media__image}
                            src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            fill
                            loading="lazy"
                            title="Historia RadWEB"
                            quality={50}
                        />
                    </figure>
                    <div className={css.card__big__container}>
                        <h3 className={css.card__big__title} >
                        <Link className={css.card__big__link} href="/o-mnie#historia" >Historia RadWEB</Link>
                        </h3>
                        <p className={css.card__big__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita similique perspiciatis tempora quasi autem nam commodi. Corporis, necessitatibus, similique totam quis nobis quisquam consequatur aperiam et repellendus sint quod modi?</p>
                    </div>
                </li>
                <li className={`${css.card} ${css.card__small}`} >
                    <h3 className={css.card__small__title} >
                        <Link className={css.card__small__uri} href="/o-mnie#misja" >Misja RadWEB</Link>
                        </h3>
                        <p className={css.card__small__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita similique perspiciatis tempora quasi autem nam commodi. Corporis, necessitatibus, similique totam quis nobis quisquam consequatur aperiam et repellendus sint quod modi?</p>
                </li>
                <li className={`${css.card} ${css.card__small}`} >
                    <h3 className={css.card__small__title} >
                        <Link className={css.card__small__uri} href="/o-mnie#misja" >Wizja RadWEB</Link>
                        </h3>
                        <p className={css.card__small__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita similique perspiciatis tempora quasi autem nam commodi. Corporis, necessitatibus, similique totam quis nobis quisquam consequatur aperiam et repellendus sint quod modi?</p>
                </li>
            </ul>
        </div>
    )
}