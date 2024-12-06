import s from "./projects.module.scss";

import projectsData from "../../data/projectsData";

import { NavLink, useParams } from "react-router-dom";
import { useContext } from "react";
import { LangContext } from "../../providers/LangProvider";

function Projects() {
  const { lang } = useContext(LangContext);
  const { id } = useParams();
  return (
    <ul className={`${s.list} ${id === undefined ? s.full : s.mini}`}>
      {projectsData.map((el, i) => (
        <NavLink
          to={`/projects/${el.id}`}
          key={i}
          className={({ isActive }) => `${s.card} ${isActive ? s.active : ""}`}>
          <img src={el.img} alt="project" className={s.card__image} />
          <span className={s.card__title}>{el.title[lang]}</span>
        </NavLink>
      ))}
    </ul>
  );
}

export default Projects;
