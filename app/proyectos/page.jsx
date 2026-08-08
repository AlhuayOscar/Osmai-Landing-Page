import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Mail, MessageCircleMore, Layers3, Sparkles } from "lucide-react";
import InitialLoader from "../components/InitialLoader";
import ProjectMediaGallery from "../components/ProjectMediaGallery";
import Reveal from "../components/Reveal";
import { buildEmailUrl, buildWhatsAppUrl } from "../data/contact";
import { portfolioSource, realProjects } from "../data/projects";

export const metadata = {
  title: "Proyectos reales | omcreativos",
  description:
    "Casos reales de diseño web, desarrollo full-stack, paneles, integraciones, pagos y seguridad realizados por el equipo de omcreativos.",
};

export default function ProyectosPage() {
  const proposalWhatsAppUrl = buildWhatsAppUrl("Hola Oscar, vi los proyectos de omcreativos y quiero pedir una propuesta.");
  const testimonialWhatsAppUrl = buildWhatsAppUrl("Hola Oscar, quiero compartir un testimonio sobre mi experiencia con omcreativos.");

  return (
    <main className="projects-entry-page projects-portfolio-page">
      <InitialLoader />

      <header className="projects-entry-header projects-portfolio-header">
        <Link className="projects-entry-brand" href="/">
          <span>om</span>creativos
        </Link>
        <div className="projects-portfolio-header-actions">
          <Link href="/proyectos/negocios">Presentación para negocios</Link>
          <Link className="projects-entry-back" href="/#proyectos">
            <ArrowLeft size={16} /> Volver al sitio
          </Link>
        </div>
      </header>

      <section className="projects-portfolio-hero">
        <Reveal direction="left">
          <p className="projects-entry-eyebrow">
            <Sparkles size={15} /> Portfolio comprobable
          </p>
          <h1>Lo que hicimos, contado desde el problema hasta la entrega.</h1>
          <p>
            Siete experiencias reales de Oscar y el equipo de omcreativos. Cada caso explica con claridad
            qué parte se diseñó, desarrolló o integró, sin métricas inventadas ni proyectos de referencia
            presentados como propios.
          </p>
        </Reveal>
        <Reveal as="aside" className="projects-portfolio-hero-aside" direction="right" delay={0.12}>
          <Layers3 size={28} />
          <strong>Diseño + desarrollo</strong>
          <span>Landing pages, dashboards, plataformas, pagos, datos y seguridad.</span>
          <a href={portfolioSource} target="_blank" rel="noreferrer">
            Consultar fuente pública <ArrowUpRight size={16} />
          </a>
          <Link className="projects-portfolio-business-link" href="/proyectos/negocios">
            Ver carta para negocios <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      <section className="projects-case-list" aria-label="Casos de proyecto">
        {realProjects.map((project, index) => (
          <Reveal
            as="article"
            className="projects-case-detail"
            id={project.slug}
            key={project.slug}
            direction={index % 2 === 0 ? "left" : "right"}
            delay={0.04}
          >
            <ProjectMediaGallery project={project} eager={index < 2} index={index} />

            <div className="projects-case-copy">
              <p className="projects-entry-eyebrow">Caso real</p>
              <h2>{project.name}</h2>
              <p className="projects-case-summary">{project.summary}</p>

              <div className="projects-case-contribution">
                <span>Participación</span>
                <p>{project.contribution}</p>
              </div>

              <div className="projects-case-work">
                <h3>Qué se hizo</h3>
                <ul>
                  {project.work.map((item) => (
                    <li key={item}><Check size={16} /> {item}</li>
                  ))}
                </ul>
              </div>

              <div className="projects-case-tech" aria-label={`Tecnologías usadas en ${project.name}`}>
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              {project.sourceUrl ? (
                <a className="projects-case-live-link" href={project.sourceUrl} target="_blank" rel="noreferrer">
                  Visitar sitio en vivo <ArrowUpRight size={16} />
                </a>
              ) : null}
            </div>
          </Reveal>
        ))}
      </section>

      <Reveal as="section" className="projects-portfolio-trust" direction="up">
        <div>
          <p className="projects-entry-eyebrow">Confianza verificable</p>
          <h2>Los testimonios también tienen que ser reales.</h2>
        </div>
        <p>
          Esta web no atribuye frases a clientes sin su aprobación. Si ya trabajaste con Oscar o Maira,
          podés autorizar una reseña con tu nombre, rol y proyecto para incorporarla aquí.
        </p>
        <div className="projects-contact-actions">
          <a href={testimonialWhatsAppUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircleMore size={17} /> Compartir por WhatsApp
          </a>
          <a href={buildEmailUrl("Testimonio para omcreativos")}><Mail size={16} /> Email empresarial</a>
        </div>
      </Reveal>

      <Reveal as="section" className="projects-portfolio-cta" direction="up">
        <p className="projects-entry-eyebrow">Tu proyecto puede ser el próximo</p>
        <h2>Contanos qué necesitás resolver.</h2>
        <p>Te respondemos con una recomendación concreta, un alcance entendible y próximos pasos.</p>
        <div className="projects-contact-actions is-centered">
          <a href={proposalWhatsAppUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircleMore size={18} /> Hablar con Oscar
          </a>
          <a href={buildEmailUrl("Quiero cotizar un proyecto")}><Mail size={17} /> Escribir por email</a>
        </div>
      </Reveal>

      <footer className="projects-entry-footer">
        <span>omcreativos · diseño web, identidad y software</span>
        <Link href="/">Volver al inicio <ArrowRight size={16} /></Link>
      </footer>
    </main>
  );
}
