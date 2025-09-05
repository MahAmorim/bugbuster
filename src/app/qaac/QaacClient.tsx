"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CasesCarousel from "@/components/sections/CasesCarousel"

export default function QaacClient() {
  return (
    <main className="min-h-screen pt-16 bg-background text-foreground relative">
      {/* BG glow sutil */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 blur-3xl opacity-40" />

      {/* HERO */}
      <section className="py-20 md:py-24 text-center relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-7xl mb-4"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            🎯
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-3 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent inline-block animate-gradient"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Quality as a Culture (QaaC)
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Deixar de “testar no fim” e passar a <strong>decidir com qualidade</strong> o tempo todo.  
            QaaC é diferenciar a sua entrega pelo que as pessoas sentem: confiança.
          </motion.p>
             <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button className="btn-gradient-glow glow-pulse" asChild>
              <Link href="#cases">
                Veja o QaaC em ação
              </Link>
            </Button>
            <Button variant="outline" className="btn-border-gradient hover:text-white" asChild>
              <Link href="/together">
                Venha fazer Parte!
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* O QUE É QaaC */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            O que é QaaC?
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-10">
            <span className="text-foreground font-medium">Quality as a Culture (QaaC)</span> é tratar qualidade como 
            <span className="text-foreground font-medium"> mentalidade coletiva</span> — não como função isolada, papel de um time específico ou checklist no fim do projeto.
            Ela atravessa todo o ciclo de vida do produto e orienta decisões desde o primeiro rascunho até o aprendizado pós-release.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: "💡", title: "Ideação", desc: "Provoca perguntas melhores, antecipa riscos e abre possibilidades antes do primeiro commit.", color: "from-purple-400 to-pink-500" },
              { icon: "🧩", title: "Código", desc: "Informa decisões técnicas, padrões e boas práticas que reduzem complexidade e débito futuro.", color: "from-blue-400 to-cyan-400" },
              { icon: "🧪", title: "Testes", desc: "Valida o que importa de verdade, com intenção e cobertura alinhadas a risco e valor.", color: "from-green-400 to-emerald-500" },
              { icon: "🚀", title: "Deploy", desc: "Favorece entregas estáveis e seguras, com observabilidade e rollback planejados.", color: "from-orange-400 to-yellow-400" },
              { icon: "📈", title: "Pós-release", desc: "Transforma erros e feedbacks em melhoria contínua — aprendizado que volta para o ciclo.", color: "from-indigo-400 to-purple-500" },
            ].map((b) => (
              <div key={b.title} className="h-full">
                <div className="relative border border-border bg-white dark:bg-[#111] rounded-xl shadow-md hover:-translate-y-1 hover:shadow-lg hover:brightness-105 transition-transform h-full">
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${b.color}`} />
                  <div className="p-5">
                    <div className="text-2xl mb-3">{b.icon}</div>
                    <h3 className="text-base font-semibold mb-1">{b.title}</h3>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto mt-10">
            Quando a qualidade é cultura, <span className="text-foreground font-medium">todo mundo defende e pratica</span> — do discovery ao deploy, do par de código ao atendimento, 
            do incidente ao insight. Resultado: menos retrabalho, decisões mais claras e um produto que inspira confiança.
          </p>
        </div>
      </section>

      {/* POR QUE QaaC */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Por que QaaC?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Software as a Project", desc: "Você termina e esquece. Qualidade vista só como fase final.", color: "from-purple-400 to-pink-500" },
              { title: "Software as a Service", desc: "Você terceiriza e esquece. Qualidade jogada para ferramentas ou times isolados.", color: "from-blue-400 to-cyan-400" },
              { title: "Quality as a Culture", desc: "Você vive todos os dias. Qualidade como atitude e decisão coletiva.", color: "from-green-400 to-emerald-500" },
            ].map((item, i) => (
              <Card
                key={i}
                className="relative border border-border bg-white dark:bg-[#111] hover:-translate-y-1 hover:shadow-lg transition-transform shadow-md min-h-[200px]"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.color}`} />
                <div className="p-6 text-center">
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 text-muted-foreground">{item.desc}</CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Os pilares do QaaC</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "🌐", title: "Distribuído por natureza", desc: "Qualidade não pertence a um time, mas a todos." },
              { icon: "👁️", title: "Visível desde o início", desc: "Clareza e testes começam já no discovery." },
              { icon: "🎯", title: "Propósito como motor", desc: "Mais que processo, é atitude que gera impacto." },
              { icon: "🔄", title: "Evolução contínua", desc: "Cada erro se transforma em aprendizado coletivo." },
            ].map((p, i) => (
              <Card
                key={i}
                className="relative border border-border bg-white dark:bg-[#111] hover:-translate-y-1 hover:shadow-lg transition-transform shadow-md"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400" />
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <CardTitle className="text-lg font-semibold">{p.title}</CardTitle>
                  <CardContent className="p-0 text-muted-foreground mt-2">{p.desc}</CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COMO APLICAR */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            Como aplicar o QaaC no dia a dia
          </h2>

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            {/* Linha de conexão */}
            <div
              className="absolute hidden md:block top-1/2 left-0 right-0 h-1 
                         bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 
                         opacity-30 -z-10"
            />

            {[
              { text: "Clareza no discovery", icon: "🔍", gradient: "from-purple-400 via-pink-500 to-red-500" },
              { text: "Testes com intenção", icon: "✅", gradient: "from-blue-400 via-cyan-400 to-emerald-400" },
              { text: "Evidências reais", icon: "📖", gradient: "from-orange-400 via-yellow-500 to-pink-400" },
              { text: "Erros viram evolução", icon: "⚡", gradient: "from-emerald-400 via-teal-400 to-blue-500" },
              { text: "Responsabilidade coletiva", icon: "🤝", gradient: "from-indigo-400 via-purple-500 to-pink-400" },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative rounded-full p-[2px] bg-gradient-to-r ${item.gradient} 
                            transition-transform hover:scale-105`}
              >
                <span
                  className="inline-flex items-center gap-2 px-5 py-3 
                             rounded-full text-sm md:text-base font-medium
                             bg-background text-foreground shadow-md"
                >
                  {item.icon} {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              QaaC não é conceito bonito, é prática diária: cada descoberta mais clara, 
              cada teste com propósito e cada erro transformado em aprendizado coletivo.
            </p>
            <Button className="btn-border-gradient hover:text-white" asChild>
              <Link href="/manifesto">Leia o Manifesto</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CARROSSEL */}
      <section id="cases" className="py-20 bg-muted/30">
          <CasesCarousel />
       </section>

{/* CTA final – contextualizado */}
<section className="py-16 text-center bg-muted/20">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-bold mb-3">
      Pronto para ver o QaaC no seu time?
    </h2>

    <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
      Depois de conhecer os exemplos na prática, dê o próximo passo: valide o
      <span className="text-foreground font-medium"> Quality as a Culture (QaaC)</span>
      em um experimento rápido e mensurável.
    </p>

    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <Button className="btn-gradient-glow glow-pulse" asChild>
        <Link href="/parcerias">Começar um experimento guiado</Link>
      </Button>
      <Button variant="outline" className="btn-border-gradient hover:text-white" asChild>
        <Link href="/impacto">Ver resultados na prática</Link>
      </Button>
    </div>

    {/* Sinais de confiança */}
    <div className="mt-5 text-xs text-muted-foreground">
      <span className="inline-block px-3 py-1 rounded-full ring-1 ring-border">
        Sem compromisso • foco em aprendizado • evidências reais
      </span>
    </div>
  </div>
</section>

    </main>
  )
}
