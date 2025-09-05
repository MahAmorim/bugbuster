"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import ProblemsSolutions from "@/components/sections/ProblemsSolutions"

export default function BugbusterCulture() {

  const manifestoItems = [
    { title: "Qualidade é cultura", description: "Ela está em cada decisão, em cada entrega." },
    { title: "É responsabilidade de todos", description: "Do design ao deploy, o senso é compartilhado." },
    { title: "É diversidade e voz", description: "Vozes diferentes fortalecem o coletivo." },
    { title: "É presença e propósito", description: "Valor entregue do código à conversa." },
    { title: "É transformação e coragem", description: "Encarar o erro e escolher evoluir." },
    { title: "É atitude e movimento", description: "Escolher pelo impacto e evolução contínua." },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-16">
        {/* Hero Section*/}
        <section id="hero" className="py-20 text-center">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-7xl mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              👻
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent inline-block animate-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Bugbuster Culture
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              O movimento que transforma qualidade em impacto real
            </motion.p>

            <motion.p
              className="text-2xl font-semibold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Qualidade como atitude, não como fase.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Button size="lg" className="btn-gradient-glow glow-pulse" asChild>
                <Link href="/together" rel="noopener noreferrer">
                  Venha fazer Parte!
                </Link>
              </Button>
              <Button size="lg" className="btn-border-gradient hover:text-white" asChild>
                <Link href="/sobre" rel="noopener noreferrer">
                  Conheça nossa Missão
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Resumo Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Transformando Qualidade em Cultura
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
              O BugbusterCulture é um movimento aberto que une profissionais, comunidades e organizações em torno da
              qualidade como atitude coletiva, presente desde a concepção até a entrega.
            </p>

            {/* Grid animado */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              {[
                { icon: "🎯", title: "Identidade Coletiva", desc: "Une pessoas e organizações em um propósito comum de qualidade como cultura.", color: "from-purple-400 to-pink-500" },
                { icon: "🚀", title: "Protagonismo Descentralizado", desc: "Dá voz e visibilidade à qualidade em todos os níveis organizacionais.", color: "from-blue-400 to-cyan-400" },
                { icon: "🔄", title: "Qualidade no DNA", desc: "Integra qualidade desde a concepção dos projetos, não como fase final.", color: "from-green-400 to-emerald-500" },
                { icon: "🌐", title: "Cultura e Tecnologia", desc: "Reconhece tecnologia como ato social e ecossistema de inovação.", color: "from-orange-400 to-yellow-400" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Card className="
  relative border border-border 
  bg-white dark:bg-[#111] 
  hover:-translate-y-1 transition-transform shadow-md
  flex flex-col h-full min-h-[220px] md:min-h-[260px]
">
                    {/* Barrinha gradiente */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.color}`} />
                    <div className="p-6 flex flex-col flex-grow">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                          <span className="text-xl">{item.icon}</span>
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center">
              <Button className="btn-gradient-glow glow-pulse" asChild>
                <Link href="/sobre">Conheça sobre a causa</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Problems & Solutions Section */}
        <ProblemsSolutions />

        {/* QaaC Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Quality as a Culture (QaaC)</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto">
              QaaC é a base do movimento BugbusterCulture. Não é caçar erros no fim, é clareza desde o início;
              tira a qualidade de um setor isolado e a torna um movimento coletivo, presente em cada decisão, código e conversa.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
              {[
                {
                  icon: "🌐",
                  title: "Distribuído por natureza",
                  desc: "Qualidade não pertence a um time, mas a todos.",
                  gradient: "from-pink-500 via-purple-500 to-indigo-500",
                },
                {
                  icon: "👁️",
                  title: "Visível desde o início",
                  desc: "Testar é projetar clareza desde o começo.",
                  gradient: "from-blue-400 via-cyan-400 to-emerald-400",
                },
                {
                  icon: "🎯",
                  title: "Propósito como motor",
                  desc: "Mais que processo, é atitude e impacto.",
                  gradient: "from-emerald-400 via-teal-400 to-blue-500",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`p-[2px] rounded-2xl bg-gradient-to-r ${card.gradient} w-72 min-h-[260px]
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]`}
                >
                  <div className="bg-background rounded-2xl h-full flex flex-col items-center justify-center p-6 text-center transition-colors duration-300 hover:bg-background/90">
                    {/* Ícone circular */}
                    <div
                      className={`h-14 w-14 flex items-center justify-center rounded-full 
                      text-white text-xl font-bold mb-4 bg-gradient-to-r ${card.gradient}
                      transition-transform duration-300 group-hover:scale-110`}
                    >
                      {card.icon}
                    </div>

                    {/* Título e descrição */}
                    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                    <p className="text-muted-foreground">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12">
              <Button className="btn-gradient-glow glow-pulse" asChild>
                <Link href="/qaac">Ver Cultura/QaaC</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Manifesto Bugbuster
            </h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              {manifestoItems.map((item, index) => {
                // Definição de gradientes diferentes (padrão repetindo)
                const colors = [
                  "from-purple-400 to-pink-500",
                  "from-blue-400 to-cyan-400",
                  "from-green-400 to-emerald-500",
                  "from-orange-400 to-yellow-400",
                  "from-pink-400 to-red-400",
                  "from-indigo-400 to-purple-500",
                ]
                const color = colors[index % colors.length]

                return (
                  <motion.div
                    key={index}
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Card className="
              relative border border-border 
              bg-white dark:bg-[#111] 
              hover:-translate-y-1 transition-transform shadow-md
              flex flex-col h-full min-h-[200px] md:min-h-[220px]
            ">
                      {/* linha gradiente no topo */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${color}`} />
                      <div className="p-6 flex flex-col flex-grow">
                        <CardHeader>
                          <CardTitle className="text-lg font-semibold">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>

            <div className="text-center">
              <Button className="btn-gradient-glow glow-pulse" asChild>
                <Link href="/manifesto">Veja o Manifesto completo</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Próximos Passos Section */}
        <section id="passos" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Próximos Passos</h2>

            {/* Cards centralizados */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
              {[
                {
                  num: "1",
                  title: "Conheça",
                  desc: "Entenda o movimento e seus princípios",
                  gradient: "from-purple-400 via-pink-500 to-red-500",
                },
                {
                  num: "2",
                  title: "Conecte",
                  desc: "Junte-se à comunidade de Bugbusters",
                  gradient: "from-blue-400 via-cyan-400 to-emerald-400",
                },
                {
                  num: "3",
                  title: "Co-crie",
                  desc: "Construa o futuro da qualidade conosco",
                  gradient: "from-pink-400 via-purple-500 to-indigo-500",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center 
                     bg-card border border-border rounded-2xl 
                     shadow-md hover:-translate-y-1 hover:shadow-lg transition-transform
                     w-72 min-h-[260px] p-8"
                >
                  {/* Número circular */}
                  <div
                    className={`h-14 w-14 rounded-full flex items-center justify-center 
                        text-white font-bold text-lg mb-4 bg-gradient-to-r ${step.gradient}`}
                  >
                    {step.num}
                  </div>

                  {/* Título e descrição */}
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12">
              <a
                href="/together"
                className="inline-block px-6 py-3 rounded-xl font-medium 
                   bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 
                   text-white shadow-lg transition-transform hover:scale-105"
              >
                Como se envolver
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 text-center relative">
          <div className="container mx-auto px-4">
            {/* Título com gradiente */}
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Se tem algo estranho no seu sistema... chame os BugBusters!
            </h2>

            {/* Texto */}
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Junte-se ao movimento que faz da qualidade uma atitude coletiva: <br />
              <span className="font-semibold text-foreground">
                Menos burocracia, mais propósito, presença e impacto.
              </span>
            </p>

            <p className="text-xl font-semibold mb-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Construa o próximo capítulo com a gente, seja parte.
            </p>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gradient-glow glow-pulse" asChild>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf5AHdVs4la9mv5eK5VetQXyzcaB-ZjTMt6Wkp-owg1v3l3sQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Seja um Parceiro
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-border-gradient hover:text-white"
                asChild
              >
                <Link
                  href="https://linktr.ee/qa.marcelaamorim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conheça mais
                </Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
