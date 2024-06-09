import s from "./welcome.module.scss";

import  { useContext } from 'react'
import { LangContext } from '../../providers/LangProvider';


const content = {
  welcomeText: {
    ru: "Привет, меня зовут ",
    en: "Hi, my name is ",
  },
  name: {
    ru: "Мария",
    en: "Mariya",
  },
  prof: {
    ru: "frontend разработчик",
    en: "a frontend developer",
  },
  slogan: {
    ru: "со страстью к обучению и творчеству.",
    en: "with passion for learning and creating.",
  },
  download: {
    ru: "Скачать CV",
    en: "Download CV",
  },
};

export default function Welcome() {
  const { lang } = useContext(LangContext);
  return (
    <section className={s.welcome}>
      <div className={s.welcome_wrap}>
        <h2 className={s.welcome__title}>
          {content.welcomeText[lang]}
          <span className={s.welcome__name}>{content.name[lang]}</span>
        </h2>
        <h3 className={s.welcome__prof}>{content.prof[lang]}</h3>
        <p className={s.welcome__slogan}>{content.slogan[lang]}</p>
        <a href="./cv/cv(ru).pdf" className={s.btn} download={true}>
          {content.download[lang]}
        </a>
      </div>
    </section>
  );
}
