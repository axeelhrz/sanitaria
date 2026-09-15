import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { FinalCTA } from "@/components/FinalCTA";
import { Icons } from "@/components/Icons";
import { site, telUrl, whatsappUrl, zones } from "@/lib/site";

export const metadata: Metadata = {
  title: "Urgencias y reparaciones en Montevideo",
  description: `¿Tenés una reparación urgente? Contactá a ${site.name}. ${site.hours}.`,
};

export default function EmergenciasPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-page py-16 md:py-20">
          <p className="section-label !text-white/60">Urgencias</p>
          <h1 className="text-display mt-3 max-w-3xl">
            ¿Tenés una reparación urgente? Coordinamos la visita.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Pérdida de agua, falla eléctrica, humedad o un daño en el hogar:
            llamá o escribinos y coordinamos dentro del horario de atención.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={whatsappUrl("Hola, tengo una reparación urgente.")}
              variant="whatsapp"
              className="!px-8 !py-5 !text-xl"
            >
              <Icons name="whatsapp" className="h-6 w-6" />
              {site.ctaService}
            </ButtonLink>
            <ButtonLink
              href={telUrl()}
              variant="primary"
              className="!px-8 !py-5 !text-xl"
            >
              <Icons name="phone" className="h-6 w-6" />
              {site.ctaCall}
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm text-white/55">{site.hours}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-14 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="section-label">Problemas frecuentes</p>
              <h2 className="mt-3 text-3xl font-bold text-navy">
                Casos que atendemos con prioridad
              </h2>
              <ul className="mt-6 grid gap-3">
                {[
                  "Pérdida de agua o cañería rota",
                  "Falla eléctrica o corto en el hogar",
                  "Humedad o filtraciones",
                  "Daños que requieren albañilería rápida",
                  "Reparaciones varias en el hogar",
                  "Situaciones que no pueden esperar al fin de semana",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-line bg-mist/50 px-4 py-3.5"
                  >
                    <span className="text-cobalt">
                      <Icons name="bolt" className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-label">Cómo funciona</p>
              <h2 className="mt-3 text-3xl font-bold text-navy">
                Atención simple y directa
              </h2>
              <ol className="mt-6 space-y-4">
                {[
                  {
                    t: "Nos contactás",
                    d: "Teléfono o WhatsApp, contanos qué pasó y en qué barrio estás.",
                  },
                  {
                    t: "Te confirmamos llegada",
                    d: "Te damos un tiempo estimado real según zona y disponibilidad.",
                  },
                  {
                    t: "Presupuesto claro",
                    d: "Explicamos el problema, opciones y costo antes de intervenir.",
                  },
                  {
                    t: "Resolvemos",
                    d: "Ejecutamos el trabajo, limpiamos y dejamos todo en orden.",
                  },
                ].map((step, i) => (
                  <li key={step.t} className="rounded-2xl border border-line p-5">
                    <p className="text-sm font-bold text-cobalt">Paso {i + 1}</p>
                    <p className="mt-1 text-lg font-bold text-navy">{step.t}</p>
                    <p className="mt-1 text-sm text-muted">{step.d}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-tint">
        <div className="container-page py-14">
          <h2 className="text-3xl font-bold text-navy">Zonas atendidas</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Cubrimos Montevideo y alrededores. Si tu zona no aparece, igual
            consultá: muchas veces llegamos igual.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {zones.map((zone) => (
              <span
                key={zone}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-navy"
              >
                {zone}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={whatsappUrl()} variant="whatsapp">
              <Icons name="whatsapp" className="h-4 w-4" />
              {site.ctaService}
            </ButtonLink>
            <ButtonLink href={telUrl()} variant="primary">
              <Icons name="phone" className="h-4 w-4" />
              {site.ctaCall}
            </ButtonLink>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Urgencia: hablá con nosotros"
        text={`${site.hours}. Teléfono y WhatsApp disponibles en horario de atención.`}
      />
    </>
  );
}
