import clsx from "clsx";
import Link from "next/link";
import Container from "@/components/container";
import { SectionHeading, SectionSubheading } from "./typography";



export default function About() {
  return (
    <Container>
      <SectionHeading>About Me</SectionHeading>
      <SectionSubheading>Introducing me, myself, and I</SectionSubheading>
      <div className="mt-7 md:text-lg text-gray-600 flex flex-col gap-y-2">
        <p>
          👋 Hey there! My name is Ifeanyi (pronounced ee-fan-yee) and I&apos;m a 
          student at Ontario Tech University, studying Computer Science.           
        </p>
        <p>
          👨‍💻 I&apos;m interested in lots of stuff, but I&apos;m currently exploring web development and machine learning.
        </p>
        <p>
          💼 I do freelance software engineering on Upwork. I am currently 
          a Top Rated freelancer with a 100% job success score (and a 5-star rating!). 
          Check out my profile and reviews 
          <Link 
            href="https://www.upwork.com/freelancers/~012fb0252a88cecd37"
            className="ml-1 text-blue-500 hover:text-blue-700 underline underline-offset-4"
            target="_blank"
          >
            here
          </Link>.
        </p>
        <p>
          🚀 I&apos;m a big fan of hackathons, and I have participated in 
          (and won) a few.
        </p>
      </div>
    </Container>
  )
}