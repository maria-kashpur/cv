export interface ProjectData {
  title: {
    en: string;
    ru: string;
  };
  about: {
    en: string;
    ru: string;
  };
  tools: string;
  img: string;
  github: string;
  deploy: string | null;
}

import minesweeperImg from "../../../../public/projects/minesweeper.webp"

const PROJECTS: ProjectData[] = [
  {
    title: {
      en: "Minesweeper",
      ru: "Сапер",
    },
    about: {
      en: `Implementation of the classic game "Minesweeper". Statistics are displayed, configuration and game progress saving are implemented, and players can choose the game difficulty.`,
      ru: `Реализация классической игры "Сапёр". Отображается статистика, реализовано сохранение конфигурации и хода игры, возможность выбора сложности игры.`,
    },
    tools: `TypeScript, Vite, SCSS, HTML5`,
    img: minesweeperImg,
    github: "https://github.com/maria-kashpur/minesweeper",
    deploy: "https://maria-kashpur.github.io/minesweeper/",
  },
];

export default PROJECTS;