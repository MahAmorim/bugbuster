"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { manifestoItems } from "@/data/manifestoItems"
import { manifestoPurpose } from "@/data/manifestoPurpose"
import { manifestoTimeline } from "@/data/manifestoTimeline"

export default function ManifestoClient() {
  const itemGradients = [
    "from-purple-400 to-pink-500",
    "from-blue-400 to-cyan-400",
    "from-green-400 to-emerald-500",
    "from-orange-400 to-yellow-400",
    "from-pink-400 to-red-400",
    "from-indigo-400 to-purple-500",
  ]

  return (
    <main className="min-h-screen pt-16 bg-background text-foreground relative">
      {/* Glow sutil (fica sob o conteúdo) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 blur-3xl opacity-40" />

      {/* HERO */}
      <section className="py-20 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-7xl mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            📣
          </motion.div>

          <motion.h1
            className="text-balance text-4xl md:text-6xl font-extrabold mb-3 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent inline-block animate-gradient"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Manifesto Bugbuster
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Qualidade como atitude, não como fase.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button className="btn-gradient-glow glow-pulse" asChild>
              <Link href="/sobre">Entenda nossa Missão</Link>
            </Button>
            <Button variant="outline" className="btn-border-gradient hover:text-primary-foreground" asChild>
              <Link href="/qaac">Conheça nossa Cultura</Link>
            </Button>
          </motion.div>
        </div>

        <div className="mt-12 h-px w-11/12 md:w-2/3 mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* MOTIVAÇÃO */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-balance text-2xl md:text-3xl font-bold mb-6">
            Por que precisamos de um manifesto?
          </h2>

          <p className="text-lg text-muted-foreground mb-4">
            Ainda tratam qualidade como checklist. Processos viram burocracia. 
            Testes sem intenção se acumulam e o erro segue visto como fracasso.
          </p>

          <p className="text-xl font-semibold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            O manifesto nasce para virar essa chave: qualidade não é carimbo, 
            é estratégia, confiança e impacto real.
          </p>
        </div>
      </section>

      {/* PROPÓSITO */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-balance text-2xl md:text-3xl font-bold text-center mb-10">
            Para que serve?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {manifestoPurpose.map((b) => (
              <Card
                key={b.title}
                className="relative bg-card text-card-foreground border border-border shadow-md hover:-translate-y-1 transition-transform"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${b.color}`} />
                <div className="p-6 text-center">
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-lg font-semibold">{b.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 text-muted-foreground">{b.desc}</CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCÍPIOS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-balance text-2xl md:text-3xl font-bold text-center mb-10">
            Nossos princípios
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {manifestoItems.map((item, i) => {
              const color = itemGradients[i % itemGradients.length]
              return (
                <motion.div
                  key={item.t}
                  variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Card className="relative bg-card text-card-foreground border border-border shadow-md hover:-translate-y-1 transition-transform">
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${color}`} />
                    <div className="p-6">
                      <CardHeader className="p-0 mb-2">
                        <CardTitle className="text-lg font-semibold">{item.t}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 text-muted-foreground">{item.a}</CardContent>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* COMO VIVER O MANIFESTO */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-balance text-2xl md:text-3xl font-bold mb-12">
            Como viver o manifesto no dia a dia
          </h2>

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            {/* Linha de conexão */}
            <div className="absolute hidden md:block top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 opacity-30 -z-10" />

            {manifestoTimeline.map((item, i) => (
              <div
                key={`${item.text}-${i}`}
                className={`relative rounded-full p-[2px] bg-gradient-to-r ${item.gradient} transition-transform hover:scale-105`}
              >
                <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm md:text-base font-medium bg-background text-foreground shadow-md">
                  {item.icon} {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Não é discurso: quando qualidade vira cultura, times erram melhor,
              aprendem mais rápido e entregam com mais confiança.
            </p>
            <Button className="btn-border-gradient hover:text-primary-foreground" asChild>
              <Link href="/building">Ver impactos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ENCERRAMENTO */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-balance text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Acompanhe e viva o manifesto
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Este manifesto não se assina, se vive — a cada projeto, a cada entrega, a cada conversa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-gradient-glow glow-pulse" asChild>
              <Link href="https://www.linkedin.com/company/bugbuster-culture" target="_blank" rel="noopener noreferrer">
                Venha trocar ideia
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="btn-border-gradient hover:text-primary-foreground" asChild>
              <Link href="/together">Envolva-se</Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Quem pratica este manifesto não só fala de qualidade: constrói confiança todos os dias.
          </p>
        </div>
      </section>
    </main>
  )
}
