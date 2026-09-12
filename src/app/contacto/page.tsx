import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { Icons } from "@/components/Icons";
import { site, telUrl, whatsappUrl, zones } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá al sanitario 24h en Montevideo: teléfono, WhatsApp y formulario corto. Atención inmediata.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="bg-mist">
        <div className="container-page py-14 md:py-16">
          <p className="section-label">Contacto</p>
          <h1 className="text-display mt-3 max-w-3xl text-navy">
            Hablá con nosotros ahora
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] text-muted sm:text-lg">
            Teléfono, WhatsApp o un formulario corto. Ideal si tenés una
            urgencia o querés coordinar una visita.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <a
              href={telUrl()}
              className="flex items-center gap-4 rounded-[22px] border border-line bg-mist/50 p-5 transition hover:border-cobalt/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cobalt text-white">
                <Icons name="phone" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-muted">Teléfono 24h</span>
                <span className="block text-2xl font-bold text-navy">
                  {site.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-[22px] border border-line bg-mist/50 p-5 transition hover:border-cobalt/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1f9e57] text-white">
                <Icons name="whatsapp" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-muted">WhatsApp</span>
                <span className="block text-2xl font-bold text-navy">
                  Escribir por WhatsApp
                </span>
                <span className="mt-0.5 block text-sm text-muted">
                  {site.phoneDisplay}
                </span>
              </span>
            </a>

            <div className="rounded-[22px] border border-line p-5">
              <p className="flex items-center gap-2 font-bold text-navy">
                <Icons name="clock" className="h-5 w-5 text-cobalt" />
                Horarios
              </p>
              <p className="mt-2 text-muted">{site.hours}</p>
            </div>

            <div className="rounded-[22px] border border-line p-5">
              <p className="flex items-center gap-2 font-bold text-navy">
                <Icons name="pin" className="h-5 w-5 text-cobalt" />
                Ubicación
              </p>
              <p className="mt-2 text-sm text-muted">{site.address}</p>
              <p className="mt-2 text-sm text-muted">
                Zona de servicio: Montevideo. Barrios frecuentes:{" "}
                {zones.slice(0, 8).join(", ")}…
              </p>
              <ButtonLink href="/zonas" variant="outline" className="mt-4 !py-2.5 text-sm">
                Ver zonas
              </ButtonLink>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Formulario rápido</h2>
            <p className="mt-2 text-muted">
              Nombre, zona, problema y teléfono. Te redirigimos a WhatsApp con
              el mensaje armado.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-tint">
        <div className="container-page py-14">
          <div className="overflow-hidden rounded-[28px] border border-line bg-white">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-navy">
                  Mapa / zona de cobertura
                </h2>
                <p className="mt-3 text-muted">
                  {site.address}. Atendemos en Montevideo. Al contactarnos
                  confirmamos tu barrio y el tiempo estimado de llegada.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href={telUrl()} variant="primary">
                    <Icons name="phone" className="h-4 w-4" />
                    Llamar ahora
                  </ButtonLink>
                  <ButtonLink href={whatsappUrl()} variant="whatsapp">
                    <Icons name="whatsapp" className="h-4 w-4" />
                    Escribir por WhatsApp
                  </ButtonLink>
                </div>
              </div>
              <div className="relative min-h-[260px] bg-[linear-gradient(135deg,#d7e6f8_0%,#eef4fb_45%,#c9d9ef_100%)]">
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <div>
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-cobalt shadow-md">
                      <Icons name="pin" className="h-6 w-6" />
                    </span>
                    <p className="mt-4 text-lg font-bold text-navy">
                      Montevideo, Uruguay
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      Cobertura amplia · Confirmación al instante
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
