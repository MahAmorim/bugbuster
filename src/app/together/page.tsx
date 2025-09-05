"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EnvolvaSePage() {
  const formas = [
    {
      icon: "💜",
      title: "Voluntariado",
      desc: "Apoie em iniciativas, organização e atividades do movimento.",
    },
    {
      icon: "🎤",
      title: "Talks & Eventos",
      desc: "Traga ideias de temas, organize encontros ou compartilhe sua voz.",
    },
    {
      icon: "✍️",
      title: "Materiais & Conteúdo",
      desc: "Crie artigos, guias, recursos visuais ou traduções.",
    },
    {
      icon: "🤝",
      title: "Troca & Mentorias",
      desc: "Converse, compartilhe experiências e apoie outras pessoas.",
    },
  ]

  const redes = [
    {
      icon: "👻",
      title: "LinkedIn Bugbuster",
      href: "https://www.linkedin.com/company/bugbuster-culture/",
    },
    {
      icon: "💼",
      title: "Projetos & Parcerias",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSf5AHdVs4la9mv5eK5VetQXyzcaB-ZjTMt6Wkp-owg1v3l3sQ/viewform",
    },
    {
      icon: "🌐",
      title: "Linktree Fundadora",
      href: "https://linktr.ee/qa.marcelaamorim",
    },
  ]

  return (
    <main className="min-h-screen pt-16 bg-background text-foreground relative">
      {/* BG glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 
                      bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 
                      blur-3xl opacity-40" />

      {/* HERO */}
      <section className="py-20 md:py-24 text-center relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-7xl mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            🤗
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-3 
                       bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 
                       bg-clip-text text-transparent animate-gradient"
          >
            Envolva-se
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            O Bugbuster Culture é aberto, descentralizado e coletivo.  
            Toda contribuição conta — seja ideia, conteúdo, tempo ou troca de experiências.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button className="btn-gradient-glow glow-pulse" asChild>
              <Link href="https://www.linkedin.com/company/bugbuster-culture/" target="_blank">
                LinkedIn Bugbuster
              </Link>
            </Button>
            <Button variant="outline" className="btn-border-gradient hover:text-white" asChild>
              <Link href="https://linktr.ee/qa.marcelaamorim" target="_blank">
                Entre em Contato
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* COMO SE ENVOLVER */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 
                         bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 
                         bg-clip-text text-transparent">
            Como contribuir
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {formas.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-border bg-white dark:bg-[#111] 
                           shadow-md hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* ENVOLVA-SE / REDES */}
<section className="py-20">
  <div className="container mx-auto px-4 text-center max-w-5xl">
    <h2
      className="text-2xl md:text-3xl font-bold mb-12
                 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 
                 bg-clip-text text-transparent"
    >
      Envolva-se com a Bugbuster Culture
    </h2>

    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
      {redes.map((rede, i) => (
        <Link
          key={i}
          href={rede.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center 
                     bg-card border border-border rounded-2xl 
                     shadow-md hover:-translate-y-1 hover:shadow-lg transition-transform
                     w-72 min-h-[220px] p-8"
        >
          {/* Ícone circular com gradiente */}
          <div
            className={`h-14 w-14 rounded-full flex items-center justify-center 
                        text-white text-2xl mb-4 
                        bg-gradient-to-r ${i === 0 ? "from-blue-400 via-purple-500 to-indigo-500" 
                        : i === 1 ? "from-green-400 via-cyan-400 to-emerald-500" 
                        : "from-pink-400 via-red-400 to-orange-500"}`}
          >
            {rede.icon}
          </div>

          {/* Título */}
          <h3 className="text-xl font-semibold">{rede.title}</h3>
        </Link>
      ))}
    </div>
  </div>
</section>


      {/* FECHO */}
      <section className="py-16 text-center bg-muted/20">
        <div className="container mx-auto px-4">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Este é um espaço vivo e em rede.  
            Se você tem uma ideia, uma vontade ou só curiosidade — já faz parte. 💜
          </p>
        </div>
      </section>
    </main>
  )
}
