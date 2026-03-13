"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight, Sparkles, Music, UtensilsCrossed, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VisitorsSection() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  
  const events = [
    {
      name: "Sunset Market Marbella",
      location: "Parque de la Constitución",
      date: "5 Abril 2026",
      time: "17:00 - 22:00",
      day: 5,
      month: 3,
      year: 2026,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%200025-aPzSgAKIjcdgH183CoaGDoeIOZMBnP.jpg"
    },
    {
      name: "Sunset Market San Pedro",
      location: "Bulevar San Pedro Alcántara",
      date: "19 Abril 2026",
      time: "17:00 - 22:00",
      day: 19,
      month: 3,
      year: 2026,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNST%2022%20AGO%202025%20-%200058-E6LZM1JsEcSXs6o2BfkD1Q5ae7OhL8.jpg"
    },
  ]

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    return day === 0 ? 6 : day - 1
  }

  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  const dayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

  const hasEvent = (day: number) => {
    return events.some(e => e.day === day && e.month === currentMonth.getMonth() && e.year === currentMonth.getFullYear())
  }

  const getEventForDay = (day: number) => {
    return events.find(e => e.day === day && e.month === currentMonth.getMonth() && e.year === currentMonth.getFullYear())
  }

  const highlights = [
    { icon: Sparkles, title: "Marcas Únicas", desc: "Diseñadores y artesanos locales" },
    { icon: Music, title: "Música en Vivo", desc: "Ambiente con sesiones de DJ" },
    { icon: UtensilsCrossed, title: "Gastronomía", desc: "Food trucks y bebidas artesanales" },
    { icon: Sun, title: "Atardeceres", desc: "Las mejores vistas de la Costa del Sol" },
  ]

  return (
    <section id="visitantes" className="relative py-28 md:py-40">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC03634-Aprimorado-NR-hMtGNDkz5KlOmTE3Af0uQVWw0w49u2.jpg"
          alt="Vista del mercado"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-8 tracking-tight">
            SOY UN VISITANTE
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Sunset Market es un evento donde podrás descubrir marcas emergentes, disfrutar de música, gastronomía y vivir una experiencia única en un ambiente creativo y social.
          </p>
        </div>

        {/* What to Expect */}
        <div className="grid md:grid-cols-4 gap-6 mb-24">
          {highlights.map((item) => (
            <div key={item.title} className="text-center p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 mx-auto mb-5 bg-primary/10 rounded-xl flex items-center justify-center">
                <item.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Calendar and Events */}
        <div>
          <h3 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-center mb-14">
            PROXIMOS EVENTOS
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calendar */}
            <div className="bg-card/90 backdrop-blur-sm p-8 rounded-2xl border border-border">
              <div className="flex items-center justify-between mb-8">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                >
                  <ChevronLeft size={20} />
                </Button>
                <h4 className="font-serif text-2xl font-semibold text-foreground">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h4>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                >
                  <ChevronRight size={20} />
                </Button>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-4">
                {dayNames.map(day => (
                  <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: getFirstDayOfMonth(currentMonth) }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}
                {Array.from({ length: getDaysInMonth(currentMonth) }).map((_, i) => {
                  const day = i + 1
                  const event = getEventForDay(day)
                  return (
                    <div 
                      key={day}
                      className={`aspect-square flex items-center justify-center rounded-lg text-sm transition-all duration-200 ${
                        hasEvent(day) 
                          ? "bg-primary text-primary-foreground font-semibold cursor-pointer hover:scale-110" 
                          : "text-foreground hover:bg-muted"
                      }`}
                      title={event?.name}
                    >
                      {day}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Event Cards */}
            <div className="space-y-6">
              {events.map((event) => (
                <div 
                  key={event.name} 
                  className="group overflow-hidden rounded-2xl bg-card/90 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="aspect-[21/9] relative overflow-hidden">
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
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar size={18} className="text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock size={18} className="text-primary" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
