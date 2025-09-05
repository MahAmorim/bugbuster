"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Menu, X } from "lucide-react"

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Detecta tema inicial
  useEffect(() => {
    const savedTheme = localStorage.getItem("bbc-theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const theme = savedTheme || (prefersDark ? "dark" : "light")
    setIsDarkMode(theme === "dark")
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [])

  // Alterna tema
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark"
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark", !isDarkMode)
    localStorage.setItem("bbc-theme", newTheme)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-2xl">🐞⚡</span>
          <span className="text-primary">BugBuster</span>
          <span>Culture</span>
        </Link>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-6">
          <li><Link href="/" className="hover:text-foreground text-muted-foreground">Home</Link></li>
          <li><Link href="/sobre" className="hover:text-foreground text-muted-foreground">Sobre</Link></li>
          <li><Link href="/manifesto" className="hover:text-foreground text-muted-foreground">Manifesto</Link></li>
          <li><Link href="/qaac" className="hover:text-foreground text-muted-foreground">Cultura (QaaC)</Link></li>
          <li><Link href="/building" className="hover:text-foreground text-muted-foreground">Presença</Link></li>
          <li><Link href="/building" className="hover:text-foreground text-muted-foreground">Materiais</Link></li>
          <li><Link href="/building" className="hover:text-foreground text-muted-foreground">Voz BugBuster</Link></li>
          <li><Link href="/together" className="hover:text-foreground text-muted-foreground">Envolva-se</Link></li>
        </ul>

        {/* Ações */}
        <div className="flex items-center gap-2">
          {/* Botão de tema */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Alternar tema">
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          {/* Menu mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 left-0 bg-card border-b border-border md:hidden">
          <ul className="flex flex-col p-4 gap-2">
            <li><Link href="/" className="py-2 hover:text-foreground text-muted-foreground">Home</Link></li>
            <li><Link href="/sobre" className="py-2 hover:text-foreground text-muted-foreground">Sobre</Link></li>
            <li><Link href="/manifesto" className="py-2 hover:text-foreground text-muted-foreground">Manifesto</Link></li>
            <li><Link href="/qaac" className="py-2 hover:text-foreground text-muted-foreground">Cultura (QaaC)</Link></li>
            <li><Link href="/impacto" className="py-2 hover:text-foreground text-muted-foreground">Presença</Link></li>
            <li><Link href="/voz" className="py-2 hover:text-foreground text-muted-foreground">Voz BugBuster</Link></li>
            <li><Link href="/parcerias" className="py-2 hover:text-foreground text-muted-foreground">Envolva-se</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}
