import Image from "next/image"

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">
              Sobre Nosotros
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-8">
              ¿Qué es Sunset Market?
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Sunset Market es una organizadora de eventos especializada en la creación de markets experienciales que van mucho más allá del mercadillo tradicional.
              </p>
              <p>
                Diseñamos espacios vivos donde convergen marcas emergentes, música, gastronomía y actividades interactivas, generando experiencias memorables tanto para expositores como para el público.
              </p>
              <p>
                Con más de 10 ediciones realizadas en la Costa del Sol, nos hemos consolidado como un referente en la organización de markets que priorizan la experiencia del consumidor, el cuidado del entorno y la conexión real entre marcas y personas.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <p className="font-serif text-4xl font-semibold text-primary">+10</p>
                <p className="text-sm text-muted-foreground mt-1">Ediciones</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-semibold text-primary">+500</p>
                <p className="text-sm text-muted-foreground mt-1">Asistentes por evento</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-semibold text-primary">+45</p>
                <p className="text-sm text-muted-foreground mt-1">Expositores</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%200037.JPG-WpyMDrbUe2OE49ZdbUz9lEtzT3m9RX.jpeg"
                alt="Visitantes disfrutando de Sunset Market"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
