import Welcome from "../../../Welcome/Welcome";
import About from "../../../About/About";
import Skills from "../../../Skills/Skills";
import WorkExperience from "../../../WorkExperience/WorkExperience";

export default function Main() {
  return (
    <>
      <Welcome />
      <div className="conteiner">
        <About />
      </div>
      <div className="conteiner">
        <Skills />
      </div>
      <div className="conteiner">
        <WorkExperience />
      </div>
    </>
  );
}
