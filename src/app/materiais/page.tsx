"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EmConstrucaoPage() {
  const upcoming = [
    { icon: "📚", title: "Biblioteca de Recursos", desc: "Guias e materiais em breve." },
    { icon: "🎤", title: "Palestras & Talks", desc: "Nossa história em eventos." },
    { icon: "🤝", title: "Parcerias", desc: "Conexões que fortalecem a cultura." },
    { icon: "🌍", title: "Comunidade", desc: "Espaços de troca e colaboração." },
  ]

  return (
    <main className="min-h-screen pt-16 bg-background text-foreground relative">
      {/* HERO */}
      <section className="py-20 md:py-24 text-center relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-7xl mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            🚧
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-3 
                       bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 
                       bg-clip-text text-transparent animate-gradient"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Em construção
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Estamos preparando novas seções para você explorar.  
            Aqui está um gostinho do que vem por aí:
          </motion.p>
        </div>
      </section>

      {/* CARDS */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcoming.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-border bg-white dark:bg-[#111] 
                         shadow-md hover:-translate-y-1 hover:shadow-lg transition-transform text-center"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
              <span className="inline-block mt-3 text-xs font-medium text-primary">
                🚀 Em breve
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg text-muted-foreground mb-6">
            Enquanto isso, explore nossas páginas já disponíveis:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="btn-gradient-glow glow-pulse" asChild>
              <Link href="/manifesto">Ler o Manifesto</Link>
            </Button>
            <Button variant="outline" className="btn-border-gradient hover:text-white" asChild>
              <Link href="/qaac">Conhecer o QaaC</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
