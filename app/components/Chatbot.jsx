"use client";

import { useState } from "react";
import { Bot, MessageCircle, PhoneCall, Send, X } from "lucide-react";

const whatsappUrl =
  "https://wa.me/543487477269?text=Hola%20equipo%20omcreativos%2C%20quiero%20consultar%20por%20un%20proyecto.";

const quickQuestions = [
  "Que servicios ofrecen?",
  "Quien es Oscar?",
  "Quien es Maira?",
  "Cuanto tarda una web?",
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
      text: "Oscar es el creador y programador web/software de omcreativos. Se encarga de la parte tecnica, desarrollo, estructura, funcionalidades y publicacion.",
    };
  }

  if (text.includes("maira") || text.includes("diseno") || text.includes("diseño") || text.includes("marca")) {
    return {
      text: "Maira lidera la parte visual de omcreativos: identidad, composicion, piezas graficas, estilo de marca y diseño general.",
    };
  }

  if (text.includes("servicio") || text.includes("hacen") || text.includes("ofrecen")) {
    return {
      text: "omcreativos ofrece diseño web, sitios para empresas, identidad visual, piezas graficas, catalogos, formularios, integraciones y software a medida.",
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
      text: "Una landing puede resolverse en pocos dias si el contenido esta claro. Una web completa suele requerir mas etapas de diseño, desarrollo y revision.",
      contact: true,
    };
  }

  if (text.includes("web") || text.includes("pagina") || text.includes("sitio")) {
    return {
      text: "Podemos crear una landing, sitio institucional, catalogo, web con WhatsApp, formularios o una base preparada para sumar funciones despues.",
    };
  }

  if (text.includes("contacto") || text.includes("whatsapp") || text.includes("hablar")) {
    return {
      text: "Puedes hablar directamente con el equipo de omcreativos por WhatsApp para contar tu idea y recibir una orientacion mas precisa.",
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
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = (value = input) => {
    const cleanValue = value.trim();

    if (!cleanValue) {
      return;
    }

    const answer = getAnswer(cleanValue);
    setMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", text: cleanValue },
      { role: "bot", ...answer },
    ]);
    setInput("");
    setIsOpen(true);
  };

  return (
    <div className={`chatbot ${isOpen ? "is-open" : ""}`}>
      {isOpen ? (
        <section className="chatbot-panel" aria-label="Chatbot de prueba de omcreativos">
          <header className="chatbot-header">
            <div>
              <span>
                <Bot size={16} />
              </span>
              <div>
                <strong>Asistente omcreativos</strong>
                <small>Respuesta de prueba</small>
              </div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Cerrar chat">
              <X size={18} />
            </button>
          </header>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div className={`chatbot-message ${message.role}`} key={`${message.role}-${index}`}>
                <p>{message.text}</p>
                {message.contact ? (
                  <a className="chatbot-contact" href={whatsappUrl} target="_blank" rel="noreferrer">
                    <PhoneCall size={15} />
                    Contactar con equipo
                  </a>
                ) : null}
              </div>
            ))}
          </div>

          <div className="chatbot-quick">
            {quickQuestions.map((question) => (
              <button type="button" key={question} onClick={() => sendMessage(question)}>
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
            />
            <button type="submit" aria-label="Enviar pregunta">
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
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
