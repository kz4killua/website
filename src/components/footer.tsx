import clsx from "clsx";
import Link from "next/link";
import Container from "@/components/container";
import { GitHubIcon, LinkedinIcon, UpworkIcon } from "@/components/icons";


export default function Footer() {
  return (
    <Container className="pb-10">
      <footer className="text-center space-y-7">
        <h1 className="font-bold text-lg">
          Ifeanyi Obinelo
        </h1>
        <div className="flex items-center justify-center gap-x-10">
          <Link href={"https://www.linkedin.com/in/ifeanyiobinelo"} target="_blank">
            <LinkedinIcon className="hover:fill-primary transition-transform duration-300 ease-in-out hover:rotate-12" height={24} />
          </Link>
          <Link href={"https://github.com/kz4killua"} target="_blank">
            <GitHubIcon className="hover:fill-primary transition-transform duration-300 ease-in-out hover:rotate-12" height={24} />
          </Link>
          <Link href={"https://www.upwork.com/freelancers/~012fb0252a88cecd37"} target="_blank">
            <UpworkIcon className="hover:fill-primary transition-transform duration-300 ease-in-out hover:rotate-12" height={24} />
          </Link>
        </div>
        <p className="text-sm">
          Courtesy of yours truly.
        </p>
      </footer>
    </Container>
  )
}