const stats = [
  { label: "Altura", value: "178 cm" },
  { label: "Busto", value: "82 cm" },
  { label: "Cintura", value: "61 cm" },
  { label: "Quadril", value: "89 cm" },
  { label: "Calçado", value: "38 BR" },
  { label: "Cabelo", value: "Castanho" },
  { label: "Olhos", value: "Castanhos" },
  { label: "Manequim", value: "36 / 4 US" },
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
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            (04) Sobre
          </p>
          <p className="font-serif text-3xl font-light leading-[1.25] tracking-tight md:text-5xl md:leading-[1.2]">
            Agnes constrói personagens diante das lentes — do{" "}
            <span className="italic text-accent">minimalismo</span> da
            alfaiataria à intensidade de um beauty close. Naturalidade que
            atravessa a câmera.
          </p>

          <div className="mt-10 max-w-xl space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Descoberta em 2019, passou a transitar entre editoriais
              brasileiros e campanhas internacionais. Sua versatilidade vai do
              clássico ao contemporâneo, sempre com presença calorosa e olhar
              expressivo.
            </p>
            <p>
              Fluente em português, inglês e espanhol. Disponível para viagens,
              direção criativa e colaborações de longo prazo.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {["Editorial", "Beauty", "Runway", "Campanha", "E-commerce"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-foreground/25 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-foreground/80"
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
