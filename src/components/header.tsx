"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Container from "@/components/container"
import { LinkedInIcon, GithubIcon } from "@/components/icons"


export default function Header() {

  const [isScrolled, setIscrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIscrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <header className={`h-20 z-50 sticky top-0 bg-background transition-shadow ${isScrolled ? 'shadow' : ''}`}>
      <Container className="h-full flex items-center justify-between">
        <Link href="/" className="font-medium">
          Ifeanyi Obinelo
        </Link>
        <div className="flex items-center justify-center gap-x-3 sm:gap-x-6 text-sm font-medium">
          <Link 
            href="https://github.com/kz4killua" 
            className="flex items-center justify-center gap-x-2"
            target="_blank"
          >
            <GithubIcon height={72} className="w-5 h-5" />
            <span className="hidden sm:block">Github</span>
          </Link>
          <Link 
            href="https://www.linkedin.com/in/ifeanyiobinelo" 
            className="flex items-center justify-center gap-x-2"
            target="_blank"
          >
            <LinkedInIcon height={72} className="w-5 h-5" />
            <span className="hidden sm:block">LinkedIn</span>
          </Link>
        </div>
      </Container>
    </header>
  )
}