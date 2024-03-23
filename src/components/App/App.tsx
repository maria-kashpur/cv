import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Header from "../Header/Header";
import Projects from "../Progects/Progects";
import Skills from "../Skills/Skills";
import WorkExperience from "../WorkExperience/WorkExperience";

function App() {
  return (
    <>
      <Header />
      <main className="conteiner">
        <Contacts />
        <About />
        <Skills />
        <WorkExperience />
        <Projects />
      </main>
    </>
  );
}

export default App;
