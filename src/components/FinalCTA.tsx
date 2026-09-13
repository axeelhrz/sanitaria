import { ButtonLink } from "./ButtonLink";
import { Icons } from "./Icons";
import { Reveal } from "./Reveal";
import { site, telUrl, whatsappUrl } from "@/lib/site";

export function FinalCTA({
  title = "¿Necesitás un sanitario?",
  text = "Solicitá el servicio por WhatsApp o llamá y coordinamos la visita. Atención personalizada en Montevideo.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-sky-tint">
      <div className="container-page py-16 md:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-navy px-6 py-12 text-white transition duration-500 hover:shadow-[0_24px_50px_rgba(10,35,66,0.28)] md:px-12 md:py-14">
            <div className="absolute -right-16 -top-16 h-56 w-56 animate-float rounded-full bg-cobalt/30 blur-3xl" />
            <div className="absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="section-label !text-white/70">Contacto</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
                {text}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
