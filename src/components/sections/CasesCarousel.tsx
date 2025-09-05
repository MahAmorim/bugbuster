"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import {
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useReducedMotion,
  PanInfo,
} from "framer-motion"
import clsx from "clsx"
import { casesQaac } from "@/data/casesQaac"

export type CasesQaacCarouselProps = {
  speed?: number
  autoplay?: boolean
  drag?: boolean
  showControls?: boolean
  edgeFade?: boolean
  showProgressBar?: boolean
  progressStyle?: "bar" | "bounce" | "glow"
  className?: string
  ariaLabel?: string
}

const CARD_MIN_WIDTH = 320
const GAP = 24

export default function CasesQaacCarousel({
  speed = 60,
  autoplay = true,
  drag = true,
  showControls = true,
  edgeFade = true,
  showProgressBar = true,
  progressStyle = "bar",
  className,
  ariaLabel = "Exemplos práticos de Quality as a Culture",
}: CasesQaacCarouselProps) {
  const controls = useAnimation()
  const railRef = useRef<HTMLDivElement | null>(null)
  const x = useMotionValue(0)

  const [paused, setPaused] = useState(false)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [activeIndex, setActiveIndex] = useState(0)

  const reduceMotion = useReducedMotion()
  const inView = useInView(railRef, { margin: "-20% 0px -20% 0px" })

  // Responsividade: quantos cards cabem
  useEffect(() => {
    if (!railRef.current) return
    const update = () => {
      const w = railRef.current!.clientWidth
      const n = Math.max(1, Math.floor((w + GAP) / (CARD_MIN_WIDTH + GAP)))
      setItemsPerView(n)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(railRef.current)
    return () => ro.disconnect()
  }, [])

  const widthPerCard = useMemo(() => {
    const w = railRef.current?.clientWidth ?? 0
    if (!w) return CARD_MIN_WIDTH
    return Math.max(
      CARD_MIN_WIDTH,
      Math.floor((w - GAP * (itemsPerView - 1)) / itemsPerView)
    )
  }, [itemsPerView])

  const items = useMemo(() => [...casesQaac, ...casesQaac], [])
  const TOTAL_WIDTH = useMemo(
    () => (widthPerCard + GAP) * casesQaac.length,
    [widthPerCard]
  )
  const STEP = widthPerCard + GAP

  const totalDuration = TOTAL_WIDTH / Math.max(1, speed)
  const barDuration = totalDuration / casesQaac.length

  // autoplay
  useEffect(() => {
    if (!autoplay || paused || reduceMotion || !inView) return
    let cancelled = false
    const run = async () => {
      while (!cancelled) {
        await controls.start({
          x: -TOTAL_WIDTH,
          transition: { duration: totalDuration, ease: "linear" },
        })
        await controls.set({ x: 0 })
      }
    }
    run()
    return () => {
      cancelled = true
      controls.stop()
    }
  }, [autoplay, paused, reduceMotion, inView, totalDuration, TOTAL_WIDTH, controls])

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const vx = info.velocity.x ?? 0
    controls
      .start({
        x: `+=${vx * 0.2}`,
        transition: { type: "inertia", velocity: vx, power: 0.8, timeConstant: 350 },
      })
      .then(() => setPaused(false))
  }

  const handleUpdate = (latest: { x?: number }) => {
    const currentX = latest?.x ?? 0
    if (currentX <= -TOTAL_WIDTH) controls.set({ x: 0 })
    if (currentX > 0)
      controls.set({ x: -TOTAL_WIDTH + (currentX % TOTAL_WIDTH) })

    const absX = Math.abs(currentX) % TOTAL_WIDTH
    const slideIndex = Math.round(absX / STEP) % casesQaac.length
    setActiveIndex(slideIndex)
  }

  const jump = async (dir: 1 | -1) => {
    await controls.stop()
    setPaused(true)
    const current = x.get()
    const target = current + dir * -STEP
    await controls.start({ x: target, transition: { duration: 0.35, ease: "easeOut" } })
    setPaused(false)
  }

  // classes reaproveitadas
  const btnClass =
    "h-10 w-10 flex items-center justify-center rounded-full bg-background text-foreground ring-1 ring-border shadow-md hover:bg-primary hover:text-primary-foreground transition-colors"

  // renderiza indicador de progresso
  const renderIndicator = (i: number) => {
    if (progressStyle === "bar") {
      return (
        <div key={i} className="h-2 w-10 rounded-full bg-muted overflow-hidden">
          {i === activeIndex && (
            <motion.div
              className="h-full bg-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: barDuration, ease: "linear" }}
              style={{ originX: 0 }}
            />
          )}
        </div>
      )
    }
    if (progressStyle === "bounce") {
      return (
        <motion.span
          key={i}
          className={clsx(
            "h-3 w-3 rounded-full",
            i === activeIndex ? "bg-primary" : "bg-muted"
          )}
          animate={i === activeIndex ? { scale: [1, 1.4, 1] } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        />
      )
    }
    if (progressStyle === "glow") {
      return (
        <span
          key={i}
          className={clsx(
            "h-3 w-3 rounded-full transition-colors",
            i === activeIndex
              ? "bg-primary shadow-[0_0_8px_rgba(59,130,246,0.7)]"
              : "bg-muted"
          )}
        />
      )
    }
    return null
  }

  return (
    <section className={clsx("py-20 bg-muted/30", className)}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          QaaC em ação: exemplos práticos
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
          Veja como aplicar o QaaC para acelerar com confiança e reduzir retrabalho.<br />
          Deslize pelos exemplos abaixo.
        </p>

        <div
          ref={railRef}
          className={clsx(
            "relative mx-auto max-w-7xl overflow-visible",
            edgeFade &&
            "[mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)]"
          )}
          role="region"
          aria-roledescription="carrossel"
          aria-label={ariaLabel}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") jump(1)
            if (e.key === "ArrowLeft") jump(-1)
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {showControls && (
            <>
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 z-20">
                <button
                  type="button"
                  aria-label="Anterior"
                  className={btnClass}
                  onClick={() => jump(-1)}
                >
                  ←
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 z-20">
                <button
                  type="button"
                  aria-label="Próximo"
                  className={btnClass}
                  onClick={() => jump(1)}
                >
                  →
                </button>
              </div>
            </>
          )}

          <motion.div
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            animate={controls}
            initial={{ x: 0 }}
            style={{ x }}
            drag={drag ? "x" : false}
            dragConstraints={{ left: -TOTAL_WIDTH, right: 0 }}
            dragElastic={0.02}
            onDragStart={() => setPaused(true)}
            onDragEnd={onDragEnd}
            onUpdate={(latest) => handleUpdate(latest as { x?: number })}
          >
            {items.map((c, i) => (
              <div
                key={`${c.title}-${i}`}
                className="flex-shrink-0 p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 
                  transition-transform hover:-translate-y-1"
                style={{ minWidth: widthPerCard, width: widthPerCard }}
                tabIndex={0}
              >
                <div className="bg-background rounded-2xl p-6 h-[clamp(220px,26vh,280px)] flex flex-col justify-between text-left 
                                transition-all duration-200 hover:shadow-xl hover:brightness-105">
                  <div className="text-3xl">{c.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                    <p className="text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {showProgressBar && (
          <div className="mt-8 flex justify-center gap-3">
            {casesQaac.map((_, i) => renderIndicator(i))}
          </div>
        )}

        {/* CTA final */}
        <div className="mt-12 text-center">
          <a
            href="/impacto"
            className="inline-block px-6 py-3 rounded-xl font-medium 
                     bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 
                     text-white shadow-lg transition-transform hover:scale-105"
          >
            Ver impacto do QaaC
          </a>
        </div>
      </div>
    </section>
  )
}
