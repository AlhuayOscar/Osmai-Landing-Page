export const realProjects = [
  {
    slug: "libertapp",
    name: "LibertApp",
    category: "Plataforma cívica",
    image:
      "https://oscar-fullstacker.vercel.app/_next/static/media/libertapp.530060fe.png",
    imageAlt: "Vista de la landing y el dashboard de LibertApp",
    summary:
      "Sistema externo, open source e independiente para la fiscalización de las Elecciones Presidenciales 2023 en Argentina.",
    contribution:
      "Maquetado, dirección visual, componentes, landing, dashboard y control de calidad integral del front-end.",
    work: [
      "Diseño y desarrollo de la interfaz",
      "Componentes reutilizables para landing y dashboard",
      "QA visual y funcional de todo el front-end",
      "Integración con servicios de Firebase y AWS",
    ],
    technologies: ["React", "TypeScript", "Tailwind", "MUI", "Firebase", "AWS"],
  },
  {
    slug: "edupluss",
    name: "Edupluss",
    category: "Plataforma educativa",
    image:
      "https://oscar-fullstacker.vercel.app/_next/static/media/edupluss.93d73b64.png",
    imageAlt: "Interfaz de la plataforma educativa Edupluss",
    summary:
      "Refactor integral de una experiencia educativa para ordenar su interfaz, formularios y comunicación con el servidor.",
    contribution:
      "Rediseño y refactor de la interfaz completa, formularios e integración de las pantallas con el back-end.",
    work: [
      "Refactor de layout y sistema visual",
      "Formularios conectados a APIs",
      "Integración front-end y back-end",
      "Visualización de datos con gráficos",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
  },
  {
    slug: "mexplorer-tours",
    name: "Mexplorer Tours",
    category: "Turismo y reservas",
    image:
      "https://oscar-fullstacker.vercel.app/_next/static/media/mexplorerfront.25ef2126.png",
    imageAlt: "Sitio web de Mexplorer Tours",
    summary:
      "Experiencia web de turismo preparada para presentar recorridos, recibir consultas y operar en distintos idiomas.",
    contribution:
      "Diseño y desarrollo del layout, formularios, internacionalización e integración completa con el back-end.",
    work: [
      "Interfaz responsive para recorridos",
      "Formularios e integración con el servidor",
      "Contenido en múltiples idiomas",
      "Pagos con Stripe y notificaciones por correo",
    ],
    technologies: ["Next.js", "React", "Node.js", "i18n", "Stripe", "Nodemailer"],
  },
  {
    slug: "mexplorer-admin",
    name: "Mexplorer Admin",
    category: "Panel administrativo",
    image:
      "https://oscar-fullstacker.vercel.app/_next/static/media/mexplorerback.a3ce530b.png",
    imageAlt: "Panel administrativo de Mexplorer",
    summary:
      "Herramienta interna para centralizar la operación del proyecto con una infraestructura protegida y escalable.",
    contribution:
      "Infraestructura de back-end, autenticación robusta, cifrado y medidas de seguridad contra ataques XSS.",
    work: [
      "Arquitectura del back-end",
      "Autenticación y control de acceso",
      "Cifrado y protecciones Anti-XSS",
      "Persistencia de datos y servicios en AWS",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Mongoose", "AWS", "Tailwind"],
  },
  {
    slug: "urbanclub",
    name: "UrbanClub",
    category: "Plataforma de entradas",
    image:
      "https://oscar-fullstacker.vercel.app/_next/static/media/urbanclub.46d24945.png",
    imageAlt: "Plataforma UrbanClub para comprar y vender entradas",
    summary:
      "Plataforma full-stack para publicar, comprar y vender entradas con cuentas de usuario y pagos integrados.",
    contribution:
      "Registro e inicio de sesión, integración de formularios, diseño de tarjetas y flujo de compra y venta de entradas.",
    work: [
      "Registro, login y autenticación",
      "Integración del front-end con el back-end",
      "Diseño de fichas y publicaciones",
      "Compra, venta y pagos mediante PayPal",
    ],
    technologies: ["React", "Redux Toolkit", "PostgreSQL", "JWT", "PayPal", "Sequelize"],
  },
  {
    slug: "lachoco-latera",
    name: "LaChoco Latera",
    category: "E-commerce gastronómico",
    image:
      "https://www.lachoco-latera.com/_next/image?url=%2Fimages%2Fus%2Fhero2.jpg&w=1920&q=75",
    imageAlt: "Productos de chocolate colombiano presentados en LaChoco Latera",
    gallery: [
      {
        src: "https://www.lachoco-latera.com/_next/image?url=%2Fimages%2Fus%2Fhero2.jpg&w=1920&q=75",
        alt: "Mousse de chocolate artesanal de LaChoco Latera",
      },
      {
        src: "https://www.lachoco-latera.com/_next/image?url=%2Fimages%2Fus%2Fhero1.jpg&w=1920&q=75",
        alt: "Caja de bombones frescos de LaChoco Latera",
      },
      {
        src: "https://www.lachoco-latera.com/_next/image?url=%2Fimages%2Fus%2Fhero3.jpg&w=1920&q=75",
        alt: "Chocolate caliente colombiano con especias",
      },
      {
        src: "https://www.lachoco-latera.com/images/us/box-12.jpg",
        alt: "Caja de doce bombones artesanales lista para regalar",
      },
      {
        src: "/img/project-captures/lachoco-live.png",
        alt: "Captura actual de la portada en vivo de LaChoco Latera",
      },
    ],
    sourceUrl: "https://www.lachoco-latera.com/en-US",
    summary:
      "Tienda digital para comercializar chocolate colombiano en Miami, con productos, degustaciones y una experiencia adaptada al mercado estadounidense.",
    contribution:
      "Diseño y desarrollo de la experiencia e-commerce, catálogo visual, variantes de producto, carrito, contenidos en inglés y recorridos de compra.",
    work: [
      "Catálogo de bombones, barras y chocolate caliente",
      "Carrito y opciones de compra por producto",
      "Reservas para degustaciones y experiencias",
      "Contenido internacional y relato sobre origen e impacto",
    ],
    technologies: ["Next.js", "E-commerce", "Catálogo", "i18n", "Checkout", "Responsive"],
  },
  {
    slug: "punto-arte-peru",
    name: "Punto Arte Perú",
    category: "Restaurante y menú digital",
    image: "https://www.puntoartperu.com/assets/images/hero-slider-1.jpg",
    imageAlt: "Platos de cocina peruana presentados en el sitio de Punto Arte Perú",
    gallery: [
      {
        src: "https://www.puntoartperu.com/assets/images/hero-slider-1.jpg",
        alt: "Presentación gastronómica de Punto Arte Perú",
      },
      {
        src: "https://www.puntoartperu.com/assets/images/hero-slider-2.jpg",
        alt: "Plato de cocina peruana servido en Punto Arte Perú",
      },
      {
        src: "https://www.puntoartperu.com/assets/images/hero-slider-3.jpg",
        alt: "Especialidad peruana destacada en la portada del restaurante",
      },
      {
        src: "https://www.puntoartperu.com/assets/images/service-2.jpg",
        alt: "Aperitivo del menú digital de Punto Arte Perú",
      },
      {
        src: "/img/project-captures/punto-arte-live.png",
        alt: "Captura actual de la portada en vivo de Punto Arte Perú",
      },
    ],
    sourceUrl: "https://www.puntoartperu.com/",
    summary:
      "Sitio gastronómico para un restaurante peruano en San Fernando, Chile, enfocado en presentar su cultura, menú y canales de contacto.",
    contribution:
      "Diseño y desarrollo del sitio institucional, carta digital, secciones gastronómicas, contacto por WhatsApp, ubicación y presentación de los chefs.",
    work: [
      "Carta completa de platos y bebidas",
      "Acceso directo a consultas por WhatsApp",
      "Ubicación, horarios y datos de contacto",
      "Historia, propuesta gastronómica y equipo de cocina",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WhatsApp", "Google Maps", "Responsive"],
  },
];

export const portfolioSource = "https://oscar-fullstacker.vercel.app/#projects";
