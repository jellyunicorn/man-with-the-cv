import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <div className="bg-[#130e1c] text-white">
      <div>
        <Hero />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Experience />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
