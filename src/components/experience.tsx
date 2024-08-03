import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";
import { SectionHeading, SectionSubheading } from "./typography";


const experience = [
  {
    image: "/images/sain.png",
    company: "Security AI Networks Lab, Ontario Tech University",
    role: "Undergraduate Machine Learning Researcher",
    date: "January 2024 - Present",
    description: "Developing novel approaches to enhance positional awareness in graph neural networks."
  },
  {
    image: "/images/civil7.png",
    company: "Civil Seven B.V.",
    role: "Software Engineer",
    date: "August 2023 - Present",
    description: "Using Python and C# to automate model design for tunnel construction."
  },
  {
    image: "/images/spreye.png",
    company: "Spreye AI",
    role: "Software Engineer",
    date: "June 2023 - April 2024",
    description: "Developed a full-stack AI powered web application to assist project managers with their day-to-day tasks."
  },
  {
    image: "/images/soundwav.png",
    company: "Soundwav.io",
    role: "Software Engineer",
    date: "January 2023 - September 2023",
    description: "Led the development of a web application that offers a robust platform for organizing, saving and sharing digital content."
  },
  {
    image: "/images/dowell.png",
    company: "DoWell Research",
    role: "Software Engineer",
    date: "August 2022 - October 2022",
    description: "Worked on a team to develop a web application that automates social media posts."
  },
]


export default function Experience() {
  return (
    <Container>
      <SectionHeading>Experience</SectionHeading>
      <SectionSubheading>My journey so far</SectionSubheading>
      <div className="space-y-10 mt-7 md:text-lg">
        {experience.map((item, index) => (
          <ExperienceItem 
            key={index}
            image={item.image}
            company={item.company}
            role={item.role}
            date={item.date}
            description={item.description}
          />
        ))}
      </div>
    </Container>
  )
}


function ExperienceItem({ image, company, role, date, description } : {
  image: string,
  company: string,
  role: string,
  date: string,
  description: string
}) {
  return (
    <div className="flex gap-x-5">
      <Image 
        src={image}
        alt={company}
        width={50}
        height={50}
        className="rounded-full border size-10 md:size-14"
      />
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-y-1 mb-1 md:items-center justify-between">
          <h3 className="font-semibold text-foreground">{company}</h3>
          <p className="text-muted text-sm md:text-base">{date}</p>
        </div>
        <p className="text-muted text-sm md:text-base">{role}</p>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  )
}