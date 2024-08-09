import { useContext } from "react";
import { Outlet } from "react-router-dom";
import React from "react";

import { LangContext } from "../../../../providers/LangProvider";
import Projects from "../../../Progects/Projects";

const CONTENT = {
  title: {
    ru: "Проекты",
    en: "Projects",
  },
};

const ProjectsPage = () => {
  const { lang } = useContext(LangContext);

  return (
    <div className="conteiner">
      <h2 className="title">{CONTENT.title[lang]}</h2>
      <div className="projectPage">
        <Projects></Projects>
        <Outlet />
      </div>
    </div>
  );
}

export default ProjectsPage;