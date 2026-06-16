"use client"

import { useEffect, useState } from "react"

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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = active !== null ? "hidden" : ""
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [active])

  return (
    <section id="book" className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
      <div className="mb-10 flex flex-col justify-between gap-4 border-b border-foreground/15 pb-5 md:mb-16 md:flex-row md:items-end">
        <h2 className="font-serif text-5xl font-light tracking-tight md:text-7xl">
          The Book
        </h2>
        <p className="max-w-xs font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          (02) Seleção de imagens — toque para ampliar
        </p>
      </div>

      <div className="grid auto-rows-auto grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
        {shots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setActive(i)}
            className={`grain group relative w-full overflow-hidden bg-secondary ${shot.className}`}
          >
            <img
              src={shot.src || "/placeholder.svg"}
              alt={shot.alt}
              className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />
            <span className="absolute bottom-3 left-3 z-10 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {shot.tag}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={shots[active].alt}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/95 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Fechar"
            className="absolute right-5 top-5 font-mono text-xs uppercase tracking-[0.2em] text-background/80 hover:text-background"
          >
            Fechar ✕
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[88vh] max-w-3xl flex-col items-center"
          >
            <img
              src={shots[active].src || "/placeholder.svg"}
              alt={shots[active].alt}
              className="max-h-[80vh] w-auto object-contain"
            />
            <figcaption className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-background/70">
              {shots[active].tag}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
