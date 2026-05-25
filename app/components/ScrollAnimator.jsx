import Script from "next/script";

const revealSelectors = [
  ".hero-image-frame",
  ".hero-nav",
  ".hero-copy > *",
  ".intro-band .section-title > *",
  ".service-card",
  ".projects-copy .section-title > *",
  ".projects-copy .cta-link",
  ".projects-placeholder",
  ".project-card",
  ".process-section .section-title > *",
  ".process-card",
  ".plans-section .section-title > *",
  ".plan-card",
  ".faq-section .section-title > *",
  ".faq-list details",
  ".footer-layout > *",
];

const scrollAnimationScript = `
(() => {
  const revealSelectors = ${JSON.stringify(revealSelectors)};

  const setRevealOrigin = (element) => {
    if (element.classList.contains("hero-image-frame")) {
      element.style.setProperty("--reveal-x", "0px");
      element.style.setProperty("--reveal-y", "0px");
      element.style.setProperty("--reveal-scale", "1.045");
      return;
    }

    const rect = element.getBoundingClientRect();
    const elementCenter = rect.left + rect.width / 2;
    const screenCenter = window.innerWidth / 2;
    const distanceFromCenter = elementCenter - screenCenter;

    if (Math.abs(distanceFromCenter) < 90) {
      element.style.setProperty("--reveal-x", "0px");
      element.style.setProperty("--reveal-y", "36px");
      element.style.setProperty("--reveal-scale", "0.975");
      return;
    }

    element.style.setProperty("--reveal-x", distanceFromCenter < 0 ? "-86px" : "86px");
    element.style.setProperty("--reveal-y", "18px");
    element.style.setProperty("--reveal-scale", "0.975");
  };

  const mountScrollAnimator = () => {
    if (document.documentElement.dataset.scrollAnimator === "mounted") {
      return;
    }

    document.documentElement.dataset.scrollAnimator = "mounted";

    const elements = Array.from(document.querySelectorAll(revealSelectors.join(",")));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    elements.forEach((element, index) => {
      element.classList.add("reveal-item");
      setRevealOrigin(element);
      element.style.setProperty("--reveal-delay", \`\${index % 6 * 60}ms\`);
    });

    window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          elements.forEach((element) => observer.observe(element));
        });
      });
    }, 500);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountScrollAnimator, { once: true });
    return;
  }

  mountScrollAnimator();
})();
`;

export default function ScrollAnimator() {
  return (
    <Script
      id="scroll-animator"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: scrollAnimationScript }}
    />
  );
}
