import Image from "next/image"
import { Calendar, MapPin, Clock } from "lucide-react"

export function VisitorsSection() {
  const events = [
    {
      name: "Sunset Market Marbella",
      location: "Parque de la Constitución",
      date: "Primer sábado del mes",
      time: "17:00 - 22:00",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%200025-aPzSgAKIjcdgH183CoaGDoeIOZMBnP.jpg"
    },
    {
      name: "Sunset Market San Pedro",
      location: "Bulevar San Pedro Alcántara",
      date: "Próximamente",
      time: "17:00 - 22:00",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%200058-E6LZM1JsEcSXs6o2BfkD1Q5ae7OhL8.jpg"
    },
  ]

  return (
    <section id="visitantes" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">
            Soy un Visitante
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            El mejor plan para descubrir nuevas marcas
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Sunset Market es un evento donde podrás descubrir marcas emergentes, disfrutar de música, gastronomía y vivir una experiencia única en un ambiente creativo y social.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Cada edición reúne diseñadores, artistas y emprendedores que presentan sus productos en un espacio lleno de inspiración.
          </p>
        </div>

        {/* What to Expect */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: "🎨", title: "Marcas Únicas", desc: "Diseñadores y artesanos locales" },
            { icon: "🎵", title: "Música en Vivo", desc: "Ambiente con sesiones de DJ" },
            { icon: "🍹", title: "Gastronomía", desc: "Food trucks y bebidas artesanales" },
            { icon: "🌅", title: "Atardeceres", desc: "Las mejores vistas de la Costa del Sol" },
          ].map((item) => (
            <div key={item.title} className="text-center p-6 bg-secondary rounded-2xl">
              <span className="text-4xl block mb-4">{item.icon}</span>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="font-serif text-3xl font-semibold text-foreground text-center mb-12">
            Próximos Eventos
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div 
                key={event.name} 
                className="group overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    {event.name}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin size={18} className="text-primary" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar size={18} className="text-primary" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock size={18} className="text-primary" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
