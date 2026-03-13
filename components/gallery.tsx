import Image from "next/image"

export function Gallery() {
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%200037.JPG-WpyMDrbUe2OE49ZdbUz9lEtzT3m9RX.jpeg",
      alt: "Visitantes disfrutando del mercado"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%200043-ElAl2aGQVL7rFUiq9nqJ0NGJMzf62q.jpg",
      alt: "Expositora de moda"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%200025-aPzSgAKIjcdgH183CoaGDoeIOZMBnP.jpg",
      alt: "Artesanía local"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%200058-E6LZM1JsEcSXs6o2BfkD1Q5ae7OhL8.jpg",
      alt: "Joyería artesanal"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%200059-kiBGY3sOMmRfVCEePAXRYupXLbHH0Z.jpg",
      alt: "Stand de joyería elegante"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%20009-SYqVsRM0125HXZGhtzk9LmGklqcHyg.jpg",
      alt: "Artesana con accesorios"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%200017-jEvCLrpY8ipU9Vc6Hp7I1BucYMd9R4.jpg",
      alt: "Modelo con ropa bohemia"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%20006-ckNW5BaXrOtpQIXLqhLpkC3nTN8NPa.jpg",
      alt: "Visitante explorando ropa"
    },
  ]

  return (
    <section id="galeria" className="py-28 md:py-40 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-8 tracking-tight">
            GALERIA
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Descubre el ambiente único de Sunset Market a través de las imágenes de nuestras ediciones anteriores.
          </p>
        </div>

        {/* Gallery Grid - Balanced smaller images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl group aspect-[4/5]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-16">
          <div className="aspect-video relative overflow-hidden rounded-2xl shadow-2xl max-w-5xl mx-auto">
            <video
              controls
              poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC03636-Aprimorado-NR-MZKeLdmMj4GKRnf9022T4C7ouS4Rkc.jpg"
              className="w-full h-full object-cover"
            >
              <source 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNSET%20RECAP%20EVENTS-mV3rn3U6GdlDEu2Pq0IFeLHedN8ZL6.mp4" 
                type="video/mp4" 
              />
            </video>
          </div>
          <p className="text-center text-muted-foreground mt-6 text-lg">
            Revive los mejores momentos de Sunset Market
          </p>
        </div>
      </div>
    </section>
  )
}
