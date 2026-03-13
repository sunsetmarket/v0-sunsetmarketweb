import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { BrandsSection } from "@/components/brands-section"
import { VisitorsSection } from "@/components/visitors-section"
import { CollaboratorsSection } from "@/components/collaborators-section"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <BrandsSection />
      <VisitorsSection />
      <CollaboratorsSection />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
