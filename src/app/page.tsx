import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TechnologyWall from "@/components/TechnologyWall";
import Achievements from "@/components/Achievements";
import Sonar from "@/components/Sonar";
import Contact from "@/components/Contact";
import Cursor from "@/components/ui/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <Hero />
      <Philosophy />
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="services">
        <Skills />
      </div>
      <div id="work">
        <Projects />
      </div>
      <TechnologyWall />
      <Achievements />
      <div id="solutions">
        <Sonar />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
