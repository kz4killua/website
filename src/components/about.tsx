import clsx from "clsx";
import Link from "next/link";
import Container from "@/components/container";
import { SectionHeading, SectionSubheading } from "./typography";



export default function About() {
  return (
    <Container>
      <SectionHeading>About Me</SectionHeading>
      <SectionSubheading>Introducing me, myself, and I</SectionSubheading>
      <div className="mt-7 text-lg text-gray-600 flex flex-col gap-y-2">
        <p>
          👋 Hey there! My name is Ifeanyi (pronounced ee-fan-yee) and I'm a 
          student at Ontario Tech University, studying Computer Science.           
        </p>
        <p>
          👨‍💻 I'm a big fan of technology and programming and I'm always looking for ways to apply what I've learned. 
          I'm interested in lots of stuff, but I'm currently exploring web development and machine learning.
        </p>
        <p>
          💼 Sometimes, I do freelance software engineering on Upwork. I am currently 
          a Top Rated freelancer with a 100% job success score (and a 5-star rating!). 
          Check out my profile and reviews 
          <Link 
            href="https://www.upwork.com/freelancers/~012fb0252a88cecd37"
            className="ml-1 text-blue-500 hover:text-blue-700 underline"
            target="_blank"
          >
            here
          </Link>.
        </p>
        <p>
          🚀 I like to do hackathons! 
        </p>
        <p>
          😄 I'm also an eighth grade spelling bee champion, so you know I'm good with words. 
        </p>
      </div>
    </Container>
  )
}