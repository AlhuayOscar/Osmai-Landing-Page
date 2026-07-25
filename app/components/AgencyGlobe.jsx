"use client";

import { useEffect, useRef, useState } from "react";

const TEXTURE_ROOT =
  "https://cdn.jsdelivr.net/npm/three-globe@2.45.2/example/img";

const networkPoints = [
  { lat: -34.6, lng: -58.4, altitude: 0.1, radius: 0.58, color: "#ffffff" },
  { lat: -23.5, lng: -46.6, altitude: 0.055, radius: 0.38, color: "#5b7dff" },
  { lat: 19.4, lng: -99.1, altitude: 0.045, radius: 0.32, color: "#89a2ff" },
  { lat: 40.7, lng: -74, altitude: 0.06, radius: 0.4, color: "#ffffff" },
  { lat: 43.7, lng: -79.4, altitude: 0.04, radius: 0.3, color: "#5b7dff" },
  { lat: 51.5, lng: -0.1, altitude: 0.055, radius: 0.36, color: "#ffffff" },
  { lat: 40.4, lng: -3.7, altitude: 0.05, radius: 0.34, color: "#89a2ff" },
  { lat: 52.5, lng: 13.4, altitude: 0.04, radius: 0.3, color: "#5b7dff" },
  { lat: 6.5, lng: 3.4, altitude: 0.04, radius: 0.3, color: "#89a2ff" },
  { lat: 25.2, lng: 55.3, altitude: 0.05, radius: 0.34, color: "#ffffff" },
  { lat: 19.1, lng: 72.9, altitude: 0.055, radius: 0.36, color: "#5b7dff" },
  { lat: 1.3, lng: 103.8, altitude: 0.045, radius: 0.32, color: "#89a2ff" },
  { lat: 35.7, lng: 139.7, altitude: 0.06, radius: 0.4, color: "#ffffff" },
  { lat: -33.9, lng: 151.2, altitude: 0.05, radius: 0.34, color: "#5b7dff" },
];

const networkArcs = [
  { startLat: -34.6, startLng: -58.4, endLat: -23.5, endLng: -46.6, altitude: 0.16 },
  { startLat: -34.6, startLng: -58.4, endLat: 19.4, endLng: -99.1, altitude: 0.28 },
  { startLat: -34.6, startLng: -58.4, endLat: 40.7, endLng: -74, altitude: 0.34 },
  { startLat: -34.6, startLng: -58.4, endLat: 51.5, endLng: -0.1, altitude: 0.4 },
  { startLat: -34.6, startLng: -58.4, endLat: 40.4, endLng: -3.7, altitude: 0.36 },
  { startLat: 51.5, startLng: -0.1, endLat: 25.2, endLng: 55.3, altitude: 0.24 },
  { startLat: 40.4, startLng: -3.7, endLat: 19.1, endLng: 72.9, altitude: 0.3 },
  { startLat: 25.2, startLng: 55.3, endLat: 1.3, endLng: 103.8, altitude: 0.22 },
  { startLat: 1.3, startLng: 103.8, endLat: 35.7, endLng: 139.7, altitude: 0.2 },
  { startLat: 35.7, startLng: 139.7, endLat: -33.9, endLng: 151.2, altitude: 0.32 },
].map((arc, index) => ({
  ...arc,
  dashGap: index * 0.14,
  color:
    index % 3 === 0
      ? ["rgba(255,255,255,.25)", "rgba(91,125,255,.95)"]
      : ["rgba(91,125,255,.18)", "rgba(137,162,255,.82)"],
}));

const signalRings = [
  { lat: -34.6, lng: -58.4, maxRadius: 5.5, speed: 1.25, repeat: 1450 },
  { lat: 40.4, lng: -3.7, maxRadius: 4.2, speed: 0.9, repeat: 2100 },
  { lat: 35.7, lng: 139.7, maxRadius: 4.6, speed: 1.05, repeat: 1850 },
];

function createStars(THREE, amount, radius) {
  const positions = new Float32Array(amount * 3);

  for (let index = 0; index < amount; index += 1) {
    const seed = index + 1;
    const theta = ((seed * 137.508) % 360) * (Math.PI / 180);
    const phi = Math.acos(1 - (2 * ((seed * 0.618033) % 1)));
    const distance = radius * (0.72 + ((seed * 0.381966) % 1) * 0.42);

    positions[index * 3] = distance * Math.sin(phi) * Math.cos(theta);
    positions[index * 3 + 1] = distance * Math.cos(phi);
    positions[index * 3 + 2] = distance * Math.sin(phi) * Math.sin(theta);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0x7792ff,
    size: 0.75,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.42,
    depthWrite: false,
  });

  return new THREE.Points(geometry, material);
}

export default function AgencyGlobe({ theme }) {
  const mountRef = useRef(null);
  const interactionRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [hasWebGl, setHasWebGl] = useState(true);

  useEffect(() => {
    const mount = mountRef.current;
    const interactionSurface = interactionRef.current;
    const desktopQuery = window.matchMedia("(min-width: 861px)");

    if (!mount || !interactionSurface || !desktopQuery.matches) {
      return undefined;
    }

    let cancelled = false;
    let frameId = 0;
    let renderer;
    let globe;
    let controls;
    let resizeObserver;
    let visibilityObserver;
    let sceneIsVisible = true;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    async function initialiseGlobe() {
      try {
        const [{ default: ThreeGlobe }, THREE, { OrbitControls }] = await Promise.all([
          import("three-globe"),
          import("three"),
          import("three/examples/jsm/controls/OrbitControls.js"),
        ]);

        if (cancelled || !mountRef.current) {
          return;
        }

        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = theme === "night" ? 1.42 : 1.3;
        renderer.domElement.className = "agency-globe-webgl";
        renderer.domElement.setAttribute("aria-hidden", "true");
        mount.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 1600);
        camera.position.set(0, 0, 455);

        globe = new ThreeGlobe({
          waitForGlobeReady: false,
          animateIn: !reducedMotion,
        })
          .globeImageUrl(
            `${TEXTURE_ROOT}/${
              theme === "night" ? "earth-night.jpg" : "earth-blue-marble.jpg"
            }`,
          )
          .bumpImageUrl(`${TEXTURE_ROOT}/earth-topology.png`)
          .showGraticules(true)
          .showAtmosphere(true)
          .atmosphereColor(theme === "night" ? "#5b7dff" : "#2f63ff")
          .atmosphereAltitude(0.2)
          .pointsData(networkPoints)
          .pointAltitude("altitude")
          .pointRadius("radius")
          .pointColor("color")
          .pointResolution(10)
          .pointsMerge(true)
          .pointsTransitionDuration(reducedMotion ? 0 : 1100)
          .arcsData(networkArcs)
          .arcColor("color")
          .arcAltitude("altitude")
          .arcStroke(0.34)
          .arcDashLength(0.36)
          .arcDashGap(0.78)
          .arcDashInitialGap("dashGap")
          .arcDashAnimateTime(reducedMotion ? 0 : 4200)
          .arcsTransitionDuration(reducedMotion ? 0 : 1200)
          .ringsData(reducedMotion ? [] : signalRings)
          .ringLat("lat")
          .ringLng("lng")
          .ringColor(() => (progress) => `rgba(124,151,255,${1 - progress})`)
          .ringMaxRadius("maxRadius")
          .ringPropagationSpeed("speed")
          .ringRepeatPeriod("repeat")
          .onGlobeReady(() => {
            if (!cancelled) {
              setIsReady(true);
            }
          });

        const material = globe.globeMaterial();
        material.bumpScale = theme === "night" ? 3.6 : 4.4;
        material.color = new THREE.Color(theme === "night" ? "#b8c5ff" : "#ffffff");
        material.emissive = new THREE.Color(theme === "night" ? "#173a91" : "#071d54");
        material.emissiveIntensity = theme === "night" ? 0.48 : 0.12;
        material.shininess = theme === "night" ? 28 : 42;

        globe.rotation.set(0.04, -0.72, -0.035);
        globe.position.set(-16, 10, 0);
        globe.scale.setScalar(1.08);
        scene.add(globe);

        const stars = createStars(THREE, reducedMotion ? 180 : 420, 250);
        stars.rotation.z = -0.15;
        scene.add(stars);

        scene.add(new THREE.AmbientLight(0x8ea4ff, theme === "night" ? 1.6 : 2.45));

        const keyLight = new THREE.DirectionalLight(
          0xffffff,
          theme === "night" ? 2.8 : 3.35,
        );
        keyLight.position.set(-180, 140, 260);
        scene.add(keyLight);

        const rimLight = new THREE.PointLight(0x315cff, 36, 700, 1.8);
        rimLight.position.set(220, -90, 180);
        scene.add(rimLight);

        controls = new OrbitControls(camera, interactionSurface);
        controls.enableDamping = true;
        controls.dampingFactor = 0.06;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.rotateSpeed = 0.32;
        controls.autoRotate = !reducedMotion;
        controls.autoRotateSpeed = 0.22;

        const resize = () => {
          const { clientWidth, clientHeight } = mount;
          if (!clientWidth || !clientHeight) {
            return;
          }

          renderer.setSize(clientWidth, clientHeight, false);
          camera.aspect = clientWidth / clientHeight;
          camera.position.z = clientWidth < 1050 ? 485 : 455;
          camera.updateProjectionMatrix();
          globe.rendererSize(new THREE.Vector2(clientWidth, clientHeight));
        };

        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(mount);
        resize();

        visibilityObserver = new IntersectionObserver(
          ([entry]) => {
            sceneIsVisible = entry.isIntersecting;
            if (sceneIsVisible) {
              globe.resumeAnimation();
            } else {
              globe.pauseAnimation();
            }
          },
          { rootMargin: "180px" },
        );
        visibilityObserver.observe(mount);

        const renderFrame = () => {
          if (cancelled) {
            return;
          }

          if (sceneIsVisible) {
            controls.update();
            if (!reducedMotion) {
              stars.rotation.y += 0.00018;
            }
            renderer.render(scene, camera);
          }

          frameId = window.requestAnimationFrame(renderFrame);
        };

        renderFrame();
        window.requestAnimationFrame(() => {
          if (!cancelled) {
            setIsReady(true);
          }
        });
      } catch (error) {
        if (!cancelled) {
          console.error("No se pudo iniciar el globo WebGL.", error);
          setHasWebGl(false);
        }
      }
    }

    initialiseGlobe();

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frameId);
      resizeObserver?.disconnect();
      visibilityObserver?.disconnect();
      controls?.dispose();
      globe?._destructor();

      if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      }
    };
  }, [theme]);

  return (
    <div
      className={`agency-globe-stage ${isReady ? "is-ready" : ""} ${
        hasWebGl ? "" : "has-fallback"
      }`}
      role="img"
      aria-label="Globo digital interactivo con conexiones entre ciudades"
    >
      <div className="agency-globe-canvas" ref={mountRef} />
      <div
        className="agency-globe-interaction"
        ref={interactionRef}
        aria-hidden="true"
      />
      <div className="agency-globe-fallback" aria-hidden="true">
        <span />
      </div>
      <span className="agency-globe-loader" aria-hidden="true" />
    </div>
  );
}
