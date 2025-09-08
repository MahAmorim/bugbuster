"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import IdeacaoTimeline from "../../components/sections/IdeacaoTimeline"
import { ideacaoItems } from "@/data/ideacao"
import { sobreValores, sobreImpacto } from "@/data/sobre"

export default function SobreClient() {
  return (
    <main className="min-h-screen pt-16 bg-background text-foreground relative">
      {/* BG glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 blur-3xl opacity-40" />

      {/* HERO */}
      <section className="py-20 md:py-24 text-center relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-7xl mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            ✨
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-3 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent inline-block animate-gradient"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sobre a Bugbuster Culture
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Um movimento independente que trata qualidade como <strong>cultura</strong>, não como fase
            ou função isolada. Provocamos reflexão, ensaiamos práticas e conectamos pessoas que
            acreditam que <strong>confiança</strong> é o verdadeiro resultado do software.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button className="btn-gradient-glow glow-pulse" asChild>
              <Link href="/manifesto">Leia o Manifesto</Link>
            </Button>
            <Button variant="outline" className="btn-border-gradient hover:text-white" asChild>
              <Link href="/qaac">Conheça o QaaC</Link>
            </Button>
          </motion.div>
        </div>

        <div className="mt-12 h-px w-11/12 md:w-2/3 mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* POR QUE BUGBUSTER */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Por que “Bugbuster”?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            “Caçador de bug” já foi usado como termo pejorativo. Ressignificamos. Assim como os
            <em> Ghostbusters</em> caçavam o que ninguém via, os Bugbusters tornam a <strong>qualidade visível</strong>,
            de forma coletiva e criativa — construindo cultura com devs, UXs, POs, gestão, liderança e quem mais chegar.
          </p>
        </div>
      </section>

      {/* FUNDAÇÃO & IDEAÇÃO */}
      <section className="py-20" id="ideacao">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Ideação e Mãos à Obra</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Foto fundadora */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/profile.png"
                alt="Marcela Amorim — Fundadora da Bugbuster Culture"
                width={280}
                height={340}
                className="rounded-2xl shadow-xl object-cover"
                priority
              />
              <div className="mt-4 text-center">
                <div className="font-semibold text-lg">Marcela Amorim</div>
                <div className="text-sm text-muted-foreground">QA e voz ativa em comunidades</div>
              </div>
            </div>

            {/* Texto + botões */}
            <div className="text-left text-muted-foreground space-y-4 md:text-lg">
              <p>
                O Bugbuster Culture nasceu da <strong>frustração de ver qualidade reduzida à fase final</strong>,
                a checklist ou a papel isolado — quando deveria ser a base de toda decisão.
              </p>
              <p>
                A partir dessa inquietação, <strong>Marcela Amorim</strong> idealizou o movimento:
                transformar qualidade em <span className="text-foreground font-medium">atitude coletiva</span>,
                presente desde a ideia até a entrega.
              </p>
              <p>
                O que começou como <span className="text-foreground font-medium">faísca individual</span> virou
                <span className="text-foreground font-medium"> chama coletiva</span> — alimentada por pessoas,
                diálogos e experimentos que dão vida ao QaaC.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button size="lg" className="btn-gradient-glow glow-pulse" asChild>
                  <Link href="https://linktr.ee/qa.marcelaamorim" target="_blank">
                    Conecte-se e converse!
                  </Link>
                </Button>
                <Button size="lg" className="btn-border-gradient hover:text-white" asChild>
                  <Link href="https://www.cantinhodasqas.com.br/" target="_blank">
                    Conheça o Cantinho das QAs
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Timeline da Ideação */}
          <IdeacaoTimeline items={ideacaoItems} />
        </div>
      </section>

      {/* VALORES */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Nossos Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sobreValores.map((v) => (
              <div
                key={v.title}
                className="p-[2px] rounded-2xl bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="p-6 rounded-2xl bg-background h-full flex flex-col items-center">
                  <div
                    className={`text-2xl mb-4 p-3 rounded-full bg-gradient-to-br ${v.gradient} text-white shadow-md`}
                    aria-hidden
                  >
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Impacto até agora</h2>

          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-10">
            O Bugbuster Culture não se mede em números, mas em <span className="text-foreground font-medium">conexões reais</span>.
            Talks, artigos e colaborações que espalham a ideia de qualidade como cultura.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sobreImpacto.map((b) => (
              <div key={b.title} className="h-full">
                <div className="relative border border-border bg-card text-card-foreground rounded-xl shadow-md hover:-translate-y-1 hover:shadow-lg hover:brightness-105 transition-transform h-full">
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${b.color}`} />
                  <div className="p-5">
                    <div className="text-2xl mb-3" aria-hidden>{b.icon}</div>
                    <h3 className="text-base font-semibold mb-1">{b.title}</h3>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto mt-10">
            Cada fala, cada artigo e cada parceria acendem <span className="text-foreground font-medium">faíscas coletivas</span> que alimentam o movimento.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 text-center bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Participe do Movimento</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Leia o <Link href="/manifesto" className="underline/30 hover:underline">Manifesto</Link>{" "}
            ou mergulhe no <Link href="/qaac" className="underline/30 hover:underline">QaaC</Link>{" "}
            para ver como aplicamos na prática.
          </p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button className="btn-gradient-glow glow-pulse" asChild>
              <Link href="/together">Venha Fazer Parte</Link>
            </Button>
            <Button variant="outline" className="btn-border-gradient hover:text-white" asChild>
              <Link href="https://www.linkedin.com/company/bugbuster-culture" target="_blank">
                Siga para Mais!
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
