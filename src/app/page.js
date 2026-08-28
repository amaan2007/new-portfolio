import AboutMe from "@/components/Home/About_me";
import Herosection from "@/components/Home/Herosection";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";


export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Herosection />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}