"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

type Step = {
  key: string
  title: string
  lead: string
  body: string
  icon?: string
}

const steps: Step[] = [
  {
    key: "dor",
    title: "A dor",
    lead: "Qualidade tratada como fase final, checklist, papel isolado.",
    body:
      "Em conversas e palcos de comunidade, ficou evidente o custo disso: retrabalho, decisões opacas e pouca confiança.",
    icon: "🩹",
  },
  {
    key: "inquietacao",
    title: "Inquietação",
    lead: "Se o problema é cultural, a resposta também precisa ser.",
    body:
      "Surgiu a pergunta: e se qualidade fosse mentalidade coletiva, visível desde a ideia até a entrega — não um departamento?",
    icon: "💭",
  },
  {
    key: "formulacao",
    title: "Formulação",
    lead: "Quality as a Culture (QaaC).",
    body:
      "Um nome para o que já vínhamos praticando: distribuição por natureza, visível desde o início, propósito como motor e evolução contínua.",
    icon: "🎯",
  },
  {
    key: "movimento",
    title: "Do insight ao movimento",
    lead: "Da faísca individual à chama coletiva.",
    body:
      "A ideia virou identidade. Hoje, Bugbuster Culture é um think tank aberto para ensaios, experimentos e troca entre comunidades.",
    icon: "🚀",
  },
]

export default function IdeacaoStory({
  founder = {
    name: "Marcela Amorim",
    role: "QA e voz ativa em comunidades",
    src: "/images/fundadora.jpg", // troque pelo caminho real
    contactHref: "https://www.cantinhodasqas.com.br",
  },
}: {
  founder?: { name: string; role?: string; src: string; contactHref?: string }
}) {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const sectionInView = useInView(sectionRef, { margin: "-10% 0px -10% 0px" })

  return (
    <section className="py-20" aria-labelledby="ideacao-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 id="ideacao-heading" className="text-2xl md:text-3xl font-bold text-center mb-12">
          Ideação e Mãos à Obra
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10" ref={sectionRef}>
          {/* Coluna esquerda (sticky) */}
          <aside
            className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-6"
            aria-label="Linha narrativa"
          >
            {/* Fundadora */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">
              <div className="rounded-2xl bg-background p-6 flex flex-col items-center text-center">
                <div className="relative w-40 h-40 mb-4">
                  <Image
                    src={founder.src}
                    alt={`${founder.name} — fundadora`}
                    fill
                    className="rounded-2xl object-cover shadow-xl"
                    sizes="160px"
                    priority
                  />
                </div>
                <h3 className="text-lg font-semibold">{founder.name}</h3>
                {founder.role && (
                  <p className="text-sm text-muted-foreground mt-1">{founder.role}</p>
                )}
                {founder.contactHref && (
                  <Link
                    href={founder.contactHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded-xl px-4 py-2 text-sm ring-1 ring-border hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Entre em contato
                  </Link>
                )}
              </div>
            </div>

            {/* Índice dos marcos (progress) */}
            <div className="relative pl-6">
              <div className="absolute left-[10px] top-0 bottom-0 w-[2px] bg-border" />
              <div
                className="absolute left-[10px] top-0 w-[2px] bg-primary transition-all"
                style={{
                  height: `${((active + 1) / steps.length) * 100}%`,
                }}
                aria-hidden
              />
              <ul className="space-y-5">
                {steps.map((s, i) => (
                  <li key={s.key} className="relative">
                    <span
                      className={`absolute -left-[2px] top-1.5 h-3 w-3 rounded-full ${
                        i <= active ? "bg-primary" : "bg-muted"
                      }`}
                    />
                    <span
                      className={`ml-4 text-sm ${
                        i === active ? "text-foreground font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {s.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Coluna direita (scrollytelling) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Narrativa de origem (forte) */}
            <div className="rounded-2xl border border-border bg-white dark:bg-[#111] p-6 shadow-md">
              <p className="text-lg text-muted-foreground">
                O Bugbuster Culture nasceu da dor de ver a qualidade tratada como fase,
                checklist ou papel isolado. A provocação foi simples:{" "}
                <span className="text-foreground font-medium">
                  se o problema é cultural, a resposta também precisa ser
                </span>
                .
              </p>
            </div>

            {steps.map((s, i) => (
              <StepBlock
                key={s.key}
                index={i}
                active={active}
                setActive={setActive}
                title={s.title}
                lead={s.lead}
                body={s.body}
                icon={s.icon}
                revealDelay={0.05 * i}
              />
            ))}

            {/* Fecho leve */}
            <div className="rounded-2xl border border-border p-6 text-center">
              <p className="text-sm text-muted-foreground">
                Quer ver como a ideação virou prática?{" "}
                <Link href="/qaac" className="underline/30 hover:underline">
                  Explore o QaaC
                </Link>{" "}
                ou leia nosso{" "}
                <Link href="/manifesto" className="underline/30 hover:underline">
                  Manifesto
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Glow sutil quando a seção entra em vista */}
        {sectionInView && (
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute inset-x-0 -z-10 mx-auto h-72 max-w-5xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 blur-3xl"
          />
        )}
      </div>
    </section>
  )
}

function StepBlock({
  index,
  active,
  setActive,
  title,
  lead,
  body,
  icon,
  revealDelay = 0,
}: {
  index: number
  active: number
  setActive: (i: number) => void
  title: string
  lead: string
  body: string
  icon?: string
  revealDelay?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { margin: "-35% 0px -45% 0px", amount: 0.4 })

  if (inView && active !== index) setActive(index)

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: inView ? 1 : 0.5, y: inView ? 0 : 12 }}
      transition={{ duration: 0.5, delay: revealDelay }}
      className="rounded-2xl border border-border bg-white dark:bg-[#111] p-6 shadow-md hover:shadow-lg transition-shadow"
      aria-current={inView ? "step" : undefined}
    >
      <header className="flex items-center gap-3 mb-2">
        {icon && <span className="text-xl" aria-hidden>{icon}</span>}
        <h3 className="text-lg font-semibold">{title}</h3>
      </header>
      <p className="text-foreground">{lead}</p>
      <p className="text-sm text-muted-foreground mt-2">{body}</p>
    </motion.article>
  )
}
