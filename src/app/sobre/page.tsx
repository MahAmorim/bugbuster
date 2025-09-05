"use client"
import IdeacaoTimeline from "./IdeacaoTimeline"
import { ideacaoItems } from "@/data/ideacao"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SobrePage() {
  return (
    <main className="min-h-screen pt-16 bg-background text-foreground relative">
      {/* BG glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 blur-3xl opacity-40" />

      {/* HERO */}
{/* HERO */}
<section className="py-20 md:py-24 text-center relative">
  <div className="container mx-auto px-4">
    {/* Emoji animado */}
    <motion.div
      className="text-7xl mb-4"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      ✨
    </motion.div>

    {/* Título */}
    <motion.h1
      className="text-4xl md:text-6xl font-extrabold mb-3 
                 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 
                 bg-clip-text text-transparent inline-block animate-gradient"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Sobre a Bugbuster Culture
    </motion.h1>

    {/* Subtexto */}
    <motion.p
      className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.6 }}
    >
      Um movimento independente que trata qualidade como <strong>cultura</strong>, 
      não como fase ou função isolada. Nosso papel é provocar reflexão, ensaiar práticas 
      e conectar pessoas que acreditam que confiança é o verdadeiro resultado do software.
    </motion.p>

    {/* Botões */}
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

  {/* Divisor */}
  <div className="mt-12 h-px w-11/12 md:w-2/3 mx-auto 
                  bg-gradient-to-r from-transparent via-border to-transparent" />
</section>


      {/* POR QUE BUGBUSTER */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Por que “Bugbuster”?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            “Caçador de bug” já foi usado como termo pejorativo. Decidimos ressignificar. 
            Assim como os <em>Ghostbusters</em> caçavam o que ninguém via, 
            os Bugbusters assumem a missão de <strong>tornar a qualidade visível</strong>, 
            de forma coletiva e criativa. Não se trata de caça às bruxas — mas de construir cultura junto com desenvolvedores, uxs, p.os, gestores, líderes e quem mais atender o chamado!
          </p>
        </div>
      </section>

    

{/* FUNDAÇÃO & IDEAÇÃO */}
<section className="py-20" id="ideacao">
  <div className="container mx-auto px-4 max-w-5xl">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
      Ideação e Mãos à Obra
    </h2>

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

  {/* Texto + botão */}
  <div className="text-left text-muted-foreground space-y-4 md:text-lg">
    <p>
      O Bugbuster Culture nasceu da <strong>frustração de ver qualidade reduzida a fase final, 
      a checklist ou a papel isolado</strong> — quando deveria ser a base de toda decisão.
    </p>
    <p>
      Foi a partir dessa inquietação que <strong>Marcela Amorim</strong> idealizou o movimento:
      transformar qualidade em <span className="text-foreground font-medium">atitude coletiva</span>, 
      presente desde a ideia até a entrega.
    </p>
    <p>
      Hoje, o que começou como uma <span className="text-foreground font-medium">faísca individual </span>
      já se tornou <span className="text-foreground font-medium">chama coletiva</span> — alimentada por
      pessoas, diálogos e experimentos que dão vida ao QaaC.
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
{/* VALORES */}
<section className="py-20 bg-muted/30">
  <div className="container mx-auto px-4 max-w-5xl text-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-12 
                   bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 
                   bg-clip-text text-transparent">
      Nossos Valores
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          icon: "🌐",
          title: "Coletividade",
          desc: "Qualidade não pertence a um time, mas a todos.",
          gradient: "from-purple-400 via-pink-500 to-red-500",
        },
        {
          icon: "🎭",
          title: "Diversidade",
          desc: "Visões diferentes ampliam a inovação e a confiança.",
          gradient: "from-blue-400 via-cyan-400 to-emerald-400",
        },
        {
          icon: "⚡",
          title: "Aprendizado",
          desc: "O erro é matéria-prima da evolução.",
          gradient: "from-orange-400 via-yellow-500 to-pink-400",
        },
      ].map((v, i) => (
        <div
          key={i}
          className="p-[2px] rounded-2xl bg-gradient-to-r 
                     from-purple-400 via-blue-500 to-cyan-400
                     hover:shadow-lg hover:-translate-y-1 transition-all"
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
{/* IMPACTO */}
<section className="py-20 bg-muted/30">
  <div className="container mx-auto px-4 max-w-5xl">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
      Impacto até agora
    </h2>

    <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-10">
      O Bugbuster Culture não se mede em números, mas em <span className="text-foreground font-medium">conexões reais</span>. 
      Nosso impacto nasce de talks, artigos e colaborações que espalham a ideia de qualidade como cultura.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { icon: "🎤", title: "Talks & Conferências", desc: "Participações em eventos nacionais e comunitários levando a qualidade ao palco para diversos públicos.", color: "from-purple-400 to-pink-500" },
        { icon: "✍️", title: "Artigos & Ensaios", desc: "Publicações que inspiram reflexão prática sobre o futuro da qualidade e cultura, além de materiais.", color: "from-blue-400 to-cyan-400" },
        { icon: "🤝", title: "Comunidade & Conexão", desc: "Colaborações com parceiros como Cantinho das QAs, DevReferências, TDC, JavaGirlsJUG e mais.", color: "from-green-400 to-emerald-500" },
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
      Cada fala, cada artigo e cada colaboração deixa marcas — pequenas <span className="text-foreground font-medium">faíscas coletivas</span> que alimentam um movimento maior.
    </p>
  </div>
</section>

      {/* CTA FINAL */}
      <section className="py-16 text-center bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Participe do Movimento</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Leia nosso <Link href="/manifesto" className="underline/30 hover:underline">Manifesto</Link> 
            {" "}para conhecer os princípios, ou mergulhe no 
            {" "}<Link href="/qaac" className="underline/30 hover:underline">QaaC</Link> 
            {" "}para ver como aplicamos na prática.
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
        <Link href="https://www.linkedin.com/company/bugbuster-culture" target="_blank" >Siga para Mais!</Link>
      </Button>
    </motion.div>
        </div>
      </section>
    </main>
  )
}
