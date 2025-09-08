"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import clsx from "clsx"
import ThemeToggle from "@/components/ui/ThemeToggle"
import { navLinks } from "@/data/navLinks"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Scroll lock + ESC
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
      document.documentElement.classList.add("menu-open")
    } else {
      document.body.style.overflow = ""
      document.documentElement.classList.remove("menu-open")
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isMenuOpen])

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-[1000] border-b border-border",
        !isMenuOpen && "bg-background/80 backdrop-blur-md transition-all duration-300",
        isMenuOpen && "bg-background transition-all duration-300"
      )}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-2xl">🐞⚡</span>
          <span className="text-primary">BugBuster</span>
          <span>Culture</span>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:text-foreground text-muted-foreground transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(v => !v)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Overlay com fade (fora do header para “apagar” só o conteúdo) */}
      <div
        className={clsx(
          "fixed left-0 right-0 top-16 bottom-0 z-[900] bg-black/50 backdrop-blur-sm md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Menu mobile com slide + fade */}
      <div
        id="mobile-menu"
        className={clsx(
          "absolute top-16 left-0 right-0 z-[1000] bg-card border-b border-border md:hidden transition-all duration-300 ease-in-out transform",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <ul className="flex flex-col p-4 gap-2">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block py-2 px-2 rounded hover:bg-muted text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
