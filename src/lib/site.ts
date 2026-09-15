export const site = {
  name: "Reparaciones y servicios López",
  shortName: "López",
  tagline: "Todo lo que tu hogar necesita, en un solo equipo.",
  description:
    "Reparaciones, mantenimiento y reformas en Montevideo. Soluciones profesionales en sanitaria, electricidad, albañilería y más.",
  phoneDisplay: "099 493 321",
  phoneTel: "+59899493321",
  whatsapp: "59899493321",
  whatsappMessage: "Hola, quiero solicitar un presupuesto.",
  city: "Montevideo",
  address: "Flammarión 5046, 11400 Montevideo",
  addressShort: "Montevideo, Uruguay",
  hours: "Lunes a viernes, 08:00–18:00",
  hoursShort: "Lun–Vie 8–18",
  hoursLines: [
    "Lunes a viernes: 08:00 – 18:00",
    "Sábado y domingo: Cerrado",
  ],
  ctaService: "Solicitar presupuesto",
  ctaCall: "Llamar ahora",
} as const;

export function whatsappUrl(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telUrl() {
  return `tel:${site.phoneTel}`;
}

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/emergencias-24h", label: "Urgencias" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/zonas", label: "Zonas" },
  { href: "/contacto", label: "Contacto" },
] as const;

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  image: string;
  problems: string[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "sanitaria",
    title: "Sanitaria",
    shortTitle: "Sanitaria",
    description:
      "Plomería y sanitaria: fugas, desobstrucciones, instalaciones y mantenimiento.",
    longDescription:
      "Resolvemos problemas de sanitaria y plomería en el hogar o comercio: pérdidas de agua, desobstrucciones, cambio de grifería, instalaciones y mantenimiento. Trabajo prolijo y presupuesto claro antes de empezar.",
    image: "/servicio-sanitario.jpg",
    problems: [
      "Pérdidas de agua o caños rotos",
      "Inodoro, pileta o cloaca tapada",
      "Cambio de grifería o artefactos",
      "Instalaciones sanitarias nuevas",
    ],
    seoTitle: "Sanitaria y plomería en Montevideo",
    seoDescription:
      "Servicio de sanitaria y plomería en Montevideo. Reparaciones, instalaciones y mantenimiento con Reparaciones y servicios López.",
  },
  {
    slug: "electricidad",
    title: "Electricidad",
    shortTitle: "Electricidad",
    description:
      "Instalaciones y reparaciones eléctricas para el hogar o comercio.",
    longDescription:
      "Atendemos trabajos de electricidad: tableros, tomas, iluminación, fallas y mejoras de instalación. Priorizamos seguridad, orden y un resultado confiable.",
    image: "/servicio-calefon.jpg",
    problems: [
      "Cortes o fallas en la instalación",
      "Cambio de tablero o protecciones",
      "Tomas, luces e interruptores",
      "Instalaciones eléctricas nuevas",
    ],
    seoTitle: "Electricidad en Montevideo",
    seoDescription:
      "Reparaciones e instalaciones eléctricas en Montevideo. Servicio profesional de Reparaciones y servicios López.",
  },
  {
    slug: "albanileria",
    title: "Albañilería",
    shortTitle: "Albañilería",
    description:
      "Reparaciones, reformas y trabajos de albañilería en Montevideo.",
    longDescription:
      "Realizamos trabajos de albañilería para reparar, mejorar o reformar tu hogar: paredes, revoques, pisos, ampliaciones menores y terminaciones.",
    image: "/servicio-mantenimiento.jpg",
    problems: [
      "Paredes y revoques dañados",
      "Reparaciones de mampostería",
      "Mejoras y reformas parciales",
      "Terminaciones y reacondicionamiento",
    ],
    seoTitle: "Albañilería en Montevideo",
    seoDescription:
      "Albañilería y reformas en Montevideo. Reparaciones y servicios López.",
  },
  {
    slug: "pintura",
    title: "Pintura",
    shortTitle: "Pintura",
    description:
      "Pintura interior y exterior con terminaciones limpias y duraderas.",
    longDescription:
      "Pintamos interiores y exteriores con preparación adecuada de superficies y terminaciones prolijas. Ideal para refrescar tu hogar o cerrar una reforma.",
    image: "/servicio-fugas.jpg",
    problems: [
      "Pintura de habitaciones o locales",
      "Fachadas y exteriores",
      "Preparación de paredes",
      "Terminación luego de una reforma",
    ],
    seoTitle: "Pintura en Montevideo",
    seoDescription:
      "Servicio de pintura en Montevideo. Interiores, exteriores y terminaciones profesionales.",
  },
  {
    slug: "impermeabilizacion",
    title: "Impermeabilización",
    shortTitle: "Impermeabilización",
    description:
      "Soluciones contra humedad, filtraciones y filtrado de agua.",
    longDescription:
      "Tratamos problemas de humedad e impermeabilización en terrazas, techos, muros y zonas críticas. Buscamos una solución duradera y bien explicada.",
    image: "/servicio-desobstruccion.jpg",
    problems: [
      "Filtraciones en techos o terrazas",
      "Humedad en paredes",
      "Impermeabilización preventiva",
      "Reparación de zonas dañadas por agua",
    ],
    seoTitle: "Impermeabilización en Montevideo",
    seoDescription:
      "Impermeabilización y tratamiento de humedad en Montevideo. Reparaciones y servicios López.",
  },
  {
    slug: "herreria",
    title: "Herrería",
    shortTitle: "Herrería",
    description:
      "Trabajos de herrería: reparaciones, estructuras y refuerzos.",
    longDescription:
      "Atendemos trabajos de herrería para el hogar o comercio: reparaciones, estructuras, refuerzos y piezas a medida según la necesidad del trabajo.",
    image: "/servicio-sanitario.jpg",
    problems: [
      "Reparación de estructuras metálicas",
      "Refuerzos y soldaduras",
      "Trabajos a medida",
      "Mantenimiento de herrería existente",
    ],
    seoTitle: "Herrería en Montevideo",
    seoDescription:
      "Herrería y reparaciones metálicas en Montevideo. Reparaciones y servicios López.",
  },
];

export const featuredServices = services;

export const zones = [
  "Centro",
  "Cordón",
  "Pocitos",
  "Punta Carretas",
  "Malvín",
  "Buceo",
  "Carrasco",
  "Punta Gorda",
  "Villa Biarritz",
  "Parque Rodó",
  "Palermo",
  "Barrio Sur",
  "Ciudad Vieja",
  "La Blanqueada",
  "Tres Cruces",
  "Parque Batlle",
  "Unión",
  "Maroñas",
  "Cerro",
  "Prado",
  "Sayago",
  "Paso de la Arena",
  "Carrasco Norte",
  "Costa Urbana",
];

export const faqs = [
  {
    q: "¿Cuál es el horario de atención?",
    a: "Lunes a viernes de 08:00 a 18:00. Sábados y domingos cerrado.",
  },
  {
    q: "¿Qué servicios ofrecen?",
    a: "Sanitaria, electricidad, albañilería, pintura, impermeabilización y herrería. Un solo equipo para reparaciones, mantenimiento y reformas.",
  },
  {
    q: "¿Dan presupuesto antes de empezar?",
    a: "Sí. Explicamos el trabajo, las opciones y el costo antes de intervenir. El presupuesto es sin compromiso.",
  },
  {
    q: "¿Qué formas de pago aceptan?",
    a: "Efectivo, transferencia y tarjeta. Te confirmamos las opciones al coordinar el servicio.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: `Estamos en ${site.address}. Atendemos en Montevideo, Uruguay.`,
  },
];

export const reviews = [
  {
    name: "Cliente en Montevideo",
    zone: "Montevideo",
    text: "Resolvieron varios trabajos en casa con el mismo equipo. Muy prácticos.",
  },
  {
    name: "Cliente en Montevideo",
    zone: "Montevideo",
    text: "Presupuesto claro y trabajo prolijo. Volvería a llamarlos.",
  },
  {
    name: "Cliente en Montevideo",
    zone: "Montevideo",
    text: "Buen trato y responsabilidad. Coordinaron todo sin complicaciones.",
  },
];

export const workSteps = [
  {
    title: "Nos contactás",
    text: "Por teléfono o WhatsApp contanos qué necesitás y tu zona.",
  },
  {
    title: "Presupuesto",
    text: "Te explicamos el trabajo y te damos un presupuesto sin compromiso.",
  },
  {
    title: "Coordinamos",
    text: "Agendamos la visita dentro del horario de atención.",
  },
  {
    title: "Resolvemos",
    text: "Ejecutamos el trabajo, limpiamos y dejamos todo en orden.",
  },
];

export const whyUs = [
  {
    title: "Un solo equipo",
    text: "Varios rubros en un mismo contacto: menos vueltas y más coordinación.",
  },
  {
    title: "Presupuesto transparente",
    text: "Sabés qué se va a hacer y cuánto cuesta antes de empezar.",
  },
  {
    title: "Trabajo responsable",
    text: "Cuidamos tu casa, dejamos el lugar ordenado y con garantía.",
  },
  {
    title: "Cobertura en Montevideo",
    text: "Atención en Montevideo y zonas cercanas.",
  },
];
