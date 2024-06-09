import s from "./selectLang.module.scss";

import { useContext, useEffect, useRef, useState } from "react";
import { LangContext, LangContextType } from "../../providers/LangProvider";

import arrow from "./../../assets/icons/211687_down_arrow_icon.svg";
import ru from "./../../assets/icons/ru.png";
import en from "./../../assets/icons/en.png";
import Arrow from "../icons/Arrow/Arrow";

const data: { [key: string]: { value: LangContextType, ico: string } } = {
  ru: {
    value: "ru",
    ico: ru,
  },
  en: {
    value: "en",
    ico: en,
  },
};

export default function SelectLang() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { lang, setLang } = useContext(LangContext);
  const langRef = useRef<HTMLDivElement>(null);

  const LangItem = Object.values(data).map((el) => (
    <li
      className={s.langItem}
      key={el.value}
      onClick={() => {
        if (!setLang) return;
        setLang(() => el.value);
        setIsLangOpen(false);
        localStorage.setItem("lang", el.value);
      }}>
      <p className={`${s.langName} ${lang === el.value ? s.current : ""}`}>
        {el.value}
      </p>
      <img src={el.ico} alt={`${el.value} language`} className={s.langFlag} />
    </li>
  ));

  const handleClickOutside = (event: MouseEvent) => {
    if (
      langRef.current &&
      event.target instanceof Node &&
      !langRef.current.contains(event.target)
    ) {
      setIsLangOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className={s.lang} ref={langRef}>
      <div className={s.value} onClick={() => setIsLangOpen(!isLangOpen)}>
        <span className={s.flag}>{data[lang].value}</span>
        <span className={`${s.arrow} ${isLangOpen ? s.active : ""}`}>
         <Arrow height={10} width={10} color="var(--color)"/>
        </span>
      </div>

      {isLangOpen && <ul className={s.langList}>{LangItem}</ul>}
    </div>
  );
}
