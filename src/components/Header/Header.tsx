import s from "./header.module.scss";

import { LangContext } from "../../providers/LangProvider";
import { useContext, useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import SelectLang from "./../SelectLang/SelectLang";
import BtnDarkMode from "../BtnDarkMode/BtnDarkMode";

export const links = [
  {
    title: {
      ru: "Главная",
      en: "Main",
    },
    to: "/",
  },
  {
    title: {
      ru: "Проекты",
      en: "Progects",
    },
    to: "/projects",
  },
  {
    title: {
      ru: "Контакты",
      en: "Contacts",
    },
    to: "/contacts",
  },
];


export default function Header() {
  const { lang } = useContext(LangContext);
  const [fixHeader, setFixHeader] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false)

  useLayoutEffect(() => {
    const scroll = () => {
      const top = window.scrollY;
      if (!fixHeader && !!top) setFixHeader(true);
      if (fixHeader && !top) setFixHeader(false);
    };
    window.addEventListener("scroll", scroll);
    return () => removeEventListener("scroll", scroll);
  });

  return (
    <header className={`${s.header_wrap} ${fixHeader ? s.scroll : ""}`}>
      <div className="conteiner">
        <div className={s.header}>
          <nav className={`${s.nav_wrap} ${burgerActive ? s.active : ""}`}>
            <ul className={s.nav}>
              {Object.values(links).map((link, i) => (
                <li key={i}>
                  <NavLink to={link.to} className={s.nav__link}>
                    {link.title[lang]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={s.settings}>
            <SelectLang />
            <BtnDarkMode />
            <div
              className={`${s.burger} ${burgerActive ? s.active : ""}`}
              onClick={() => setBurgerActive((prev) => !prev)}></div>
          </div>
        </div>
      </div>
    </header>
  );
}
