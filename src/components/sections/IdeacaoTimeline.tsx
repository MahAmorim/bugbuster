// app/sobre/IdeacaoTimeline.tsx
"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import clsx from "clsx"

export type TimelineItem = {
  id: string
  date?: string
  title: string
  lead: string
  body?: string
  icon?: string
  linkHref?: string
  linkLabel?: string
}

export default function IdeacaoTimeline({
  items,
  className,
}: {
  items: TimelineItem[]
  title?: string
  className?: string
}) {
  return (
    <section
      className={clsx("py-20 relative", className)}
      aria-labelledby="ideacao-heading"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Timeline */}
        <div className="relative">
          {/* center line */}
          <div
            aria-hidden
            className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full 
                       bg-gradient-to-b from-purple-400 via-blue-500 to-cyan-400 opacity-60"
          />

          <ol role="list" className="space-y-10 md:space-y-14">
            {items.map((item, i) => (
              <TimelineRow
                key={item.id}
                item={item}
                align={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </ol>
        </div>

        {/* Fecho leve */}
<div className="mt-12 text-center">
  <p className="text-base text-muted-foreground mb-4">
    Quer ver a ideação virando prática?
  </p>
  <div className="flex flex-col sm:flex-row gap-3 justify-center">
    <Link
      href="/qaac"
      className="px-6 py-3 rounded-xl font-medium btn-gradient-glow glow-pulse text-white shadow-lg hover:scale-105 transition-transform"
    >
      Explore o QaaC
    </Link>
    <Link
      href="/manifesto"
      className="px-6 py-3 rounded-xl font-medium btn-border-gradient hover:text-white transition-colors"
    >
      Leia o Manifesto
    </Link>
  </div>
</div>



      </div>
    </section>
  )
}

function TimelineRow({
  item,
  align = "left",
}: {
  item: TimelineItem
  align?: "left" | "right"
}) {
  const ref = useRef<HTMLLIElement | null>(null)
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false })
  const reduce = useReducedMotion()

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 12 }}
      transition={{ duration: reduce ? 0 : 0.5 }}
      className="relative p-6 rounded-2xl border border-transparent 
                 bg-background shadow-md 
                 hover:shadow-xl hover:-translate-y-1 transition-all 
                 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10"
    >
      {/* connector dot */}
      <span
        aria-hidden
        className={clsx(
          "hidden md:block absolute top-6 h-3 w-3 rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 ring-4 ring-background shadow-md",
          align === "left" ? "right-[-25px]" : "left-[-25px]"
        )}
      />
      <div className="flex items-start gap-3">
        {item.icon && (
          <span
            className="text-xl p-2 rounded-full 
                       bg-gradient-to-br from-purple-400 via-blue-500 to-cyan-400 
                       text-white shadow-md"
            aria-hidden
          >
            {item.icon}
          </span>
        )}
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            {item.date && (
              <time className="text-xs text-muted-foreground ring-1 ring-border px-2 py-0.5 rounded-full">
                {item.date}
              </time>
            )}
          </div>
          <p className="text-foreground mt-1">{item.lead}</p>
          {item.body && (
            <p className="text-sm text-muted-foreground mt-2">{item.body}</p>
          )}
          {item.linkHref && item.linkLabel && (
            <Link
              href={item.linkHref}
              target={item.linkHref.startsWith("http") ? "_blank" : undefined}
              rel={
                item.linkHref.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="inline-block mt-3 text-sm font-medium 
                         text-primary hover:underline underline-offset-2"
            >
              {item.linkLabel} →
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )

  return (
    <li ref={ref} className="md:grid md:grid-cols-2 md:gap-8 items-start">
      <div
        className={clsx(
          "md:col-span-1",
          align === "right" && "md:order-2"
        )}
      >
        {card}
      </div>
      <div
        className={clsx(
          "hidden md:block md:col-span-1",
          align === "right" ? "md:order-1" : ""
        )}
      />
    </li>
  )
}
