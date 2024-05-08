import { useInView } from "react-intersection-observer";
import Project from "./Project";
import PROJECTS from "./db/progects";
import s from "./progects.module.scss";
import { useEffect } from "react";
import { links } from "../Header/Header";

const content = {
  title: {
    en: "Progects",
    ru: "Проекты"
  },
};

export default function Projects() {
  return (
    <section
      className={s.projects}
      id={links.projects.id}>
      <h3 className={s.projects_title}>{content.title.ru}</h3>
      <div className={s.list}>
        {PROJECTS.map((el, i) => (
          <Project data={el} lang={"ru"} key={i} />
        ))}
      </div>
    </section>
  );
}