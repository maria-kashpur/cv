import s from "./about.module.scss";

import { useContext } from "react";
import { LangContext } from "../../providers/LangProvider";

import photo from "./../../assets/img/photo.jpg";

const content = {
  title: {
    ru: "Обо мне",
    en: "About me",
  },
  content: {
    ru: [
      "Амбициозный начинающий frontend разработчик. Наслаждаюсь возможностью воплотить свои идеи в работающее приложение и видеть результат своего труда.",
      "Обучалась в The Rolling Scopes School, где посвятила более года изучению фронтенд-разработки, а также немного погрузилась в серверную разработку на NodeJS. Этот опыт был для меня не только уникальным обучающим процессом, но и возможностью погрузиться в профессиональную среду и командную работу.",
      "Всегда открыта к новым вызовам и знаниям.",
    ],
    en: [
      "I'm a junoir frontend developer. I enjoy the opportunity to translate my ideas into a working application and see the result of my work.",
      "I studied at The Rolling Scopes School, where I dedicated over a year to learning frontend development and also delved into server-side development with NodeJS. This experience was not only a unique learning process for me, but also an opportunity to immerse myself in a professional environment and teamwork.",
      "I am always open to new challenges and knowledge.",
    ],
  },
};

export default function About() {
  const { lang } = useContext(LangContext);

  return (
    <section className={s.about}>
      <h3 className={s.title}>{content.title[lang]}</h3>

      <div className={s.content}>
        <div className={s.image}>
          <div className={s.photo}>
            <img src={photo} alt="photo" width={150} />
          </div>
        </div>

        <div className={s.text}>
          {content.content[lang].map((el, i) => (
            <p key={i}>{el}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
