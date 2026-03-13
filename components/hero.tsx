"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNSET%20RECAP%20EVENTS-mV3rn3U6GdlDEu2Pq0IFeLHedN8ZL6.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4 animate-fade-in">
          Marbella
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 tracking-tight">
          SUNSET MARKET
        </h1>
        <p className="font-serif text-xl md:text-2xl text-foreground/80 mb-4 italic">
          Eventos que conectan marcas, creatividad y comunidad.
        </p>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Markets experienciales donde convergen marcas emergentes, música, gastronomía y experiencias únicas en Marbella.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 hover:scale-105 text-primary-foreground px-10 py-7 text-base font-medium tracking-wide rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <a href="#marcas">SOY UNA MARCA</a>
          </Button>
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 hover:scale-105 text-primary-foreground px-10 py-7 text-base font-medium tracking-wide rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <a href="#visitantes">SOY UN VISITANTE</a>
          </Button>
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 hover:scale-105 text-primary-foreground px-10 py-7 text-base font-medium tracking-wide rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <a href="#colaboradores">SOY UN COLABORADOR</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
