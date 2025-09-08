// data/ideacao.ts
import { type TimelineItem } from "@/components/sections/IdeacaoTimeline"

export const ideacaoItems: TimelineItem[] = [
  {
    id: "dor",
    date: "Origens",
    title: "A dor",
    lead: "Qualidade reduzida a fase final e checklists invisíveis.",
    body: "Conversas e palcos de comunidade mostraram o custo: retrabalho, decisões opacas e baixa confiança.",
    icon: "🩹",
  },
  {
    id: "inquietacao",
    title: "Inquietação",
    lead: "Se o problema é cultural, a resposta também precisa ser.",
    body: "E se qualidade fosse mentalidade coletiva — visível desde a ideia até a entrega?",
    icon: "💭",
  },
  {
    id: "formulacao",
    title: "Formulação",
    lead: "Quality as a Culture (QaaC).",
    body: "Distribuída por natureza, visível desde o início, propósito como motor e evolução contínua.",
    icon: "🎯",
    linkHref: "/qaac",
    linkLabel: "Conheça o QaaC",
  },
  {
    id: "movimento",
    title: "Do insight ao movimento",
    lead: "Da faísca individual à chama coletiva.",
    body: "Bugbuster Culture hoje é um think tank aberto para ensaios, experimentos e troca entre comunidades.",
    icon: "🚀",
  },
]
