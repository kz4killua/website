import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { SectionHeading, SectionSubheading } from "./typography";
import { GithubIcon, LinkedInIcon } from "./icons";


export default function Footer() {
  return (
    <Container>
      <footer className="text-center space-y-7">
        <h1 className="font-bold text-lg">
          Ifeanyi Obinelo
        </h1>
        <div className="flex text-gray-600 items-center justify-center gap-x-10">
          <Link href={"https://www.linkedin.com/in/ifeanyiobinelo"} target="_blank">
            <LinkedInIcon height={30} />
          </Link>
          <Link href={"https://github.com/kz4killua"} target="_blank">
            <GithubIcon height={30} />
          </Link>
        </div>
        <p className="text-sm">
          Courtesy of yours truly.
        </p>
      </footer>
    </Container>
  )
}