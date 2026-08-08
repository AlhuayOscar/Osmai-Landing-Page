"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Film, Pause, Play, VolumeX } from "lucide-react";
import Reveal from "./Reveal";

const workScenes = [
  {
    id: "strategy",
    label: "Entender",
    title: "La idea se ordena antes de diseñar.",
    text: "Objetivos, público, contenido y prioridades sobre la mesa.",
    src: "/media/office-strategy.mp4",
    poster: "/media/office-strategy.jpg",
  },
  {
    id: "collaboration",
    label: "Diseñar",
    title: "Las decisiones se vuelven visibles.",
    text: "Probamos estructura, identidad y recorridos con una versión que se puede revisar.",
    src: "/media/office-collaboration.mp4",
    poster: "/media/office-collaboration.jpg",
  },
  {
    id: "teamwork",
    label: "Mejorar",
    title: "El proyecto sigue creciendo con el negocio.",
    text: "Publicamos una base sólida y acompañamos las próximas iteraciones.",
    src: "/media/office-teamwork.mp4",
    poster: "/media/office-teamwork.jpg",
  },
];

export default function CinematicWorkShowcase() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(!prefersReducedMotion);
  const activeScene = workScenes[activeIndex];

  useEffect(() => {
    const section = sectionRef.current;
    const player = section?.querySelector(".cinematic-work-player");
    if (!player) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 },
    );

    observer.observe(player);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView && isPlaying && !prefersReducedMotion) {
      video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  }, [activeIndex, isInView, isPlaying, prefersReducedMotion]);

  const selectScene = (index) => {
    setActiveIndex(index);
    setIsPlaying(!prefersReducedMotion);
  };

  const togglePlayback = () => {
    const nextPlaying = !isPlaying;
    setIsPlaying(nextPlaying);
    if (nextPlaying) videoRef.current?.play().catch(() => setIsPlaying(false));
    else videoRef.current?.pause();
  };

  return (
    <section className="cinematic-work-section" ref={sectionRef} aria-labelledby="cinematic-work-title">
      <div className="section-shell cinematic-work-heading">
        <Reveal direction="left">
          <p className="projects-entry-eyebrow"><Film size={15} /> Método en movimiento</p>
          <h2 id="cinematic-work-title">Una web profesional también se construye conversando.</h2>
        </Reveal>
        <Reveal as="p" direction="right" delay={0.1}>
          No mostramos una oficina perfecta: mostramos las etapas reales que convierten una necesidad en una herramienta clara.
        </Reveal>
      </div>

      <div className="section-shell cinematic-work-layout">
        <Reveal className="cinematic-work-player" direction="left">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className="cinematic-work-video-frame"
              key={activeScene.id}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.025 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <video
                ref={videoRef}
                src={activeScene.src}
                poster={activeScene.poster}
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`${activeScene.label}: ${activeScene.title}`}
              />
              <div className="cinematic-work-overlay">
                <span>{String(activeIndex + 1).padStart(2, "0")} / {String(workScenes.length).padStart(2, "0")}</span>
                <button type="button" onClick={togglePlayback} aria-label={isPlaying ? "Pausar video" : "Reproducir video"}>
                  {isPlaying ? <Pause size={17} /> : <Play size={17} />}
                </button>
              </div>
              <span className="cinematic-work-muted"><VolumeX size={14} /> Sin sonido</span>
            </motion.div>
          </AnimatePresence>
        </Reveal>

        <div className="cinematic-work-scenes" aria-label="Etapas del trabajo">
          {workScenes.map((scene, index) => (
            <Reveal
              as="button"
              type="button"
              className={index === activeIndex ? "is-active" : ""}
              direction="right"
              delay={index * 0.06}
              key={scene.id}
              onClick={() => selectScene(index)}
              aria-pressed={index === activeIndex}
            >
              <img src={scene.poster} alt="" loading="lazy" />
              <span>{scene.label}</span>
              <strong>{scene.title}</strong>
              <p>{scene.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
