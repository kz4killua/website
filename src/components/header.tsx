"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Container from "@/components/container"


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
      <Container className="h-full flex items-center">
        <Link href="/" className="font-medium">
          Ifeanyi Obinelo
        </Link>
      </Container>
    </header>
  )
}