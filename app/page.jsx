import {
  ArrowRight,
  Check,
  ChevronDown,
  LayoutGrid,
  MessageCircleMore,
  MonitorSmartphone,
  PenTool,
  Plus,
  Search,
  Sparkles,
} from "lucide-react";
import Reveal from "./components/Reveal";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Planes", href: "#planes" },
  { label: "FAQ", href: "#faq" },
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
];

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
  return (
    <main className="landing-shell">
      <section className="hero-section" id="top">
        <div className="hero-background" aria-hidden="true">
          <Reveal className="hero-image-frame" direction="center" scale={1.04}>
            <img className="hero-image" src="/img/herosection.jpg" alt="" />
          </Reveal>
        </div>

        <Reveal as="nav" className="hero-nav" aria-label="Navegacion principal" direction="up" delay={0.1}>
          <a className="brandmark" href="#top" aria-label="Inicio de Osmai">
            <img className="brandmark-symbol" src="/img/osmailogo.svg" alt="" />
            <img className="brandmark-word" src="/img/osmaitext.svg" alt="Osmai" />
          </a>

          <div className="hero-nav-center">
            <div className="hero-nav-links">
              {navItems.map((item) => (
                <a href={item.href} key={item.label}>
                  {item.label}
                </a>
              ))}
            </div>
            <button className="hero-search" type="button" aria-label="Buscar">
              <Search size={15} />
            </button>
          </div>

          <a className="hero-nav-cta" href="#planes">
            Pedi propuesta
          </a>
        </Reveal>

        <div className="hero-content">
          <div className="hero-copy">
            <Reveal as="p" className="hero-eyebrow" direction="left" delay={0.18}>
              Web design y diseno integral
            </Reveal>
            <Reveal as="h1" direction="left" delay={0.25}>
              osmai
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

            <Reveal className="hero-stats" aria-label="Servicios principales de Osmai" direction="left" delay={0.46}>
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
            text="Osmai combina programacion web, software y diseno visual para construir una presencia digital clara, moderna y facil de usar."
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
                <details open={index === 0}>
                <summary>
                  {item.question}
                  <ChevronDown size={18} />
                </summary>
                <p>{item.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-layout">
          <Reveal direction="left">
            <a className="brandmark footer-brandmark" href="#top">
              <img className="brandmark-symbol" src="/img/osmailogo.svg" alt="" />
              <img className="brandmark-word" src="/img/osmaitext.svg" alt="Osmai" />
            </a>
            <h2>Frontend recreado con placeholders listos para tus fondos.</h2>
          </Reveal>
          <Reveal direction="right" delay={0.12}>
            <PrimaryLink href="#top">
              Volver arriba
              <ArrowRight size={18} />
            </PrimaryLink>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}
