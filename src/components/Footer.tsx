import Link from "next/link";
import { navLinks, site, telUrl, whatsappUrl } from "@/lib/site";
import { Icons, LogoMark } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-page grid gap-10 py-12 sm:py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <LogoMark />
            <span className="text-lg font-bold">{site.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Plomería, desobstrucciones, instalaciones y mantenimiento en todo
            Montevideo. Atención 24 horas para urgencias sanitarias.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={telUrl()}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
            >
              <Icons name="phone" className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1f9e57] px-4 py-2 text-sm font-semibold hover:bg-[#188a4a]"
            >
              <Icons name="whatsapp" className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
            Navegación
          </p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
            Contacto
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>{site.hours}</li>
            <li>Montevideo, Uruguay</li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos
            reservados.
          </p>
          <p>Servicio de plomería y sanitario en Montevideo.</p>
        </div>
      </div>
    </footer>
  );
}
