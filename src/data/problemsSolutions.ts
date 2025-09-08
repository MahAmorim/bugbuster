// Tipos compartilhados
export type ProblemSolutionItem = {
  icon: string
  title: string
  desc: string
}

// Dados (pode crescer sem tocar no componente)
export const problemas: ProblemSolutionItem[] = [
  { icon: "🛑", title: "Processos engessados", desc: "Qualidade tratada apenas como etapa final de aprovação." },
  { icon: "⚠️", title: "Testes sem propósito", desc: "Automatizações que não entregam valor real." },
]

export const solucoes: ProblemSolutionItem[] = [
  { icon: "💪", title: "Cultura Antifrágil", desc: "Transformar falhas em aprendizado e evolução contínua." },
  { icon: "🎯", title: "Testes com intenção", desc: "Cada teste tem propósito e impacto no negócio." },
]

// Tokens de gradiente centralizados
export const gradients = {
  warm: "from-red-400 via-orange-400 to-yellow-400",
  cold: "from-blue-400 via-cyan-400 to-emerald-400",
} as const
