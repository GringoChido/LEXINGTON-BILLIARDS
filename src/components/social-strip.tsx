"use client"

import { FacebookIcon, InstagramIcon } from "@/components/social-icons"
import { company } from "@/lib/content/company"
import { useLanguage } from "@/lib/i18n/context"

export const SocialStrip = () => {
  const { t } = useLanguage()

  return (
    <section style={{ background: "var(--color-dark)" }}>
      <div className="max-w-[var(--content-max)] mx-auto px-[var(--section-px)] py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-border-dark)]">
          <a
            href={company.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 py-8 sm:py-6 sm:px-8 transition-colors duration-200 hover:bg-white/5 first:rounded-t-xl sm:first:rounded-t-none sm:first:rounded-l-xl last:rounded-b-xl sm:last:rounded-b-none sm:last:rounded-r-xl"
          >
            <FacebookIcon className="w-8 h-8 text-[#1877F2] shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <div>
              <p
                className="heading font-700 text-[length:var(--text-h4)]"
                style={{ color: "var(--color-text-on-dark)" }}
              >
                {t({ en: "Follow us on Facebook", es: "S\u00edguenos en Facebook" })}
              </p>
              <p className="text-white/45 text-sm mt-0.5">
                {t({ en: "Updates, deals & game room inspo", es: "Novedades, ofertas e inspiraci\u00f3n" })}
              </p>
            </div>
          </a>

          <a
            href={company.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 py-8 sm:py-6 sm:px-8 transition-colors duration-200 hover:bg-white/5 last:rounded-b-xl sm:last:rounded-b-none sm:last:rounded-r-xl"
          >
            <InstagramIcon className="w-8 h-8 text-[#E1306C] shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <div>
              <p
                className="heading font-700 text-[length:var(--text-h4)]"
                style={{ color: "var(--color-text-on-dark)" }}
              >
                {t({ en: "Follow us on Instagram", es: "S\u00edguenos en Instagram" })}
              </p>
              <p className="text-white/45 text-sm mt-0.5">
                {t({ en: "See the setups our customers build", es: "Mira los montajes de nuestros clientes" })}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
