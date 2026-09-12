export const site = {
  name: "Sanitario en Montevideo 24h",
  shortName: "Sanitario MV 24h",
  phoneDisplay: "091 234 567",
  phoneTel: "+59891234567",
  whatsapp: "59891234567",
  whatsappMessage: "Hola, necesito un sanitario en Montevideo.",
  email: "contacto@sanitariomontevideo24h.com",
  city: "Montevideo",
  hours: "Atención 24 horas, los 365 días del año",
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
    slug: "reparacion-de-fugas",
    title: "Reparación de fugas",
    shortTitle: "Reparaciones de fugas",
    description: "Detectamos y reparamos pérdidas de agua en cañerías y sanitarios.",
    longDescription:
      "Una fuga puede subir la factura y dañar paredes o pisos. Localizamos el origen, reparamos con materiales de calidad y dejamos todo en condiciones. Atendemos fugas visibles y pérdidas ocultas en hogares y empresas de Montevideo.",
    image: "/servicio-fugas.jpg",
    problems: [
      "Pérdida debajo de la mesada",
      "Caño que gotea en la pared",
      "Manchas de humedad o humedad constante",
      "Aumento inexplicable en la factura de OSE",
    ],
    seoTitle: "Reparación de fugas y pérdidas de agua en Montevideo",
    seoDescription:
      "Reparación de fugas y pérdidas de agua en Montevideo. Detección rápida, trabajo garantizado y atención 24h.",
  },
  {
    slug: "desobstrucciones",
    title: "Desobstrucciones",
    shortTitle: "Desobstrucciones",
    description: "Desobstruimos cañerías, cloacas, baños y cocinas con equipos profesionales.",
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
    slug: "reparacion-de-calefones",
    title: "Instalación y reparación de calefones",
    shortTitle: "Instalación y reparación de calefones",
    description:
      "Instalamos y reparamos calefones eléctricos y a gas con seguridad.",
    longDescription:
      "Calefón que no calienta, pierde agua o hace ruido: lo diagnosticamos e intervenimos con criterio. También instalamos equipos nuevos y revisamos la instalación para que funcione de forma segura y eficiente.",
    image: "/servicio-calefon.jpg",
    problems: [
      "Calefón que no calienta",
      "Pérdida de agua en el equipo",
      "Instalación de calefón nuevo",
      "Revisión de seguridad",
    ],
    seoTitle: "Reparación e instalación de calefones en Montevideo",
    seoDescription:
      "Instalación y reparación de calefones en Montevideo. Servicio profesional, seguro y con garantía.",
  },
  {
    slug: "instalaciones-sanitarias",
    title: "Instalaciones sanitarias",
    shortTitle: "Instalaciones sanitarias",
    description: "Instalaciones para baños, cocinas, comercios y reformas.",
    longDescription:
      "Desde una grifería hasta la instalación completa de un baño o cocina. Trabajamos con orden, materiales adecuados y terminaciones limpias, coordinando tiempos para no demorar tu obra o reforma.",
    image: "/servicio-sanitario.jpg",
    problems: [
      "Instalación de baño completo",
      "Cocina nueva o reforma",
      "Conexiones sanitarias en obra",
      "Cambio de artefactos",
    ],
    seoTitle: "Instalaciones sanitarias en Montevideo",
    seoDescription:
      "Instalaciones sanitarias para hogares, comercios y obras en Montevideo. Presupuesto claro y trabajo profesional.",
  },
  {
    slug: "reparacion-de-cisternas",
    title: "Reparación de cisternas e inodoros",
    shortTitle: "Cisternas e inodoros",
    description:
      "Arreglamos cisternas que pierden, no cortan o no cargan, e inodoros con fallas frecuentes.",
    longDescription:
      "Una cisterna defectuosa genera desperdicio de agua y ruidos molestos. Cambiamos mecanismos, sellos y artefactos, y dejamos el inodoro funcionando bien sin obras innecesarias.",
    image: "/servicio-sanitario.jpg",
    problems: [
      "Cisterna que no corta el agua",
      "Inodoro que pierde por la base",
      "Cadena o botón roto",
      "Cambio de mecanismo completo",
    ],
    seoTitle: "Reparación de cisternas e inodoros en Montevideo",
    seoDescription:
      "Reparación de cisternas e inodoros en Montevideo. Solución rápida a pérdidas y fallas frecuentes.",
  },
  {
    slug: "griferia",
    title: "Grifería",
    shortTitle: "Grifería",
    description:
      "Cambio y reparación de canillas, monocomandos, duchas y grifería de cocina o baño.",
    longDescription:
      "Goteos, poca presión o grifería antigua: instalamos y reparamos canillas, monocomandos y duchas con terminación prolija. Te asesoramos en opciones según uso y presupuesto.",
    image: "/servicio-fugas.jpg",
    problems: [
      "Canilla que gotea",
      "Monocomando trabado",
      "Cambio de ducha o flor",
      "Poca presión en grifería",
    ],
    seoTitle: "Reparación y cambio de grifería en Montevideo",
    seoDescription:
      "Reparación y cambio de grifería en Montevideo. Canillas, monocomandos y duchas con instalación prolija.",
  },
  {
    slug: "mantenimiento-sanitario",
    title: "Mantenimiento sanitario",
    shortTitle: "Mantenimiento general",
    description: "Mantenimiento preventivo y correctivo para hogares y comercios.",
    longDescription:
      "Evitar urgencias sale más barato que reparar de emergencia. Ofrecemos revisiones, ajustes y mantenimiento periódico para que tu instalación sanitaria funcione sin sorpresas.",
    image: "/servicio-mantenimiento.jpg",
    problems: [
      "Revisión general del baño y cocina",
      "Mantenimiento en edificios",
      "Ajustes preventivos",
      "Contratos para comercios",
    ],
    seoTitle: "Mantenimiento sanitario en Montevideo",
    seoDescription:
      "Mantenimiento sanitario preventivo y correctivo en Montevideo para hogares, edificios y comercios.",
  },
];

export const featuredServices = services.filter((s) =>
  [
    "reparacion-de-fugas",
    "desobstrucciones",
    "reparacion-de-calefones",
    "instalaciones-sanitarias",
    "mantenimiento-sanitario",
  ].includes(s.slug),
);

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
    a: "Sí. Trabajamos las 24 horas, los 365 días del año, incluyendo noches, fines de semana y feriados en Montevideo.",
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
    q: "¿El trabajo tiene garantía?",
    a: "Sí. Trabajamos con garantía sobre la reparación realizada, con materiales adecuados y terminación limpia.",
  },
];

export const reviews = [
  {
    name: "María G.",
    zone: "Pocitos",
    text: "Llegaron rápido un domingo a la noche con el baño inundado. Trabajo limpio y precio claro.",
  },
  {
    name: "Diego R.",
    zone: "Cordón",
    text: "Desobstruyeron la cocina en menos de una hora. Muy profesionales y puntuales.",
  },
  {
    name: "Laura S.",
    zone: "Malvín",
    text: "Nos instalaron el calefón y explicaron todo. Se nota experiencia y seriedad.",
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
    title: "Cobertura real",
    text: "Llegamos a barrios de Montevideo y zonas cercanas.",
  },
];
