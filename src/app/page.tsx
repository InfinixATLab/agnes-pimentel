import { SiteHeader } from "../components/site-header";
import { Hero } from "../components/hero"
import { PortfolioBook } from "../components/portfolio-books"
import { Editorials } from "../components/editorials"
import { About } from "../components/about"
import { Contact } from "../components/contact"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <PortfolioBook />
      <About />
      <Editorials />
      <Contact />
    </main>
  )
}
