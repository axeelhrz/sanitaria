import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Icons } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import {
  featuredServices,
  reviews,
  site,
  telUrl,
  whatsappUrl,
  whyUs,
  workSteps,
  zones,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* HERO — mobile stack / desktop split */}
      <section className="relative overflow-hidden bg-white">
        {/* Mobile / tablet: contenido arriba + foto abajo */}
        <div className="lg:hidden">
          <div className="px-4 pb-6 pt-8 sm:px-6 sm:pt-10">
            <p className="section-label animate-fade-up">
              {site.hoursShort} · {site.addressShort}
            </p>
            <h1 className="animate-fade-up text-display mt-3 text-[#0A2342]">
              {site.name}
            </h1>
            <p className="animate-fade-up-delay mt-4 max-w-xl text-[15px] leading-relaxed text-[#6B7C8F] sm:text-base">
              {site.tagline} Desobstrucciones, plomería y reformas de baños y
              cocinas.
            </p>
            <div className="btn-row animate-fade-up-delay-2 mt-6">
              <ButtonLink href={telUrl()} variant="primary">
                <Icons name="phone" className="h-4 w-4" />
                Llamar ahora
                <Icons name="arrow" className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={whatsappUrl()} variant="whatsapp">
                <Icons name="whatsapp" className="h-4 w-4" />
                Escribir por WhatsApp
              </ButtonLink>
            </div>

            <div className="animate-fade-up-delay-2 mt-5 rounded-2xl border border-[#E6ECF2] bg-[#F4F7F9] p-3.5">
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0066FF] shadow-sm">
                  <Icons name="clock" className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[13px] font-semibold leading-snug text-[#0A2342]">
                    ¿Urgencia? Te llamamos en minutos.
                  </p>
                  <Link
                    href="/emergencias-24h"
                    className="mt-1.5 inline-flex items-center gap-1 text-[12px] font-semibold text-[#0066FF]"
                  >
                    Solicitar llamada
                    <Icons name="arrow" className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-4 mb-6 aspect-[16/11] overflow-hidden rounded-[22px] sm:mx-6 sm:aspect-[16/10]">
            <Image
              src="/hero-plomero-hd.jpg"
              alt="Técnico sanitario trabajando bajo la mesada"
              fill
              priority
              quality={95}
              className="object-cover object-[62%_center]"
              sizes="100vw"
            />
            <p className="script absolute bottom-5 right-5 text-[1.6rem] leading-[1.05] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-[1.9rem]">
              Tu tranquilidad,
              <br />
              nuestro trabajo
            </p>
          </div>
        </div>

        {/* Desktop: split con fundido */}
        <div className="relative hidden min-h-[620px] lg:block">
          <div className="absolute inset-y-0 right-0 w-[66%] animate-hero-image">
            <Image
              src="/hero-plomero-hd.jpg"
              alt="Técnico sanitario trabajando bajo la mesada"
              fill
              priority
              quality={95}
              className="object-cover object-[62%_center]"
              sizes="66vw"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.88) 7%, rgba(255,255,255,0.4) 18%, transparent 34%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1240px] items-center px-8">
            <div className="max-w-[520px]">
              <p className="section-label animate-fade-up">
                {site.hoursShort} · {site.addressShort}
              </p>
              <h1 className="animate-fade-up text-display mt-4 text-[#0A2342]">
                {site.name}
              </h1>
              <p className="animate-fade-up-delay mt-5 max-w-[440px] text-base leading-relaxed text-[#6B7C8F]">
                {site.tagline} Desobstrucciones, plomería y reformas de baños y
                cocinas.
              </p>
              <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
                <ButtonLink href={telUrl()} variant="primary">
                  <Icons name="phone" className="h-4 w-4" />
                  Llamar ahora
                  <Icons name="arrow" className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href={whatsappUrl()} variant="whatsapp">
                  <Icons name="whatsapp" className="h-4 w-4" />
                  Escribir por WhatsApp
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="absolute right-8 top-8 z-20 max-w-[240px] animate-float">
            <div className="rounded-2xl border border-white/80 bg-[#F4F7F9]/95 p-3.5 shadow-[0_12px_28px_rgba(10,35,66,0.14)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(10,35,66,0.16)]">
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0066FF] shadow-sm">
                  <Icons name="clock" className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[13px] font-semibold leading-snug text-[#0A2342]">
                    ¿Urgencia? Te llamamos en minutos.
                  </p>
                  <Link
                    href="/emergencias-24h"
                    className="mt-1.5 inline-flex items-center gap-1 text-[12px] font-semibold text-[#0066FF] transition hover:gap-1.5"
                  >
                    Solicitar llamada
                    <Icons name="arrow" className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <p className="script pointer-events-none absolute bottom-12 right-10 z-20 animate-script text-[2.35rem] leading-[1.05] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]">
            Tu tranquilidad,
            <br />
            nuestro trabajo
          </p>
        </div>

        <div className="border-y border-[#E6ECF2] bg-[#F7F9FB]">
          <div className="mx-auto grid max-w-[1240px] gap-4 px-4 py-5 sm:grid-cols-3 sm:gap-6 sm:px-6 sm:py-6 lg:px-8">
            {[
              {
                icon: "bolt" as const,
                title: "Emergencias 24h",
                text: "Atención inmediata",
              },
              {
                icon: "shield" as const,
                title: "Trabajo garantizado",
                text: "Calidad y confianza",
              },
              {
                icon: "pin" as const,
                title: "En todo Montevideo",
                text: "Llegamos a tu zona",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#0066FF]">
                    <Icons name={item.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[14px] font-bold text-[#0A2342]">
                      {item.title}
                    </p>
                    <p className="text-[13px] text-[#6B7C8F]">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 md:py-16">
          <Reveal>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="section-label">Nuestros servicios</p>
                <h2 className="text-section mt-3 text-[#0A2342]">
                  Plomería integral, sin complicaciones
                </h2>
                <p className="mt-3 max-w-xl text-[15px] text-[#6B7C8F]">
                  Experiencia, herramientas profesionales y respuesta rápida
                  para el hogar o tu empresa.
                </p>
              </div>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-1.5 self-start text-[14px] font-semibold text-[#0066FF] transition hover:gap-2.5 lg:self-auto"
              >
                Ver todos los servicios
                <Icons name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-8 grid items-stretch gap-4 xl:mt-9 xl:grid-cols-[minmax(0,1fr)_250px]">
            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {featuredServices.map((service, i) => (
                <Reveal key={service.slug} delay={i * 70}>
                  <ServiceCard service={service} compact />
                </Reveal>
              ))}
            </div>

            <Reveal delay={280}>
              <aside className="flex h-full flex-col rounded-[18px] bg-[#EAF2FF] p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(10,35,66,0.08)] sm:p-6">
                <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0066FF]">
                  <Icons name="pin" className="h-3.5 w-3.5" />
                  Montevideo y alrededores
                </p>
                <h3 className="mt-2.5 text-[1.3rem] font-bold text-[#0A2342]">
                  Llegamos a tu zona
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#5A6B7D]">
                  Brindamos servicio en todo Montevideo y zonas cercanas, con
                  tiempos de respuesta rápidos.
                </p>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Atención los 365 días del año",
                    "Técnicos profesionales",
                    "Presupuesto sin compromiso",
                    "Pagos en efectivo, transferencia o tarjeta",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[13px] text-[#0A2342]"
                    >
                      <span className="mt-0.5 text-[#0066FF]">
                        <Icons name="check" className="h-4 w-4" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href={whatsappUrl()}
                  variant="whatsapp"
                  className="mt-6 w-full !py-3 text-[14px]"
                >
                  <Icons name="whatsapp" className="h-4 w-4" />
                  Escribir por WhatsApp
                </ButtonLink>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#0A2342] text-white">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-8 lg:py-11">
          <div className="grid flex-1 gap-6 sm:grid-cols-3 sm:gap-5">
            {[
              {
                icon: "users" as const,
                title: "Clientes satisfechos",
                text: "La confianza de nuestros clientes nos respalda.",
              },
              {
                icon: "star" as const,
                title: "Experiencia comprobada",
                text: "Años de trayectoria en el rubro.",
              },
              {
                icon: "shield" as const,
                title: "Tu tranquilidad primero",
                text: "Trabajo serio, limpio y garantizado.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-white/90">
                    <Icons name={item.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[14px] font-semibold">{item.title}</p>
                    <p className="mt-1 text-[13px] text-white/65">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="script shrink-0 text-[1.45rem] leading-tight text-white/95 sm:text-[1.55rem] lg:max-w-[210px] lg:text-right">
              Más que plomería, solucionamos tu día.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page grid items-center gap-8 py-12 sm:gap-10 sm:py-16 md:grid-cols-2 md:py-20">
          <Reveal>
            <div>
              <p className="section-label">Emergencias 24h</p>
              <h2 className="text-section mt-3 text-navy">
                ¿Tenés una urgencia sanitaria? Vamos hasta tu ubicación.
              </h2>
              <p className="mt-4 text-[15px] text-muted sm:text-base">
                Pérdidas de agua, caños rotos, inodoros tapados o calefones
                fuera de servicio: priorizamos emergencias y te damos un tiempo
                estimado real al contactarnos.
              </p>
              <div className="btn-row mt-8">
                <ButtonLink
                  href={telUrl()}
                  variant="primary"
                  className="!px-5 !py-3.5 !text-base sm:!px-6 sm:!py-4"
                >
                  <Icons name="phone" className="h-5 w-5" />
                  Llamar ahora
                </ButtonLink>
                <ButtonLink
                  href={whatsappUrl()}
                  variant="whatsapp"
                  className="!px-5 !py-3.5 !text-base sm:!px-6 sm:!py-4"
                >
                  <Icons name="whatsapp" className="h-5 w-5" />
                  Escribir por WhatsApp
                </ButtonLink>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[22px] bg-[#0A2342] p-5 text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(10,35,66,0.25)] sm:rounded-[24px] sm:p-6 md:p-8">
              <p className="font-semibold">Problemas frecuentes que resolvemos</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Pérdida de agua o caño roto",
                  "Inodoro o cloaca tapada",
                  "Calefón que no funciona",
                  "Inundación en baño o cocina",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[14px] text-white/85 transition hover:translate-x-1 sm:text-base"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cobalt/25 text-[#7EB0FF]">
                      <Icons name="bolt" className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/emergencias-24h"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white transition hover:gap-2"
              >
                Cómo funciona el servicio 24h
                <Icons name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist">
        <div className="container-page py-12 sm:py-16 md:py-20">
          <Reveal>
            <div className="max-w-2xl">
              <p className="section-label">Cómo trabajamos</p>
              <h2 className="text-section mt-3 text-navy">
                Del primer mensaje a la solución, sin vueltas
              </h2>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {workSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 90}>
                <div className="h-full rounded-[22px] border border-line bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-cobalt/25 hover:shadow-[0_14px_30px_rgba(10,35,66,0.08)] sm:p-6">
                  <span className="text-sm font-bold text-cobalt">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-12 sm:py-16 md:py-20">
          <Reveal>
            <div className="max-w-2xl">
              <p className="section-label">Por qué elegirnos</p>
              <h2 className="text-section mt-3 text-navy">
                Seriedad, limpieza y respuesta cuando más importa
              </h2>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="h-full rounded-[22px] border border-line bg-mist/50 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_30px_rgba(10,35,66,0.08)] sm:p-6">
                  <h3 className="text-lg font-bold text-navy sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-muted sm:text-base">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-tint">
        <div className="container-page py-12 sm:py-16 md:py-20">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="section-label">Zonas de cobertura</p>
                <h2 className="text-section mt-3 text-navy">
                  Sanitario en Montevideo y alrededores
                </h2>
                <p className="mt-4 text-[15px] text-muted sm:text-base">
                  Si tu barrio está en la lista o cerca, escribinos y
                  confirmamos disponibilidad al momento.
                </p>
              </div>
              <Link
                href="/zonas"
                className="inline-flex items-center gap-1 self-start text-sm font-semibold text-cobalt transition hover:gap-2 md:self-auto"
              >
                Ver todas las zonas
                <Icons name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-2.5">
            {zones.slice(0, 16).map((zone, i) => (
              <Reveal key={zone} delay={Math.min(i * 30, 300)}>
                <span className="inline-block rounded-full border border-line bg-white px-3.5 py-2 text-[13px] font-medium text-navy transition hover:-translate-y-0.5 hover:border-cobalt/30 hover:shadow-sm sm:px-4 sm:text-sm">
                  {zone}
                </span>
              </Reveal>
            ))}
            <Reveal delay={320}>
              <Link
                href="/zonas"
                className="inline-block rounded-full bg-navy px-3.5 py-2 text-[13px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy-deep sm:px-4 sm:text-sm"
              >
                + ver más
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-12 sm:py-16 md:py-20">
          <Reveal>
            <div className="max-w-2xl">
              <p className="section-label">Reseñas</p>
              <h2 className="text-section mt-3 text-navy">
                Lo que dicen quienes ya nos llamaron
              </h2>
              <p className="mt-3 text-[15px] text-muted">
                {site.rating.toFixed(1)}/5 en Google · {site.reviewCount}{" "}
                reseñas visibles
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={review.name} delay={i * 100}>
                <figure className="h-full rounded-[22px] border border-line bg-mist/40 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_30px_rgba(10,35,66,0.08)] sm:p-6">
                  <div className="flex gap-1 text-cobalt">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Icons key={j} name="star" className="h-4 w-4" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-navy md:text-base">
                    “{review.text}”
                  </blockquote>
                  <figcaption className="mt-5 text-sm font-semibold text-muted">
                    {review.name} · {review.zone}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
    </>
  );
}
