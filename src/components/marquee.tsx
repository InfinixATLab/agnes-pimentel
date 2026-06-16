const agencies = [
  "Vogue Brasil",
  "Elle",
  "Harper's Bazaar",
  "Osklen",
  "Animale",
  "Farm Rio",
  "L'Officiel",
  "Reserva",
]

export function Marquee() {
  const items = [...agencies, ...agencies]
  return (
    <section
      aria-label="Marcas e publicações"
      className="border-y border-foreground/15 bg-foreground py-5 text-background md:py-7"
    >
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
          {items.map((name, i) => (
            <span key={i} className="flex items-center">
              <span className="px-8 font-serif text-2xl italic md:text-4xl">
                {name}
              </span>
              <span className="text-lg text-accent md:text-2xl" aria-hidden="true">
                &#47;&#47;
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
