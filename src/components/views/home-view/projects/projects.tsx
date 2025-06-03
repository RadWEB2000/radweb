import css from "@/views/home-view/projects/projects.module.scss"
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight as Arrow } from "react-icons/go";

const works: Array<{ image: image; uri: string; title: string; excerpt: string; tags: Array<{ label: string; uri: string; }> }> = [
    {
        excerpt: `Est rerum pariatur voluptatibus nisi ut rerum non. Perspiciatis laborum earum repudiandae est fugit aut. Odio facilis et eos eum necessitatibus atque consequatur.`,
        image: {
            alt: '',
            src: 'https://images.pexels.com/photos/4252142/pexels-photo-4252142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: ''
        },
        tags: [
            {
                label: 'SEO',
                uri: '#'
            },
            {
                label: 'WWW',
                uri: '#'
            }
        ],
        title: 'Agromar',
        uri: '#'
    },
    {
        excerpt: `Est rerum pariatur voluptatibus nisi ut rerum non. Perspiciatis laborum earum repudiandae est fugit aut. Odio facilis et eos eum necessitatibus atque consequatur.`,
        image: {
            alt: '',
            src: 'https://images.pexels.com/photos/5773489/pexels-photo-5773489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: ''
        },
        tags: [
            {
                label: 'SEO',
                uri: '#'
            },
            {
                label: 'WWW',
                uri: '#'
            }
        ],
        title: 'LifeeStylee',
        uri: '#'
    },
    {
        excerpt: `Est rerum pariatur voluptatibus nisi ut rerum non. Perspiciatis laborum earum repudiandae est fugit aut. Odio facilis et eos eum necessitatibus atque consequatur.`,
        image: {
            alt: '',
            src: 'https://images.pexels.com/photos/18308288/pexels-photo-18308288/free-photo-of-widok-na-jezioro-i-gory-w-allos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: ''
        },
        tags: [
            {
                label: 'SEO',
                uri: '#'
            },
            {
                label: 'WWW',
                uri: '#'
            }
        ],
        title: 'LifeeStylee',
        uri: '#'
    }
]

export default function Projects() {
    return (
        <>
            <div className={css.container} >
                <h2 className={css.container__title} >Projekty i realizacje</h2>
                <p className={css.container__description} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptas sit, laborum autem repellendus vel quia consequuntur est ratione quae illo unde ad obcaecati facere minima, cum necessitatibus saepe consectetur.
                    Atque at, tempore veniam ad obcaecati, quae nesciunt est rem in quaerat minus quod eius ipsa excepturi, eveniet possimus! Porro reiciendis libero sunt! Facere ab repellat iste omnis, reiciendis quidem?
                    Unde praesentium consequuntur atque odit ipsum perspiciatis earum officia, suscipit voluptatum? Fugit, iusto consequuntur, similique laborum beatae officiis neque maxime hic in dignissimos ex? Autem, rem! Sunt amet quis fugiat.</p>
                <Link className={css.container__button} href="#" >
                    <Arrow />
                </Link>
            </div>
            <span className={css.separator} />
            <ul
                className={css.cards}
            >
                {
                    works.map(({ excerpt, image, tags, title, uri }) => {
                        return (
                            <Link
                                className={css.card}
                                href={uri}
                            >
                                <figure
                                    className={css.card__media}
                                >
                                    <Image
                                        {...image}
                                        className={css.card__media__image}
                                        fill
                                        loading="lazy"
                                        quality={95}
                                    />
                                </figure>
                                <section
                                    className={css.card__box}
                                >
                                    <h3 className={css.card__title} >{title}</h3>
                                    <p className={css.card__excerpt} >{excerpt}</p>
                                </section>
                                {/* <div className={css.card__details} > */}
                                <strong className={css.card__release} >2025</strong>
                                <ul className={css.card__tags}>
                                    {tags.map(({ label, uri }) => {
                                        return (
                                            <Link className={css.card__tag} href={uri} >
                                                {label}
                                            </Link>
                                        )
                                    })}
                                </ul>
                                {/* </div> */}
                            </Link>
                        )
                    })
                }
            </ul>
        </>
    )
}