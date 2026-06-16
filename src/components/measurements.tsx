const stats = [
  { label: "Altura", value: "176 cm" },
  { label: "Busto", value: "83 cm" },
  { label: "Cintura", value: "64 cm" },
  { label: "Quadril", value: "97 cm" },
  { label: "Calçado", value: "39 BR" },
  { label: "Cabelo", value: "Castanhos Claros" },
  { label: "Olhos", value: "Verdes" },
  { label: "Manequim", value: "36 / 2 US" },
]

export function Measurements() {
  return (
    <section
      id="medidas"
      className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-6">
        {/* Sobre */}
        <div id="sobre" className="md:col-span-7">
          <p className="mb-6 font-mono font-bold text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Sobre
          </p>
          <p className="font-serif text-3xl font-light leading-1.25 tracking-tight md:text-5xl md:leading-[1.2]">
            Agnes constrói sua trajetória global com a versatilidade de quem transita da <span className="italic text-yellow-100">passarela</span> aos grandes centros da moda. Naturalidade que atravessa fronteiras.
          </p>

          <div className="mt-10 max-w-xl space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Descoberta ainda na adolescência no Rio de Janeiro, Agnes Pimentel construiu uma sólida carreira internacional. Com passagens por mercados exigentes como Alemanha, Itália, Turquia e EUA, foi em Londres que se estabeleceu no concorrido mercado comercial de moda.
            </p>
            <p>
              Em seu currículo, destacam-se marcos como as semanas de moda de Londres e Nova York, campanhas globais para marcas como ASOS e presença na aclamada Sports Illustrated Swimsuit Edition, além de menções na Forbes e MTV UK.
            </p>
            <p>
             Profundamente conectada às suas raízes cariocas e à energia do Carnaval — que enxerga como uma potente extensão da moda —, Agnes alia a precisão técnica de anos no exterior à expressividade e calor humano da sua cultura.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {["Comercial", "Fashion Week", "Campanha Global", "Swimwear", "Carnaval"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-foreground/25 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-foreground/80 select-none"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Medidas */}
        <div className="md:col-span-5">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Digitais / Stats
          </p>
          <dl className="grid grid-cols-2 border-l border-t border-foreground/15">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border-b border-r border-foreground/15 px-5 py-6"
              >
                <dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="mt-2 font-serif text-3xl font-light tracking-tight">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}