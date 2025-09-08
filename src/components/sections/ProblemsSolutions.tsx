"use client"

import { problemas, solucoes, gradients, type ProblemSolutionItem } from "@/data/problemsSolutions"
import clsx from "clsx"

type ColumnProps = {
  title: string
  subtitle: string
  items: ProblemSolutionItem[]
  gradient: string
  className?: string
}

function GradientCardList({ title, subtitle, items, gradient, className }: ColumnProps) {
  return (
    <div className={clsx("text-center", className)}>
      <h3 className={clsx("text-2xl font-bold mb-2 bg-gradient-to-r", gradient, "bg-clip-text text-transparent")}>
        {title}
      </h3>
      <p className="text-muted-foreground mb-8">{subtitle}</p>

      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.title}
            className={clsx(
              "w-full p-[2px] rounded-2xl bg-gradient-to-r",
              gradient,
              "transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            )}
          >
            <div className="bg-background rounded-2xl p-6 h-full text-left">
              <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                <span aria-hidden="true">{item.icon}</span> {item.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

type ProblemsSolutionsProps = {
  problemsTitle?: string
  problemsSubtitle?: string
  solutionsTitle?: string
  solutionsSubtitle?: string
  problems?: ProblemSolutionItem[]
  solutions?: ProblemSolutionItem[]
}

export default function ProblemsSolutions({
  problemsTitle = "🚨 Os Problemas",
  problemsSubtitle = "O que vemos todos os dias no mundo real.",
  solutionsTitle = "💡 A Resposta",
  solutionsSubtitle = "O que a BugBuster propõe como alternativa.",
  problems = problemas,
  solutions = solucoes,
}: ProblemsSolutionsProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Para Toda Dor Uma Solução</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
          <GradientCardList
            title={problemsTitle}
            subtitle={problemsSubtitle}
            items={problems}
            gradient={gradients.warm}
          />
          <GradientCardList
            title={solutionsTitle}
            subtitle={solutionsSubtitle}
            items={solutions}
            gradient={gradients.cold}
          />
        </div>
      </div>
    </section>
  )
}
