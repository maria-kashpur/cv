import { useLayoutEffect } from "react";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
import Header, { links } from "../Header/Header";
import Projects from "../Progects/Progects";
import Skills from "../Skills/Skills";
import WorkExperience from "../WorkExperience/WorkExperience";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  useLayoutEffect(() => {
    console.log(entry);
    // if (inView) {
    //   // document.location.hash = `#${links.skills.id}`;
    // }
  }, [entry]);
  
  return (
    

    <>
      <Header />
      <main className="conteiner" ref={ref}>
        <Contacts />
        <About />
        <Skills />
        <WorkExperience />
        <Projects />
      </main>
      <Footer/>
    </>
  );
}

export default App;
