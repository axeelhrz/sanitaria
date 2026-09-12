# Sanitario en Montevideo 24h

Sitio web premium de plomería / sanitario para Montevideo, con arquitectura SEO por servicios.

## Páginas

- `/` — Landing principal
- `/servicios` — Listado de servicios
- `/servicios/[slug]` — Páginas individuales (fugas, desobstrucciones, calefones, etc.)
- `/emergencias-24h` — Urgencias comerciales
- `/nosotros` — Confianza y forma de trabajar
- `/zonas` — Cobertura en Montevideo
- `/contacto` — Teléfono, WhatsApp y formulario corto

En mobile hay CTA fijo: **Llamar | WhatsApp**.

## Desarrollo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Datos editables

Teléfono, WhatsApp, servicios, zonas y FAQ están en `src/lib/site.ts`.
