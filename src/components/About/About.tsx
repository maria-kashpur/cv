import { useEffect, useLayoutEffect } from "react";
import s from "./about.module.scss";
import { useInView } from "react-intersection-observer";
import { links } from "../Header/Header";

export default function About() {
  return (
    <section className="about" id={links.about.id}>
      <h3 className={s.title}>Обо мне</h3>
      <div className={s.content}>
        <div className={s.image}>
          <img src="./programmer-8689665_1280.png" alt="programmer" />
        </div>

        <div className={s.text}>
          <p>
            Амбициозный начитающий frontend разработчик, в прошлом - юрист,
            страдающий от бумажной работы и бюрократических процедур. Мое
            истинное призвание всегда заключалось в создании чего-то нового и
            вдохновляющего. Этот аспект программирования привлёк меня сильнее
            всего - возможность воплотить свои идеи в работающее приложение и
            видеть результат своего труда.
          </p>
          <p>
            Обучалась в The Rolling Scopes School, где посвятила более года
            изучению фронтенд-разработки, а также немного погрузилась в
            серверную разработку на NodeJS. Этот опыт был для меня не только
            уникальным обучающим процессом, но и возможностью погрузиться в
            профессиональную среду и командную работу.
          </p>
          <p>
            Всегда открыта к новым вызовам и знаниям. В будущем вижу себя
            full-stuck разработчиком.
          </p>
        </div>
      </div>
    </section>
  );
}
