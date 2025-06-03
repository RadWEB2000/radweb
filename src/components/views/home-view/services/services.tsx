import css from "@/views/home-view/services/services.module.scss";
import Link from "next/link";

const cards: Array<{ title: string; description: string; button: string; uri: string }> = [
    {
        button: 'Sprawdź więcej',
        description: `Of het nou gaat om een klantportaal waarmee je je klanten 24/7 bedient, een inschrijfsysteem of een platform waarmee je jouw doelgroep in verbinding brengt. We’ve got you covered.`,
        title: 'Pozycjonowanie stron',
        uri: ''
    },
    {
        button: 'Sprawdź więcej',
        description: `Of het nou gaat om een klantportaal waarmee je je klanten 24/7 bedient, een inschrijfsysteem of een platform waarmee je jouw doelgroep in verbinding brengt. We’ve got you covered.`,
        title: 'Strony internetowe',
        uri: ''
    },
]

const suboffers: Array<{ title: string; description: string; uri: string }> = [
    {
        title: 'Analityka stron',
        description: `Geen lastige technische termen en ellenlange processen. Onze inschrijfsystemen zijn recht toe, recht aan. In onze ogen is eenvoud, no nonsense: In één oogopslag begrijpen wat het doet.`,
        uri: `#`
    },
    {
        title: 'Pozycjonowanie lokalne',
        description: `Geen lastige technische termen en ellenlange processen. Onze inschrijfsystemen zijn recht toe, recht aan. In onze ogen is eenvoud, no nonsense: In één oogopslag begrijpen wat het doet.`,
        uri: `#`
    },
    {
        title: 'Pozycjonowanie e-commerce',
        description: `Geen lastige technische termen en ellenlange processen. Onze inschrijfsystemen zijn recht toe, recht aan. In onze ogen is eenvoud, no nonsense: In één oogopslag begrijpen wat het doet.`,
        uri: `#`
    },
    {
        title: 'Pozycjonowanie zagraniczne',
        description: `Geen lastige technische termen en ellenlange processen. Onze inschrijfsystemen zijn recht toe, recht aan. In onze ogen is eenvoud, no nonsense: In één oogopslag begrijpen wat het doet.`,
        uri: `#`
    },
    {
        title: 'Portfolio',
        description: `Geen lastige technische termen en ellenlange processen. Onze inschrijfsystemen zijn recht toe, recht aan. In onze ogen is eenvoud, no nonsense: In één oogopslag begrijpen wat het doet.`,
        uri: `#`
    },
    {
        title: 'Blog',
        description: `Geen lastige technische termen en ellenlange processen. Onze inschrijfsystemen zijn recht toe, recht aan. In onze ogen is eenvoud, no nonsense: In één oogopslag begrijpen wat het doet.`,
        uri: `#`
    },
    {
        title: 'Sklepy internetowe',
        description: `Geen lastige technische termen en ellenlange processen. Onze inschrijfsystemen zijn recht toe, recht aan. In onze ogen is eenvoud, no nonsense: In één oogopslag begrijpen wat het doet.`,
        uri: `#`
    },
    {
        title: 'Utrzymanie stron',
        description: `Geen lastige technische termen en ellenlange processen. Onze inschrijfsystemen zijn recht toe, recht aan. In onze ogen is eenvoud, no nonsense: In één oogopslag begrijpen wat het doet.`,
        uri: `#`
    },
    {
        title: 'Bezpieczeństwo stron',
        description: `Geen lastige technische termen en ellenlange processen. Onze inschrijfsystemen zijn recht toe, recht aan. In onze ogen is eenvoud, no nonsense: In één oogopslag begrijpen wat het doet.`,
        uri: `#`
    },
    {
        title: 'Link building',
        description: `Geen lastige technische termen en ellenlange processen. Onze inschrijfsystemen zijn recht toe, recht aan. In onze ogen is eenvoud, no nonsense: In één oogopslag begrijpen wat het doet.`,
        uri: `#`
    }
]

export default function Services() {
    return (
        <>
            <div
                className={css.wrapper}
            >
                <figure
                    className={css.media}
                >
                    <video loop playsInline autoPlay muted src="/videos/spinning-lines-full-hd.mov" className={css.movie} />
                </figure>
                <section className={css.container} >
                    <h2 className={css.container__title} >Co mogę Tobie zaoferować?</h2>
                    <p className={css.container__description} >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dolorum nihil atque. Quis quisquam magni facilis delectus, blanditiis culpa ullam vel velit ipsa numquam modi placeat nemo, pariatur voluptate illo.
                        Tempore exercitationem suscipit pariatur, eos minus iure accusantium asperiores perspiciatis veniam molestiae nemo aut nobis odit repudiandae labore dolorum totam sapiente deleniti unde vitae impedit! At nostrum neque fuga voluptates.
                    </p>
                </section>
                <ul className={css.cards} >
                    {
                        cards.map(({ button, description, title, uri }) => {
                            return (
                                <li className={css.card} key={title} >
                                    <h3 className={css.card__title} >{title}</h3>
                                    <p className={css.card__description} >
                                        {description}
                                    </p>
                                    <Link className={css.card__button} href={uri} >
                                        {button}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <ul
                className={css.suboffers}
            >
                {
                    suboffers.map(({ description, title, uri }) => {
                        return (
                            <Link className={css.suboffer} href={uri} key={title} >
                                <h3 className={css.suboffer__title} >{title}</h3>
                                <p className={css.suboffer__description} >
                                    {description}
                                </p>
                            </Link>
                        )
                    })
                }
            </ul>
        </>
    )
}