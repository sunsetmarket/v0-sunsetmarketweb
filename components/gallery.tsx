import Image from "next/image"

export function Gallery() {
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%200037.JPG-WpyMDrbUe2OE49ZdbUz9lEtzT3m9RX.jpeg",
      alt: "Visitantes disfrutando del mercado",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%200043-ElAl2aGQVL7rFUiq9nqJ0NGJMzf62q.jpg",
      alt: "Expositora de moda",
      span: ""
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%200025-aPzSgAKIjcdgH183CoaGDoeIOZMBnP.jpg",
      alt: "Artesanía local",
      span: ""
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%200058-E6LZM1JsEcSXs6o2BfkD1Q5ae7OhL8.jpg",
      alt: "Joyería artesanal",
      span: "md:col-span-2"
    },
  ]

  return (
    <section id="galeria" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">
            Galería
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Nuestros Eventos
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Descubre el ambiente único de Sunset Market a través de las imágenes de nuestras ediciones anteriores.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-xl group ${image.span}`}
            >
              <div className={`aspect-square relative ${image.span.includes("row-span-2") ? "aspect-auto h-full" : ""}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-16">
          <div className="aspect-video relative overflow-hidden rounded-2xl">
            <video
              controls
              poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%200037.JPG-WpyMDrbUe2OE49ZdbUz9lEtzT3m9RX.jpeg"
              className="w-full h-full object-cover"
            >
              <source 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNSET%20RECAP%20EVENTS-mV3rn3U6GdlDEu2Pq0IFeLHedN8ZL6.mp4" 
                type="video/mp4" 
              />
            </video>
          </div>
          <p className="text-center text-muted-foreground mt-4">
            Revive los mejores momentos de Sunset Market
          </p>
        </div>
      </div>
    </section>
  )
}
