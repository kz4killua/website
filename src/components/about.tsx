import clsx from "clsx";
import Link from "next/link";
import Container from "@/components/container";
import { SectionHeading, SectionSubheading } from "./typography";



export default function About() {
  return (
    <section id="about" className="pt-24 pb-6">
      <Container>
        <SectionHeading>About Me</SectionHeading>
        <SectionSubheading>Introducing me, myself, and I</SectionSubheading>
        <div className="mt-7 md:text-lg flex flex-col gap-y-2">
          <p>
            <span className="inline-block animate-wave">👋</span> Hey there! 
            My name is Ifeanyi (pronounced ee-fan-yee) and I&apos;m a 
            student at Ontario Tech University, studying Computer Science.           
          </p>
          <p>
            👨‍💻 I&apos;m interested in lots of stuff, but I&apos;m currently exploring web development and machine learning. 
            Check out my GitHub profile 
            <Link 
              href="https://github.com/kz4killua"
              className="ml-1 text-secondary hover:text-primary font-semibold hover:underline underline-offset-4"
              target="_blank"
            >
              here
            </Link>.
          </p>
          <p>
            💼 I do freelance software engineering on Upwork. I am currently 
            a Top Rated freelancer with a 100% job success score (and a 5-star rating!). 
            Check out my profile and reviews 
            <Link 
              href="https://www.upwork.com/freelancers/~012fb0252a88cecd37"
              className="ml-1 text-secondary hover:text-primary font-semibold hover:underline underline-offset-4"
              target="_blank"
            >
              here
            </Link>.
          </p>
          <p>
            🚀 I&apos;m a big fan of hackathons, and I have participated in 
            (and won) quite a few.
          </p>
        </div>
      </Container>
    </section>
  )
}