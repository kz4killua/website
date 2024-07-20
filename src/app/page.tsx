import Image from "next/image"
import Container from "@/components/container"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Reviews from "@/components/reviews"


export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <div className="space-y-24 mb-24">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Reviews />
        </div>
      </main>
    </div>
  )
}
