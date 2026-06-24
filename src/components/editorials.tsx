const works = [
  {
    year: "2026",
    title: "Campanha Shein",
    client: "SHEIN UK",
    role: "Modelo",
  },
  {
    year: "2024",
    title: "Campanha Shein LA",
    client: "SHEIN",
    role: "Modelo",
  },
  {
    year: "2023-2024",
    title: "Campanha Los Angeles",
    client: "Fashion Nova",
    role: "Modelo",
  },
  {
    year: "2022",
    title: "London Fashion Week",
    client: "",
    role: "Modelo",
  },
  {
    year: "2020-2022",
    title: "Campanha Dercos Vichy",
    client: "L'Oréal Paris",
    role: "Modelo",
  },
  {
    year: "2016",
    title: "Amor de Mãe",
    client: "TV Globo",
    role: "Participação",
  },
  {
    year: "2019",
    title: "New York Fashion Week",
    client: "",
    role: "Modelo",
  },
  {
    year: "2018-2023",
    title: "Campanha Pretty Little Thing UK",
    client: "PLT",
    role: "Modelo",
  },
  {
    year: "2016",
    title: "Sports Illustrated Swimsuit - Miami & New York Editions",
    client: "Sports Illustrated",
    role: "Modelo",
  },
  {
    year: "2015-2018",
    title: "E-commerce & Fashion Campaigns",
    client: "ASOS UK",
    role: "Modelo",
  },
  {
    year: "2015",
    title: "Fashion Campaign",
    client: "Polo Club Italia",
    role: "Modelo",
  }
];

export function Editorials() {
  return (
    <section
      id="editoriais"
      className="bg-foreground py-20 text-background md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-background/20 pb-5 md:mb-16 md:flex-row md:items-end">
          <h2 className="font-serif text-5xl font-light tracking-tight md:text-7xl">
            Trabalhos
          </h2>
          <p className="max-w-xs font-mono text-xs uppercase tracking-[0.18em] text-background/60">
            Editoriais, campanhas & passarela
          </p>
        </div>

        <ul>
          {works.map((w) => (
            <li
              key={`${w.year}-${w.title}`}
              className="group grid grid-cols-12 items-baseline gap-2 border-b border-background/20 py-6 transition-colors hover:bg-background/5 md:py-8"
            >
              <span className="col-span-2 font-mono text-xs tracking-widest text-accent md:col-span-1 select-none">
                {w.year}
              </span>
              <span className="col-span-10 select-none font-serif text-2xl tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:col-span-6 md:text-4xl">
                {w.title}
              </span>
              <span className="col-span-7 select-none col-start-3 text-sm text-background/70 md:col-span-3 md:col-start-auto md:text-right">
                {w.client}
              </span>
              <span className="col-span-3 select-none text-right font-mono text-[0.65rem] uppercase tracking-[0.18em] text-background/50 md:col-span-2">
                {w.role}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
