"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Phone, MapPin, Clock } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useLanguage, type T } from "@/lib/i18n/context"
import { company } from "@/lib/content/company"

const i18n = {
  greeting: { en: "Hi! How can we help you today?", es: "\u00a1Hola! \u00bfC\u00f3mo podemos ayudarte hoy?" } as T,
  placeholder: { en: "Type a message...", es: "Escribe un mensaje..." } as T,
  title: { en: "Chat with Us", es: "Chatea con Nosotros" } as T,
  subtitle: { en: "We typically reply within minutes", es: "Normalmente respondemos en minutos" } as T,
  quickReplies: { en: "Quick Questions", es: "Preguntas R\u00e1pidas" } as T,
}

interface QuickReply {
  question: T
  answer: T
}

const quickReplies: QuickReply[] = [
  {
    question: { en: "What are your hours?", es: "\u00bfCu\u00e1l es su horario?" },
    answer: {
      en: `We're open ${company.hours.weekday}. ${company.hours.weekend}. Stop by anytime!`,
      es: `Estamos abiertos Lun-S\u00e1b 10am-6pm. Domingos cerrado. \u00a1Ven cuando quieras!`,
    },
  },
  {
    question: { en: "Where are you located?", es: "\u00bfD\u00f3nde est\u00e1n ubicados?" },
    answer: {
      en: `We're at ${company.address.full}. Come visit our showroom — the coffee's always on!`,
      es: `Estamos en ${company.address.full}. \u00a1Ven a visitar nuestro showroom!`,
    },
  },
  {
    question: { en: "Do you deliver?", es: "\u00bfHacen entregas?" },
    answer: {
      en: `Yes! Free delivery and professional installation within ${company.deliveryRadius} of Lexington. Pool tables delivered, assembled, and leveled. Spas installed and ready to soak.`,
      es: `\u00a1S\u00ed! Entrega gratuita e instalaci\u00f3n profesional dentro de ${company.deliveryRadius} de Lexington. Mesas de billar entregadas, ensambladas y niveladas. Spas instalados y listos para usar.`,
    },
  },
  {
    question: { en: "What brands do you carry?", es: "\u00bfQu\u00e9 marcas manejan?" },
    answer: {
      en: "We carry Brunswick, C.L. Bailey, Connelly, A.E. Schmidt, Imperial, American Heritage pool tables. American Whirlpool & Vita Spa hot tubs. Big Green Egg grills. Custom arcade machines. RAM Game Room furniture & more!",
      es: "Manejamos mesas de billar Brunswick, C.L. Bailey, Connelly, A.E. Schmidt, Imperial, American Heritage. Jacuzzis American Whirlpool y Vita Spa. Parrillas Big Green Egg. M\u00e1quinas arcade personalizadas. Muebles RAM Game Room \u00a1y m\u00e1s!",
    },
  },
  {
    question: { en: "Do you do repairs?", es: "\u00bfHacen reparaciones?" },
    answer: {
      en: "Absolutely! We offer re-cloth, re-cushion, cue repair, and full spa maintenance. Our service team covers all of Central and Eastern Kentucky. Call us at (859) 255-7639 to schedule.",
      es: "\u00a1Por supuesto! Ofrecemos cambio de pa\u00f1o, cambio de bandas, reparaci\u00f3n de tacos y mantenimiento completo de spas. Nuestro equipo de servicio cubre todo el centro y este de Kentucky. Llama al (859) 255-7639 para agendar.",
    },
  },
  {
    question: { en: "Can I finance a purchase?", es: "\u00bfOfrecen financiamiento?" },
    answer: {
      en: "Yes, we offer financing options! Visit our showroom or call us at (859) 255-7639 to discuss payment plans that work for your budget.",
      es: "\u00a1S\u00ed, ofrecemos opciones de financiamiento! Visita nuestro showroom o ll\u00e1manos al (859) 255-7639 para hablar sobre planes de pago que se ajusten a tu presupuesto.",
    },
  },
]

interface Message {
  id: number
  text: string
  sender: "bot" | "user"
}

export const ChatWidget = () => {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [initialized, setInitialized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open && !initialized) {
      setMessages([{ id: 1, text: t(i18n.greeting), sender: "bot" }])
      setInitialized(true)
    }
  }, [open, initialized, t])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const addBotMessage = (text: string) => {
    setMessages((prev) => [...prev, { id: Date.now(), text, sender: "bot" }])
  }

  const handleQuickReply = (reply: QuickReply) => {
    const question = t(reply.question)
    const answer = t(reply.answer)
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: question, sender: "user" },
    ])
    setTimeout(() => addBotMessage(answer), 400)
  }

  const handleSend = () => {
    if (!input.trim()) return
    const userText = input.trim()
    setMessages((prev) => [...prev, { id: Date.now(), text: userText, sender: "user" }])
    setInput("")

    setTimeout(() => {
      const lower = userText.toLowerCase()
      const matched = quickReplies.find((qr) => {
        const keywords = t(qr.question).toLowerCase().split(" ")
        return keywords.some((kw) => kw.length > 3 && lower.includes(kw))
      })
      if (matched) {
        addBotMessage(t(matched.answer))
      } else {
        addBotMessage(
          t({
            en: `Great question! For the best answer, give us a call at ${company.phone.display} or visit our showroom at ${company.address.street}. We'd love to help you in person!`,
            es: `\u00a1Excelente pregunta! Para la mejor respuesta, ll\u00e1manos al ${company.phone.display} o visita nuestro showroom en ${company.address.street}. \u00a1Nos encantar\u00eda ayudarte en persona!`,
          })
        )
      }
    }, 600)
  }

  const showQuickReplies = messages.length <= 1

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary-hover transition-colors flex items-center justify-center"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 right-0 sm:bottom-6 sm:left-auto sm:right-6 z-50 w-full sm:w-[360px] sm:max-w-[calc(100vw-2rem)] sm:rounded-2xl rounded-t-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ height: "min(520px, calc(100vh - 4rem))", background: "var(--color-cream, #FAF6EF)" }}
          >
            {/* Header */}
            <div className="bg-dark px-5 py-4 flex items-center justify-between shrink-0">
              <div>
                <p className="font-display font-bold text-white text-sm">{t(i18n.title)}</p>
                <p className="text-white/50 text-xs mt-0.5">{t(i18n.subtitle)}</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-11 h-11 flex items-center justify-center text-white/60 hover:text-white transition-colors shrink-0"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-br-md"
                        : "bg-white text-text border border-border rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Quick replies */}
              {showQuickReplies && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="space-y-2 pt-2"
                >
                  <p className="text-[11px] font-accent font-medium uppercase tracking-wider text-text-muted">
                    {t(i18n.quickReplies)}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {quickReplies.map((qr, i) => (
                      <button
                        key={i}
                        onClick={() => handleQuickReply(qr)}
                        className="text-xs px-3 py-2.5 rounded-full bg-white border border-border text-text hover:border-primary hover:text-primary transition-colors min-h-[44px]"
                      >
                        {t(qr.question)}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick contact bar */}
            <div className="px-2 py-1 bg-white/60 border-t border-border flex items-center justify-center gap-2 shrink-0">
              <a
                href={company.phone.href}
                className="flex items-center gap-1.5 text-xs text-primary font-semibold hover:text-primary-hover transition-colors min-h-[44px] px-2"
              >
                <Phone className="w-3.5 h-3.5" />
                {t({ en: "Call", es: "Llamar" })}
              </a>
              <span className="w-px h-4 bg-border" />
              <a
                href={company.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-primary transition-colors min-h-[44px] px-2"
              >
                <MapPin className="w-3.5 h-3.5" />
                {t({ en: "Directions", es: "Direcci\u00f3n" })}
              </a>
              <span className="w-px h-4 bg-border" />
              <span className="flex items-center gap-1.5 text-xs text-text-muted">
                <Clock className="w-3.5 h-3.5" />
                {company.hours.weekday}
              </span>
            </div>

            {/* Input */}
            <div className="px-4 py-3 bg-white border-t border-border flex items-center gap-2 shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={t(i18n.placeholder)}
                className="flex-1 text-base sm:text-sm bg-transparent outline-none text-text placeholder:text-text-muted"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                aria-label="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
