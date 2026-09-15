import type { Metadata } from "next";
import Image from "next/image";
import { FinalCTA } from "@/components/FinalCTA";
import { Icons } from "@/components/Icons";
import { whyUs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros | Experiencia y confianza",
  description:
    "Conocé a Reparaciones y servicios López: experiencia, forma de trabajar y valores en Montevideo.",
};

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-mist">
        <div className="container-page grid gap-10 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-label">Nosotros</p>
            <h1 className="text-display mt-3 text-navy">
              Un solo equipo para lo que tu hogar necesita
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Somos una empresa de reparaciones, mantenimiento y reformas en
              Montevideo. Trabajamos sanitaria, electricidad, albañilería,
              pintura, impermeabilización y herrería, con presupuesto claro y
              trabajo responsable.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image
              src="/nosotros-trabajo.jpg"
              alt="Técnico trabajando en instalación sanitaria"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 560px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-14 md:py-16">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Forma de trabajar",
                text: "Diagnóstico claro, presupuesto antes de intervenir y explicación de opciones sin presión.",
              },
              {
                title: "Herramientas y equipamiento",
                text: "Equipos para desobstrucciones, detección de fugas y trabajos de instalación con terminación prolija.",
              },
              {
                title: "Garantía",
                text: "Respaldamos el trabajo realizado. Si algo falla por la reparación, lo resolvemos.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[22px] border border-line bg-mist/40 p-6"
              >
                <h2 className="text-xl font-bold text-navy">{item.title}</h2>
                <p className="mt-3 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-tint">
        <div className="container-page py-14">
          <p className="section-label">Valores</p>
          <h2 className="mt-3 text-3xl font-bold text-navy">
            Puntualidad, transparencia y limpieza
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-[22px] border border-line bg-white p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-tint text-cobalt">
                  <Icons name="check" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-1 text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="¿Querés coordinar una visita?"
        text="Escribinos o llamá: te respondemos rápido y sin compromiso."
      />
    </>
  );
}
