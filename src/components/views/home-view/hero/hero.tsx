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

type hero = {
    title: string;
    slogan: string;
    gallery: Array<image>;
}

export default function Hero({ gallery, slogan, title }: hero) {
    return (
        <>
            <header
                className={css.wrapper}
            >
                <section className={css.box} >
                    <h1 className={css.title} >{title}</h1>
                    <h2 className={css.subtitle}>{slogan}</h2>
                </section>
            </header>
            <ul
                className={css.gallery}
            >
                {
                    gallery?.map(({ alt, src, title }, index) => {
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