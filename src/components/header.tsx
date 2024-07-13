"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Container from "@/components/container"


function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={72} viewBox="0 0 72 72" width={72} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          d="M8 72h56a8 8 0 008-8V8a8 8 0 00-8-8H8a8 8 0 00-8 8v56a8 8 0 008 8z"
          fill="#007EBB"
        />
        <path
          d="M62 62H51.316V43.802c0-4.99-1.896-7.777-5.845-7.777-4.296 0-6.54 2.901-6.54 7.777V62H28.632V27.333H38.93v4.67s3.096-5.729 10.453-5.729c7.353 0 12.617 4.49 12.617 13.777V62zM16.35 22.794c-3.508 0-6.35-2.864-6.35-6.397C10 12.864 12.842 10 16.35 10c3.507 0 6.347 2.864 6.347 6.397 0 3.533-2.84 6.397-6.348 6.397zM11.032 62h10.736V27.333H11.033V62z"
          fill="#FFF"
        />
      </g>
    </svg>
  )
}


function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={72} viewBox="0 0 100 100" width={72} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0112.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        fill="#24292f"
      />
    </svg>
  )
}


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
    <header className={`h-20 sticky top-0 transition-shadow ${isScrolled ? 'shadow' : ''}`}>
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
            <GithubIcon className="w-5 h-5" />
            <span className="hidden sm:block">Github</span>
          </Link>
          <Link 
            href="https://www.linkedin.com/in/ifeanyiobinelo" 
            className="flex items-center justify-center gap-x-2"
            target="_blank"
          >
            <LinkedInIcon className="w-5 h-5" />
            <span className="hidden sm:block">LinkedIn</span>
          </Link>
        </div>
      </Container>
    </header>
  )
}