"use client"

import { useLanguage } from "@/lib/i18n/context"

export const LanguageToggle = ({ className = "" }: { className?: string }) => {
  const { locale, setLocale } = useLanguage()

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "es" : "en")}
      className={`flex items-center gap-1 font-accent text-[11px] font-medium tracking-wider uppercase transition-colors duration-200 min-w-[44px] min-h-[44px] justify-center ${className}`}
      aria-label={locale === "en" ? "Cambiar a Espa\u00f1ol" : "Switch to English"}
    >
      <span className={locale === "en" ? "text-white" : "text-white/40"}>EN</span>
      <span className="text-white/25">|</span>
      <span className={locale === "es" ? "text-white" : "text-white/40"}>ES</span>
    </button>
  )
}
