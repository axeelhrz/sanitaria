import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/site";
import { Icons } from "./Icons";

const iconBySlug: Record<string, React.ComponentProps<typeof Icons>["name"]> = {
  desobstrucciones: "pipe",
  "reforma-de-banos": "toilet",
  "reforma-de-cocinas": "faucet",
  "sanitaria-general": "wrench",
  plomeria: "drop",
};

export function ServiceCard({
  service,
  compact = false,
}: {
  service: Service;
  compact?: boolean;
}) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#E4EBF2] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#0066FF]/25 hover:shadow-[0_16px_36px_rgba(10,35,66,0.1)]`}
    >
      <div className={`relative overflow-hidden ${compact ? "h-[110px]" : "h-36"}`}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, 200px"
        />
      </div>
      <div className={`flex flex-1 flex-col ${compact ? "p-3.5" : "p-5"}`}>
        <span
          className={`mb-2.5 inline-flex items-center justify-center rounded-lg bg-[#EAF2FF] text-[#0066FF] ${
            compact ? "h-8 w-8" : "h-10 w-10 rounded-xl"
          }`}
        >
          <Icons
            name={iconBySlug[service.slug] ?? "wrench"}
            className={compact ? "h-4 w-4" : "h-5 w-5"}
          />
        </span>
        <h3
          className={`font-bold leading-snug text-[#0066FF] ${
            compact ? "text-[13px]" : "text-base"
          }`}
        >
          {service.shortTitle}
        </h3>
        <p
          className={`mt-1.5 flex-1 leading-relaxed text-[#6B7C8F] ${
            compact ? "text-[12px]" : "text-sm"
          }`}
        >
          {service.description}
        </p>
      </div>
    </Link>
  );
}
