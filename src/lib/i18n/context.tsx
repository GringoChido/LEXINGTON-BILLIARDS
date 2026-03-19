"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Locale = "en" | "es"
export type T = { en: string; es: string }

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (text: T) => string
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: (text) => text.en,
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>("en")

  useEffect(() => {
    const saved = localStorage.getItem("lb-locale") as Locale | null
    if (saved === "en" || saved === "es") setLocaleState(saved)
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem("lb-locale", l)
    document.documentElement.lang = l
  }

  const t = (text: T) => text[locale]

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
