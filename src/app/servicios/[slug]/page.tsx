import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { FinalCTA } from "@/components/FinalCTA";
import { Icons } from "@/components/Icons";
import { services, telUrl, whatsappUrl } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="bg-mist">
        <div className="container-page grid gap-10 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-1 text-sm font-semibold text-cobalt"
            >
              ← Todos los servicios
            </Link>
            <h1 className="text-display mt-4 text-navy">
              {service.title} en Montevideo
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {service.longDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={telUrl()} variant="primary">
                <Icons name="phone" className="h-4 w-4" />
                Llamar ahora
              </ButtonLink>
              <ButtonLink href={whatsappUrl(`Hola, necesito: ${service.title}`)} variant="whatsapp">
                <Icons name="whatsapp" className="h-4 w-4" />
                WhatsApp
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 560px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page grid gap-10 py-14 md:grid-cols-2">
          <div>
            <p className="section-label">Problemas frecuentes</p>
            <h2 className="mt-3 text-3xl font-bold text-navy">
              ¿Te suena alguno de estos casos?
            </h2>
            <ul className="mt-6 space-y-3">
              {service.problems.map((problem) => (
                <li
                  key={problem}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-mist/50 px-4 py-3 text-navy"
                >
                  <span className="mt-0.5 text-cobalt">
                    <Icons name="check" className="h-4 w-4" />
                  </span>
                  {problem}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[24px] bg-navy p-7 text-white md:p-8">
            <h2 className="text-2xl font-bold">Cómo pedimos este servicio</h2>
            <ol className="mt-5 space-y-4 text-white/80">
              <li>1. Nos escribís o llamás y contás el problema.</li>
              <li>2. Confirmamos zona y tiempo estimado de llegada.</li>
              <li>3. Diagnosticamos y te damos presupuesto claro.</li>
              <li>4. Resolvemos, limpiamos y garantizamos el trabajo.</li>
            </ol>
            <ButtonLink href="/contacto" variant="primary" className="mt-8">
              Solicitar servicio
              <Icons name="arrow" className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-sky-tint">
        <div className="container-page py-14">
          <h2 className="text-2xl font-bold text-navy">Otros servicios</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/servicios/${item.slug}`}
                className="rounded-2xl border border-line bg-white p-5 transition hover:border-cobalt/40"
              >
                <p className="font-bold text-cobalt">{item.shortTitle}</p>
                <p className="mt-2 text-sm text-muted line-clamp-2">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title={`Pedí ${service.shortTitle.toLowerCase()} ahora`}
        text="Atención en Montevideo las 24 horas. Teléfono y WhatsApp disponibles."
      />
    </>
  );
}
