export const site = {
  name: "Sanitario Raul Arrieta",
  shortName: "Raul Arrieta",
  tagline: "Soluciones sanitarias hechas como corresponde.",
  description:
    "Servicio de sanitaria profesional en Montevideo. Atención personalizada, trabajo responsable y soluciones para tu hogar o empresa.",
  phoneDisplay: "095 297 686",
  phoneTel: "+59895297686",
  whatsapp: "59895297686",
  whatsappMessage: "Hola, quiero solicitar un servicio de sanitaria.",
  city: "Montevideo",
  address: "Agrigento 2320, 11500 Montevideo",
  addressShort: "Montevideo",
  plusCode: "4WF8+J5 Montevideo",
  hours: "Lun–Vie 08:00–17:00 · Sáb 08:00–12:00 · Dom cerrado",
  hoursShort: "Lun–Vie 8–17",
  hoursLines: [
    "Lunes a viernes: 08:00 – 17:00",
    "Sábado: 08:00 – 12:00",
    "Domingo: Cerrado",
  ],
  rating: 5.0,
  reviewCount: 5,
  ratingLabel: "5,0 en Google",
  ctaService: "Solicitar servicio",
  ctaCall: "Llamar al 095 297 686",
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
    slug: "desobstrucciones",
    title: "Desobstrucciones",
    shortTitle: "Desobstrucciones",
    description:
      "Desobstruimos cañerías, cloacas, baños y cocinas con trabajo prolijo en Montevideo.",
    longDescription:
      "Si el agua no baja, hay mal olor o reflujo, lo resolvemos con diagnóstico claro. Realizamos desobstrucciones de inodoros, lavamanos, duchas, cocinas y columnas, con una solución duradera.",
    image: "/servicio-desobstruccion.jpg",
    problems: [
      "Inodoro tapado o con reflujo",
      "Pileta de cocina que no baja",
      "Ducha o bañera obstruida",
      "Malos olores por cloaca",
    ],
    seoTitle: "Desobstrucción de cañerías en Montevideo",
    seoDescription:
      "Desobstrucción de cañerías, cloacas y sanitarios en Montevideo. Servicio profesional de Sanitario Raul Arrieta.",
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
      "Reforma e instalación sanitaria de baños en Montevideo. Trabajo profesional y responsable.",
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
      "Reforma e instalación sanitaria de cocinas en Montevideo. Plomería profesional.",
  },
  {
    slug: "sanitaria-general",
    title: "Sanitaria general",
    shortTitle: "Sanitaria general",
    description:
      "Reparaciones e instalaciones sanitarias para el hogar o comercio en Montevideo.",
    longDescription:
      "Atendemos trabajos de sanitaria general: reparaciones, instalaciones y urgencias en horario de atención. Te explicamos el problema, el presupuesto y las opciones antes de intervenir.",
    image: "/servicio-mantenimiento.jpg",
    problems: [
      "Reparaciones sanitarias varias",
      "Instalaciones nuevas",
      "Problemas en baño o cocina",
      "Diagnóstico de fallas",
    ],
    seoTitle: "Sanitaria general en Montevideo",
    seoDescription:
      "Servicio de sanitaria general en Montevideo. Reparaciones e instalaciones con Sanitario Raul Arrieta.",
  },
  {
    slug: "plomeria",
    title: "Plomería",
    shortTitle: "Plomería",
    description:
      "Plomería profesional: fugas, cañerías, grifería y mantenimiento en Montevideo.",
    longDescription:
      "Servicio de plomería para hogares y comercios: detección y reparación de fugas, cambio de grifería, cañerías y soluciones de mantenimiento con atención personalizada.",
    image: "/servicio-calefon.jpg",
    problems: [
      "Fugas y pérdidas de agua",
      "Cambio de grifería",
      "Cañerías dañadas",
      "Mantenimiento preventivo",
    ],
    seoTitle: "Plomería en Montevideo",
    seoDescription:
      "Plomería en Montevideo: fugas, cañerías y grifería. Atención personalizada y trabajo responsable.",
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
    a: "Lunes a viernes de 08:00 a 17:00, sábados de 08:00 a 12:00. Domingos cerrado.",
  },
  {
    q: "¿En cuánto tiempo pueden llegar?",
    a: "Depende de la zona y la demanda del momento. Al llamar te damos un tiempo estimado real según disponibilidad.",
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
    a: `Estamos en ${site.address}. Código Plus: ${site.plusCode}. Atendemos en Montevideo.`,
  },
];

export const reviews = [
  {
    name: "Cliente en Montevideo",
    zone: "Montevideo",
    text: "Buen trato y solución clara. Trabajo hecho como corresponde.",
  },
  {
    name: "Cliente en Montevideo",
    zone: "Montevideo",
    text: "Atención personalizada y resultado prolijo. Recomendables.",
  },
  {
    name: "Cliente en Montevideo",
    zone: "Montevideo",
    text: "Responsables y puntuales. Resolvieron el problema sin vueltas.",
  },
];

export const workSteps = [
  {
    title: "Nos contactás",
    text: "Por teléfono o WhatsApp contanos el problema y tu zona.",
  },
  {
    title: "Coordinamos la visita",
    text: "Te confirmamos disponibilidad dentro del horario de atención.",
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
    title: "5,0 en Google",
    text: "Clientes que confían en nuestro trabajo y nos recomiendan.",
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
