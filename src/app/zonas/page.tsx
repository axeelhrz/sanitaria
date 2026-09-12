import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { FinalCTA } from "@/components/FinalCTA";
import { Icons } from "@/components/Icons";
import { telUrl, whatsappUrl, zones } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zonas de servicio en Montevideo",
  description:
    "Sanitario en Montevideo y barrios: Pocitos, Cordón, Malvín, Centro, Carrasco y más. Confirmá cobertura al instante.",
};

export default function ZonasPage() {
  return (
    <>
      <section className="bg-mist">
        <div className="container-page py-14 md:py-16">
          <p className="section-label">Zonas de servicio</p>
          <h1 className="text-display mt-3 max-w-3xl text-navy">
            Llegamos a Montevideo y zonas cercanas
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Cobertura real en barrios donde efectivamente atendemos. Si tu zona
            no está listada, consultá igual: muchas veces llegamos a localidades
            aledañas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={telUrl()} variant="primary">
              <Icons name="phone" className="h-4 w-4" />
              Confirmar mi zona
            </ButtonLink>
            <ButtonLink href={whatsappUrl("Hola, ¿llegan a mi zona?")} variant="whatsapp">
              <Icons name="whatsapp" className="h-4 w-4" />
              Consultar por WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-14">
          <h2 className="text-2xl font-bold text-navy">Barrios y localidades</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {zones.map((zone) => (
              <div
                key={zone}
                className="flex items-center gap-2.5 rounded-2xl border border-line bg-mist/40 px-4 py-3.5"
              >
                <span className="text-cobalt">
                  <Icons name="pin" className="h-4 w-4" />
                </span>
                <span className="font-medium text-navy">{zone}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[24px] border border-line bg-sky-tint p-6 md:p-8">
            <h2 className="text-2xl font-bold text-navy">
              SEO local: páginas por barrio
            </h2>
            <p className="mt-3 max-w-3xl text-muted">
              Más adelante se pueden sumar páginas específicas como{" "}
              <span className="font-medium text-navy">/sanitario-pocitos</span>,{" "}
              <span className="font-medium text-navy">/sanitario-cordon</span> o{" "}
              <span className="font-medium text-navy">/sanitario-malvin</span>{" "}
              solo para barrios con contenido propio y demanda real, evitando
              páginas vacías o duplicadas.
            </p>
            <Link
              href="/contacto"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cobalt"
            >
              Pedir servicio en mi zona
              <Icons name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA
        title="¿Estás en Montevideo y necesitás un sanitario?"
        text="Confirmamos cobertura y tiempo estimado apenas nos contactés."
      />
    </>
  );
}
