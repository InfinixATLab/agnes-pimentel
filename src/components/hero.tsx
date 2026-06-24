import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid items-center gap-8 pt-8 md:grid-cols-12 md:gap-6 md:pt-12">
          {/* Type column */}
          <div className="order-2 md:order-1 md:col-span-7">
            <h1 className="font-serif text-[18vw] font-light leading-[0.82] tracking-[-0.03em] text-foreground md:text-[11vw] lg:text-[10rem]">
              <span className="block">Agnes</span>
              <span className="block italic text-accent">Pimentel</span>
            </h1>
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
