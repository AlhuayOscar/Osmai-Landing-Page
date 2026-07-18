"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock,
  ExternalLink,
  Globe2,
  LayoutGrid,
  Menu,
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
  Moon,
  X,
  Sun,
  UsersRound,
} from "lucide-react";
import Chatbot from "./components/Chatbot";
import Reveal from "./components/Reveal";
import InitialLoader from "./components/InitialLoader";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Elegirnos", href: "#elegirnos" },
  { label: "Planes", href: "#planes" },
  { label: "FAQ", href: "#faq" },
];

const creativeFonts = [
  "var(--font-monoton)",
  "var(--font-rubik-glitch)",
];

const creativeAnimationModes = ["forward", "backward", "fade", "edges"];
const creativeWord = "creativos";
const creativeEdgeOrder = [0, 8, 1, 7, 2, 6, 3, 5, 4];
const darkNavSections = ["hero-section", "intro-band", "why-section", "process-section"];
const navToneSampleY = 54;
const navRevealZoneY = 112;
const navScrollThreshold = 8;
const navBackdropOffset = 50;
const navIdleDelayMs = 3000;
const navIdleCheckIntervalMs = 250;
const creativeCycleIntervalMs = 3000;
const creativeTypeIntervalMs = 95;

const heroStats = [
  { label: "WEB", value: "Marca digital" },
  { label: "MARCA", value: "Visual y verbal" },
  { label: "SOFTWARE", value: "Base escalable" },
];

const serviceCards = [
  {
    icon: MonitorSmartphone,
    title: "Diseño web",
    text: "Landing pages, sitios institucionales y experiencias digitales preparadas para convertir visitas en consultas.",
  },
  {
    icon: PenTool,
    title: "Diseño gráfico",
    text: "Diseño y rediseño, creando de tu marca la identidad de recorrido, lugar y propuesta visual.",
  },
  {
    icon: LayoutGrid,
    title: "UX",
    text: "Ordenamos la información para que tus clientes entiendan rápido qué haces y por qué elegirte.",
  },
  {
    icon: MessageCircleMore,
    title: "Soporte cercano",
    text: "Somos Oscar y Maira y te acompañamos en cada etapa con criterio técnico, mirada visual y comunicación simple.",
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
    text: "Páginas de empresa, servicios, portfolio y contacto con estructura profesional y lista para posicionar.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    text: "Placeholders para tiendas, catálogos y flujos de compra que después podemos conectar a pagos, stock o envíos.",
  },
  {
    icon: Megaphone,
    title: "Social media",
    text: "Bases para contenido, campañas y piezas digitales que mantengan coherencia con la web y la identidad.",
  },
  {
    icon: Rocket,
    title: "Marketing digital",
    text: "Secciones preparadas para sumar Google Ads, Meta, SEO y llamados a la acción con seguimiento comercial.",
  },
  {
    icon: ServerCog,
    title: "Desarrollo web",
    text: "Construimos experiencias rápidas y mantenibles con una base moderna que puede crecer junto al negocio.",
  },
  {
    icon: Search,
    title: "SEO y contenido",
    text: "Ordenamos páginas, mensajes y metadatos para que las personas encuentren la propuesta y entiendan qué ofrecés.",
  },
  {
    icon: LayoutGrid,
    title: "Integraciones",
    text: "Conectamos formularios, catálogos y herramientas del negocio para reducir tareas repetitivas y mejorar el seguimiento.",
  },
  {
    icon: ShieldCheck,
    title: "Mantenimiento",
    text: "Acompañamos la evolución del sitio con ajustes, mejoras de contenido y soporte cuando el proyecto lo necesita.",
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
    text: "Cada bloque puede crecer con más items, links o ejemplos sin romper la composición.",
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
    text: "Home, servicios, beneficios, formulario y área visual preparada para fotos reales del equipo.",
  },
  {
    type: "Catálogo online",
    title: "Marca de productos",
    text: "Grilla de productos, categorías, fichas y llamadas para consultar por WhatsApp o integrar carrito.",
  },
  {
    type: "Identidad + web",
    title: "Proyecto nuevo",
    text: "Naming, tono, sistema gráfico y landing de lanzamiento con contenido listo para campañas.",
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
    title: "Diseño a medida",
    text: "No partimos de una plantilla genérica: la estructura se adapta a tu mensaje, rubro y objetivo comercial.",
  },
  {
    icon: ShieldCheck,
    title: "Propiedad y claridad",
    text: "Dejamos el sitio y los materiales pensados para que puedas usarlos, editarlos y seguir creciendo.",
  },
  {
    icon: Clock,
    title: "Tiempos pactados",
    text: "Trabajamos por etapas visibles para que sepas qué falta, qué está listo y qué decisión viene después.",
  },
  {
    icon: UsersRound,
    title: "Atención cercana",
    text: "Acompañamiento real durante el proceso, con comunicación directa y explicaciones sin vueltas.",
  },
  {
    icon: Megaphone,
    title: "Difusión",
    text: "La web queda preparada para campañas, redes, SEO básico y llamados a la acción medibles.",
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
    text: "Armamos la home y las secciones internas con una grilla clara y jerarquía visual estable.",
  },
  {
    step: "02",
    title: "Aplicamos el estilo",
    text: "Colores, botones, sombras y tipografía quedan listos para extender el sistema a nuevas pantallas.",
  },
  {
    step: "03",
    title: "Completas los fondos",
    text: "Los bloques de imagen quedan marcados como placeholders para que reemplaces con tus visuales finales.",
  },
];

const commerceFeatures = [
  "Catálogo editable con categorías y productos destacados",
  "Bloques preparados para medios de pago, envíos y promociones",
  "Consultas por WhatsApp o carrito integrado según la etapa del negocio",
  "Paneles y automatizaciones posibles cuando la tienda necesite crecer",
];

const plans = [
  {
    name: "Base",
    price: "Landing",
    text: "La página principal con el sistema visual listo para presentar la marca.",
    features: ["Hero editable", "Secciones responsivas", "CTA y navegación"],
  },
  {
    name: "Expandida",
    price: "Web completa",
    text: "La misma dirección visual extendida a más páginas, módulos y contenido comercial.",
    features: ["Más secciones", "Bloques reutilizables", "Escala para portfolio o servicios"],
    featured: true,
  },
  {
    name: "Custom",
    price: "Sistema",
    text: "Una base pensada para sumar paneles, integraciones o herramientas internas después.",
    features: ["Arquitectura clara", "Listo para crecer", "Soporte para nuevas vistas"],
  },
];

const faqs = [
  {
    question: "¿Puedo cambiar las imágenes después?",
    answer:
      "Sí. La home deja zonas de fondo preparadas para que reemplaces cada placeholder con la imagen final que quieras usar.",
  },
  {
    question: "El estilo queda adaptado a celular?",
    answer:
      "Sí. La composición se reorganiza para mobile con tipografía, botones y cards ajustadas a pantallas chicas.",
  },
  {
    question: "¿Se puede seguir sumando páginas con este mismo look?",
    answer:
      "Sí. La idea es dejar una base visual consistente para extender servicios, proyectos, planes o formularios.",
  },
  {
    question: "¿Pueden sumar tienda online o catálogo más adelante?",
    answer:
      "Sí. Esta versión deja contenido y placeholders para e-commerce, catálogos y flujos comerciales que pueden integrarse en una etapa posterior.",
  },
];

const emailSubject = "Consulta desde la página web";
const emailBody = [
  "Hola! Buenas tardes,",
  "",
  "Vengo de la página web y quisiera contratar sus servicios.",
  "",
  "Me interesa recibir información sobre:",
  "- Diseño web",
  "- Identidad visual",
  "- Software a medida",
  "",
  "Mi nombre es:",
  "Mi empresa o proyecto es:",
  "Mi teléfono o WhatsApp es:",
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
  const [theme, setTheme] = useState("day");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [creativeFontIndex, setCreativeFontIndex] = useState(0);
  const [creativeAnimationModeIndex, setCreativeAnimationModeIndex] = useState(0);
  const [typedCreativeCount, setTypedCreativeCount] = useState(0);
  const [navIndicatorStyle, setNavIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const navLinksRef = useRef(null);
  const navLinkRefs = useRef([]);
  const navTimerRef = useRef(null);
  const navPointerInsideRef = useRef(false);
  const lastNavActivityRef = useRef(Date.now());
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isMobileMenuOpen);

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const fontTimer = window.setInterval(() => {
      setCreativeFontIndex((currentIndex) => (currentIndex + 1) % creativeFonts.length);
      setCreativeAnimationModeIndex((currentIndex) => (currentIndex + 1) % creativeAnimationModes.length);
    }, creativeCycleIntervalMs);

    return () => {
      window.clearInterval(fontTimer);
    };
  }, []);

  useEffect(() => {
    setTypedCreativeCount(0);

    const typeTimer = window.setInterval(() => {
      setTypedCreativeCount((currentCount) => {
        if (currentCount >= creativeWord.length) {
          window.clearInterval(typeTimer);
          return currentCount;
        }

        return currentCount + 1;
      });
    }, creativeTypeIntervalMs);

    return () => {
      window.clearInterval(typeTimer);
    };
  }, [creativeFontIndex]);

  const creativeAnimationMode = creativeAnimationModes[creativeAnimationModeIndex];

  useEffect(() => {
    const showNav = () => {
      lastNavActivityRef.current = Date.now();
      setIsNavVisible(true);
    };

    const updateNavTone = () => {
      const currentSection = [...document.querySelectorAll("section, footer")].find((element) => {
        const rect = element.getBoundingClientRect();

        return rect.top <= navToneSampleY && rect.bottom >= navToneSampleY;
      });
      const isOverDarkSection = darkNavSections.some((className) =>
        currentSection?.classList.contains(className),
      );

      setNavTone(isOverDarkSection ? "on-dark" : "on-light");
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      setHasNavBackdrop(currentScrollY > navBackdropOffset);
      updateNavTone();

      if (Math.abs(scrollDelta) < navScrollThreshold) {
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
      if (event.clientY < navRevealZoneY) {
        showNav();
      }
    };

    lastScrollYRef.current = window.scrollY;
    setHasNavBackdrop(window.scrollY > navBackdropOffset);
    updateNavTone();
    showNav();
    navTimerRef.current = window.setInterval(() => {
      const hasBeenIdle = Date.now() - lastNavActivityRef.current > navIdleDelayMs;
      const isAtPageStart = window.scrollY <= navBackdropOffset;

      if (isAtPageStart) {
        setIsNavVisible(true);
        return;
      }

      if (hasBeenIdle && !navPointerInsideRef.current) {
        setIsNavVisible(false);
      }
    }, navIdleCheckIntervalMs);

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

  useEffect(() => {
    const updateActiveSection = () => {
      const sampleY = window.innerHeight * 0.28;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      navItems.forEach((item, index) => {
        if (!item.href.startsWith("#")) {
          return;
        }

        const section = document.querySelector(item.href);

        if (!section) {
          return;
        }

        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - sampleY);
        const isVisible = rect.top <= sampleY && rect.bottom >= sampleY;

        if (isVisible || distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveNavIndex(closestIndex);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <main className={`landing-shell theme-${theme}`}>
      <InitialLoader theme={theme} />
      <section className="hero-section" id="top">
        <div className="hero-background" aria-hidden="true">
          <div className="hero-image-frame">
            <Image
              className="hero-image"
              src="/img/herosection.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
            />
          </div>
        </div>

        <nav
          className={`hero-nav nav-${navTone} ${hasNavBackdrop ? "has-backdrop" : ""} ${
            isNavVisible ? "is-visible" : "is-hidden"
          }`}
          aria-label="Navegación principal"
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
          <a
            className="brandmark"
            href="#top"
            aria-label="Inicio de omcreativos"
          >
            <img className="brandmark-symbol" src="/img/osmailogo.svg" alt="" />
          </a>

          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

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
                  className={activeNavIndex === index ? "is-active" : ""}
                  aria-current={activeNavIndex === index ? "location" : undefined}
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
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button className="hero-search" type="button" aria-label="Buscar">
              <Search size={15} />
            </button>
            <button
              className="theme-toggle"
              type="button"
              aria-label={
                theme === "day" ? "Activar modo noche" : "Activar modo día"
              }
              onClick={() => {
                setTheme((currentTheme) =>
                  currentTheme === "day" ? "night" : "day",
                );
              }}
            >
              {theme === "day" ? <Moon size={15} /> : <Sun size={15} />}

            </button>
          </div>

          <a className="hero-nav-cta" href="#planes">
            Pedí propuesta
          </a>
        </nav>

        <div
          className={`mobile-menu-backdrop ${isMobileMenuOpen ? "is-open" : ""}`}
          aria-hidden="true"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <aside
          className={`mobile-sidebar ${isMobileMenuOpen ? "is-open" : ""}`}
          aria-label="Menú móvil"
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="mobile-sidebar-header">
            <span>Menú</span>
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={22} />
            </button>
          </div>
          <div className="mobile-sidebar-links">
            {navItems.map((item, index) => (
              <a
                href={item.href}
                key={item.label}
                className={activeNavIndex === index ? "is-active" : ""}
                aria-current={activeNavIndex === index ? "location" : undefined}
                onClick={() => {
                  setActiveNavIndex(index);
                  setIsMobileMenuOpen(false);
                }}
              >
                <span>0{index + 1}</span>
                {item.label}
                <ArrowRight size={18} />
              </a>
            ))}
          </div>
          <div className="mobile-sidebar-footer">
            <button
              className="mobile-sidebar-theme"
              type="button"
              onClick={() => setTheme((currentTheme) => currentTheme === "day" ? "night" : "day")}
            >
              {theme === "day" ? <Moon size={17} /> : <Sun size={17} />}
              {theme === "day" ? "Tema oscuro" : "Tema claro"}
            </button>
            <a className="mobile-sidebar-cta" href="#planes" onClick={() => setIsMobileMenuOpen(false)}>
              Pedí propuesta <ArrowRight size={17} />
            </a>
          </div>
        </aside>

        <div className="hero-content">
          <div className="hero-copy">
            <Reveal
              as="p"
              className="hero-eyebrow"
              direction="left"
              delay={0.18}
            >
              Web design y diseño integral
            </Reveal>
            <Reveal
              as="h1"
              aria-label="seamos creativos"
              direction="left"
              delay={0.25}
            >
              <span className="hero-static-word">seamos</span>{" "}
              <span
                className="hero-typed-word"
                style={{ fontFamily: creativeFonts[creativeFontIndex] }}
              >
                {creativeWord.split("").map((letter, index) => {
                  const orderedIndex =
                    creativeAnimationMode === "backward"
                      ? creativeWord.length - 1 - index
                      : creativeAnimationMode === "edges"
                        ? creativeEdgeOrder.indexOf(index)
                        : index;
                  const isTyped =
                    creativeAnimationMode === "fade" ||
                    orderedIndex < typedCreativeCount;
                  const delay =
                    creativeAnimationMode === "fade"
                      ? index * 70
                      : creativeAnimationMode === "backward"
                        ? orderedIndex * 70
                        : creativeAnimationMode === "edges"
                          ? orderedIndex * 85
                          : index * 55;

                  return (
                    <span
                      className={
                        isTyped
                          ? `is-typed mode-${creativeAnimationMode}`
                          : `mode-${creativeAnimationMode}`
                      }
                      key={`${creativeFontIndex}-${creativeAnimationMode}-${letter}-${index}`}
                      style={{
                        "--letter-x":
                          creativeAnimationMode === "backward" ||
                          (creativeAnimationMode === "edges" && index > 4)
                            ? "0.14em"
                            : "-0.14em",
                        transitionDelay: `${delay}ms`,
                        animationDelay: `${delay}ms`,
                      }}
                    >
                      {letter}
                    </span>
                  );
                })}
              </span>
            </Reveal>
            <Reveal
              as="p"
              className="hero-description"
              direction="left"
              delay={0.32}
            >
              Creamos sitios web, diseños visuales y soluciones de software para
              pequeñas y medianas empresas que quieren mejorar su identidad
              visual, vender más y trabajar con herramientas propias.
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

            <Reveal
              className="hero-stats"
              aria-label="Servicios principales de omcreativos"
              direction="left"
              delay={0.46}
            >
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
            title="Diseño y tecnología para que tu empresa se vea profesional"
            text="omcreativos combina programación web, software y diseño visual para construir una presencia digital clara, moderna y fácil de usar."
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
                direction={index === 0 || index === 3 ? "up" : index % 2 === 0 ? "left" : "right"}
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
        <div className="section-shell agency-layout specialty-orbit-layout">
          <svg className="specialty-world" viewBox="0 0 900 700" aria-hidden="true">
            <ellipse className="world-ring world-ring-a" cx="450" cy="350" rx="310" ry="190" />
            <ellipse className="world-ring world-ring-b" cx="450" cy="350" rx="220" ry="310" />
            <ellipse className="world-ring world-ring-c" cx="450" cy="350" rx="310" ry="310" />
            <g className="world-network">
              <path d="M176 350 300 178 450 118 602 178 724 350 602 522 450 582 300 522Z" />
              <path d="M300 178 450 350 602 178M176 350 450 350 724 350M300 522 450 350 602 522" />
            </g>
            <g className="world-nodes">
              <circle cx="176" cy="350" r="6" /><circle cx="300" cy="178" r="6" /><circle cx="450" cy="118" r="6" />
              <circle cx="602" cy="178" r="6" /><circle cx="724" cy="350" r="6" /><circle cx="602" cy="522" r="6" />
              <circle cx="450" cy="582" r="6" /><circle cx="300" cy="522" r="6" /><circle cx="450" cy="350" r="8" />
            </g>
          </svg>
          <div className="agency-copy specialty-orbit-copy">
            <SectionTitle
              eyebrow="Expertos digitales"
              title="Todo lo que necesita una marca para salir mejor parada online"
              text="Tomamos la idea de una agencia integral y la llevamos al lenguaje omcreativos: simple, moderno, azul, modular y listo para reemplazar placeholders por material real."
            />
            <Reveal className="agency-note" direction="left" delay={0.25}>
              <strong>Más de una sola landing.</strong>
              <p>
                La estructura queda preparada para crecer hacia identidad,
                contenido, campañas, tienda online, soporte o software propio
                sin perder coherencia visual.
              </p>
            </Reveal>
          </div>

          <div className="specialty-grid specialty-orbit" aria-label="Especialidades de omcreativos">
            {specialtyCards.map(({ icon: Icon, title, text }, index) => (
              <Reveal
                as="article"
                className="specialty-card specialty-card-animated"
                direction={index % 2 === 0 ? "up" : "right"}
                delay={(index % 3) * 0.06}
                key={title}
                style={{ "--specialty-index": String(index) }}
                onMouseMove={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect();
                  const x = Math.max(-50, Math.min(50, (event.clientX - (rect.left + rect.width / 2)) * 0.22));
                  const y = Math.max(-50, Math.min(50, (event.clientY - (rect.top + rect.height / 2)) * 0.22));
                  event.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                  event.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.setProperty("--mouse-x", "0px");
                  event.currentTarget.style.setProperty("--mouse-y", "0px");
                }}
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
              title="Una home armada para parecer final incluso antes de cargar las imágenes"
              text="La estructura replica la dirección del mockup y deja la parte visual lista para completar con tus fondos, renders o fotos."
            />
            <Reveal direction="left" delay={0.25}>
              <PrimaryLink href="#proceso">
                Ver cómo sigue
                <ArrowRight size={18} />
              </PrimaryLink>
              <a className="projects-route-link" href="/proyectos">
                Abrir ruta para clientes <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>

          <div className="projects-board">
            <Reveal
              as="a"
              href="/proyectos"
              className="projects-placeholder floating-element"
              direction="right"
              aria-label="Abrir ruta de proyectos"
            >
              <video
                className="projects-preview-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/media/web-design-ui.jpg"
                aria-label="Video de prueba de trabajo de diseño web"
              >
                <source src="/media/web-design-work.mp4" type="video/mp4" />
              </video>
              <span>Veamos algunos proyectos</span>
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
            title="Proyectos placeholder para mostrar alcance sin depender todavía de imágenes finales"
            text="Inspirado en una grilla de portfolio: cada card puede transformarse luego en una ficha real con captura, enlace y tecnologías usadas."
          />

          <div className="case-study-grid">
            {caseStudies.map((item, index) => (
              <Reveal
                as="article"
                className="case-study-card"
                direction={index % 2 === 0 ? "up" : "right"}
                delay={(index % 2) * 0.08}
                key={item.title}
              >
                <div className="case-image-placeholder">
                  <img
                    className="case-image-media"
                    src={
                      index === 0
                        ? "/media/web-design-drag-drop.gif"
                        : index % 2 === 0
                          ? "/media/web-design-code.jpg"
                          : "/media/web-design-ui.jpg"
                    }
                    alt={`Visual de prueba para ${item.title}`}
                    loading="lazy"
                  />
                  <span className="case-image-overlay">
                    {index === 0
                      ? "Acá podría estar tu plato principal"
                      : index === 1
                        ? "Podría estar tu producto estrella acá"
                        : "Es más fácil conocerse con imágenes"}
                  </span>
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
              eyebrow="Por qué elegirnos"
              title="Cercanía, criterio técnico y una web pensada para vender mejor"
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


      <section className="commerce-section">
        <div className="section-shell commerce-layout">
          <Reveal className="commerce-visual floating-element" direction="left">
            <div className="commerce-window">
              <span>Catálogo / tienda</span>
              <img
                className="commerce-preview-image"
                src="/media/web-design-ui.jpg"
                alt="Interfaz web de prueba"
                loading="lazy"
              />
              <div />
              <div />
              <div />
            </div>
          </Reveal>

          <div className="commerce-copy">
            <SectionTitle
              eyebrow="Tiendas online"
              title="Impulsa tu negocio con catálogos, ventas y automatizaciones"
              text="Dejamos esta sección como punto de partida para e-commerce: productos, pagos, envíos, consultas y mejoras de gestión cuando el proyecto lo necesite."
            />
            <Reveal
              as="ul"
              className="commerce-list"
              direction="right"
              delay={0.2}
            >
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
            title="La misma dirección visual puede escalar a una web más grande"
            text="Si después querés sumar más pantallas o páginas, ya queda montada una base consistente para continuar."
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
            title="Preguntas comunes sobre esta recreación"
            text="Dejé la página pensada para que cambies el contenido visual sin tener que rehacer la estructura."
          />

          <div className="faq-list">
            {faqs.map((item, index) => (
              <Reveal
                as="div"
                direction="right"
                delay={index * 0.08}
                key={item.question}
              >
                <article
                  className={`faq-item ${openFaqIndex === index ? "is-open" : ""}`}
                >
                  <button
                    id={`faq-trigger-${index}`}
                    className="faq-trigger"
                    type="button"
                    aria-expanded={openFaqIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => {
                      setOpenFaqIndex((currentIndex) =>
                        currentIndex === index ? -1 : index,
                      );
                    }}
                  >
                    {item.question}
                    <ChevronDown size={18} />
                  </button>
                  <div
                    className="faq-content"
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                  >
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
            <a className="brandmark footer-brandmark" href="#top" aria-label="Volver al inicio">
              <img
                className="brandmark-symbol"
                src="/img/osmailogo.svg"
                alt=""
              />
            </a>
            <h2>Tu lugar ideal para despegar tu emprendimiento, refrescar la identidad, y ser competitivo </h2>     </Reveal>

          <Reveal className="footer-columns" direction="right" delay={0.12}>
            <div>
              <h3>Aumenta tus ventas</h3>
              <a href="#especialidades">Diseño web</a>
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
          <Reveal className="footer-credits" direction="up" delay={0.2}>
            <p>
              {" "}
              © 2026 omcreativos. Todos los
              derechos reservados.
            </p>
            <div>
              <a
                href="https://www.linkedin.com/in/alhuayoscar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oscar
              </a>
              <a
                href="https://www.instagram.com/arstycal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Maira Instagram
              </a>
              <a
                href="https://arstycal.carrd.co/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnsjza57-WB4EOsWAV4BPiIKveHYkAUw-PqICFZqHT44i5pZmR6q0W3eQOpt8_aem_y0ELh17ppjYUbivfscco-w"
                target="_blank"
                rel="noopener noreferrer"
              >
                Maira Card
              </a>
            </div>
          </Reveal>
        </div>
      </footer>
      <Chatbot />
    </main>
  );
}
