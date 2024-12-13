import css from "@/footer/Footer.module.scss";
import { Author, Details, Menu, Policies, Socials } from "@/footer/index";

export default function Footer() {
  return (
    <div className={css.wrapper}>
      <footer className={css.footer}>
        <Socials
          socials={[
            {
              title: "",
              url: "facebook",
            },
            {
              title: "",
              url: "instagram",
            },
            {
              title: "",
              url: "x.com",
            },
            {
              title: "",
              url: "linkedin",
            },
            {
              title: "",
              url: "threads",
            },
            {
              title: "",
              url: "youtube",
            },
            {
              title: "",
              url: "medium",
            },
            {
              title: "",
              url: "spotify",
            },
          ]}
        />
        <Menu
          menus={[
            {
              label: `Eksploruj`,
              menu: [
                {
                  title: `Start`,
                  url: `/`,
                },
                {
                  title: `O mnie`,
                  url: `/o-mnie`,
                },
                {
                  title: `Blog`,
                  url: `/blog`,
                },
                {
                  title: `Projekty`,
                  url: `/projekty`,
                },
                {
                  title: `Słownik`,
                  url: `/slownik`,
                },
                {
                  title: `Kontakt`,
                  url: `/kontakt`,
                },
              ],
            },
            {
              label: `Oferta`,
              menu: [
                {
                  title: `SEO`,
                  url: `/usługi/seo`,
                },
                {
                  title: `Strony internetowe`,
                  url: `/uslugi/strony-internetowe`,
                },
                {
                  title: `Web Care`,
                  url: `/uslugi/web-care`,
                },
              ],
            },
            {
              label: `Wiedza`,
              menu: [
                {
                  title: `Pozycjonowanie`,
                  url: `/blog/pozycjonowanie`,
                },
                {
                  title: `Programowanie`,
                  url: `/blog/programowanie`,
                },
                {
                  title: `Social media`,
                  url: `/blog/social-media`,
                },
                {
                  title: `Systemy operacyjne`,
                  url: `/blog/systemy-operacyjne`,
                },
                {
                  title: `Copywriting`,
                  url: `/blog/copywriting`,
                },
                {
                  title: `PPC`,
                  url: `/blog/ppc`,
                },
              ],
            },
            {
              label: `Znajdź mnie`,
              menu: [
                {
                  title: `Warszawa`,
                  url: `/warszawa`,
                },
                {
                  title: `Kraków`,
                  url: `/krakow`,
                },
                {
                  title: `Łódź`,
                  url: `/lodz`,
                },
                {
                  title: `Wrocław`,
                  url: `/wroclaw`,
                },
                {
                  title: `Poznań`,
                  url: `/poznan`,
                },
                {
                  title: `Gdańsk`,
                  url: `/gdansk`,
                },
                {
                  title: `Szczecin`,
                  url: `/szczecin`,
                },
              ],
            },
          ]}
        />
        <Details
          address={{
            location: "Donatowo 53",
            zipCode: "64-020 Czempiń",
          }}
          brand="RadWEB"
          contact={[
            {
              variant: "e-mail",
              label: "r.adamczyk@rad-web.pl",
              title: "📨 Napisz do mnie: r.adamczyk@rad-web.pl",
              url: "mailto:r.adamczyk@rad-web.pl",
            },
            {
              variant: "phone",
              label: "+48 794-1ń00-413",
              title: "☎️ Zadzwoń do mnie: +48 794-100-413",
              url: "tel:+48794100413",
            },
          ]}
          nip="123123123123141234"
          regon="100834030889199"
        />
        <span className={css.line} />
        <Policies
          policies={[
            {
              title: `Polityka prywatności`,
              url: `/polityka-prywatnosci`,
            },
            {
              title: `Polityka cookies`,
              url: `/polityka-cookies`,
            },
            {
              title: `Zgody`,
              url: `/zgody`,
            },
          ]}
        />
        <Author
          author="RadWEB - Radosław Adamczyk"
          year={{
            end: new Date().getFullYear(),
            start: 2021,
          }}
        />
      </footer>
    </div>
  );
}
