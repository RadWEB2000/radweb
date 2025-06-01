import css from "@/views/home-view/hero/hero.module.scss";
import Image from "next/image";
import gray_face from "@/img/r-adamczyk-4real.webp"

export default function Hero() {
    return (
        <header
            className={css.wrapper}
        >
            <section className={css.box} >
                <h1 className={css.title} >RadWEB</h1>
                <h2 className={css.subtitle}>Współczesny marketing online</h2>
                <div className={css.details} >
                    <li className={css.detail} >Blog</li>
                    <li className={css.detail} >Strony internetowe</li>
                    <li className={css.detail} >SEO</li>
                    <li className={css.detail} >Kontakt</li>
                </div>
            </section>
            <figure
                className={css.media}
            >
                <Image
                    alt="Radosław Adamczyk - Specjalista SEO / SEM / SXO"
                    className={css.image}
                    priority
                    loading="eager"
                    src={gray_face.src}
                    fill
                    // height={650}
                    // width={800}
                    title="Radosław Adamczyk - Specjalista SEO / SEM / SXO"
                />
            </figure>

        </header>
    )
}