const works = [
  {
    year: "2026",
    title: "Estação Quente",
    client: "Vogue Brasil",
    role: "Editorial de capa",
  },
  {
    year: "2025",
    title: "Leather & Light",
    client: "L'Officiel",
    role: "Beauty story",
  },
  {
    year: "2025",
    title: "Resort Collection",
    client: "Farm Rio",
    role: "Campanha",
  },
  {
    year: "2024",
    title: "Alfaiataria Contemporânea",
    client: "Animale",
    role: "Lookbook",
  },
  {
    year: "2024",
    title: "São Paulo Fashion Week",
    client: "Osklen",
    role: "Passarela",
  },
]

export function Editorials() {
  return (
    <section
      id="editoriais"
      className="bg-foreground py-20 text-background md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-background/20 pb-5 md:mb-16 md:flex-row md:items-end">
          <h2 className="font-serif text-5xl font-light tracking-tight md:text-7xl">
            Selected Work
          </h2>
          <p className="max-w-xs font-mono text-xs uppercase tracking-[0.18em] text-background/60">
            (03) Editoriais, campanhas & passarela
          </p>
        </div>

        <ul>
          {works.map((w) => (
            <li
              key={`${w.year}-${w.title}`}
              className="group grid grid-cols-12 items-baseline gap-2 border-b border-background/20 py-6 transition-colors hover:bg-background/5 md:py-8"
            >
              <span className="col-span-2 font-mono text-xs tracking-widest text-accent md:col-span-1">
                {w.year}
              </span>
              <span className="col-span-10 font-serif text-2xl tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:col-span-6 md:text-4xl">
                {w.title}
              </span>
              <span className="col-span-7 col-start-3 text-sm text-background/70 md:col-span-3 md:col-start-auto md:text-right">
                {w.client}
              </span>
              <span className="col-span-3 text-right font-mono text-[0.65rem] uppercase tracking-[0.18em] text-background/50 md:col-span-2">
                {w.role}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
