"use client"

export default function ProblemsSolutions() {
  const problemas = [
    {
      icon: "🛑",
      title: "Processos engessados",
      desc: "Qualidade tratada apenas como etapa final de aprovação.",
    },
    {
      icon: "⚠️",
      title: "Testes sem propósito",
      desc: "Automatizações que não entregam valor real.",
    },
  ]

  const solucoes = [
    {
      icon: "💪",
      title: "Cultura Antifrágil",
      desc: "Transformar falhas em aprendizado e evolução contínua.",
    },
    {
      icon: "🎯",
      title: "Testes com intenção",
      desc: "Cada teste tem propósito e impacto no negócio.",
    },
  ]

  // Gradientes fixos (iguais aos que você já usa nos outros cards)
  const gradWarm = "from-red-400 via-orange-400 to-yellow-400"
  const gradCold = "from-blue-400 via-cyan-400 to-emerald-400"

  return (
<section className="py-20 bg-muted/30">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-12">Para Toda Dor Uma Solução</h2>

    {/* <-- mantém tudo centrado e os itens alinhados no topo */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
      
      {/* Coluna: Problemas — volta para text-center */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
          🚨 Os Problemas
        </h3>
        <p className="text-muted-foreground mb-8">
          O que vemos todos os dias no mundo real.
        </p>

        <div className="space-y-6">
          {problemas.map((p, i) => (
            <div
              key={i}
              className={`w-full p-[2px] rounded-2xl bg-gradient-to-r ${gradWarm}
                          transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              {/* <-- só o miolo fica à esquerda */}
              <div className="bg-background rounded-2xl p-6 h-full text-left">
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  <span>{p.icon}</span> {p.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coluna: Resposta — idem, centralizada; cards com miolo à esquerda */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          💡 A Resposta
        </h3>
        <p className="text-muted-foreground mb-8">
          O que a BugBuster propõe como alternativa.
        </p>

        <div className="space-y-6">
          {solucoes.map((s, i) => (
            <div
              key={i}
              className={`w-full p-[2px] rounded-2xl bg-gradient-to-r ${gradCold}
                          transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="bg-background rounded-2xl p-6 h-full text-left">
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  <span>{s.icon}</span> {s.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>
  )
}
