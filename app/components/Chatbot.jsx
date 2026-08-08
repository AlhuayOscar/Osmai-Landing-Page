"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Mail, MessageCircle, PhoneCall, Send, X } from "lucide-react";
import { buildEmailUrl, buildWhatsAppUrl } from "../data/contact";

const whatsappUrl = buildWhatsAppUrl("Hola Oscar, vengo de la web de omcreativos y quiero consultar por un proyecto.");
const contactEmailUrl = buildEmailUrl("Consulta desde el asistente de omcreativos");

const botTypingDelayMs = 720;
const toneSampleOffset = 46;
const darkSections = ["hero-section", "intro-band", "why-section", "process-section"];

const quickQuestions = [
  "¿Qué servicios ofrecen?",
  "¿Quién es Oscar?",
  "¿Quién es Maira?",
  "¿Cuánto tarda una web?",
];

const initialMessages = [
  {
    role: "bot",
    text: "Hola, soy el asistente de prueba de omcreativos. Puedo responder sobre servicios, planes, tiempos, Oscar, Maira y contacto.",
  },
];

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getAnswer(input) {
  const text = normalize(input);

  if (text.includes("oscar") || text.includes("programador") || text.includes("software")) {
    return {
      text: "Oscar es el creador y programador web/software de omcreativos. Se encarga de la parte técnica, desarrollo, estructura, funcionalidades y publicación.",
    };
  }

  if (text.includes("maira") || text.includes("diseno") || text.includes("diseño") || text.includes("marca")) {
    return {
      text: "Maira lidera la parte visual de omcreativos: identidad, composición, piezas gráficas, estilo de marca y diseño general.",
    };
  }

  if (text.includes("servicio") || text.includes("hacen") || text.includes("ofrecen")) {
    return {
      text: "omcreativos ofrece diseño web, sitios para empresas, identidad visual, piezas gráficas, catálogos, formularios, integraciones y software a medida.",
    };
  }

  if (text.includes("precio") || text.includes("costo") || text.includes("plan") || text.includes("presupuesto")) {
    return {
      text: "Los planes son orientativos: Landing, Web Pro y Software a medida. El precio final depende de secciones, contenido, diseño y funciones necesarias.",
      contact: true,
    };
  }

  if (text.includes("tiempo") || text.includes("tarda") || text.includes("demora") || text.includes("entrega")) {
    return {
      text: "Una landing puede resolverse en pocos días si el contenido está claro. Una web completa suele requerir más etapas de diseño, desarrollo y revisión.",
      contact: true,
    };
  }

  if (text.includes("web") || text.includes("pagina") || text.includes("página") || text.includes("sitio")) {
    return {
      text: "Podemos crear una landing, sitio institucional, catálogo, web con WhatsApp, formularios o una base preparada para sumar funciones después.",
    };
  }

  if (text.includes("contacto") || text.includes("whatsapp") || text.includes("hablar")) {
    return {
      text: "Puedes hablar directamente con el equipo de omcreativos por WhatsApp para contar tu idea y recibir una orientación más precisa.",
      contact: true,
    };
  }

  return {
    text: "No tengo esa respuesta exacta en esta prueba, pero el equipo de omcreativos puede ayudarte directamente por WhatsApp.",
    contact: true,
  };
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [tone, setTone] = useState("dark");
  const messagesRef = useRef(null);
  const typingTimerRef = useRef(null);

  useEffect(() => {
    const updateTone = () => {
      const sampleX = window.innerWidth - toneSampleOffset;
      const sampleY = window.innerHeight - toneSampleOffset;
      const currentSection = [...document.querySelectorAll("section, footer")].find((element) => {
        const rect = element.getBoundingClientRect();

        return rect.left <= sampleX && rect.right >= sampleX && rect.top <= sampleY && rect.bottom >= sampleY;
      });
      const isOverDarkSection = darkSections.some((className) => currentSection?.classList.contains(className));

      setTone(isOverDarkSection ? "dark" : "light");
    };

    updateTone();
    window.addEventListener("scroll", updateTone, { passive: true });
    window.addEventListener("resize", updateTone);

    return () => {
      window.removeEventListener("scroll", updateTone);
      window.removeEventListener("resize", updateTone);
    };
  }, []);

  useEffect(() => {
    return () => {
      window.clearTimeout(typingTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const messagesElement = messagesRef.current;

    if (!messagesElement) {
      return;
    }

    messagesElement.scrollTo({
      top: messagesElement.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const sendMessage = (value = input) => {
    const cleanValue = value.trim();

    if (!cleanValue) {
      return;
    }

    window.clearTimeout(typingTimerRef.current);
    const answer = getAnswer(cleanValue);

    setMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", text: cleanValue },
    ]);
    setInput("");
    setIsOpen(true);
    setIsTyping(true);

    typingTimerRef.current = window.setTimeout(() => {
      setMessages((currentMessages) => [
        ...currentMessages,
        { role: "bot", ...answer },
      ]);
      setIsTyping(false);
    }, botTypingDelayMs);
  };

  return (
    <div className={`chatbot chatbot-${tone} ${isOpen ? "is-open" : ""}`}>
      {isOpen ? (
        <section className="chatbot-panel" aria-label="Chatbot de prueba de omcreativos">
          <header className="chatbot-header">
            <div>
              <span>
                <Bot size={17} />
              </span>
              <div>
                <strong>Asistente omcreativos</strong>
                <small>{isTyping ? "Escribiendo..." : "Respuesta de prueba"}</small>
              </div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Cerrar chat">
              <X size={18} />
            </button>
          </header>

          <div className="chatbot-messages" ref={messagesRef}>
            {messages.map((message, index) => (
              <div className={`chatbot-message ${message.role}`} key={`${message.role}-${index}`}>
                <p>{message.text}</p>
                {message.contact ? (
                  <div className="chatbot-contact-options">
                    <a className="chatbot-contact" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <PhoneCall size={15} />
                      Escribirle a Oscar
                    </a>
                    <a className="chatbot-contact-email" href={contactEmailUrl}>
                      <Mail size={14} />
                      Enviar email
                    </a>
                  </div>
                ) : null}
              </div>
            ))}
            {isTyping ? (
              <div className="chatbot-message bot is-typing" aria-label="El asistente está escribiendo">
                <span />
                <span />
                <span />
              </div>
            ) : null}
          </div>

          <div className="chatbot-quick">
            {quickQuestions.map((question) => (
              <button type="button" key={question} onClick={() => sendMessage(question)} disabled={isTyping}>
                {question}
              </button>
            ))}
          </div>

          <form
            className="chatbot-form"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Escribe tu pregunta"
              aria-label="Pregunta para el chatbot"
              disabled={isTyping}
            />
            <button type="submit" aria-label="Enviar pregunta" disabled={isTyping}>
              <Send size={18} />
            </button>
          </form>
        </section>
      ) : null}

      <button
        className="chatbot-toggle"
        type="button"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        aria-label={isOpen ? "Cerrar chat de omcreativos" : "Abrir chat de omcreativos"}
      >
        <MessageCircle size={25} />
      </button>
    </div>
  );
}
