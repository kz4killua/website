import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import Marquee from "@/components/magicui/marquee";
import { SectionHeading, SectionSubheading } from "./typography";


const skills = {
  "languages": [
    {
      name: "Python", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    },
    {
      name: "JavaScript", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    {
      name: "TypeScript", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    },
    {
      name: "C", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
    },
    {
      name: "C#", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
    },
    {
      name: "C++", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
    },
    {
      name: "HTML", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    },
    {
      name: "CSS", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
    },
    {
      name: "SQL", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
    },
  ],
  "frameworks": [
    {
      name: "React", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
      name: "Next.js", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
    },
    {
      name: "Flask", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
    },
    {
      name: "Django", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
    },
    {
      name: "Tailwind CSS", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
      name: "Bootstrap", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
    },
    {
      name: "TensorFlow", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
    },
    {
      name: "PyTorch", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
    },
    {
      name: "Keras", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg"
    },
    {
      name: "Pandas", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
    },
    {
      name: "NumPy", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
    },
    {
      name: "Matplotlib", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg"
    },
    {
      name: "Scikit-learn", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
    },
  ],
  "tools": [
    {
      name: "Git", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    },
    {
      name: "GitHub", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
    },
    {
      name: "Docker", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    },
    {
      name: "Digital Ocean", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg"
    },
    {
      name: "Linux", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
    },
    {
      name: "Redis", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
    },
    {
      name: "Postman", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
    },
    {
      name: "AWS", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    },
    {
      name: "Azure", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
    },
    {
      name: "Google Cloud Platform", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
    },
    {
      name: "Vercel", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
    },
    {
      name: "SQLite", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
    },
    {
      name: "PostgreSQL", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
    },
  ],
}


export default function Skills() {
  return (
    <Container>
      <SectionHeading>Skills</SectionHeading>
      <SectionSubheading>Tools I use</SectionSubheading>
      <div className="mt-7 md:text-lg text-muted space-y-2 relative">
        <SkillsList skills={skills.languages} />
        <SkillsList skills={skills.frameworks} reverse />
        <SkillsList skills={skills.tools} />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </Container>
  )
}


function SkillsList({ skills, reverse=false } : {
  skills: { name: string, image: string }[],
  reverse?: boolean
}) {
  return (
    <Marquee pauseOnHover reverse={reverse}>
      {skills.map((skill, index) => (
        <div 
          key={index}
          className="cursor-pointer flex flex-col items-center justify-center gap-y-3" 
        >
          <Image
            src={skill.image}
            alt={skill.name}
            width={32}
            height={32}
            className={clsx("size-8 mx-4 md:mx-8")}
          />
          <p className="text-center text-xs">{skill.name}</p>
        </div>
      ))}
    </Marquee> 
  )
}