import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Participar en Sunset Market fue una experiencia increíble. Conecté con clientes que aprecian realmente el trabajo artesanal y el diseño único.",
      author: "María García",
      role: "Diseñadora de joyería"
    },
    {
      quote: "El ambiente del mercado es inigualable. La combinación de música, atardecer y marcas seleccionadas crea una experiencia que no encuentras en ningún otro sitio de Marbella.",
      author: "Carlos Rodríguez",
      role: "Visitante"
    },
    {
      quote: "Como pequeña marca de moda, Sunset Market me dio la visibilidad que necesitaba. El equipo cuida cada detalle y el público es exactamente el que busco.",
      author: "Ana Martínez",
      role: "Fundadora de marca de moda sostenible"
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">
            Testimonios
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Lo que dicen de nosotros
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-2xl border border-border relative"
            >
              <Quote className="text-primary/20 absolute top-6 right-6" size={40} />
              <p className="text-foreground leading-relaxed mb-8 relative z-10">
                {`"${testimonial.quote}"`}
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
