import About from "@/src/components/sections/About";
import Hero from "@/src/components/sections/Hero";
import Resume from "@/src/components/sections/Resume";
import Projects from "@/src/components/sections/Project";
import Skills from "../components/sections/Skills";
import Stats from "@/src/components/sections/Stats";


export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Resume/>
      <Projects/>
      <Skills/>
      <Stats/>
    </main>
  )
}