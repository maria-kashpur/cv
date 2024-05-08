import { links } from "../Header/Header";
import s from "./experience.module.scss";

const content = {
  title: {
    ru: "Образование и практический опыт",
    en: "Education and work experience",
  },
};

const workExperienceData = [
  {
    title: "Высшее юридическое образование",
    institution: "Белорусский государственный экономический университет",
    date: "2011 - 2016",
    sertificate: null,
    about: null,
  },
  {
    title: "JavaScript/Front-end",
    institution: "The Rolling Scopes School",
    date: "декабрь 2022 - август 2023",
    sertificate: "https://app.rs.school/certificate/r67mh5a9",
    about: (
      <div>
        ✓ Написание приложений на чистом JS без использования фреймворков.
        <br />
        ✓ Работа над рядом индивидуальных проектов (виртуальная клавиатура, игра
        "Сапер", приложение для изучения CSS селекторов, новостной портал).
        <br />✓ Опыт работы в команде (интернет-магазин как SPA приложение на
        ванильном JS).
      </div>
    ),
  },
  {
    title: "React",
    institution: "The Rolling Scopes School",
    date: "октябрь 2023 - декабрь 2023",
    sertificate: "https://app.rs.school/certificate/xe2xa0my",
    about: (
      <div>
        ✓ Изучение React, тестирование React-приложений, знакомство с
        возможностями Next.
        <br />
        ✓ Работа над рядом индивидуальных проектов.
        <br />✓ Опыт работы в команде (приложение для запросов через GraphQL с
        авторизацией через firebase).
      </div>
    ),
  },
  {
    title: "NodeJS",
    institution: "The Rolling Scopes School",
    date: "январь 2024 - апрель 2024",
    sertificate: "",
    about: (
      <div>
        ✓ Изучение Node.js и Nest.js.
        <br />✓ Работа над рядом индивидуальных проектов (файловый менеджер,
        сервер для игры "Морской бой", используя технологию веб-сокетов,
        создание API без использования фреймворков, а также создание API с
        использованием Nest.js с подключением к базе данных PostgreSQL с помощью
        TypeORM и Docker).
      </div>
    ),
  },
];

export default function WorkExperience() {
  return (
    <section className={s.experience} id={links.aducation.id}>
      <h3 className={s.title}>{content.title.ru}</h3>
      <ul className={s.experience_list}>
        {workExperienceData.map((data) => (
          <li className={s.experience_item}>
            <div>
              <div className={s.institution}>{data.institution}</div>
              <div className={s.experience_title}>{data.title}</div>
            </div>
            <div className={s.date}>{data.date}</div>
            <div className={s.about}>
              <p>{data.about}</p>
              {data.sertificate ? (
                <a
                  href={data.sertificate}
                  target="_blank"
                  className={s.sertificate}>
                  посмотреть сертификат
                </a>
              ) : (
                ""
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
