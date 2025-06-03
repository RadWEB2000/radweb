import css from "@/views/home-view/about/about.module.scss";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight as Arrow } from "react-icons/go";

export default function About() {
    return (
        <>
            <section className={css.container}>
                <div>
                    <strong className={css.slogan} >O mnie</strong>
                    <h2 className={css.title}>Empower youre <span className={css.special} >business</span><br />Financal Future Ettorlessy</h2>
                    <Link className={css.button} href="#" hrefLang="pl_PL" >
                        <Arrow />
                    </Link>
                </div>
                <p className={css.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo et maxime beatae sapiente aut offi Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam itaque aliquam expedita quisquam impedit excepturi quis hic. Facilis, incidunt excepturi. Quod excepturi nesciunt molestiae velit debitis. Tenetur quisquam maxime error.
                    Repellendus, id. Deleniti expedita, reiciendis eum atque at repellat sunt totam, architecto facere soluta ratione cumque ut molestiae delectus ad! Unde nesciunt dolore eos amet velit quidem quis blanditiis non.
                    Dolorum numquam impedit beatae aut laboriosam architecto ad deserunt voluptates veritatis, reiciendis quidem. Illum minima, totam reiciendis sequi exercitationem incidunt expedita? Harum minima delectus, sequi facilis sit libero mollitia obcaecati!
                    Ratione a corrupti, architecto animi quasi omnis alias libero laborum aliquid, repellat doloribus modi pariatur beatae eveniet quidem</p>
            </section>

        </>
    )
}