"use client";
import css from "@/nav/Navigation.module.scss";
import logo from "@/img/radweb-short-light.png";
import { Brand, Menu, MenuButton, Settings } from "@/nav/index";
import { useContext } from "react";
import { LayoutContext } from "@/context/LayoutContext";

export default function Navigation() {
  const {
    menu: { status },
  } = useContext(LayoutContext);

  return (
    <nav className={css.wrapper} data-expand={status}>
      <Brand
        logo={{
          altText: "",
          sourceSrc: logo.src,
          title: "",
        }}
        title="RadWEB"
        url="/"
      />
      <Menu
        isExpand={status}
        menu={[
          {
            title: "Start",
            url: "/",
          },
          {
            title: "O mnie",
            url: "/o-mnie",
          },
          {
            title: "Oferta",
            url: "/oferta",
            submenu: [
              {
                title: "SEO",
                url: "/oferta/seo",
              },
              {
                title: "Strony internetowe",
                url: "/oferta/strony-internetowe",
              },
              {
                title: "Web Care",
                url: "/oferta/web-care",
              },
              {
                title: "SEO lokalne",
                url: "/oferta/seo-lokalne",
              },
              {
                title: "SEO E-commerce",
                url: "/oferta/seo-e-commerce",
              },
            ],
          },
          {
            title: "Blog",
            url: "/blog",
            submenu: [
              {
                title: "Pozycjonowanie",
                url: "/blog/pozycjonowanie",
              },
              {
                title: "Programowanie",
                url: "/blog/programowanie",
              },
              {
                title: "Systemy operacyjne",
                url: "/blog/systemy-operacyjne",
              },
              {
                title: "Social media",
                url: "/blog/social-media",
              },
              {
                title: "Copywriting",
                url: "/blog/copywriting",
              },
            ],
          },
          {
            title: "Projekty",
            url: "/projekty",
          },
          {
            title: "Kontakt",
            url: "/",
          },
        ]}
      />
      <Settings>
        <MenuButton />
      </Settings>
    </nav>
  );
}
