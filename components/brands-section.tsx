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
    <section id="marcas" className="py-28 md:py-40 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%200043-ElAl2aGQVL7rFUiq9nqJ0NGJMzf62q.jpg"
                alt="Expositora de moda en Sunset Market"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-8 tracking-tight">
              SOY UNA MARCA
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-14">
              Sunset Market ofrece a las marcas emergentes un espacio único para conectar con nuevos públicos, presentar sus productos y formar parte de una comunidad creativa.
            </p>

            {/* Steps */}
            <div className="mb-12">
              <h3 className="font-serif text-3xl font-semibold text-foreground mb-10">
                Cómo participar
              </h3>
              <div className="space-y-10">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-serif text-2xl font-bold text-primary">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-3">{step.title}</h4>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              onClick={() => setShowForm(!showForm)}
              className="bg-primary hover:bg-primary/90 hover:scale-105 text-primary-foreground px-10 py-7 text-base font-medium tracking-wide rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
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
                  <Label htmlFor="photos">Fotos de tu marca </Label>
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
