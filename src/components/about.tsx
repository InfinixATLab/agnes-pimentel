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

export function About() {
  return (
    <section
      id="sobre"
      className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32"
    >
      {/* Header */}
      <div className="mb-10 flex flex-col justify-between gap-4 border-b border-foreground/15 pb-5 md:mb-16 md:flex-row md:items-end">
        <h2 className="font-serif text-5xl font-light tracking-tight md:text-7xl">
          Sobre
        </h2>
      </div>

      <p className="font-serif text-3xl font-light leading-1.25 tracking-tight md:text-5xl md:leading-[1.2]">
        Da passarela à avenida.
      </p>

      <div className="mt-10 space-y-4 text-base leading-relaxed text-muted-foreground">
        <p>
          Agnes Pimentel é modelo brasileira com atuação internacional em moda, publicidade e carnaval. A carreira começou ainda na adolescência, depois de um desfile que abriu as portas para o mercado profissional, e ganhou contornos internacionais aos dezoito anos, com a mudança para a Europa.
        </p>
        <p>
          Ao longo do caminho, passagens por Alemanha, Turquia, Milão, Londres e Manchester, além de temporadas nos Estados Unidos, entre Los Angeles, Miami e Nova York. Foi em Londres que a carreira de Agnes se consolidou de forma mais sólida, com uma carteira fixa de clientes no mercado comercial de moda. Participações na London Fashion Week e na New York Fashion Week, presença no casting do Sports Illustrated Swimsuit, campanhas para a ASOS e menções na MTV UK e na Forbes marcam essa trajetória.
        </p>
        <p>
          Foi o carnaval que trouxe um novo sentido de raiz. A estreia de Agnes na Sapucaí pela Imperatriz Leopoldinense, em 2025, não foi só um desfile, foi reencontro. Em pouco mais de um ano, veio o posto de musa da escola, consolidando uma relação construída com verdade, sem personagem.
        </p>
        <p>
          Entre passarelas internacionais e a avenida, existe uma trajetória de mulher que decide por si, que escolhe onde quer estar e que entende o carnaval como espaço de pertencimento, expressão e identidade, não como espetáculo vazio. Moda e samba se encontram o tempo todo: imagem, performance, estética e criatividade vividas com inteireza, sem precisar provar nada a ninguém.
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
    </section >
  )
}