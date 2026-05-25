"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".hero-content > *",
  ".section-heading",
  ".profile-card",
  ".feature-card",
  ".product-preview",
  ".story-card",
  ".benefit-card",
  ".benefit-image",
  ".event-card",
  ".logo-wall span",
  ".global-panel",
  ".happy-photo",
  ".mini-story",
  ".price-card",
  ".faq-list details",
  ".team-strip img",
  ".footer-content > *",
];

export default function ScrollAnimator() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll(revealSelectors.join(","))
    );

    let lastScrollY = window.scrollY;

    const updateDirection = () => {
      const currentScrollY = window.scrollY;
      document.documentElement.dataset.scrollDirection =
        currentScrollY >= lastScrollY ? "down" : "up";
      lastScrollY = currentScrollY;
    };

    updateDirection();
    window.addEventListener("scroll", updateDirection, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    elements.forEach((element, index) => {
      element.classList.add("reveal-item");
      element.style.setProperty("--reveal-delay", `${(index % 5) * 55}ms`);
      observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", updateDirection);
      observer.disconnect();
      elements.forEach((element) => {
        element.classList.remove("reveal-item", "is-visible");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
