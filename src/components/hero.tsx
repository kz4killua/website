"use client"

import Image from "next/image"
import Link from "next/link"
import { InstagramIcon, LinkedinIcon, GithubIcon } from "@/components/icons"
import Container from "@/components/container"
import "./hero.modules.css"


export default function Hero() {
  return (
    <Container className="relative sm:min-h-dvh flex flex-col sm:flex-row justify-between gap-10 sm:gap-20 py-10">
      <ContactLinks />
      <Bio />
      <Headshot />
    </Container>
  )
}


function ContactLinks() {
  return (
    <div className="flex flex-row sm:flex-col items-center justify-center gap-12">
      <Link href={"https://www.instagram.com/kz4killua/"} target="_blank">
        <InstagramIcon className="hover:fill-primary transition-transform duration-300 ease-in-out hover:rotate-12" height={25} />
      </Link>
      <Link href={"https://github.com/kz4killua"} target="_blank">
        <GithubIcon className="hover:fill-primary transition-transform duration-300 ease-in-out hover:rotate-12" height={25} />
      </Link>
      <Link href={"https://www.linkedin.com/in/ifeanyiobinelo"} target="_blank">
        <LinkedinIcon className="hover:fill-primary transition-transform duration-300 ease-in-out hover:rotate-12" height={25} />
      </Link>
    </div>
  )
}


function Headshot() {
  return (
    <div className="w-full order-first md:order-last md:w-fit flex items-center justify-center">
      <div className="hero-image-container relative overflow-hidden size-72 rounded-full ">
        <Image
          src="/images/headshot.png"
          alt="Ifeanyi"
          fill
        />
      </div>
    </div>
  )
}


function Bio() {
  return (
      <div className="flex flex-col justify-center gap-y-6">
        <h1 className="font-bold text-4xl md:text-6xl">
          <span className="text-secondary">Hi, I’m </span> <span className="text-primary">Ifeanyi</span>
        </h1> 
        <h3 className="font-bold md:text-2xl">
          Software Engineer
        </h3>
        <p className="md:text-xl">
          Currently pursuing a Bachelor&apos;s degree in Computer Science at Ontario Tech University. 
        </p>
      </div>
  )
}