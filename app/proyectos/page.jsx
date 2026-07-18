"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, QrCode, Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";
import InitialLoader from "../components/InitialLoader";

const modes = [
  {
    id: "casual",
    label: "Casual / Startup",
    kicker: "Para empezar con foco",
    description:
      "Una presencia digital clara para validar la idea, salir al mercado y empezar a recibir consultas.",
    recommended: "Esencial",
  },
  {
    id: "estandar",
    label: "Modo estándar",
    kicker: "Para crecer ordenado",
    description:
      "Una web más completa para mostrar servicios, portfolio, equipo y llamados a la acción medibles.",
    recommended: "Esencial o Premium",
  },
  {
    id: "lujo",
    label: "Modo lujo / Empresa establecida",
    kicker: "Para elevar percepción",
    description:
      "Dirección visual distintiva, contenido estratégico y una experiencia pensada para una marca consolidada.",
    recommended: "Premium",
  },
  {
    id: "exigente",
    label: "Nuevas necesidades exigentes",
    kicker: "Para sistemas y escala",
    description:
      "Integraciones, automatizaciones, e-commerce o software a medida cuando la web ya es parte central del negocio.",
    recommended: "Premium",
  },
];

const tiers = [
  {
    id: "esencial",
    name: "Servicio esencial",
    priceLabel: "Inversión inicial",
    description:
      "Una base profesional y concreta para salir al aire sin pagar por complejidad que todavía no necesitás.",
    features: ["Landing o web institucional", "Contenido y CTA claros", "Diseño responsive", "Entrega por etapas"],
  },
  {
    id: "premium",
    name: "Servicio premium",
    priceLabel: "Proyecto a medida",
    description:
      "Una experiencia completa para marcas que necesitan diferenciarse, automatizar y sostener más tráfico o contenido.",
    features: ["Dirección visual y UX a medida", "Integraciones y automatizaciones", "E-commerce o software propio", "Soporte y evolución"],
  },
];

function ProjectEntry() {
  const searchParams = useSearchParams();
  const qrSource = searchParams.get("qr");
  const initialMode = searchParams.get("perfil");
  const [selectedMode, setSelectedMode] = useState(
    modes.some((mode) => mode.id === initialMode) ? initialMode : "estandar",
  );

  useEffect(() => {
    if (modes.some((mode) => mode.id === initialMode)) {
      setSelectedMode(initialMode);
    }
  }, [initialMode]);

  const currentMode = modes.find((mode) => mode.id === selectedMode) || modes[1];
  const premiumMode = selectedMode === "lujo" || selectedMode === "exigente";

  return (
    <main className="projects-entry-page">
      <InitialLoader />
      <header className="projects-entry-header">
        <Link className="projects-entry-brand" href="/">
          <span>om</span>creativos
        </Link>
        <Link className="projects-entry-back" href="/">
          Volver al sitio <ArrowRight size={16} />
        </Link>
      </header>

      <section className="projects-entry-hero">
        <div className="projects-entry-hero-copy">
          <p className="projects-entry-eyebrow">
            <Sparkles size={15} /> Ruta de proyecto personalizada
          </p>
          <h1>Elegí cómo querés que crezca tu presencia digital.</h1>
          <p className="projects-entry-lead">
            Esta tarjeta puede abrirse desde un QR en una reunión, evento o propuesta. Elegí el nivel que mejor describe a tu empresa y te mostramos por dónde empezar.
          </p>
          {qrSource && (
            <div className="projects-entry-qr-note">
              <QrCode size={18} /> Ingreso identificado por QR: <strong>{qrSource}</strong>
            </div>
          )}
        </div>

        <div className="projects-entry-video-card">
          <video autoPlay muted loop playsInline poster="/media/web-design-ui.jpg">
            <source src="/media/reference-ballena-hero.mp4" type="video/mp4" />
            <source src="/media/web-design-work.mp4" type="video/mp4" />
          </video>
          <span>Visuales de referencia · reemplazables</span>
        </div>
      </section>

      <section className="projects-entry-section">
        <div className="projects-entry-section-heading">
          <p className="projects-entry-eyebrow">01 · Perfil de proyecto</p>
          <h2>¿En qué momento está tu empresa?</h2>
        </div>
        <div className="projects-mode-grid">
          {modes.map((mode) => (
            <button
              className={`projects-mode-card ${selectedMode === mode.id ? "is-selected" : ""}`}
              key={mode.id}
              type="button"
              onClick={() => setSelectedMode(mode.id)}
              aria-pressed={selectedMode === mode.id}
            >
              <span>{mode.kicker}</span>
              <h3>{mode.label}</h3>
              <p>{mode.description}</p>
              <strong>Elegir este perfil <ArrowRight size={16} /></strong>
            </button>
          ))}
        </div>
      </section>

      <section className="projects-entry-recommendation" aria-live="polite">
        <div>
          <p className="projects-entry-eyebrow">02 · Recomendación</p>
          <h2>{currentMode.label}</h2>
          <p>{currentMode.description}</p>
        </div>
        <div className="projects-entry-recommendation-badge">
          <span>Ruta sugerida</span>
          <strong>{currentMode.recommended}</strong>
        </div>
      </section>

      <section className="projects-entry-section projects-entry-services">
        <div className="projects-entry-section-heading">
          <p className="projects-entry-eyebrow">03 · Tipo de servicio</p>
          <h2>Dos caminos, una base bien hecha.</h2>
        </div>
        <div className="projects-tier-grid">
          {tiers.map((tier) => (
            <article className={`projects-tier-card ${tier.id === (premiumMode ? "premium" : "esencial") ? "is-recommended" : ""}`} key={tier.id}>
              {tier.id === (premiumMode ? "premium" : "esencial") && <span className="projects-tier-tag">Recomendado para vos</span>}
              <p className="projects-entry-eyebrow">{tier.priceLabel}</p>
              <h3>{tier.name}</h3>
              <p>{tier.description}</p>
              <ul>
                {tier.features.map((feature) => (
                  <li key={feature}><Check size={16} /> {feature}</li>
                ))}
              </ul>
              <a href="mailto:info@omcreativos.com?subject=Quiero%20una%20propuesta%20para%20mi%20proyecto">
                Pedir propuesta <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-entry-reel">
        <div>
          <p className="projects-entry-eyebrow">Material de prueba</p>
          <h2>La dirección visual también se puede probar antes de cerrar el alcance.</h2>
        </div>
        <div className="projects-entry-reel-grid">
          <video autoPlay muted loop playsInline poster="/media/web-design-code.jpg">
            <source src="/media/reference-hunan-detail.webm" type="video/webm" />
          </video>
          <img src="/media/web-design-drag-drop.gif" alt="Animación de interacción web" />
        </div>
      </section>

      <footer className="projects-entry-footer">
        <span>omcreativos · diseño web, identidad y software</span>
        <Link href="/?from=proyectos">Hablar con el equipo <ArrowRight size={16} /></Link>
      </footer>
    </main>
  );
}

export default function ProyectosPage() {
  return (
    <Suspense fallback={<main className="projects-entry-page" aria-busy="true" />}>
      <ProjectEntry />
    </Suspense>
  );
}
