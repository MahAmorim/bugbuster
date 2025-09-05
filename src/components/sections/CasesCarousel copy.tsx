"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { casesQaac } from "@/data/casesQaac"

export default function CasesQaacCarousel() {
  const [current, setCurrent] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(3)
  const [paused, setPaused] = useState(false)
  const railRef = useRef<HTMLDivElement | null>(null)

  const CARD_MIN_WIDTH = 320
  const GAP = 24

  // Responsividade dinâmica
  useEffect(() => {
    if (!railRef.current) return
    const container = railRef.current

    const update = () => {
      const w = container.clientWidth
      const n = Math.max(1, Math.floor((w + GAP) / (CARD_MIN_WIDTH + GAP)))
      setItemsPerSlide(n)
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(container)
    return () => ro.disconnect()
  }, [])

  const totalSlides = Math.ceil(casesQaac.length / itemsPerSlide)

  // Mantém índice válido
  useEffect(() => {
    setCurrent((prev) => Math.min(prev, Math.max(0, totalSlides - 1)))
  }, [totalSlides])

  const goTo = useCallback(
    (idx: number) => setCurrent((idx + totalSlides) % totalSlides),
    [totalSlides]
  )
  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Autoplay infinito
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      next()
    }, 4000)
    return () => clearInterval(id)
  }, [next, paused])

  // Faixa visível
  const sliceStart = current * itemsPerSlide
  const sliceEnd = sliceStart + itemsPerSlide
  const visible = casesQaac.slice(sliceStart, sliceEnd)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">QaaC em ação</h2>

        <div
          className="relative mx-auto max-w-7xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Botão Prev */}
          <button
            aria-label="Anterior"
            onClick={prev}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 p-2 shadow-md hover:scale-110 transition"
          >
            ◀
          </button>

          {/* Faixa animada */}
          <motion.div
            ref={railRef}
            className="flex gap-6 items-stretch overflow-hidden"
            animate={{ x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {visible.map((c, i) => (
              <motion.div
                key={`${c.title}-${i}`}
                whileHover={{ scale: 1.05 }}
                className={`flex-1 min-w-[${CARD_MIN_WIDTH}px] max-w-[420px] p-[2px] rounded-2xl bg-gradient-to-r ${c.color}`}
                style={{ minWidth: CARD_MIN_WIDTH }}
              >
                <div className="bg-background rounded-2xl p-6 h-[260px] flex flex-col justify-between text-left">
                  <div className="text-3xl">{c.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                    <p className="text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Botão Next */}
          <button
            aria-label="Próximo"
            onClick={next}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 p-2 shadow-md hover:scale-110 transition"
          >
            ▶
          </button>
        </div>

        {/* Indicadores */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para o slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                current === i ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
