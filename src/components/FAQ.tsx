"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";
import { Icons } from "./Icons";
import { Reveal } from "./Reveal";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white">
      <div className="container-page py-16 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label mx-auto justify-center">
              Preguntas frecuentes
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Todo lo que necesitás saber antes de llamar
            </h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-line overflow-hidden rounded-[24px] border border-line bg-mist/40">
            {faqs.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={item.q} className="px-5 transition-colors hover:bg-white/60 md:px-6">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-navy">{item.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-tint text-cobalt transition duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <Icons name="close" className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 text-sm leading-relaxed text-muted md:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
