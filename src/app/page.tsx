import { SiteHeader } from "../components/site-header";
import { Hero } from "../components/hero"
import { Marquee } from "../components/marquee"
import { PortfolioBook } from "../components/portfolio-books"
import { Editorials } from "../components/editorials"
import { Measurements } from "../components/measurements"
import { Contact } from "../components/contact"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Marquee />
      <PortfolioBook />
      <Editorials />
      <Measurements />
      <Contact />
    </main>
  )
}
