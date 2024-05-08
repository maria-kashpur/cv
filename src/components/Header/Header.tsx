import "./header.scss";
import printIco from "./../../assets/icons/print.svg";
import SelectLang from "./SelectLang/SelectLang";
import { LangContext } from "../../providers/LangProvider";
import { useContext, useLayoutEffect, useState } from "react";

export const links = {
  contacts: {
    title: {
      ru: "Контакты",
      en: "Contacts",
    },
    id: "contacts",
  },
  about: {
    title: {
      ru: "Обо мне",
      en: "About me",
    },
    id: "about",
  },
  skills: {
    title: {
      ru: "Навыки",
      en: "Skills",
    },
    id: "skills",
  },
  aducation: {
    title: {
      ru: "Образование и опыт",
      en: "Aducation",
    },
    id: "aducation",
  },

  projects: {
    title: {
      ru: "Проекты",
      en: "Progects",
    },
    id: "projects",
  },
};

export default function Header() {
  const { lang } = useContext(LangContext);
  const [fixHeader, setFixHeader] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [burgerActive, setBurgerActive] = useState(false)

  const scrollBySection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return;
    window.scroll({
      top: el.offsetTop - 80,
      left: 0,
      behavior: "smooth",
    });
  }

  useLayoutEffect(() => {
    const scroll = () => {
      const top = window.scrollY;
      if (!fixHeader && !!top) setFixHeader(true);
      if (fixHeader && !top) setFixHeader(false);
    };
    window.addEventListener("scroll", scroll);
    return () => removeEventListener("scroll", scroll);
  });

  useLayoutEffect(() => {
    const changeAncore = () => {
      const { hash } = location;
      setActiveLink(hash)
      
    }
    window.addEventListener("hashchange", changeAncore)
    return () => removeEventListener("scroll", changeAncore);
  })

  return (
    <header className={`header_wrap ${fixHeader ? "scroll" : ""}`}>
      <div className="conteiner">
        <div className="header">
          <nav className={`nav_wrap ${burgerActive ? "active" : ""}`}>
            <ul className="nav">
              {Object.values(links).map((link, i) => (
                <li key={i}>
                  <button
                    className={`nav__link ${
                      activeLink === `#${link.id}` ? "active" : ""
                    }`}
                    onClick={() => scrollBySection(link.id)}>
                    {link.title[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="settings">
            <SelectLang />
            <div className="print_ico">
              <img src={printIco} alt="print" height="30" />
            </div>
            <div
              className={`burger ${burgerActive ? "active" : ""}`}
              onClick={() => setBurgerActive((prev) => !prev)}></div>
          </div>
        </div>
      </div>
    </header>
  );
}
