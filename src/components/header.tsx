"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { MenuIcon } from "lucide-react"
import Container from "@/components/container"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


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

        <NavigationLinks />
      </Container>
    </header>
  )
}


function NavigationLinks() {

  const navigationLinks = [
    { title: 'About', href: '#about' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Skills', href: '#skills' },
    { title: 'Reviews', href: '#reviews' },
  ]


  return (
    <>
      {/* For larger screens */}
      <nav className="hidden sm:flex gap-x-6 text-sm">
        {navigationLinks.map((link, index) => (
          <Link key={index} href={link.href} className="font-medium">
            {link.title}
          </Link>
        ))}
      </nav>

      {/* For smaller screens */}
      <nav className="block sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MenuIcon size={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {navigationLinks.map((link, index) => 
              <Link key={index} href={link.href} className="font-medium">
                <DropdownMenuItem className="cursor-pointer pl-4 pr-7">
                  {link.title}
                </DropdownMenuItem>
              </Link>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </>
  )
}