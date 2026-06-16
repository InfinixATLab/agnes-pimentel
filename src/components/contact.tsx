export function Contact() {
  const year = new Date().getFullYear()

  return (
    <footer id="contato" className="border-t border-foreground/15">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <p className="mb-8 font-mono text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          Representação & Booking
        </p>

        <a
          href="contato@agnespimentel.com.br"
          className="group block font-serif text-[12vw] font-light leading-[0.9] tracking-tight md:text-[8rem]"
        >
          <span className="inline-block transition-transform duration-500 group-hover:-translate-y-1">
            Vamos
          </span>{" "}
          <span className="inline-block italic text-yellow-100 transition-transform duration-500 group-hover:-translate-y-1">
            trabalhar
          </span>
        </a>

        {/* E-mail e Redes Sociais lado a lado no desktop */}
        <div className="mt-12 flex flex-col justify-between gap-10 border-t border-foreground/15 pt-10 md:flex-row">
          
          {/* Booking / Email */}
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              Booking
            </p>
            <a
              href="contato@agnespimentel.com.br"
              className="mt-2 block text-sm transition-colors hover:text-gray-300"
            >
              contato@agnespimentel.com.br
            </a>
          </div>

          {/* Social */}
          <div className="md:text-right">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              Social
            </p>
            <div className="mt-2 flex gap-6 text-sm md:justify-end">
              <a
                href="https://www.instagram.com/agnesspimentel/"
                className="transition-colors hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram ↗
              </a>

              <a
                href="https://www.tiktok.com/@agnesspimentel"
                className="transition-colors hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok ↗
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé (Copyright e Localização) */}
        <div className="mt-16 flex flex-col justify-between gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground md:flex-row">
          <span>© {year} Agnes Pimentel</span>
          <span>Rio de Janeiro · Worldwide</span>
        </div>
      </div>
    </footer>
  )
}