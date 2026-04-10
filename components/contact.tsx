import { Mail, Phone, Instagram } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sunsetmarketmarbella@gmail.com",
      href: "mailto:sunsetmarketmarbella@gmail.com"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+34 636 688 971 / +34 647 746 985 ",
      href: "https://wa.me/34636688971"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@sunsetmarketmarbella",
      href: "https://instagram.com/sunsetmarketmarbella"
    }
  ]

  return (
    <section id="contacto" className="py-28 md:py-40 bg-secondary">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-8 tracking-tight">
            CONTACTO
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Si deseas ponerte en contacto con el equipo de Sunset Market, puedes hacerlo a través de los siguientes medios. 
            
            Estaremos encantados de atender tu consulta lo antes posible.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-secondary rounded-2xl text-center hover:bg-primary/10 transition-colors duration-300 border border-transparent hover:border-primary/30"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <contact.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{contact.label}</h3>
              <p className="text-sm text-muted-foreground break-all">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
