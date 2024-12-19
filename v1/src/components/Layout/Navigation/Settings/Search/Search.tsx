"use client";
import css from "@/nav/Settings/Search/Search.module.scss";
import { Search as Icon } from "@/ico/index";
import { tSearch } from "@/nav/Settings/Search/Search.models";

export default function Search(props: tSearch) {
  return (
    <form
      className={css.wrapper}
      // action=""
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className={css.field}
        placeholder={props.placeholder}
        inputMode="search"
        type="search"
        {...props.field}
      />
      <button
        aria-label={props.label}
        className={css.button}
        type="submit"
        {...props.button}
      >
        <Icon className={css.peel} />
      </button>
    </form>
  );
}
