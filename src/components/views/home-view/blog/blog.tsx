import Image from "next/image";
import Link from "next/link";
import { CiCalendar as Calendar, CiClock2 as Clock } from "react-icons/ci";
import css from "@/views/home-view/blog/blog.module.scss";
import abstract_squartes from "@/img/abstract-squares.webp";
const posts: Array<{
    image: image,
    title: string;
    uri: string;
    category: link;
    button: string;
    readingTime: number;
    release: string;
}> = [
        {
            button: 'Przeczytaj',
            category: {
                label: 'Programowanie',
                uri: '/blog/programowanie'
            },
            image: {
                alt: '',
                src: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                title: ''
            },
            readingTime: 3,
            release: '21 kwi 2025',
            title: '10 rzeczy, które musisz wiedzieć, zanim zaczniesz',
            uri: '/'
        },
        {
            button: 'Przeczytaj',
            category: {
                label: 'Programowanie',
                uri: '/blog/programowanie'
            },
            image: {
                alt: '',
                src: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                title: ''
            },
            readingTime: 3,
            release: '21 kwi 2025',
            title: 'Jak osiągnąć sukces w [branża] – sprawdzone strategie na 2025 rok',
            uri: '/'
        },
        {
            button: 'Przeczytaj',
            category: {
                label: 'Programowanie',
                uri: '/blog/programowanie'
            },
            image: {
                alt: '',
                src: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                title: ''
            },
            readingTime: 3,
            release: '21 kwi 2025',
            title: 'Najczęstsze błędy w [temat] i jak ich unikać',
            uri: '/'
        },
        {
            button: 'Przeczytaj',
            category: {
                label: 'Programowanie',
                uri: '/blog/programowanie'
            },
            image: {
                alt: '',
                src: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                title: ''
            },
            readingTime: 3,
            release: '21 kwi 2025',
            title: 'Co się zmieniło w [temat] w 2025 roku? Podsumowanie najważniejszych zmian',
            uri: '/'
        },
        {
            button: 'Przeczytaj',
            category: {
                label: 'Programowanie',
                uri: '/blog/programowanie'
            },
            image: {
                alt: '',
                src: 'https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                title: ''
            },
            readingTime: 3,
            release: '21 kwi 2025',
            title: '5 mitów o [temat], w które nadal wierzy zbyt wiele osób',
            uri: '/'
        },
        {
            button: 'Przeczytaj',
            category: {
                label: 'Programowanie',
                uri: '/blog/programowanie'
            },
            image: {
                alt: '',
                src: 'https://images.pexels.com/photos/27680492/pexels-photo-27680492/free-photo-of-islandia-snieg-krajobraz-natura.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                title: ''
            },
            readingTime: 3,
            release: '21 kwi 2025',
            title: 'Dlaczego [problem] to poważny temat – i co możesz z tym zrobić',
            uri: '/'
        },
    ]

export default function Blog() {
    return (
        <div
            className={css.wrapper}
        >
            <section className={css.container}>
                <h2 className={css.container__title}>Blog</h2>
                <strong className={css.container__slogan} >Wondering how well we <span className={css.special} >know your industry</span>? Curious which tech stacks we support?</strong>
                <p className={css.container__description} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex cupiditate similique beatae vel expedita obcaecati tempore harum. Placeat eveniet cupiditate qui at quia tenetur voluptatem commodi explicabo nisi culpa, tempore, soluta quas enim dolores similique! Facilis esse nesciunt eligendi voluptates, iusto neque, illum fuga necessitatibus perspiciatis, dolorem alias hic velit vitae nemo? Dolore deleniti exercitationem asperiores incidunt beatae omnis quis obcaecati accusamus eius atque consequuntur et placeat commodi.</p>
            </section>
            <div
                className={css.box}
            >
                <figure className={css.media} >
                    <Image
                        alt=""
                        className={css.image}
                        src={abstract_squartes.src}
                        fill
                        quality={85}
                        loading="lazy"
                    />
                </figure>
                <ul className={css.cards} >
                    {
                        posts.slice(0, 6).map(({ button, category, image, readingTime, release, title, uri }) => {
                            return (
                                <Link className={css.card} href={uri} >
                                    <figure className={css.card__media} >
                                        <Image
                                            {...image}
                                            className={css.card__media__image}
                                            loading="lazy"
                                            fill
                                        />
                                    </figure>
                                    <div className={css.card__details} >
                                        <Link className={css.card__details__category} href={category.label} >{category.label}</Link>
                                        <h3 className={css.card__details__title} >{title}</h3>
                                        <div className={css.card__details__info} >
                                            <p className={css.card__details__info__item}>
                                                <i className={css.card__details__info__item__icon} ><Calendar /></i>
                                                <span className={css.card__details__info__item__label} >{release}</span>
                                            </p>
                                            <p className={css.card__details__info__item} >
                                                <i className={css.card__details__info__item__icon}  ><Clock /></i>
                                                <span className={css.card__details__info__item__label}  >{`${readingTime}min`}</span>
                                            </p>
                                        </div>

                                    </div>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}