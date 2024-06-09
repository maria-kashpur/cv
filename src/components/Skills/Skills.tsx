import s from "./skills.module.scss";

import { useContext } from "react";
import { LangContext } from "../../providers/LangProvider";

import DoneIco from "../../assets/icons/9075822_approved_approval_done_tick_accepted_icon.svg?react";

const CONTENT = {
  title: {
    en: "Skills",
    ru: "Навыки",
  },
  skills: {
    en: [
      "HTML5, CSS3, SASS",
      "Semantic, responsive web design",
      "Pixel-perfect layout according to designs using Figma, Pixso",
      "Layout using BEM methodology",
      "JavaScript, TypeScript",
      "React",
      "NextJS",
      "Redux Toolkit",
      "Writing tests using Jest, Vitest, React Testing Library",
      "Ability to work with bundlers (Webpack, Vite), integrate ESLint, Prettier, Husky, and other tools for development automation",
      "Experience with version control system Git and GitHub platform for collaborative project work",
      "Skills in working with NodeJS, Express, NestJS, WebSocket, Docker for server-side development and application containerization",
    ],
    ru: [
      "HTML5, CSS3, SASS",
      "Семантическая, адаптивная верстка",
      "Pixel perfect верстка по макетам с использованием Figma, Pixso",
      "Верстка с использованием BEM",
      "JavaScript, TypeScript",
      "React",
      "NextJS",
      "Redux Toolkit",
      "Написание тестов с использованием Jest, Vitest, React Testing Library",
      "Умение работать со сборщиками (Webpack, Vite), подключать ESLint, Prettier, Husky и другие инструменты для автоматизации процесса разработки",
      "Опыт работы с системой контроля версий Git и платформой GitHub для совместной работы над проектами",
      "Навыки работы с NodeJS, Express, NestJS, WebSocket, Docker для разработки серверной части и контейнеризации приложений",
    ],
  },
};

export default function Skills() {
  const { lang } = useContext(LangContext);

  return (
    <section className={s.skills}>
      <h3 className={s.title}>{CONTENT.title[lang]}</h3>
      <div>
        <ul className={s.cards}>
          {CONTENT.skills[lang].map((el, i) => (
            <li key={i}>
              <DoneIco height={25} />
              <span>{el}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
