import s from "./project.module.scss"
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { PROJECTS_MAP, ProjectData } from '../../data/projectsData';
import CloseIco from "../../assets/icons/9104213_close_cross_remove_delete_icon.svg?react"
import { LangContext } from "../../providers/LangProvider";

const CONTENT = {
  title: {
    en: "About project: ",
    ru: "О проекте: ",
  },
  descriptionTitle: {
    en: "Technologies used: ",
    ru: "Используемые технологии: ",
  },
  github: {
    en: "The project on github",
    ru: "Проект на github",
  },
  deploy: {
    en: "Deploy of the project",
    ru: "Деплой проекта",
  },
  project: {
    en: "Project",
    ru: "Проект",
  },
};

export default function Project() {
  const { id } = useParams();
  const [data, setData] = useState<null | ProjectData>(null);
  const navigate = useNavigate();
  const { lang } = useContext(LangContext);

  useEffect(() => {
    if (PROJECTS_MAP.has(id)) {
      setData(PROJECTS_MAP.get(id))
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  
  return (
    <div className={s.project}>
      <button
        className={s.close}
        onClick={() => navigate("/projects")}>
        <CloseIco />
      </button>
      <h4 className={s.project_title}>{CONTENT.project[lang]} "{data?.title[lang]}"</h4>
      <div className={s.project_preview}>
        <img src={data?.img} alt={data?.title.en} />
      </div>
      <div className={s.description}>
        <span className={s.description_title}>{CONTENT.title[lang]}</span>
        <span>{data?.about[lang]}</span>
      </div>
      <div className={s.description}>
        <span className={s.description_title}>
          {CONTENT.descriptionTitle[lang]}
        </span>
        <span>{data?.tools}</span>
      </div>
      <div className={s.project_links}>
        <a className={s.link} href={data?.github} target="_blank">
          {CONTENT.github[lang]}
        </a>
        {data?.deploy ? (
          <a className={s.link} href={data?.deploy} target="_blank">
            {CONTENT.deploy[lang]}{" "}
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
