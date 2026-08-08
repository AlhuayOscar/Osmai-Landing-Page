"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

export default function ProjectMediaGallery({ project, eager = false, index = 0 }) {
  const prefersReducedMotion = useReducedMotion();
  const images = useMemo(
    () => project.gallery?.length
      ? project.gallery
      : [{ src: project.image, alt: project.imageAlt }],
    [project],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages || isPaused || prefersReducedMotion) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 4400);

    return () => window.clearInterval(timer);
  }, [hasMultipleImages, images.length, isPaused, prefersReducedMotion]);

  const move = (direction) => {
    setActiveIndex((current) => (current + direction + images.length) % images.length);
  };

  const activeImage = images[activeIndex];

  return (
    <figure
      className={`projects-case-visual projects-case-gallery ${hasMultipleImages ? "has-gallery" : "is-single"}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      style={{ "--project-hue": String(218 + (index % 4) * 12) }}
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.img
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          loading={eager ? "eager" : "lazy"}
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>

      <span className="projects-case-visual-label">
        {String(index + 1).padStart(2, "0")} · {project.category}
      </span>

      {hasMultipleImages ? (
        <div className="projects-case-gallery-controls">
          <span className="projects-case-gallery-count">
            <Images size={14} /> {activeIndex + 1}/{images.length}
          </span>
          <div>
            <button type="button" onClick={() => move(-1)} aria-label={`Imagen anterior de ${project.name}`}>
              <ChevronLeft size={17} />
            </button>
            <button type="button" onClick={() => move(1)} aria-label={`Imagen siguiente de ${project.name}`}>
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      ) : null}

      {hasMultipleImages ? (
        <div className="projects-case-gallery-dots" aria-label={`Elegir imagen de ${project.name}`}>
          {images.map((image, imageIndex) => (
            <button
              type="button"
              className={imageIndex === activeIndex ? "is-active" : ""}
              key={image.src}
              onClick={() => setActiveIndex(imageIndex)}
              aria-label={`Mostrar imagen ${imageIndex + 1} de ${project.name}`}
              aria-pressed={imageIndex === activeIndex}
            />
          ))}
        </div>
      ) : null}
    </figure>
  );
}
