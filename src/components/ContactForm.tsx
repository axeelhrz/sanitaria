"use client";

import { useState } from "react";
import { Icons } from "./Icons";
import { whatsappUrl } from "@/lib/site";

export function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [zona, setZona] = useState("");
  const [problema, setProblema] = useState("");
  const [telefono, setTelefono] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = `Hola, soy ${nombre}. Zona: ${zona}. Problema: ${problema}. Tel: ${telefono}`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[24px] border border-line bg-white p-6 shadow-[0_20px_50px_rgba(11,31,58,0.06)] md:p-8"
    >
      <div className="grid gap-4">
        <label className="grid gap-1.5 text-sm font-medium text-navy">
          Nombre
          <input
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="rounded-xl border border-line bg-mist/60 px-4 py-3 outline-none transition focus:border-cobalt focus:bg-white"
            placeholder="Tu nombre"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-navy">
          Zona
          <input
            required
            value={zona}
            onChange={(e) => setZona(e.target.value)}
            className="rounded-xl border border-line bg-mist/60 px-4 py-3 outline-none transition focus:border-cobalt focus:bg-white"
            placeholder="Ej: Pocitos, Cordón..."
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-navy">
          Problema
          <textarea
            required
            rows={3}
            value={problema}
            onChange={(e) => setProblema(e.target.value)}
            className="resize-none rounded-xl border border-line bg-mist/60 px-4 py-3 outline-none transition focus:border-cobalt focus:bg-white"
            placeholder="Contanos qué pasó"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-navy">
          Teléfono
          <input
            required
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="rounded-xl border border-line bg-mist/60 px-4 py-3 outline-none transition focus:border-cobalt focus:bg-white"
            placeholder="091 234 567"
          />
        </label>
      </div>
      <button type="submit" className="btn-navy mt-6 w-full">
        Enviar por WhatsApp
        <Icons name="arrow" className="h-4 w-4" />
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        Respuesta rápida · Sin compromiso · Atención 24h
      </p>
    </form>
  );
}
