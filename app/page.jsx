"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock,
  ExternalLink,
  Globe2,
  LayoutGrid,
  Megaphone,
  MessageCircleMore,
  MonitorSmartphone,
  PenTool,
  Plus,
  Rocket,
  Search,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Reveal from "./components/Reveal";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Elegirnos", href: "#elegirnos" },
  { label: "Planes", href: "#planes" },
  { label: "FAQ", href: "#faq" },
];

const creativeFonts = [
  "var(--font-bungee-shade)",
  "var(--font-monoton)",
  "var(--font-rubik-moonrocks)",
  "var(--font-rubik-glitch)",
  "var(--font-pirata-one)",
  "var(--font-ewert)",
  "var(--font-fascinate-inline)",
  "var(--font-unifraktur)",
];

const creativeColorSets = [
  ["#ffd166", "#ff8c42", "#f25f5c", "#ffffff", "#b8f7ff", "#f7d6ff", "#fff2b8", "#7fffd4", "#ffb3c7"],
  ["#f9f871", "#ff6b6b", "#ff9f1c", "#ffffff", "#9bf6ff", "#caffbf", "#ffd6ff", "#fdffb6", "#bdb2ff"],
  ["#ffffff", "#ffe66d", "#ff70a6", "#70d6ff", "#ff9770", "#e9ff70", "#c77dff", "#64dfdf", "#f4f1de"],
];

const heroStats = [
  { label: "WEB", value: "Marca digital" },
  { label: "MARCA", value: "Visual y verbal" },
  { label: "SOFTWARE", value: "Base escalable" },
];

const serviceCards = [
  {
    icon: MonitorSmartphone,
    title: "Diseno web",
    text: "Landing pages, sitios institucionales y experiencias digitales preparadas para convertir visitas en consultas.",
  },
  {
    icon: PenTool,
    title: "Diseno grafico",
    text: "Diseno y rediseno, creando de tu marca la identidad de recorrido, lugar y propuesta visual.",
  },
  {
    icon: LayoutGrid,
    title: "UX",
    text: "Ordenamos la informacion para que tus clientes entiendan rapido que haces y por que elegirte.",
  },
  {
    icon: MessageCircleMore,
    title: "Soporte cercano",
    text: "Somos Oscar y Maira y te acompanamos en cada etapa con criterio tecnico, mirada visual y comunicacion simple.",
  },
];

const specialtyCards = [
  {
    icon: Sparkles,
    title: "Naming",
    text: "Si tu proyecto empieza desde cero, ordenamos nombre, tono y primer mensaje para que la marca tenga una base clara.",
  },
  {
    icon: BadgeCheck,
    title: "Identidad de marca",
    text: "Construimos un sistema visual simple de sostener: logo, colores, usos, piezas y criterios para comunicar mejor.",
  },
  {
    icon: Globe2,
    title: "Sitios institucionales",
    text: "Paginas de empresa, servicios, portfolio y contacto con estructura profesional y lista para posicionar.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    text: "Placeholders para tiendas, catalogos y flujos de compra que despues podemos conectar a pagos, stock o envios.",
  },
  {
    icon: Megaphone,
    title: "Social media",
    text: "Bases para contenido, campanas y piezas digitales que mantengan coherencia con la web y la identidad.",
  },
  {
    icon: Rocket,
    title: "Marketing digital",
    text: "Secciones preparadas para sumar Google Ads, Meta, SEO y llamados a la accion con seguimiento comercial.",
  },
];

const projectCards = [
  {
    eyebrow: "Home principal",
    title: "Hero con fondo editable",
    text: "Dejamos el contenedor preparado para que sumes tu foto o render sin tocar la estructura.",
  },
  {
    eyebrow: "Servicios",
    title: "Cards modulares",
    text: "Cada bloque puede crecer con mas items, links o ejemplos sin romper la composicion.",
  },
  {
    eyebrow: "Mensaje",
    title: "Titulares grandes",
    text: "La propuesta visual mantiene una lectura fuerte, simple y clara en desktop y mobile.",
  },
];

const caseStudies = [
  {
    type: "Sitio institucional",
    title: "Empresa de servicios",
    text: "Home, servicios, beneficios, formulario y area visual preparada para fotos reales del equipo.",
  },
  {
    type: "Catalogo online",
    title: "Marca de productos",
    text: "Grilla de productos, categorias, fichas y llamadas para consultar por WhatsApp o integrar carrito.",
  },
  {
    type: "Identidad + web",
    title: "Proyecto nuevo",
    text: "Naming, tono, sistema grafico y landing de lanzamiento con contenido listo para campanas.",
  },
  {
    type: "Software a medida",
    title: "Herramienta interna",
    text: "Dashboard, carga de datos, reportes y flujos privados para simplificar operaciones del negocio.",
  },
];

const whyItems = [
  {
    icon: PenTool,
    title: "Diseno a medida",
    text: "No partimos de una plantilla generica: la estructura se adapta a tu mensaje, rubro y objetivo comercial.",
  },
  {
    icon: ShieldCheck,
    title: "Propiedad y claridad",
    text: "Dejamos el sitio y los materiales pensados para que puedas usarlos, editarlos y seguir creciendo.",
  },
  {
    icon: Clock,
    title: "Tiempos pactados",
    text: "Trabajamos por etapas visibles para que sepas que falta, que esta listo y que decision viene despues.",
  },
  {
    icon: UsersRound,
    title: "Atencion cercana",
    text: "Acompanamiento real durante el proceso, con comunicacion directa y explicaciones sin vueltas.",
  },
  {
    icon: Megaphone,
    title: "Difusion",
    text: "La web queda preparada para campanas, redes, SEO basico y llamados a la accion medibles.",
  },
  {
    icon: ServerCog,
    title: "Hosting y soporte",
    text: "Podemos sumar mantenimiento, ajustes, mejoras y soporte para que te ocupes de tu negocio.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Definimos la estructura",
    text: "Armamos la home y las secciones internas con una grilla clara y jerarquia visual estable.",
  },
  {
    step: "02",
    title: "Aplicamos el estilo",
    text: "Colores, botones, sombras y tipografia quedan listos para extender el sistema a nuevas pantallas.",
  },
  {
    step: "03",
    title: "Completas los fondos",
    text: "Los bloques de imagen quedan marcados como placeholders para que reemplaces con tus visuales finales.",
  },
];

const commerceFeatures = [
  "Catalogo editable con categorias y productos destacados",
  "Bloques preparados para medios de pago, envios y promociones",
  "Consultas por WhatsApp o carrito integrado segun la etapa del negocio",
  "Paneles y automatizaciones posibles cuando la tienda necesite crecer",
];

const plans = [
  {
    name: "Base",
    price: "Landing",
    text: "La pagina principal con el sistema visual listo para presentar la marca.",
    features: ["Hero editable", "Secciones responsivas", "CTA y navegacion"],
  },
  {
    name: "Expandida",
    price: "Web completa",
    text: "La misma direccion visual extendida a mas paginas, modulos y contenido comercial.",
    features: ["Mas secciones", "Bloques reutilizables", "Escala para portfolio o servicios"],
    featured: true,
  },
  {
    name: "Custom",
    price: "Sistema",
    text: "Una base pensada para sumar paneles, integraciones o herramientas internas despues.",
    features: ["Arquitectura clara", "Listo para crecer", "Soporte para nuevas vistas"],
  },
];

const faqs = [
  {
    question: "Puedo cambiar las imagenes despues?",
    answer:
      "Si. La home deja zonas de fondo preparadas para que reemplaces cada placeholder con la imagen final que quieras usar.",
  },
  {
    question: "El estilo queda adaptado a celular?",
    answer:
      "Si. La composicion se reorganiza para mobile con tipografia, botones y cards ajustadas a pantallas chicas.",
  },
  {
    question: "Se puede seguir sumando paginas con este mismo look?",
    answer:
      "Si. La idea es dejar una base visual consistente para extender servicios, proyectos, planes o formularios.",
  },
  {
    question: "Pueden sumar tienda online o catalogo mas adelante?",
    answer:
      "Si. Esta version deja contenido y placeholders para e-commerce, catalogos y flujos comerciales que pueden integrarse en una etapa posterior.",
  },
];

const emailSubject = "Consulta desde la pagina web";
const emailBody = [
  "Hola! Buenas tardes,",
  "",
  "Vengo de la pagina web y quisiera contratar sus servicios.",
  "",
  "Me interesa recibir informacion sobre:",
  "- Diseno web",
  "- Identidad visual",
  "- Software a medida",
  "",
  "Mi nombre es:",
  "Mi empresa o proyecto es:",
  "Mi telefono o WhatsApp es:",
  "",
  "Muchas gracias.",
].join("\n");

const contactEmailHref = `mailto:info@omcreativos.com?subject=${encodeURIComponent(
  emailSubject
)}&body=${encodeURIComponent(emailBody)}`;

function SectionTitle({ eyebrow, title, text, centered = false }) {
  const direction = centered ? "up" : "left";

  return (
    <div className={`section-title ${centered ? "is-centered" : ""}`}>
      <Reveal as="span" direction={direction} delay={0.05}>
        {eyebrow}
      </Reveal>
      <Reveal as="h2" direction={direction} delay={0.12}>
        {title}
      </Reveal>
      {text ? (
        <Reveal as="p" direction={direction} delay={0.18}>
          {text}
        </Reveal>
      ) : null}
    </div>
  );
}

function PrimaryLink({ href, children, variant = "primary" }) {
  return (
    <a className={`cta-link cta-link-${variant}`} href={href}>
      {children}
    </a>
  );
}

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [hasNavBackdrop, setHasNavBackdrop] = useState(false);
  const [navTone, setNavTone] = useState("on-dark");
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [creativeFontIndex, setCreativeFontIndex] = useState(0);
  const [creativeColorSetIndex, setCreativeColorSetIndex] = useState(0);
  const [typedCreativeCount, setTypedCreativeCount] = useState(0);
  const [navIndicatorStyle, setNavIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navLinksRef = useRef(null);
  const navLinkRefs = useRef([]);
  const navTimerRef = useRef(null);
  const navPointerInsideRef = useRef(false);
  const lastNavActivityRef = useRef(Date.now());
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const fontTimer = window.setInterval(() => {
      setCreativeFontIndex((currentIndex) => (currentIndex + 1) % creativeFonts.length);
      setCreativeColorSetIndex((currentIndex) => (currentIndex + 1) % creativeColorSets.length);
    }, 3000);

    return () => {
      window.clearInterval(fontTimer);
    };
  }, []);

  useEffect(() => {
    setTypedCreativeCount(0);

    const typeTimer = window.setInterval(() => {
      setTypedCreativeCount((currentCount) => {
        if (currentCount >= "creativos".length) {
          window.clearInterval(typeTimer);
          return currentCount;
        }

        return currentCount + 1;
      });
    }, 95);

    return () => {
      window.clearInterval(typeTimer);
    };
  }, [creativeFontIndex]);

  useEffect(() => {
    const showNav = () => {
      lastNavActivityRef.current = Date.now();
      setIsNavVisible(true);
    };

    const updateNavTone = () => {
      const sampleY = 54;
      const darkSections = ["hero-section", "intro-band", "why-section", "process-section"];
      const currentSection = [...document.querySelectorAll("section, footer")].find((element) => {
        const rect = element.getBoundingClientRect();

        return rect.top <= sampleY && rect.bottom >= sampleY;
      });
      const isOverDarkSection = darkSections.some((className) => currentSection?.classList.contains(className));

      setNavTone(isOverDarkSection ? "on-dark" : "on-light");
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      setHasNavBackdrop(currentScrollY > 50);
      updateNavTone();

      if (Math.abs(scrollDelta) < 8) {
        return;
      }

      if (scrollDelta > 0 && !navPointerInsideRef.current) {
        setIsNavVisible(false);
      } else {
        showNav();
      }

      lastScrollYRef.current = currentScrollY;
    };

    const handleMouseMove = (event) => {
      if (event.clientY < 112) {
        showNav();
      }
    };

    lastScrollYRef.current = window.scrollY;
    setHasNavBackdrop(window.scrollY > 50);
    updateNavTone();
    showNav();
    navTimerRef.current = window.setInterval(() => {
      const hasBeenIdle = Date.now() - lastNavActivityRef.current > 3000;
      const isAtPageStart = window.scrollY <= 50;

      if (isAtPageStart) {
        setIsNavVisible(true);
        return;
      }

      if (hasBeenIdle && !navPointerInsideRef.current) {
        setIsNavVisible(false);
      }
    }, 250);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", updateNavTone);

    return () => {
      window.clearInterval(navTimerRef.current);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateNavTone);
    };
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const linksBox = navLinksRef.current;
      const activeLink = navLinkRefs.current[activeNavIndex];

      if (!linksBox || !activeLink) {
        return;
      }

      const parentRect = linksBox.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      setNavIndicatorStyle({
        left: linkRect.left - parentRect.left,
        width: linkRect.width,
        opacity: 1,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeNavIndex, isNavVisible]);

  return (
    <main className="landing-shell">
      <section className="hero-section" id="top">
        <div className="hero-background" aria-hidden="true">
          <Reveal className="hero-image-frame" direction="center" scale={1.04}>
            <img className="hero-image" src="/img/herosection.jpg" alt="" />
          </Reveal>
        </div>

        <nav
          className={`hero-nav nav-${navTone} ${hasNavBackdrop ? "has-backdrop" : ""} ${
            isNavVisible ? "is-visible" : "is-hidden"
          }`}
          aria-label="Navegacion principal"
          onMouseEnter={() => {
            navPointerInsideRef.current = true;
            lastNavActivityRef.current = Date.now();
            setIsNavVisible(true);
          }}
          onMouseLeave={() => {
            navPointerInsideRef.current = false;
            lastNavActivityRef.current = Date.now();
          }}
        >
          <a className="brandmark" href="#top" aria-label="Inicio de omcreativos">
            <img className="brandmark-symbol" src="/img/osmailogo.svg" alt="" />
          </a>

          <div className="hero-nav-center">
            <div className="hero-nav-links" ref={navLinksRef}>
              <span
                className="hero-nav-indicator"
                style={{
                  opacity: navIndicatorStyle.opacity,
                  transform: `translateX(${navIndicatorStyle.left}px)`,
                  width: `${navIndicatorStyle.width}px`,
                }}
                aria-hidden="true"
              />
              {navItems.map((item, index) => (
                <a
                  href={item.href}
                  key={item.label}
                  ref={(node) => {
                    navLinkRefs.current[index] = node;
                  }}
                  onMouseEnter={() => {
                    lastNavActivityRef.current = Date.now();
                    setActiveNavIndex(index);
                  }}
                  onFocus={() => {
                    lastNavActivityRef.current = Date.now();
                    setActiveNavIndex(index);
                  }}
                  onClick={() => {
                    lastNavActivityRef.current = Date.now();
                    setActiveNavIndex(index);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button className="hero-search" type="button" aria-label="Buscar" >
              <Search size={15} />
            </button>
          </div>

          <a className="hero-nav-cta" href="#planes">
            Pedi propuesta
          </a>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <Reveal as="p" className="hero-eyebrow" direction="left" delay={0.18}>
              Web design y diseno integral
            </Reveal>
            <Reveal as="h1" aria-label="seamos creativos" direction="left" delay={0.25}>
              <span className="hero-static-word">seamos</span>{" "}
              <span
                className="hero-typed-word"
                style={{ fontFamily: creativeFonts[creativeFontIndex] }}
              >
                {"creativos".split("").map((letter, index) => (
                  <span
                    className={index < typedCreativeCount ? "is-typed" : ""}
                    key={`${creativeFontIndex}-${letter}-${index}`}
                    style={{
                      "--letter-color": creativeColorSets[creativeColorSetIndex][index],
                      transitionDelay: `${index * 55}ms`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </Reveal>
            <Reveal as="p" className="hero-description" direction="left" delay={0.32}>
              Creamos sitios web, disenos visuales y soluciones de software para
              pequenas y medianas empresas que quieren mejorar su identidad
              visual, vender mas y trabajar con herramientas propias.
            </Reveal>

            <Reveal className="hero-actions" direction="left" delay={0.39}>
              <PrimaryLink href="#proyectos">Empezar proyecto</PrimaryLink>
              <a className="hero-service-link" href="#servicios">
                <span>
                  <Sparkles size={13} />
                </span>
                Ver servicios
              </a>
            </Reveal>

            <Reveal className="hero-stats" aria-label="Servicios principales de omcreativos" direction="left" delay={0.46}>
              {heroStats.map((item) => (
                <div key={item.label}>
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="intro-band" id="servicios">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Lo que hacemos"
            title="Diseno y tecnologia para que tu empresa se vea profesional"
            text="omcreativos combina programacion web, software y diseno visual para construir una presencia digital clara, moderna y facil de usar."
            centered
          />
        </div>
      </section>

      <section className="cards-section">
        <div className="section-shell">
          <div className="services-grid">
            {serviceCards.map(({ icon: Icon, title, text }, index) => (
              <Reveal
                as="article"
                className="service-card"
                direction={index % 2 === 0 ? "left" : "right"}
                delay={(index % 2) * 0.08}
                key={title}
              >
                <div className="service-card-badge">
                  <Plus size={14} />
                </div>
                <div className="service-card-body">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <Icon className="service-card-icon" size={24} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="agency-section" id="especialidades">
        <div className="section-shell agency-layout">
          <div className="agency-copy">
            <SectionTitle
              eyebrow="Expertos digitales"
              title="Todo lo que necesita una marca para salir mejor parada online"
              text="Tomamos la idea de una agencia integral y la llevamos al lenguaje omcreativos: simple, moderno, azul, modular y listo para reemplazar placeholders por material real."
            />
            <Reveal className="agency-note" direction="left" delay={0.25}>
              <strong>Mas de una sola landing.</strong>
              <p>
                La estructura queda preparada para crecer hacia identidad,
                contenido, campanas, tienda online, soporte o software propio
                sin perder coherencia visual.
              </p>
            </Reveal>
          </div>

          <div className="specialty-grid">
            {specialtyCards.map(({ icon: Icon, title, text }, index) => (
              <Reveal
                as="article"
                className="specialty-card"
                direction={index % 2 === 0 ? "up" : "right"}
                delay={(index % 3) * 0.06}
                key={title}
              >
                <Icon size={21} />
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section" id="proyectos">
        <div className="section-shell projects-layout">
          <div className="projects-copy">
            <SectionTitle
              eyebrow="Proyecto"
              title="Una home armada para parecer final incluso antes de cargar las imagenes"
              text="La estructura replica la direccion del mockup y deja la parte visual lista para completar con tus fondos, renders o fotos."
            />
            <Reveal direction="left" delay={0.25}>
              <PrimaryLink href="#proceso">
                Ver como sigue
                <ArrowRight size={18} />
              </PrimaryLink>
            </Reveal>
          </div>

          <div className="projects-board">
            <Reveal className="projects-placeholder" direction="right">
              <span>Zona editable para imagen o mockup</span>
            </Reveal>
            <div className="projects-card-grid">
              {projectCards.map((card, index) => (
                <Reveal
                  as="article"
                  className="project-card"
                  direction={index === 0 ? "up" : "right"}
                  delay={index * 0.08}
                  key={card.title}
                >
                  <span>{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="section-shell project-cases">
          <SectionTitle
            eyebrow="Casos de exito"
            title="Proyectos placeholder para mostrar alcance sin depender todavia de imagenes finales"
            text="Inspirado en una grilla de portfolio: cada card puede transformarse luego en una ficha real con captura, enlace y tecnologias usadas."
          />

          <div className="case-study-grid">
            {caseStudies.map((item, index) => (
              <Reveal
                as="article"
                className="case-study-card"
                direction={index % 2 === 0 ? "left" : "right"}
                delay={(index % 2) * 0.08}
                key={item.title}
              >
                <div className="case-image-placeholder">
                  <span>Imagen / captura</span>
                </div>
                <div>
                  <span>{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <ExternalLink size={18} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section" id="elegirnos">
        <div className="section-shell why-layout">
          <div>
            <SectionTitle
              eyebrow="Por que elegirnos"
              title="Cercania, criterio tecnico y una web pensada para vender mejor"
              text="La referencia trabaja mucho la confianza. En omcreativos lo traducimos a beneficios concretos: propiedad, tiempos claros, soporte y una base que puede evolucionar."
            />
          </div>

          <div className="why-grid">
            {whyItems.map(({ icon: Icon, title, text }, index) => (
              <Reveal
                as="article"
                className="why-card"
                direction={index % 2 === 0 ? "left" : "right"}
                delay={(index % 3) * 0.05}
                key={title}
              >
                <span>
                  <Icon size={20} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section" id="proceso">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Proceso"
            title="Una base visual clara para seguir construyendo"
            text="Dejamos un sistema simple de continuar: titulos grandes, cards, placeholders y bloques listos para crecer."
          />

          <div className="process-grid">
            {processSteps.map((item, index) => (
              <Reveal
                as="article"
                className="process-card"
                direction={index === 0 ? "left" : index === 1 ? "up" : "right"}
                delay={index * 0.08}
                key={item.step}
              >
                <strong>{item.step}</strong>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="commerce-section">
        <div className="section-shell commerce-layout">
          <Reveal className="commerce-visual" direction="left">
            <div className="commerce-window">
              <span>Catalogo / tienda</span>
              <div />
              <div />
              <div />
            </div>
          </Reveal>

          <div className="commerce-copy">
            <SectionTitle
              eyebrow="Tiendas online"
              title="Impulsa tu negocio con catalogos, ventas y automatizaciones"
              text="Dejamos esta seccion como punto de partida para e-commerce: productos, pagos, envios, consultas y mejoras de gestion cuando el proyecto lo necesite."
            />
            <Reveal as="ul" className="commerce-list" direction="right" delay={0.2}>
              {commerceFeatures.map((feature) => (
                <li key={feature}>
                  <Check size={16} />
                  {feature}
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="plans-section" id="planes">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Planes"
            title="La misma direccion visual puede escalar a una web mas grande"
            text="Si despues queres sumar mas pantallas o paginas, ya queda montada una base consistente para continuar."
            centered
          />

          <div className="plans-grid">
            {plans.map((plan, index) => (
              <Reveal
                as="article"
                className={`plan-card ${plan.featured ? "is-featured" : ""}`}
                direction={index === 0 ? "left" : index === 1 ? "up" : "right"}
                delay={index * 0.08}
                key={plan.name}
              >
                <span>{plan.name}</span>
                <h3>{plan.price}</h3>
                <p>{plan.text}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-shell faq-layout">
          <SectionTitle
            eyebrow="FAQ"
            title="Preguntas comunes sobre esta recreacion"
            text="Deje la pagina pensada para que cambies el contenido visual sin tener que rehacer la estructura."
          />

          <div className="faq-list">
            {faqs.map((item, index) => (
              <Reveal as="div" direction="right" delay={index * 0.08} key={item.question}>
                <article className={`faq-item ${openFaqIndex === index ? "is-open" : ""}`}>
                  <button
                    className="faq-trigger"
                    type="button"
                    aria-expanded={openFaqIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => {
                      setOpenFaqIndex((currentIndex) => (currentIndex === index ? -1 : index));
                    }}
                  >
                    {item.question}
                    <ChevronDown size={18} />
                  </button>
                  <div className="faq-content" id={`faq-answer-${index}`}>
                    <div className="faq-content-inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-layout">
          <Reveal className="footer-main" direction="left">
            <a className="brandmark footer-brandmark" href="#top">
              <img className="brandmark-symbol" src="/img/osmailogo.svg" alt="" />
              <img className="brandmark-word" src="/img/osmaitext.svg" alt="omcreativos" />
            </a>
            <h2>Frontend recreado con placeholders listos para tus fondos.</h2>
          </Reveal>

          <Reveal className="footer-columns" direction="right" delay={0.12}>
            <div>
              <h3>Aumenta tus ventas</h3>
              <a href="#especialidades">Diseno web</a>
              <a href="#especialidades">Marketing digital</a>
              <a href="#planes">Planes</a>
            </div>
            <div>
              <h3>Soluciones</h3>
              <a href="#elegirnos">UX y soporte</a>
              <a href="#proyectos">Portfolio</a>
              <a href="#faq">Preguntas</a>
            </div>
            <div>
              <h3>Conectate</h3>
              <span>Buenos Aires, Argentina</span>
              <a href={contactEmailHref}>info@omcreativos.com</a>
              <PrimaryLink href="#top">
                Volver arriba
                <ArrowRight size={18} />
              </PrimaryLink>
            </div>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}
