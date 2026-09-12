export const site = {
  name: "Sanitario en Montevideo",
  shortName: "Sanitario MV",
  tagline: "Soluciones sanitarias profesionales en Montevideo.",
  phoneDisplay: "091 750 251",
  phoneTel: "+59891750251",
  whatsapp: "59891750251",
  whatsappMessage: "Hola, necesito un sanitario en Montevideo.",
  city: "Montevideo",
  address: "Tacuarembó, 11200 Montevideo, Uruguay",
  addressShort: "Montevideo, Uruguay",
  hours: "Abierto 24 horas, todos los días",
  hoursShort: "Atención 24 horas",
  rating: 4.0,
  reviewCount: 11,
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
  { href: "/emergencias-24h", label: "Emergencias 24h" },
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
    slug: "desobstrucciones",
    title: "Desobstrucciones",
    shortTitle: "Desobstrucciones",
    description:
      "Desobstruimos cañerías, cloacas, baños y cocinas con respuesta rápida en Montevideo.",
    longDescription:
      "Si el agua no baja, hay mal olor o reflujo, actuamos de inmediato. Realizamos desobstrucciones de inodoros, lavamanos, duchas, cocinas y columnas, con diagnóstico claro y solución duradera en todo Montevideo.",
    image: "/servicio-desobstruccion.jpg",
    problems: [
      "Inodoro tapado o con reflujo",
      "Pileta de cocina que no baja",
      "Ducha o bañera obstruida",
      "Malos olores por cloaca",
    ],
    seoTitle: "Desobstrucción de cañerías en Montevideo 24h",
    seoDescription:
      "Desobstrucción de cañerías, cloacas y sanitarios en Montevideo. Atención inmediata las 24 horas.",
  },
  {
    slug: "reforma-de-banos",
    title: "Reforma de baños",
    shortTitle: "Reforma de baños",
    description:
      "Reformas e instalaciones sanitarias para baños: artefactos, grifería y terminaciones.",
    longDescription:
      "Renovamos e instalamos baños con trabajo prolijo: sanitarios, grifería, desagües y conexiones. Coordinamos la obra para que el resultado sea funcional, limpio y duradero.",
    image: "/servicio-sanitario.jpg",
    problems: [
      "Cambio de inodoro, lavatorio o ducha",
      "Renovación de cañerías del baño",
      "Problemas de desagüe o humedad",
      "Reforma parcial o completa del baño",
    ],
    seoTitle: "Reforma de baños en Montevideo",
    seoDescription:
      "Reforma e instalación sanitaria de baños en Montevideo. Trabajo profesional y atención 24h.",
  },
  {
    slug: "reforma-de-cocinas",
    title: "Reforma de cocinas",
    shortTitle: "Reforma de cocinas",
    description:
      "Instalaciones y reformas sanitarias para cocinas: pileta, desagües y conexiones.",
    longDescription:
      "Trabajamos la parte sanitaria de tu cocina: pileta, grifería, desagües y conexiones. Ideal para reformas, cambios de mesada o problemas de pérdidas y obstrucciones.",
    image: "/servicio-fugas.jpg",
    problems: [
      "Cambio de pileta o grifería",
      "Desagüe de cocina lento o tapado",
      "Pérdidas debajo de la mesada",
      "Conexiones para cocina nueva o reforma",
    ],
    seoTitle: "Reforma de cocinas en Montevideo",
    seoDescription:
      "Reforma e instalación sanitaria de cocinas en Montevideo. Plomería profesional y atención 24h.",
  },
  {
    slug: "sanitaria-general",
    title: "Sanitaria general",
    shortTitle: "Sanitaria general",
    description:
      "Reparaciones e instalaciones sanitarias para el hogar o comercio en Montevideo.",
    longDescription:
      "Atendemos trabajos de sanitaria general: reparaciones, instalaciones y urgencias. Te explicamos el problema, el presupuesto y las opciones antes de intervenir.",
    image: "/servicio-mantenimiento.jpg",
    problems: [
      "Reparaciones sanitarias varias",
      "Instalaciones nuevas",
      "Urgencias en baño o cocina",
      "Diagnóstico de fallas",
    ],
    seoTitle: "Sanitaria general en Montevideo",
    seoDescription:
      "Servicio de sanitaria general en Montevideo. Reparaciones, instalaciones y urgencias 24h.",
  },
  {
    slug: "plomeria",
    title: "Plomería",
    shortTitle: "Plomería",
    description:
      "Plomería profesional: fugas, cañerías, grifería y mantenimiento en Montevideo.",
    longDescription:
      "Servicio de plomería para hogares y comercios: detección y reparación de fugas, cambio de grifería, cañerías y soluciones de mantenimiento con atención las 24 horas.",
    image: "/servicio-calefon.jpg",
    problems: [
      "Fugas y pérdidas de agua",
      "Cambio de grifería",
      "Cañerías dañadas",
      "Mantenimiento preventivo",
    ],
    seoTitle: "Plomería en Montevideo 24h",
    seoDescription:
      "Plomería en Montevideo: fugas, cañerías y grifería. Atención 24 horas todos los días.",
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
    q: "¿Atienden emergencias de noche y feriados?",
    a: "Sí. Estamos abiertos 24 horas, todos los días, incluyendo noches, fines de semana y feriados en Montevideo.",
  },
  {
    q: "¿En cuánto tiempo pueden llegar?",
    a: "Depende de la zona y la demanda del momento, pero priorizamos urgencias y buscamos llegar lo antes posible. Al llamar te damos un tiempo estimado real.",
  },
  {
    q: "¿Dan presupuesto antes de empezar?",
    a: "Sí. Explicamos el problema, las opciones y el costo antes de intervenir. El presupuesto es sin compromiso.",
  },
  {
    q: "¿Qué formas de pago aceptan?",
    a: "Efectivo, transferencia y tarjeta. Te confirmamos las opciones al coordinar el servicio.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: `Atendemos en Montevideo. Nuestra referencia es ${site.address}.`,
  },
];

export const reviews = [
  {
    name: "Cliente en Montevideo",
    zone: "Montevideo",
    text: "Buen trato y solución rápida para una urgencia sanitaria. Recomendables.",
  },
  {
    name: "Cliente en Montevideo",
    zone: "Montevideo",
    text: "Desobstruyeron sin demoras y explicaron todo con claridad.",
  },
  {
    name: "Cliente en Montevideo",
    zone: "Montevideo",
    text: "Trabajo prolijo en el baño. Atención 24 horas cuando más se necesita.",
  },
];

export const workSteps = [
  {
    title: "Nos contactás",
    text: "Por teléfono o WhatsApp contanos la urgencia y tu zona.",
  },
  {
    title: "Coordinamos la visita",
    text: "Te confirmamos disponibilidad y tiempo estimado de llegada.",
  },
  {
    title: "Diagnosticamos",
    text: "Revisamos el problema y te damos un presupuesto claro.",
  },
  {
    title: "Resolvemos",
    text: "Ejecutamos el trabajo, limpiamos y dejamos todo funcionando.",
  },
];

export const whyUs = [
  {
    title: "Respuesta 24h",
    text: "Urgencias sanitarias de día, noche y feriados en Montevideo.",
  },
  {
    title: "Presupuesto transparente",
    text: "Sabés qué se va a hacer y cuánto cuesta antes de empezar.",
  },
  {
    title: "Trabajo limpio",
    text: "Cuidamos tu casa, dejamos el lugar ordenado y con garantía.",
  },
  {
    title: "Cobertura en Montevideo",
    text: "Atención en Montevideo y zonas cercanas.",
  },
];
