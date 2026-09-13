import { site, telUrl, whatsappUrl } from "@/lib/site";
import { Icons } from "./Icons";

export function MobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 px-2 pt-2 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-2 gap-2">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-1.5 rounded-xl bg-[#1f9e57] px-2 py-3.5 text-[13px] font-bold leading-tight text-white shadow-[0_8px_18px_rgba(31,158,87,0.25)] transition active:scale-[0.98] hover:bg-[#188a4a]"
        >
          <Icons name="whatsapp" className="h-4 w-4 shrink-0" />
          Solicitar servicio
        </a>
        <a
          href={telUrl()}
          className="flex min-h-12 items-center justify-center gap-1.5 rounded-xl bg-cobalt px-2 py-3.5 text-[13px] font-bold leading-tight text-white shadow-[0_8px_18px_rgba(0,102,255,0.25)] transition active:scale-[0.98] hover:bg-cobalt-dark"
        >
          <Icons name="phone" className="h-4 w-4 shrink-0" />
          {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
