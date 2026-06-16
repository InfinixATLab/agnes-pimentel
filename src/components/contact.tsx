export function Contact() {
  const year = new Date().getFullYear()

  return (
    <footer id="contato" className="border-t border-foreground/15">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          (05) Representação & Booking
        </p>

        <a
          href="mailto:booking@agnespimentel.com"
          className="group block font-serif text-[12vw] font-light leading-[0.9] tracking-tight md:text-[8rem]"
        >
          <span className="inline-block transition-transform duration-500 group-hover:-translate-y-1">
            Vamos
          </span>{" "}
          <span className="inline-block italic text-accent transition-transform duration-500 group-hover:-translate-y-1">
            trabalhar
          </span>
        </a>

        <div className="mt-12 grid gap-10 border-t border-foreground/15 pt-10 md:grid-cols-4">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              Booking
            </p>
            <a
              href="mailto:booking@agnespimentel.com"
              className="mt-2 block text-sm transition-colors hover:text-accent"
            >
              booking@agnespimentel.com
            </a>
          </div>
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              Agência
            </p>
            <p className="mt-2 text-sm">Way Model Management — SP</p>
          </div>
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              Telefone
            </p>
            <a
              href="tel:+5511999998888"
              className="mt-2 block text-sm transition-colors hover:text-accent"
            >
              +55 11 99999-8888
            </a>
          </div>
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              Social
            </p>
            <div className="mt-2 flex flex-col gap-1 text-sm">
              <a
                href="https://instagram.com"
                className="transition-colors hover:text-accent"
              >
                Instagram ↗
              </a>
              <a
                href="https://tiktok.com"
                className="transition-colors hover:text-accent"
              >
                TikTok ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground md:flex-row">
          <span>© {year} Agnes Pimentel</span>
          <span>São Paulo · Worldwide</span>
        </div>
      </div>
    </footer>
  )
}
