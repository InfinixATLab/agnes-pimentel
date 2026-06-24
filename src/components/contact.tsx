export function Contact() {
  const year = new Date().getFullYear()

  return (
    <footer id="contato" className="border-t border-foreground/15">
      <div className="mx-auto max-w-[1600px] p-5">
        {/* E-mail e Redes Sociais lado a lado no desktop */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Booking / Email */}
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              Booking
            </p>
            <a
              href="mailto:contato@agnespimentel.com.br"
              className="mt-2 block text-sm transition-colors hover:text-foreground"
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
                className="group flex items-center gap-1 transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
                <span className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground">↗</span>
              </a>

              <a
                href="https://www.tiktok.com/@agnesspimentel"
                className="group flex items-center gap-1 transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
                <span className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé (Copyright e Localização) */}
        <div className="mt-16 flex flex-col justify-between gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground md:flex-row">
          <span>© {year} Agnes Pimentel</span>
          <span>Rio de Janeiro</span>
        </div>
      </div>
    </footer>
  )
}