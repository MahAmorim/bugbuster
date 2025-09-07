"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Menu, X } from "lucide-react"

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Detecta tema inicial
  useEffect(() => {
    const savedTheme = localStorage.getItem("bbc-theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const theme = savedTheme || (prefersDark ? "dark" : "light")
    setIsDarkMode(theme === "dark")
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [])

  // Fecha menu ao navegar para outra rota
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Alterna tema
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark"
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark", !isDarkMode)
    localStorage.setItem("bbc-theme", newTheme)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] bg-background/80 backdrop-blur-md border-b border-border">
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
            className="md:hidden relative z-[1000]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {/* Backdrop (fecha ao clicar fora) */}
      {isMenuOpen && (
        <button
          aria-hidden
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-[998]"
        />
      )}

      {/* Menu mobile */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-16 right-0 left-0 bg-card border-b border-border md:hidden z-[999]"
        >
          <ul className="flex flex-col p-4 gap-2">
            <li><Link href="/" className="py-2 hover:text-foreground text-muted-foreground">Home</Link></li>
            <li><Link href="/sobre" className="py-2 hover:text-foreground text-muted-foreground">Sobre</Link></li>
            <li><Link href="/manifesto" className="py-2 hover:text-foreground text-muted-foreground">Manifesto</Link></li>
            <li><Link href="/qaac" className="py-2 hover:text-foreground text-muted-foreground">Cultura (QaaC)</Link></li>
            <li><Link href="/building" className="py-2 hover:text-foreground text-muted-foreground">Presença</Link></li>
            <li><Link href="/building" className="py-2 hover:text-foreground text-muted-foreground">Materiais</Link></li>
            <li><Link href="/building" className="py-2 hover:text-foreground text-muted-foreground">Voz BugBuster</Link></li>
            <li><Link href="/together" className="py-2 hover:text-foreground text-muted-foreground">Envolva-se</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}
