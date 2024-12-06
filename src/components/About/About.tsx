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
      "Своим главным инструментом во frontend разработке я считаю React, стараясь наиболее полно погружаться в эту технологию. Однако, не в моей привычке оставаться на достигнутом, поэтому в свободное время я активно расширяю свой кругозор в мире программирования.",
    ],
    en: [
      "I'm a junoir frontend developer. I enjoy the opportunity to translate my ideas into a working application and see the result of my work.",
      "My main focus in frontend development is React, and I strive to immerse myself fully in this technology. However, I am not accustomed to resting on my laurels, so in my free time, I actively broaden my horizons in the world of programming.",
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
