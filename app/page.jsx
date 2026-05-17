import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  CirclePlay,
  Globe2,
  Layers3,
  LockKeyhole,
  MousePointer2,
  Network,
  Play,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Chatbot from "./components/Chatbot";
import ScrollAnimator from "./components/ScrollAnimator";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Planes", href: "#planes" },
  { label: "FAQ", href: "#faq" },
];
//Cambio 2
const stats = [
  ["Web", "diseño y desarrollo"],
  ["Marca", "piezas visuales"],
  ["Software", "soluciones a medida"],
];

const features = [
  {
    icon: Layers3,
    title: "Diseño web",
    text: "Landing pages, sitios institucionales y experiencias digitales preparadas para convertir visitas en consultas.",
  },
  {
    icon: Sparkles,
    title: "Identidad visual",
    text: "Logos, paletas, piezas para redes y sistemas visuales que hacen que tu empresa se vea profesional.",
  },
  {
    icon: MousePointer2,
    title: "UX y contenido",
    text: "Ordenamos la informacion para que tus clientes entiendan rapido que haces y por que elegirte.",
  },
  {
    icon: ShieldCheck,
    title: "Soporte cercano",
    text: "Oscar y Maira acompañan cada etapa con criterio tecnico, mirada visual y comunicacion simple.",
  },
];

const benefitCards = [
  {
    icon: Zap,
    title: "Presencia rapida",
    text: "Tu negocio puede tener una web clara, moderna y lista para compartir sin procesos eternos.",
  },
  {
    icon: Network,
    title: "Todo conectado",
    text: "Web, redes, catalogos, formularios y automatizaciones trabajando con una misma identidad.",
  },
  {
    icon: BarChart3,
    title: "Pensado para vender",
    text: "Cada seccion se arma con una intencion: explicar, generar confianza y facilitar el contacto.",
  },
  {
    icon: Layers3,
    title: "Escalable",
    text: "Empezamos por lo esencial y dejamos una base preparada para crecer con mas funciones.",
  },
  {
    icon: LockKeyhole,
    title: "Trabajo prolijo",
    text: "Buenas practicas, estructura clara, archivos ordenados y entregables faciles de mantener.",
  },
];

const services = [
  {
    title: "Sitios web para empresas",
    label: "Web",
    price: "Desde cero",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Branding y piezas graficas",
    label: "Diseño",
    price: "A medida",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Software y herramientas internas",
    label: "Sistema",
    price: "Flexible",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=85",
  },
];

const logos = [
  "Comercios",
  "Estudios",
  "Servicios",
  "Gastronomia",
  "Salud",
  "Educacion",
  "Inmobiliarias",
  "Profesionales",
  "Tiendas",
  "Emprendimientos",
  "Consultoras",
  "Pymes",
];

const processRows = [
  ["Descubrimiento", "1 reunion", "Objetivos", "Brief"],
  ["Diseño visual", "2-5 dias", "Pantallas", "Maira"],
  ["Desarrollo web", "5-12 dias", "Next.js", "Oscar"],
  ["Revision", "2 rondas", "Ajustes", "Equipo"],
  ["Lanzamiento", "1 dia", "Publicacion", "Online"],
];

const pricing = [
  {
    name: "Esencial",
    price: "Landing",
    description: "Para negocios que necesitan una presencia clara y profesional para empezar.",
    features: ["Una pagina principal", "Diseño responsive", "Formulario de contacto"],
  },
  {
    name: "Impulso",
    price: "Web Pro",
    description: "Para pequeñas y medianas empresas que quieren verse mas solidas y vender mejor.",
    features: ["Hasta 5 secciones", "Identidad visual aplicada", "SEO basico", "Integracion con WhatsApp"],
    featured: true,
  },
  {
    name: "A medida",
    price: "Software",
    description: "Para empresas que necesitan funciones, paneles, catalogos o sistemas internos.",
    features: ["Analisis del flujo", "Diseño de interfaz", "Desarrollo personalizado", "Soporte de lanzamiento"],
  },
];

const faqs = [
  {
    question: "Que tipo de empresas pueden trabajar con Osmai?",
    answer:
      "Trabajamos especialmente con pequeñas y medianas empresas que necesitan mejorar su presencia digital, ordenar su imagen o crear una herramienta web propia.",
  },
  {
    question: "Oscar desarrolla la web y el software?",
    answer:
      "Si. Oscar se encarga de la programacion web, el desarrollo de software, la estructura tecnica y la puesta online.",
  },
  {
    question: "Maira se encarga de los diseños?",
    answer:
      "Si. Maira lidera la parte visual: identidad, estilo, piezas graficas, composicion y criterio de diseño.",
  },
  {
    question: "Pueden hacer solo diseño o solo desarrollo?",
    answer:
      "Si. Podemos trabajar una web completa, solo piezas de diseño, una mejora visual o un desarrollo especifico segun lo que necesite el negocio.",
  },
];

function Button({ children, variant = "primary", className = "", href = "#planes" }) {
  return (
    <a className={`button button-${variant} ${className}`} href={href}>
      {children}
    </a>
  );
}

function ProductPreview() {
  const rows = [
    ["Landing comercial", "92%", "Lista"],
    ["Catalogo online", "78%", "Activo"],
    ["Brand kit", "100%", "Nuevo"],
    ["Panel interno", "64%", "Demo"],
  ];

  return (
    <div className="product-preview" aria-label="Vista previa de proyectos Osmai">
      <div className="preview-sidebar">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="preview-main">
        <div className="preview-topbar">
          <div>
            <small>Panel de proyecto</small>
            <strong>Web, diseño y software</strong>
          </div>
          <div className="avatar-stack">
            <img alt="Oscar programador web" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" />
            <img alt="Maira diseñadora" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" />
            <img alt="Cliente Osmai" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=120&q=80" />
          </div>
        </div>
        <div className="preview-grid">
          <div className="preview-metric highlight">
            <span>Conversion</span>
            <strong>3.4x</strong>
            <small>mas consultas con una web clara</small>
          </div>
          <div className="preview-metric">
            <span>Entregables</span>
            <strong>18</strong>
            <small>pantallas y piezas</small>
          </div>
          <div className="preview-chart">
            {["42%", "58%", "64%", "80%", "56%", "92%", "76%"].map((height) => (
              <span key={height} style={{ height }} />
            ))}
          </div>
        </div>
        <div className="preview-table">
          {rows.map(([name, value, status]) => (
            <div className="preview-row" key={name}>
              <span>{name}</span>
              <strong>{value}</strong>
              <em>{status}</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`section-heading align-${align}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <ScrollAnimator />
      <section className="hero" id="top">
        <img
          className="hero-bg"
          alt=""
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=85"
        />
        <div className="hero-overlay" />
        <nav className="nav" aria-label="Navegacion principal">
          <a className="brand" href="#top" aria-label="Inicio de Osmai">
            <span>O.</span>
            Osmai
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </div>
          <a className="nav-action" href="#planes">
            Pedir propuesta
          </a>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Web design y diseño integral</p>
          <h1>Osmai</h1>
          <p className="hero-copy">
            Creamos sitios web, diseños visuales y soluciones de software para
            pequeñas y medianas empresas que quieren verse mejor, vender mas y
            trabajar con herramientas propias.
          </p>
          <div className="hero-actions">
            <Button>
              Empezar proyecto
              <ArrowRight size={18} />
            </Button>
            <a className="video-link" href="#servicios">
              <span>
                <Play size={14} fill="currentColor" />
              </span>
              Ver servicios
            </a>
          </div>
          <div className="hero-stats" aria-label="Servicios principales de Osmai">
            {stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="intro section" id="servicios">
        <div className="container intro-grid">
          <div>
            <SectionHeading
              eyebrow="Que hacemos"
              title="Diseño y tecnologia para que tu empresa se vea profesional"
              text="Osmai combina programacion web, software y diseño visual para construir una presencia digital clara, moderna y facil de usar."
            />
            <div className="profile-card">
              <img
                alt="Oscar, creador y programador web de Osmai"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85"
              />
              <div>
                <strong>Oscar</strong>
                <span>Creador, programador web y software</span>
              </div>
            </div>
          </div>

          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }) => (
              <article className="feature-card" key={title}>
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="platform-demo section" id="proyectos">
        <div className="container demo-grid">
          <div>
            <SectionHeading
              eyebrow="Proyecto completo"
              title="De la idea inicial a una web lista para presentar tu negocio"
              text="Diseñamos la experiencia, construimos la interfaz y dejamos una base tecnica solida para que tu empresa pueda crecer."
            />
            <div className="demo-actions">
              <Button>
                Solicitar diagnostico
                <MousePointer2 size={18} />
              </Button>
              <Button variant="ghost" href="#proceso">
                Ver proceso
                <CirclePlay size={18} />
              </Button>
            </div>
          </div>
          <ProductPreview />
        </div>
      </section>

      <section className="news section">
        <div className="container">
          <SectionHeading
            eyebrow="Ideas que venden"
            title="Diseños que ayudan a tu negocio a explicar mejor lo que ofrece"
          />
          <div className="news-grid">
            <article className="story-card story-left">
              <img
                alt="Persona trabajando en una laptop con una web empresarial"
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=85"
              />
              <div>
                <span>Web</span>
                <h3>Una presencia online clara cambia la primera impresion</h3>
                <a href="#faq">
                  Leer mas
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
            <article className="story-card story-right">
              <img
                alt="Diseñadora preparando piezas visuales"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85"
              />
              <div>
                <span>Diseño</span>
                <h3>Una identidad consistente hace que tu marca se recuerde</h3>
                <a href="#faq">
                  Leer mas
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="benefits section">
        <div className="container">
          <SectionHeading
            eyebrow="Beneficios"
            title="Soluciones digitales pensadas para pymes"
            text="Osmai ayuda a ordenar la imagen, mejorar la experiencia del cliente y crear herramientas que simplifican el trabajo diario."
          />
          <div className="benefit-grid">
            {benefitCards.map(({ icon: Icon, title, text }) => (
              <article className="benefit-card" key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
            <article className="benefit-image">
              <img
                alt="Equipo revisando diseño web y estrategia digital"
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1100&q=85"
              />
            </article>
          </div>
        </div>
      </section>

      <section className="events section">
        <div className="container">
          <SectionHeading
            eyebrow="Servicios"
            title="Web, diseño y software para empresas en crecimiento"
            text="Elegimos la solucion segun el momento del negocio: visibilidad, identidad, ventas o herramientas internas."
          />
          <div className="event-grid">
            {services.map((service) => (
              <article className="event-card" key={service.title}>
                <img alt="" src={service.image} />
                <div className="event-meta">
                  <span>{service.label}</span>
                  <strong>{service.price}</strong>
                </div>
                <h3>{service.title}</h3>
                <a href="#planes">
                  Consultar
                  <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="logos section">
        <div className="container logo-grid">
          <div>
            <SectionHeading
              eyebrow="Para quienes"
              title="Osmai trabaja con negocios reales, no con marcas genericas"
              text="Creamos soluciones para empresas que necesitan verse confiables, vender mejor y ahorrar tiempo con procesos digitales."
            />
            <Button variant="ghost">
              Ver rubros
              <ArrowRight size={18} />
            </Button>
          </div>
          <div className="logo-wall" aria-label="Rubros para los que trabaja Osmai">
            {logos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="global section" id="proceso">
        <div className="container">
          <SectionHeading
            eyebrow="Proceso"
            title="Un metodo claro para avanzar sin vueltas"
            text="Cada proyecto se organiza por etapas para que sepas que se esta haciendo, quien lo lidera y que se entrega."
            align="center"
          />
          <div className="global-panel">
            <div className="global-panel-header">
              <div>
                <span>Flujo de trabajo Osmai</span>
                <strong>Diseño, desarrollo y lanzamiento</strong>
              </div>
              <Globe2 size={28} />
            </div>
            <div className="global-table">
              <div className="global-row heading">
                <span>Etapa</span>
                <span>Tiempo</span>
                <span>Entrega</span>
                <span>Responsable</span>
              </div>
              {processRows.map(([step, time, deliverable, owner]) => (
                <div className="global-row" key={step}>
                  <span>{step}</span>
                  <span>{time}</span>
                  <span>{deliverable}</span>
                  <span>{owner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="happy section">
        <div className="container happy-grid">
          <div>
            <SectionHeading
              eyebrow="Equipo"
              title="Oscar programa. Maira diseña."
              text="Dos miradas trabajando juntas para que tu empresa tenga una presencia digital funcional, linda y coherente."
            />
            <Button>
              Trabajemos juntos
              <Sparkles size={18} />
            </Button>
          </div>
          <div className="happy-photo">
            <span>O.</span>
            <img
              alt="Maira, encargada de diseño en Osmai"
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85"
            />
          </div>
          <article className="mini-story">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85"
            />
            <h3>Oscar crea sitios web, software y bases tecnicas solidas</h3>
          </article>
          <article className="mini-story">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=900&q=85"
            />
            <h3>Maira define la estetica, piezas visuales y experiencia de marca</h3>
          </article>
        </div>
      </section>

      <section className="pricing section" id="planes">
        <div className="container">
          <SectionHeading
            eyebrow="Planes"
            title="Elige el punto de partida para tu proyecto"
            text="Los planes orientan el alcance inicial. Cada propuesta se ajusta segun objetivos, contenido y funcionalidades necesarias."
            align="center"
          />
          <div className="pricing-grid">
            {pricing.map((plan) => (
              <article className={`price-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
                <span>{plan.name}</span>
                <h3>{plan.price}</h3>
                <p>{plan.description}</p>
                <a href="#top">{plan.featured ? "Quiero este plan" : "Consultar plan"}</a>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="container faq-grid">
          <SectionHeading
            eyebrow="Preguntas"
            title="Preguntas frecuentes antes de empezar"
            text="Algunas respuestas simples para entender como trabaja Osmai y que puede hacer por tu negocio."
          />
          <div className="faq-list">
            {faqs.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>
                  {item.question}
                  <ChevronDown size={18} />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="team section">
        <div className="container">
          <SectionHeading
            eyebrow="Inspiracion"
            title="Haz que tu empresa se vea como debe verse"
            align="center"
          />
          <div className="team-strip">
            {[
              "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=500&q=85",
              "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=500&q=85",
              "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=500&q=85",
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=85",
              "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=500&q=85",
            ].map((src, index) => (
              <img alt="" src={src} key={src} className={index === 1 ? "active" : ""} />
            ))}
          </div>
        </div>
      </section>

      <footer className="footer" id="footer">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=85"
        />
        <div className="footer-overlay" />
        <div className="container footer-content">
          <div>
            <a className="brand footer-brand" href="#top">
              <span>O.</span>
              Osmai
            </a>
            <h2>Tu marca, tu web y tus ideas listas para crecer</h2>
            <p>
              Diseño web, identidad visual y software para que pequeñas y medianas empresas
              se vean mas profesionales y trabajen mejor.
            </p>
            <Button>
              Crear mi proyecto
              <ArrowRight size={18} />
            </Button>
          </div>
          <div className="footer-links">
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#proceso">Proceso</a>
            <a href="#planes">Planes</a>
          </div>
          <div className="footer-socials" aria-label="Redes sociales">
            <a href="#top">in</a>
            <a href="#top">x</a>
            <a href="#top">ig</a>
          </div>
        </div>
      </footer>
      <Chatbot />
    </main>
  );
}
