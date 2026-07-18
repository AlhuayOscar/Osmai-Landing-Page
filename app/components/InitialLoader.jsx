"use client";

import { useEffect, useState } from "react";

const LOADER_SESSION_KEY = "omcreativos-loader-last-shown";
const LOADER_MIN_INTERVAL = 60 * 60 * 1000;

export default function InitialLoader({ theme = "day" }) {
  const [leaving, setLeaving] = useState(false);
  const [visible, setVisible] = useState(null);

  useEffect(() => {
    const now = Date.now();
    let lastShown = 0;
    try {
      lastShown = Number(window.sessionStorage.getItem(LOADER_SESSION_KEY) || 0);
    } catch {
      // Si el navegador bloquea storage, el loader conserva el comportamiento normal.
    }

    if (lastShown && now - lastShown < LOADER_MIN_INTERVAL) {
      setVisible(false);
      return undefined;
    }

    try {
      window.sessionStorage.setItem(LOADER_SESSION_KEY, String(now));
    } catch {
      // El loader sigue funcionando aunque storage esté deshabilitado.
    }
    setVisible(true);

    const leaveTimer = window.setTimeout(() => setLeaving(true), 1900);
    const removeTimer = window.setTimeout(() => setVisible(false), 2600);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (visible !== true) return null;

  const renderWord = (word, className, offset = 0) => [...word].map((letter, index) => (
    <span
      className="initial-loader-character"
      style={{ "--character-delay": `${offset + index * 0.055}s` }}
      key={`${className}-${index}`}
    >
      {letter}
    </span>
  ));

  return (
    <div className={`initial-loader initial-loader-${theme === "night" ? "dark" : "light"}${leaving ? " is-leaving" : ""}`} role="status" aria-label="Cargando omcreativos">
      <div className="initial-loader-curtain initial-loader-curtain-left" aria-hidden="true" />
      <div className="initial-loader-curtain initial-loader-curtain-right" aria-hidden="true" />
      <div className="initial-loader-mark" aria-hidden="true">
        <span className="initial-loader-real-mark" role="img" aria-label="OM" />
      </div>
      <span className="initial-loader-caption" aria-label="Seamos Creativos.">
        <span className="initial-loader-word initial-loader-word-first">{renderWord("Seamos", "first", 0.2)}</span>
        <span className="initial-loader-word initial-loader-word-second">{renderWord("Creativos.", "second", 0.6)}</span>
      </span>
      <span className="initial-loader-brand">omcreativos</span>
    </div>
  );
}
