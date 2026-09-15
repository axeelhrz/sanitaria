"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, telUrl, whatsappUrl } from "@/lib/site";
import { Icons, LogoMark } from "./Icons";
import { ButtonLink } from "./ButtonLink";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/emergencias-24h", label: "Urgencias" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-[border-color,box-shadow,background-color] duration-300 ${
        scrolled
          ? "border-[#D7E0EA] shadow-[0_8px_24px_rgba(10,35,66,0.06)]"
          : "border-transparent shadow-none"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between gap-3 px-4 sm:h-[76px] sm:gap-4 sm:px-5 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2 transition-transform duration-300 hover:scale-[1.02] sm:gap-2.5"
        >
          <LogoMark className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
          <span className="truncate text-[13px] font-bold leading-tight text-[#0A2342] sm:text-[15px]">
            <span className="sm:hidden">{site.shortName}</span>
            <span className="hidden sm:inline">{site.name}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative whitespace-nowrap pb-1 text-[13px] font-medium transition-colors duration-200 xl:text-[14px] ${
                  active
                    ? "text-[#0066FF]"
                    : "text-[#0A2342]/80 hover:text-[#0066FF]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#0066FF] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:gap-5 lg:flex">
          <a href={telUrl()} className="group flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF2FF] text-[#0066FF] transition-transform duration-300 group-hover:scale-110">
              <Icons name="phone" className="h-4 w-4" />
            </span>
            <span className="hidden leading-tight xl:block">
              <span className="block text-[14px] font-bold text-[#0A2342]">
                {site.phoneDisplay}
              </span>
              <span className="block text-[11px] text-[#6B7C8F]">
                {site.hoursShort}
              </span>
            </span>
          </a>
          <ButtonLink
            href={whatsappUrl()}
            variant="whatsapp"
            className="!rounded-full !px-4 !py-2.5 text-[13px] xl:!px-5 xl:text-[14px]"
          >
            <Icons name="whatsapp" className="h-4 w-4" />
            {site.ctaService}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D7E0EA] text-[#0A2342] transition hover:border-[#0066FF]/40 hover:bg-[#EAF2FF] lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icons name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[#E6ECF2] bg-white transition-all duration-300 lg:hidden ${
          open
            ? "max-h-[min(80vh,520px)] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="flex max-h-[min(70vh,460px)] flex-col gap-1 overflow-y-auto px-4 py-3 sm:px-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-medium text-[#0A2342] transition hover:bg-[#F4F7F9]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/zonas"
            onClick={() => setOpen(false)}
            className="rounded-xl px-3 py-3 text-sm font-medium text-[#0A2342] transition hover:bg-[#F4F7F9]"
          >
            Zonas
          </Link>
          <div className="mt-2 flex flex-col gap-2 border-t border-[#E6ECF2] pt-3 pb-[env(safe-area-inset-bottom)]">
            <a
              href={telUrl()}
              className="rounded-xl bg-[#F4F7F9] px-3 py-3.5 text-center text-sm font-semibold text-[#0A2342]"
            >
              {site.ctaCall}
            </a>
            <ButtonLink href={whatsappUrl()} variant="whatsapp" className="w-full">
              <Icons name="whatsapp" className="h-4 w-4" />
              {site.ctaService}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
