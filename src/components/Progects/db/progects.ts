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
import virtualKeyboardImg from '../../../../public/projects/virtual-keyboard.webp'
import graphQLImg from '../../../../public/projects/graphQL.webp'
import rsCssImg from '../../../../public/projects/rs-css.webp'
import shelterImg from '../../../../public/projects/shelter.webp'
import raceImg from '../../../../public/projects/race.webp'

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
    tools: `Vite, TypeScript, SCSS, HTML5`,
    img: minesweeperImg,
    github: "https://github.com/maria-kashpur/minesweeper",
    deploy: "https://maria-kashpur.github.io/minesweeper/",
  },
  {
    title: {
      en: "Virtual keyboard",
      ru: "Виртуальная клавиатура",
    },
    about: {
      en: `The virtual keyboard allows users to enter text using either a mouse or a physical keyboard. Implemented switching layout and language, saving the language after reloading the page, and keystroke animation.`,
      ru: `Виртуальная клавиатура позволяет пользователям вводить текст как с помощью мыши, так и с физической клавиатуры. Реализованы переключение раскладки и языка, сохранение языка после перезагрузки страницы, анимация нажатия клавиш.`,
    },
    tools: `Vite, TypeScript, CSS3, HTML5`,
    img: virtualKeyboardImg,
    github: "https://github.com/maria-kashpur/virtual-keyboard",
    deploy: "https://maria-kashpur.github.io/virtual-keyboard/",
  },
  {
    title: {
      en: "Application for GraphQL queries",
      ru: "Приложение для GraphQL запросов",
    },
    about: {
      en: `The application that allows to send requests to a user-specified GraphQL endpoint. Implemented authorization with form validation on the client side, request formatting, and code highlighting, changing the theme and language. The project was completed by a team of 3 people.`,
      ru: `Приложение, позволяющее  отправлять запросы к указанной пользователем конечной точке GraphQL. Реализована авторизация с валидацией форм на стороне клиета, форматирование запросов, подсветка кода, изменение темы и языка. Проект выполнен командой из 3 человек.`,
    },
    tools: `Vite, React, TypeScript, SCSS, HTML5`,
    img: graphQLImg,
    github: "https://github.com/maria-kashpur/graphiql-app",
    deploy: "https://codehub-graphiql-app.netlify.app/",
  },
  {
    title: {
      en: "CSS Selector Trainer",
      ru: "Тренажер для изучения СSS селекторов",
    },
    about: {
      en: `The interactive trainer designed to help you learn CSS selectors. The project includes several game levels, each of which represents HTML layout and a task for writing the corresponding CSS selector.`,
      ru: `Интерактивный тренажер, созданный для изучения CSS селекторов. Проект включает в себя несколько игровых уровней, каждый из которых представляет собой вёрстку HTML и задание на написание соответствующего CSS-селектора.`,
    },
    tools: `Webpack, TypeScript, SCSS, HTML5`,
    img: rsCssImg,
    github: "https://github.com/maria-kashpur/rs-css",
    deploy: "https://maria-kashpur.github.io/rs-css/",
  },
  {
    title: {
      en: "Shelter",
      ru: "Приют",
    },
    about: {
      en: `Multi-page website for a pet shelter. Pixel perfect layout.`,
      ru: `Многостраничный сайт приюта для домашних животных. Pixel perfect верстка по макету`,
    },
    tools: `Vite, TypeScript, SCSS, HTML5`,
    img: shelterImg,
    github: "https://github.com/maria-kashpur/shelter",
    deploy: "https://maria-kashpur.github.io/shelter/index.html",
  },
  {
    title: {
      en: "Async Race",
      ru: "Асинхронная гонка",
    },
    about: {
      en: `The project is a virtual racing competition between cars..`,
      ru: `Проект представляет собой виртуальные гоночные соревнований между автомобилями.`,
    },
    tools: `Vite, TypeScript, SCSS, HTML5`,
    img: raceImg,
    github: "https://github.com/maria-kashpur/async-race",
    deploy: null,
  },
];

export default PROJECTS;