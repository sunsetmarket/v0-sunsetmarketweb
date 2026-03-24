import Image from "next/image"

const aboutText = {
  title: "SOBRE NOSOTROS",
  paragraphs: [
    "Sunset Market es una organizadora de eventos especializada en la creación de markets experienciales que van mucho más allá del mercadillo tradicional.",
    "Diseñamos espacios vivos donde convergen marcas emergentes, música, gastronomía y actividades interactivas, generando experiencias memorables tanto para expositores como para el visitantes.",
    "Con más de 10 ediciones realizadas en la Costa del Sol, nos hemos consolidado como un referente en la organización de markets que priorizan la experiencia del consumidor, el cuidado del entorno y la conexión real entre marcas y personas."
  ]
}

export function About() {
  return (
    <section id="sobre" className="py-28 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-10 tracking-tight">
              {aboutText.title}
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              {aboutText.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC03636-Aprimorado-NR-MZKeLdmMj4GKRnf9022T4C7ouS4Rkc.jpg"
                alt="Vista del mercado Sunset Market"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
