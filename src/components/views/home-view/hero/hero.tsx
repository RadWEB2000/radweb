import css from "@/views/home-view/hero/hero.module.scss";
import Image from "next/image";
import gray_face from "@/img/r-adamczyk-4real.webp"
import work_break_img from "@/img/work-break.webp"
import worker_img from "@/img/worker.webp"
import customer_img from "@/img/customer.webp"

const images: Array<image> = [
    {
        alt: '',
        src: work_break_img.src,
        title: ''
    },
    {
        alt: '',
        src: worker_img.src,
        title: ''
    },
    {
        alt: '',
        src: customer_img.src,
        title: ''
    },
]

export default function Hero() {
    return (
        <>
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
                    {/* <video playsInline muted loop autoPlay src="/videos/spinning-lines-full-hd.mov"></video> */}
                </figure>
            </header>
            <ul
                className={css.gallery}
            >
                {
                    images.map(({ alt, src, title }, index) => {
                        return (
                            <picture
                                className={`${css.gallery__item} ${index - 1 < images.length && css.gallery__item__last}`}
                                key={index}
                            >
                                <Image
                                    {...{ alt, title, src }}
                                    className={css.gallery__item__media}
                                    fill
                                    loading="lazy"
                                />
                            </picture>
                        )
                    })
                }
            </ul>
        </>
    )
}