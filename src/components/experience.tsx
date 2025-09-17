import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";
import { SectionHeading, SectionSubheading } from "./typography";


const experience = [
  {
    image: "/images/civil7.png",
    company: "Civil Seven B.V.",
    role: "Software Engineer (Contract)",
    date: "August 2023 - Present",
    description: "Writing code to automate model design for tunnel construction"
  },
  {
    image: "/images/self-employed.png",
    company: "Self-Employed",
    role: "Software Engineer (Freelance)",
    date: "Jan 2023 - Present",
    description: "Developing and maintaining several web and desktop applications for individuals and businesses using modern technologies"
  },
  {
    image: "/images/sain.png",
    company: "Security AI Networks Lab, Ontario Tech University",
    role: "Undergraduate Machine Learning Researcher",
    date: "May 2024 - August 2024",
    description: "Worked on novel approaches to improve the performance of graph neural networks"
  },
]


export default function Experience() {
  return (
    <section id="experience" className="pt-24 pb-6">
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
    </section>
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