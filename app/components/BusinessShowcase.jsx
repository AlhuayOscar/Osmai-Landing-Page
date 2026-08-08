"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  CreditCard,
  Globe2,
  LayoutDashboard,
  Mail,
  MessageCircleMore,
  MonitorSmartphone,
  Palette,
  QrCode,
  ShoppingCart,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import InitialLoader from "./InitialLoader";
import Reveal from "./Reveal";
import { buildEmailUrl, buildWhatsAppUrl } from "../data/contact";

const qrWhatsAppUrl = buildWhatsAppUrl("Hola Oscar, escaneé el QR de omcreativos y quiero contarle sobre mi negocio.");
const qrEmailUrl = buildEmailUrl("Consulta desde el QR de negocios");

const demoModes = [
  {
    id: "web",
    label: "Web que convierte",
    title: "Una presentación clara que transforma visitas en consultas.",
    icon: MonitorSmartphone,
  },
  {
    id: "catalog",
    label: "Catálogo y ventas",
    title: "Productos ordenados, carrito, WhatsApp o pago online.",
    icon: ShoppingCart,
  },
  {
    id: "operations",
    label: "Gestión y cobros",
    title: "Paneles, pagos e información importante en un solo lugar.",
    icon: LayoutDashboard,
  },
  {
    id: "contact",
    label: "Consultas automáticas",
    title: "Un recorrido simple para responder y seguir oportunidades.",
    icon: MessageCircleMore,
  },
];

const businessServices = [
  { icon: Globe2, title: "Web y landing", text: "Presentación profesional, servicios, contacto y SEO inicial." },
  { icon: Palette, title: "Marca e identidad", text: "Logo, colores, piezas y una comunicación reconocible." },
  { icon: ShoppingCart, title: "Catálogo o tienda", text: "Productos, categorías, pedidos, pagos y promociones." },
  { icon: QrCode, title: "Menú y QR", text: "Carta digital, catálogo rápido o acceso desde material impreso." },
  { icon: LayoutDashboard, title: "Software y paneles", text: "Carga de datos, usuarios, reportes y tareas internas." },
  { icon: CreditCard, title: "Cobros e integraciones", text: "Pasarelas de pago, WhatsApp, reservas y automatizaciones." },
];

function DemoScreen({ mode }) {
  if (mode.id === "catalog") {
    return (
      <div className="business-demo-catalog">
        <div className="business-demo-topline">
          <div><strong>Casa Norte</strong><span>Catálogo online</span></div>
          <span className="business-demo-cart"><ShoppingCart size={16} /> 2</span>
        </div>
        <div className="business-demo-products">
          <article className="is-featured"><span>Nuevo</span><strong>Producto destacado</strong><small>Consultar</small></article>
          <article><strong>Colección</strong><small>12 productos</small></article>
          <article><strong>Favoritos</strong><small>Pago o WhatsApp</small></article>
        </div>
        <div className="business-demo-toast"><Check size={15} /> Consulta lista para responder</div>
      </div>
    );
  }

  if (mode.id === "operations") {
    return (
      <div className="business-demo-dashboard">
        <div className="business-demo-metrics">
          <article><span>Consultas</span><strong>24</strong><small>esta semana</small></article>
          <article><span>Estado</span><strong>En orden</strong><small>seguimiento activo</small></article>
        </div>
        <div className="business-demo-chart" aria-label="Gráfico ilustrativo">
          {[38, 64, 48, 82, 58, 92, 72].map((height, index) => (
            <i key={index} style={{ "--bar-height": `${height}%`, "--bar-delay": `${index * 70}ms` }} />
          ))}
        </div>
        <div className="business-demo-payment"><CreditCard size={18} /><span><strong>Pago aprobado</strong><small>Registro actualizado automáticamente</small></span></div>
      </div>
    );
  }

  if (mode.id === "contact") {
    return (
      <div className="business-demo-chat">
        <div className="business-demo-chat-head"><MessageCircleMore size={18} /><span><strong>Nueva consulta</strong><small>Desde la web</small></span></div>
        <div className="business-demo-bubble is-client">Hola, quisiera conocer precios y tiempos.</div>
        <div className="business-demo-bubble is-business">¡Claro! Contanos qué necesita tu negocio.</div>
        <div className="business-demo-lead"><span>Oportunidad creada</span><strong>Responder por WhatsApp →</strong></div>
      </div>
    );
  }

  return (
    <div className="business-demo-web">
      <div className="business-demo-browserbar"><i /><i /><i /><span>tunegocio.com</span></div>
      <div className="business-demo-web-hero">
        <span>Tu propuesta, sin vueltas</span>
        <strong>Una web que explica por qué elegirte.</strong>
        <button type="button" tabIndex={-1}>Pedir presupuesto <ArrowRight size={14} /></button>
      </div>
      <div className="business-demo-web-cards"><i /><i /><i /></div>
    </div>
  );
}

function BusinessDemo() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeMode = demoModes[activeIndex];

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % demoModes.length);
    }, 4700);
    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  return (
    <div
      className="business-demo"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="business-demo-stage">
        <div className="business-demo-orbit" aria-hidden="true" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className="business-demo-panel"
            key={activeMode.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20, rotateX: -3 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -14, rotateX: 3 }}
            transition={{ duration: .58, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="business-demo-caption">
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
              <p>{activeMode.title}</p>
            </div>
            <DemoScreen mode={activeMode} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="business-demo-tabs" aria-label="Ejemplos de soluciones">
        {demoModes.map(({ id, label, icon: Icon }, index) => (
          <button
            type="button"
            className={index === activeIndex ? "is-active" : ""}
            key={id}
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
          >
            <Icon size={16} /> {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function BusinessShowcase() {
  return (
    <main className="business-page">
      <InitialLoader />
      <header className="business-header">
        <Link className="projects-entry-brand" href="/"><span>om</span>creativos</Link>
        <div>
          <Link href="/proyectos">Ver casos reales</Link>
          <Link className="business-header-back" href="/"><ArrowLeft size={15} /> Inicio</Link>
        </div>
      </header>

      <section className="business-hero">
        <Reveal className="business-hero-copy" direction="left">
          <p className="projects-entry-eyebrow"><QrCode size={15} /> Carta digital para negocios</p>
          <h1>Hacemos que tu negocio se vea, venda y trabaje mejor.</h1>
          <p>
            Web, identidad, catálogos, pagos y software en una propuesta clara. Empezamos por lo que necesitás hoy y dejamos una base preparada para crecer.
          </p>
          <div className="business-hero-actions">
            <a href={qrWhatsAppUrl} target="_blank" rel="noopener noreferrer">Hablar con Oscar <MessageCircleMore size={18} /></a>
            <a href={qrEmailUrl}>Email empresarial <Mail size={16} /></a>
            <Link href="#soluciones">Ver qué podemos hacer</Link>
          </div>
          <div className="business-hero-proof"><Sparkles size={17} /><span>Atención directa de Oscar y Maira · alcance explicado sin tecnicismos</span></div>
        </Reveal>
        <Reveal direction="right" delay={.12}><BusinessDemo /></Reveal>
      </section>

      <section className="business-solutions" id="soluciones">
        <Reveal className="business-section-heading" direction="up">
          <p className="projects-entry-eyebrow">Soluciones combinables</p>
          <h2>Una entrada simple para cada etapa del negocio.</h2>
          <p>No hace falta contratar todo. Elegimos las piezas que resuelven el problema más importante primero.</p>
        </Reveal>

        <div className="business-service-grid">
          {businessServices.map(({ icon: Icon, title, text }, index) => (
            <Reveal as="article" className="business-service-card" direction={index % 2 ? "right" : "left"} delay={(index % 3) * .06} key={title}>
              <span><Icon size={21} /></span>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
              <i aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="business-formats">
        <Reveal className="business-section-heading" direction="left">
          <p className="projects-entry-eyebrow">Formatos que se sienten vivos</p>
          <h2>No diseñamos cajas iguales para todos.</h2>
          <p>Cada contenedor puede informar, guiar una acción o simular el producto antes de desarrollarlo por completo.</p>
        </Reveal>

        <div className="business-format-grid">
          <Reveal className="business-format-card is-browser" direction="up">
            <div className="format-browser-top"><i /><i /><i /></div>
            <div className="format-browser-content"><span>Landing comercial</span><strong>Mensaje, confianza y contacto.</strong><i /></div>
          </Reveal>
          <Reveal className="business-format-card is-phone" direction="up" delay={.08}>
            <QrCode size={28} /><span>Menú + QR</span><strong>La carta siempre actualizada.</strong><div className="format-scan-line" />
          </Reveal>
          <Reveal className="business-format-card is-cut" direction="up" delay={.14}>
            <BarChart3 size={30} /><span>Panel interno</span><strong>Información para decidir mejor.</strong><div className="format-mini-bars"><i /><i /><i /><i /></div>
          </Reveal>
          <Reveal className="business-format-card is-glass" direction="up" delay={.2}>
            <WandSparkles size={28} /><span>Automatización</span><strong>Menos tareas repetidas.</strong><div className="format-flow"><i /><i /><i /></div>
          </Reveal>
        </div>
      </section>

      <section className="business-process">
        <Reveal direction="left">
          <p className="projects-entry-eyebrow">Cómo empezamos</p>
          <h2>Una conversación, una propuesta y una primera versión visible.</h2>
        </Reveal>
        <div>
          {["Entendemos el negocio y la prioridad", "Proponemos alcance, tiempos y contenido", "Diseñamos una versión para revisar", "Publicamos, medimos y acompañamos"].map((step, index) => (
            <Reveal as="article" direction="right" delay={index * .07} key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="business-final-cta" direction="up">
        <p className="projects-entry-eyebrow">Escaneaste el QR. Ya dimos el primer paso.</p>
        <h2>Ahora contanos qué querés mejorar.</h2>
        <p>Te orientamos aunque todavía no sepas si necesitás una web, un catálogo o un sistema.</p>
        <div className="business-final-contact">
          <a href={qrWhatsAppUrl} target="_blank" rel="noopener noreferrer">Hablar con Oscar <MessageCircleMore size={18} /></a>
          <a href={qrEmailUrl}>Email empresarial <Mail size={17} /></a>
        </div>
      </Reveal>

      <footer className="projects-entry-footer business-footer">
        <span>omcreativos · diseño, web y software</span>
        <Link href="/proyectos">Explorar proyectos <ArrowRight size={16} /></Link>
      </footer>
    </main>
  );
}
