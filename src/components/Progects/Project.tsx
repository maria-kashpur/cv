import { ProjectData } from "./db/progects";
import s from "./progects.module.scss";

interface Props {
  data: ProjectData;
  lang: "ru" | "en";
}

const CONTENT = {
  title: {
    en: "About project:",
    ru: "О проекте",
  },
  descriptionTitle: {
    en: "Technologies used:",
    ru: "Используемые технологии:",
  },
  github: {
    en: "The project on github",
    ru: "Проект на github",
  },
  deploy: {
    en: "Deploy of the project",
    ru: "Деплой проекта"
  }
};

export default function Project({data, lang}: Props) {



  return (
    <div className={s.project}>
      <div className={s.project_preview}>
        <img src={data.img} alt={data.title.en} />
      </div>
      <h4 className={s.project_title}>{data.title[lang]}</h4>
      <ul className={s.project_descriptions}>
        <li className={s.description_item}>
          <div className={s.description}>
            <span className={s.description_title}>{CONTENT.title[lang]}:</span>
            <span>{data.about[lang]}</span>
          </div>
          <div className={s.description}>
            <span className={s.description_title}>
              {CONTENT.descriptionTitle[lang]}
            </span>
            <span>{data.tools}</span>
          </div>
        </li>
      </ul>
      <div className={s.project_links}>
        <a className={s.link} href={data.github} target="_blank">
          {CONTENT.github[lang]}
        </a>
        {data.deploy ? (
          <a className={s.link} href={data.deploy} target="_blank">
            {CONTENT.deploy[lang]}{" "}
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
