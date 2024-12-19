"use client";
import css from "@/nav/Settings/Languages/Languages.module.scss";
import { Globe } from "@/ico/index";
import { useState } from "react";
import {
  tLanguage,
  tLanguages,
} from "@/nav/Settings/Languages/Languages.models";
import Link from "next/link";

export default function Languages(props: tLanguages) {
  const [languageStatus, updateLanguageStatus] = useState<null | tLanguage>(
    null
  );

  const [expandStatus, toggleExpandStatus] = useState<boolean>(false);

  const handleLanguageClick = (item: tLanguage) => {
    updateLanguageStatus(item);
    toggleExpandStatus(false);
  };

  return (
    <div className={css.wrapper} onMouseLeave={() => toggleExpandStatus(false)}>
      <button
        onClick={() => toggleExpandStatus(!expandStatus)}
        className={css.button}
      >
        {languageStatus && (
          <span className={css.status}>{languageStatus.flag}</span>
        )}
        <Globe className={css.globe} />
      </button>
      {expandStatus && (
        <ul className={css.languages}>
          {props.languages.map((item) => {
            return (
              <Link
                onClick={() => handleLanguageClick(item)}
                href={item.url}
                key={item.id}
                hrefLang={item.hrefLang}
                title={item.title}
                className={css.language}
              >
                {item.flag}
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
}
