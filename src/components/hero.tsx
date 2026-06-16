import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        {/* Top meta row */}
        <div className="flex items-end justify-between border-b border-foreground/15 pb-4 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
          <span>Based in Rio de Janeiro</span>
          <span className="hidden sm:block">Womenswear · Beauty · Runway</span>
          <span>Est. 2019</span>
        </div>

        <div className="grid items-center gap-8 pt-8 md:grid-cols-12 md:gap-6 md:pt-12">
          {/* Type column */}
          <div className="order-2 md:order-1 md:col-span-7">
            <p className="mb-4 max-w-md font-sans text-sm leading-relaxed text-muted-foreground md:mb-6">
              <span className="font-bold">Modelo</span> brasileira
              trabalhando entre editorial, passarela e campanhas de beleza.
              Presença calorosa, versátil e fotogênica.
            </p>

            <h1 className="font-serif text-[18vw] font-light leading-[0.82] tracking-[-0.03em] text-foreground md:text-[11vw] lg:text-[10rem]">
              <span className="block">Agnes</span>
              <span className="block italic text-accent">Pimentel</span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest text-muted-foreground md:mt-12">
              <span>Alt 176 cm</span>
              <span className="h-3 w-px bg-foreground/20" />
              <span>Cabelo Castanho Claro</span>
              <span className="h-3 w-px bg-foreground/20" />
              <span>Olhos Verdes</span>
            </div>
          </div>

          {/* Image column */}
          <div className="order-1 md:order-2 md:col-span-5">
            <figure className="grain relative aspect-3/4 w-full overflow-hidden bg-secondary">
              <Image
                src="/images/agnes-hero.jpeg"
                alt="Retrato editorial de Agnes Pimentel usando jaqueta de couro preta"
                className="h-full w-full object-cover"
                fill
              />
              <figcaption className="absolute bottom-3 left-3 z-10 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-background/90 mix-blend-difference">
                FW / 26 — Studio
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
