"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Building2, Handshake } from "lucide-react"

export function CollaboratorsSection() {
  const [activeForm, setActiveForm] = useState<"spaces" | "sponsors" | null>(null)

  return (
    <section id="colaboradores" className="py-28 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-8 tracking-tight">
            SOY UN COLABORADOR
          </h2>
        </div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Spaces */}
          <div className="bg-card p-8 md:p-10 rounded-2xl border border-border">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="text-primary" size={28} />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Organiza un Sunset Market en tu espacio
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Si tienes un espacio disponible y quieres activarlo con un market, podemos organizar un Sunset Market adaptado a tu localización.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nuestros eventos atraen público, dinamizan zonas comerciales y dan visibilidad a los espacios donde se realizan.
            </p>
            <Button 
              onClick={() => setActiveForm(activeForm === "spaces" ? null : "spaces")}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-6 py-5"
            >
              Proponer un espacio
            </Button>

            {activeForm === "spaces" && (
              <form className="mt-8 pt-8 border-t border-border space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="space-name">Nombre del espacio</Label>
                  <Input id="space-name" placeholder="Hotel, restaurante, club..." className="bg-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Ubicación</Label>
                  <Input id="location" placeholder="Dirección completa" className="bg-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacidad</Label>
                  <Input id="capacity" placeholder="Número de personas / metros cuadrados" className="bg-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="space-contact">Contacto</Label>
                  <Input id="space-contact" placeholder="Email o teléfono" className="bg-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="space-photos">Fotos del espacio</Label>
                  <Input id="space-photos" type="file" multiple accept="image/*" className="bg-input" />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-5"
                >
                  Enviar propuesta
                </Button>
              </form>
            )}
          </div>

          {/* Sponsors */}
          <div className="bg-card p-8 md:p-10 rounded-2xl border border-border">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Handshake className="text-primary" size={28} />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Patrocina Sunset Market
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sunset Market es un evento con gran visibilidad que conecta marcas con un público creativo y emprendedor.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ofrecemos packs de patrocinio y activaciones de marca para empresas que quieran formar parte de la experiencia.
            </p>
            <Button 
              onClick={() => setActiveForm(activeForm === "sponsors" ? null : "sponsors")}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-6 py-5"
            >
              Solicitar información de patrocinio
            </Button>

            {activeForm === "sponsors" && (
              <form className="mt-8 pt-8 border-t border-border space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nombre de la empresa</Label>
                  <Input id="company-name" placeholder="Tu empresa" className="bg-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sponsor-contact">Persona de contacto</Label>
                  <Input id="sponsor-contact" placeholder="Nombre completo" className="bg-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sponsor-email">Email</Label>
                  <Input id="sponsor-email" type="email" placeholder="email@empresa.com" className="bg-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sponsor-phone">Teléfono</Label>
                  <Input id="sponsor-phone" type="tel" placeholder="+34 600 000 000" className="bg-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest">¿Qué tipo de colaboración te interesa?</Label>
                  <Textarea 
                    id="interest" 
                    placeholder="Cuéntanos cómo te gustaría colaborar..." 
                    rows={4}
                    className="bg-input"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-5"
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
