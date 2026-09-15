import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/FinalCTA";
import { Icons } from "@/components/Icons";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios de reparaciones y reformas",
  description:
    "Sanitaria, electricidad, albañilería, pintura, impermeabilización y herrería en Montevideo. Reparaciones y servicios López.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-mist">
        <div className="container-page py-14 md:py-18">
          <p className="section-label">Servicios</p>
          <h1 className="text-display mt-3 max-w-3xl text-navy">
            Reparaciones y reformas para tu hogar o empresa
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Sanitaria, electricidad, albañilería, pintura, impermeabilización y
            herrería. Un solo equipo para coordinar lo que necesitás.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-14 md:py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-12 rounded-[24px] border border-line bg-sky-tint p-6 md:flex md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="text-2xl font-bold text-navy">
                ¿No encontrás tu problema en la lista?
              </h2>
              <p className="mt-2 text-muted">
                Contanos qué pasó por WhatsApp o teléfono y te orientamos.
              </p>
            </div>
            <Link
              href="/contacto"
              className="btn-navy mt-5 md:mt-0"
            >
              Ir a contacto
              <Icons name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Pedí tu servicio con presupuesto claro"
        text="Coordinamos la visita, diagnosticamos y te explicamos opciones antes de empezar."
      />
    </>
  );
}
