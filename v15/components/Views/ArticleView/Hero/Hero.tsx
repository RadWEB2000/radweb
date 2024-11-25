import css from "v-article/Hero/Hero.module.scss"
import Image from "next/image"
import { Breadcrumbs } from "parts/Utils"

export default function Hero(){
    return (
        <header
            className={css.wrapper}
        >
            <Breadcrumbs
                theme="light"
                url={[
                    {
                        title:`Start`,
                        url:`/`
                    },
                    {
                        title:`Blog`,
                        url:`/blog`
                    },
                    {
                        title:`Dokumentacje React: która jest najlepsza?`,
                        url:`/blog/wpis`
                    },
                ]}
            />
            <h1
                className={css.title}
            >
                Dokumentacje React: Która jest najlepsza?
            </h1>
            <p
                className={css.excerpt}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ab, asperiores exercitationem labore recusandae nesciunt dignissimos omnis odio consectetur, laboriosam id ex inventore corrupti consequuntur. Praesentium vero aliquid ex exercitationem?
            </p>
            <p
                className={css.release}
            >
                21 sierpnia 2021
            </p>
            <picture
                className={css.media}
            >
                <Image
                     alt={""}
                     className={css.image}
                     fill
                     loading="eager"
                     priority
                     src={`https://images.unsplash.com/photo-1429734956993-8a9b0555e122?q=80&w=2104&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                     quality={40}
                />
            </picture>
        </header>
    )
}