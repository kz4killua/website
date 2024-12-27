import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, LinkIcon } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Container from "@/components/container";
import { SectionHeading, SectionSubheading } from "./typography";


interface Project {
  title: string;
  description: string;
  image: string;
  links: {
    github?: string;
    live?: string;
  };
}


const projects: Project[] = [
  {
    title: "Course Alerts",
    description: "A web application that sends email/SMS notifications to students at Ontario Tech University when seats open up in a full course",
    image: "/images/course-alerts.png",
    links: {
      live: "https://www.coursealerts.fyi/",
    },
  },
  {
    title: "Open Tutor",
    description: "Everything you need to study with AI",
    image: "/images/open-tutor.png",
    links: {
      github: "https://github.com/kz4killua/open-tutor-frontend",
      live: "https://opentutor.ifeanyiobinelo.com/",
    },
  },
  {
    title: "Wiki Rec",
    description: "A cross-category recommendation engine that recommends books, movies, tv series, games, and music based on data from Wikipedia",
    image: "/images/wiki-rec.png",
    links: {
      github: "https://github.com/kz4killua/wikirec",
      live: "https://wikirec.ifeanyiobinelo.com/",
    },
  },
  {
    title: "FPL AI",
    description: "A machine learning system that predicts the performance of English Premier League players",
    image: "/images/fpl-ai.png",
    links: {
      github: "https://github.com/kz4killua/fpl-ai",
    },
  },
  {
    title: "Songle",
    description: "An online multiplayer music game. Guess the song...with friends!",
    image: "/images/songle.png",
    links: {
      github: "https://github.com/kz4killua/songle",
    },
  },
  {
    title: "K Compress",
    description: "A C program that compresses and decompresses images using K-means clustering",
    image: "/images/k-compress.png",
    links: {
      github: "https://github.com/kz4killua/k-compress",
    },
  },
  {
    title: "Wordle AI",
    description: "An AI that plays the popular word game Wordle",
    image: "/images/wordle-ai.png",
    links: {
      github: "https://github.com/kz4killua/wordle-ai",
    },
  },
  {
    title: "Chess AI",
    description: "A chess engine that plays chess using the minimax algorithm",
    image: "/images/chess-ai.jpg",
    links: {
      github: "https://github.com/kz4killua/chess-ai"
    }
  }
];


export default function Projects() {
  return (
    <section id="projects" className="pt-24 pb-6">
      <Container>
        <SectionHeading>Technical Projects</SectionHeading>
        <SectionSubheading>My recent work</SectionSubheading>
        <div className="mt-7 md:text-lg grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
        <div className="mt-8 text-center">
            View more projects on&nbsp;
            <Link 
              href={"https://github.com/kz4killua"} 
              target="_blank"
              className={clsx(
                "group inline-flex items-center justify-center",
                "font-semibold text-secondary hover:text-primary hover:underline underline-offset-4",
              )}
            >
              Github&nbsp;
              <ArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" size={16} />
            </Link>
          </div>
      </Container>
    </section>
  )
}


function ProjectItem({ title, description, image, links } : Project) {
  return (
    <div className="bg-background rounded-xl shadow-lg border p-6 flex flex-col gap-6">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="rounded-xl border aspect-video object-cover"
      />
      <div className="space-y-2">
        <h3 className="text-secondary font-bold md:text-lg">{title}</h3>
        <p className="text-base">{description}</p>
        <div className="text-sm font-medium flex gap-x-4">
          {links.live && (
            <Link href={links.live} className="group hover:text-primary flex gap-x-1 items-center" target="_blank">
              <LinkIcon className="group-hover:rotate-180 transition-transform duration-300" size={14} /> Website
            </Link>
          )}
          {links.github && (
            <Link href={links.github} className="group hover:text-primary flex gap-x-1 items-center" target="_blank">
              <GithubIcon height={14} width={14} className="group-hover:rotate-180 group-hover:fill-primary transition-transform duration-300" /> GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
