"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"

type Shot = {
  src: string
  alt: string
  tag: string
  className: string
}

const shots: Shot[] = [
  {
    src: "/images/editorial-full.png",
    alt: "Editorial de corpo inteiro com casaco bege",
    tag: "Editorial — Bone",
    className: "md:col-span-5 md:row-span-2 aspect-[3/4]",
  },
  {
    src: "/images/agnes-hero.jpeg",
    alt: "Retrato de Agnes Pimentel com jaqueta de couro",
    tag: "Beauty — Studio",
    className: "md:col-span-4 aspect-[4/5]",
  },
  {
    src: "/images/editorial-bw.png",
    alt: "Retrato editorial em preto e branco",
    tag: "P&B — Profile",
    className: "md:col-span-3 aspect-[3/4]",
  },
  {
    src: "/images/editorial-studio.png",
    alt: "Editorial de estúdio com blazer preto",
    tag: "Tailoring — Taupe",
    className: "md:col-span-4 aspect-[4/5]",
  },
  {
    src: "/images/editorial-outdoor.png",
    alt: "Editorial externo durante o golden hour",
    tag: "Outdoor — Golden",
    className: "md:col-span-3 aspect-[3/4]",
  },
]

export function PortfolioBook() {
  const [active, setActive] = useState<number | null>(null)

  const handleNext = useCallback(() => {
    setActive((current) => (current === null ? null : (current + 1) % shots.length))
  }, [])

  const handlePrev = useCallback(() => {
    setActive((current) => (current === null ? null : (current - 1 + shots.length) % shots.length))
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null)
      if (e.key === "ArrowRight" && active !== null) handleNext()
      if (e.key === "ArrowLeft" && active !== null) handlePrev()
    }

    if (active !== null) {
      document.addEventListener("keydown", onKey)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [active, handleNext, handlePrev])

  return (
    <section id="book" className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
      {/* Header */}
      <div className="mb-10 flex flex-col justify-between gap-4 border-b border-foreground/15 pb-5 md:mb-16 md:flex-row md:items-end">
        <h2 className="font-serif text-5xl font-light tracking-tight md:text-7xl">
          The Book
        </h2>
        <p className="max-w-xs font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="font-bold">Seleção de imagens</span> — toque para ampliar
        </p>
      </div>

      {/* Grid */}
      <div className="grid auto-rows-auto grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
        {shots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setActive(i)}
            className={`grain group relative w-full overflow-hidden bg-secondary ${shot.className} cursor-zoom-in`}
          >
            <Image
              src={shot.src || "/placeholder.svg"}
              alt={shot.alt}
              className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              fill
            />
            <span className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />
            <span className="absolute bottom-3 left-3 z-10 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {shot.tag}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox Premium */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={shots[active].alt}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-md md:p-10 cursor-zoom-out animate-in fade-in duration-200"
        >
          {/* Top Controls */}
          <div className="absolute right-5 top-5 z-110 flex items-center gap-6 md:right-10 md:top-10">
            <p className="hidden font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/50 md:block">
              {active + 1} / {shots.length}
            </p>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-white/15 hover:text-white cursor-pointer"
            >
              <span className="sr-only">Fechar</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Nav: Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePrev()
            }}
            className="absolute left-2 top-1/2 z-110 -translate-y-1/2 p-4 text-white/40 transition-colors hover:text-white md:left-8 cursor-pointer"
            aria-label="Imagem anterior"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* Nav: Next */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            className="absolute right-2 top-1/2 z-110 -translate-y-1/2 p-4 text-white/40 transition-colors hover:text-white md:right-8 cursor-pointer"
            aria-label="Próxima imagem"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          {/* Image Figure */}
          <figure
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-full w-full max-w-300 flex-col items-center justify-center cursor-default"
          >
            {/* Wrapper crucial para o next/image + fill funcionar corretamente sem quebrar layout */}
            <div className="relative h-[75vh] w-full md:h-[85vh]">
              <Image
                src={shots[active].src || "/placeholder.svg"}
                alt={shots[active].alt}
                className="object-contain"
                quality={100}
                priority
                fill
              />
            </div>
            <figcaption className="absolute bottom-8 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/60 md:bottom-2">
              {shots[active].tag}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}