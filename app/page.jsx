"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock,
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
import AgencyGlobe from "./components/AgencyGlobe";
import CinematicWorkShowcase from "./components/CinematicWorkShowcase";
import ProjectCarousel from "./components/ProjectCarousel";
import { buildEmailUrl, buildWhatsAppUrl, businessContact } from "./data/contact";
import { portfolioSource, realProjects } from "./data/projects";

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
    text: "Tiendas, catálogos y flujos de compra conectados a pagos, stock, envíos o consultas por WhatsApp.",
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

const agencyMessages = [
  "se vea mejor.",
  "conecte más.",
  "crezca online.",
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
    title: "Publicamos y acompañamos",
    text: "Probamos la experiencia, la ponemos online y dejamos una base preparada para medir, mantener y evolucionar.",
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
    text: "Una página enfocada en presentar la propuesta y convertir visitas en consultas.",
    features: ["Mensaje y estructura", "Diseño responsive", "CTA y contacto"],
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
    question: "¿Puedo actualizar textos e imágenes después?",
    answer:
      "Sí. Organizamos el proyecto para que el contenido pueda actualizarse sin rehacer toda la experiencia.",
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
      "Sí. Podemos comenzar con una presencia clara y sumar catálogo, pagos, stock, automatizaciones o herramientas internas cuando el negocio lo requiera.",
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

const contactEmailHref = buildEmailUrl(emailSubject, emailBody);
const contactWhatsAppHref = buildWhatsAppUrl(
  "Hola Oscar, vengo de la web de omcreativos y quiero conversar sobre mi negocio o proyecto."
);
const testimonialWhatsAppHref = buildWhatsAppUrl(
  "Hola Oscar, trabajé con omcreativos y quiero compartir mi experiencia para el sitio."
);

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

function PrimaryLink({ href, children, variant = "primary", ...props }) {
  return (
    <a className={`cta-link cta-link-${variant}`} href={href} {...props}>
      {children}
    </a>
  );
}

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [openSpecialtyIndex, setOpenSpecialtyIndex] = useState(-1);
  const [agencyMessageIndex, setAgencyMessageIndex] = useState(0);
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
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      return undefined;
    }

    const messageTimer = window.setInterval(() => {
      setAgencyMessageIndex(
        (currentIndex) => (currentIndex + 1) % agencyMessages.length,
      );
    }, 3200);

    return () => {
      window.clearInterval(messageTimer);
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
              src="/img/hero-studio-cinematic.png"
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

          <a className="hero-nav-cta" href={contactWhatsAppHref} target="_blank" rel="noopener noreferrer">
            Hablar con Oscar
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
            <a className="mobile-sidebar-cta" href={contactWhatsAppHref} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
              Hablar con Oscar <ArrowRight size={17} />
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
              <PrimaryLink href={contactWhatsAppHref} target="_blank" rel="noopener noreferrer">
                Escribirme por WhatsApp
              </PrimaryLink>
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
          <AgencyGlobe theme={theme} />
          <div className="agency-copy specialty-orbit-copy">
            <SectionTitle
              eyebrow="Expertos digitales"
              title={
                <>
                  Todo para que tu marca{" "}
                  <em
                    className="agency-dynamic-message"
                    key={agencyMessages[agencyMessageIndex]}
                  >
                    {agencyMessages[agencyMessageIndex]}
                  </em>
                </>
              }
              text="Estrategia, diseño y tecnología en un solo equipo."
            />
            <Reveal className="agency-note" direction="left" delay={0.25}>
              <strong>De la idea al resultado.</strong>
              <p>
                Una base coherente para lanzar, vender y seguir creciendo.
              </p>
            </Reveal>
          </div>

          <div className="specialty-grid specialty-orbit" aria-label="Especialidades de omcreativos">
            {specialtyCards.map(({ icon: Icon, title, text }, index) => (
              <article
                className={`specialty-card specialty-card-animated ${
                  openSpecialtyIndex === index ? "is-open" : ""
                }`}
                key={title}
                style={{ "--specialty-index": String(index) }}
              >
                <button
                  className="specialty-card-trigger"
                  type="button"
                  aria-expanded={openSpecialtyIndex === index}
                  aria-controls={`specialty-detail-${index}`}
                  aria-label={`${
                    openSpecialtyIndex === index ? "Cerrar" : "Leer más sobre"
                  } ${title}`}
                  onClick={() => {
                    setOpenSpecialtyIndex((currentIndex) =>
                      currentIndex === index ? -1 : index,
                    );
                  }}
                />
                <span className="specialty-node-index">{String(index + 1).padStart(2, "0")}</span>
                <Icon size={21} />
                <h3>{title}</h3>
                <div
                  className="specialty-card-detail"
                  id={`specialty-detail-${index}`}
                  aria-hidden={openSpecialtyIndex !== index}
                >
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CinematicWorkShowcase />

      <section className="projects-section" id="proyectos">
        <div className="section-shell projects-showcase-heading">
          <div className="projects-copy">
            <SectionTitle
              eyebrow="Proyectos seleccionados"
              title="Trabajo real: diseño, desarrollo e integraciones en producción"
              text="Casos desarrollados por Oscar y el equipo de omcreativos: desde sitios comerciales y catálogos hasta paneles, pagos, seguridad y conexión con el back-end."
            />
          </div>
          <Reveal className="projects-showcase-actions" direction="right" delay={0.15}>
            <a className="projects-source-link" href={portfolioSource} target="_blank" rel="noreferrer">
              Ver fuente pública
            </a>
            <PrimaryLink href="/proyectos">
              Ver todos los casos <ArrowRight size={18} />
            </PrimaryLink>
          </Reveal>
        </div>

        <div className="projects-carousel-shell">
          <ProjectCarousel projects={realProjects} />
        </div>

        <div className="section-shell projects-proof-grid">
          <article>
            <span>01</span>
            <h3>Interfaz que se entiende</h3>
            <p>Jerarquía, componentes y recorridos pensados para que cada acción importante sea evidente.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Desarrollo conectado</h3>
            <p>Formularios, APIs, autenticación, bases de datos y pagos integrados según el alcance real.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Una base para crecer</h3>
            <p>Código mantenible y decisiones técnicas que permiten sumar funciones sin empezar de nuevo.</p>
          </article>
        </div>

        <div className="section-shell project-transparency-note">
          <p>
            <strong>Casos y testimonios, con respaldo.</strong> Publicamos trabajos comprobables y atribuimos
            testimonios únicamente cuando la persona autoriza su nombre y sus palabras.
          </p>
          <div className="contact-choice-links">
            <a href={testimonialWhatsAppHref} target="_blank" rel="noopener noreferrer">
              Compartir por WhatsApp <ArrowRight size={16} />
            </a>
            <a href={buildEmailUrl("Quiero compartir mi testimonio")}>O por email</a>
          </div>
        </div>
      </section>

      <section className="why-section" id="elegirnos">
        <div className="section-shell why-layout">
          <div>
            <SectionTitle
              eyebrow="Por qué elegirnos"
              title="Cercanía, criterio técnico y una web pensada para vender mejor"
              text="Trabajamos con beneficios concretos: propiedad, tiempos claros, soporte y una base que puede evolucionar con el negocio."
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
            <div className="commerce-window" aria-label="Ejemplo de catálogo online">
              <div className="commerce-window-bar">
                <div>
                  <span>Casa calma</span>
                  <small>Catálogo online</small>
                </div>
                <span className="commerce-cart">
                  <ShoppingCart size={16} />
                  2
                </span>
              </div>

              <div className="commerce-product">
                <img
                  className="commerce-preview-image"
                  src="/img/catalogo-boutique.png"
                  alt="Productos artesanales presentados en un catálogo online"
                  loading="lazy"
                />
                <div className="commerce-product-copy">
                  <span>Selección esencial</span>
                  <strong>Objetos para todos los días</strong>
                  <small>Desde $18.900</small>
                </div>
              </div>

              <div className="commerce-stats">
                <div>
                  <span>Modalidad</span>
                  <strong>Catálogo o tienda</strong>
                </div>
                <div>
                  <span>Conversión</span>
                  <strong>WhatsApp o pago</strong>
                </div>
              </div>

              <div className="commerce-order">
                <span className="commerce-order-icon">
                  <MessageCircleMore size={17} />
                </span>
                <div>
                  <strong>Nueva consulta</strong>
                  <small>Consulta centralizada desde la web</small>
                </div>
                <span className="commerce-status">Lista</span>
              </div>
            </div>
          </Reveal>

          <div className="commerce-copy">
            <SectionTitle
              eyebrow="Tiendas online"
              title="Tu catálogo también puede vender por vos"
              text="Diseñamos una experiencia clara para mostrar productos, recibir pedidos y ordenar consultas. Empezá con lo que necesitás hoy y sumá funciones cuando el negocio crezca."
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
            title="Preguntas frecuentes antes de empezar"
            text="Alcance, tiempos y crecimiento explicados de forma clara para tomar una decisión con contexto."
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
            <h2>Tu lugar ideal para despegar tu emprendimiento, refrescar la identidad, y ser competitivo. </h2>     </Reveal>
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
              <a href={contactWhatsAppHref} target="_blank" rel="noopener noreferrer">
                WhatsApp {businessContact.phoneDisplay}
              </a>
              <a href={contactEmailHref}>{businessContact.email}</a>
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
