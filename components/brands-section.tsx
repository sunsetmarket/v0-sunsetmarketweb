"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function BrandsSection() {
  const [showForm, setShowForm] = useState(false)

  const steps = [
    {
      number: "01",
      title: "Rellena el formulario",
      description: "A través del formulario podrás enviarnos tus datos, una breve descripción de tu marca o comercio y los productos que ofreces. Tras rellenarlo revisaremos tu solicitud."
    },
    {
      number: "02",
      title: "Valoramos tu propuesta",
      description: "Nuestro equipo analizará si tu marca encaja con la filosofía de Sunset Market y comprobará la disponibilidad de espacios en los próximos eventos."
    },
    {
      number: "03",
      title: "Confirmación y reserva",
      description: "Una vez aprobada la solicitud, nos pondremos en contacto contigo para asignarte un puesto y formalizar tu participación."
    }
  ]

  return (
    <section id="marcas" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%200043-ElAl2aGQVL7rFUiq9nqJ0NGJMzf62q.jpg"
                alt="Expositora de moda en Sunset Market"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">
              Soy una Marca
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Expón tu marca en Sunset Market
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Sunset Market ofrece a las marcas emergentes un espacio único para conectar con nuevos públicos, presentar sus productos y formar parte de una comunidad creativa.
            </p>

            {/* Steps */}
            <div className="mb-10">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
                Cómo participar
              </h3>
              <div className="space-y-8">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <span className="font-serif text-3xl font-semibold text-primary/30">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              onClick={() => setShowForm(!showForm)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-sm tracking-wide"
            >
              APLICAR COMO EXPOSITOR
            </Button>

            {/* Form */}
            {showForm && (
              <form className="mt-10 p-8 bg-card rounded-2xl border border-border space-y-6">
                <h4 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Formulario de solicitud
                </h4>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="brand-name">Nombre de la marca</Label>
                    <Input id="brand-name" placeholder="Tu marca" className="bg-input" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="responsible">Persona responsable</Label>
                    <Input id="responsible" placeholder="Nombre completo" className="bg-input" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@ejemplo.com" className="bg-input" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" type="tel" placeholder="+34 600 000 000" className="bg-input" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="instagram">Instagram o web</Label>
                    <Input id="instagram" placeholder="@tumarca" className="bg-input" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="product-type">Tipo de producto</Label>
                    <Input id="product-type" placeholder="Moda, joyería, arte..." className="bg-input" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Breve descripción</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Cuéntanos sobre tu marca y tus productos..." 
                    rows={4}
                    className="bg-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photos">Fotos del producto</Label>
                  <Input id="photos" type="file" multiple accept="image/*" className="bg-input" />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6"
                >
                  Enviar solicitud
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
