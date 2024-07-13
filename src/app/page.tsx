import Image from "next/image"
import Container from "@/components/container"
import Header from "@/components/header"
import Hero from "@/components/hero"


export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}
