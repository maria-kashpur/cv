import Project from "./Project";
import PROJECTS from "./db/progects";
import s from "./progects.module.scss";

export default function Projects() {
  return (
    <section className="col2">
      <h3>Progects</h3>
      <div className={s.list}>
        {PROJECTS.map((el, i) => (
          <Project data={el} lang={"ru"} key={i}/>
        ))}
      </div>
    </section>
  );
}