import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <h3 className="font-serif text-2xl font-semibold tracking-wide">
              SUNSET MARKET
            </h3>
            <p className="text-background/60 text-sm mt-1">Marbella</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/sunsetmarketmarbella"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-background transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="mailto:sunsetmarketmarbella@gmail.com"
              className="text-background/60 hover:text-background transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>
            {new Date().getFullYear()} Sunset Market Marbella. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#sobre" className="hover:text-background transition-colors">Sobre nosotros</a>
            <a href="#contacto" className="hover:text-background transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
