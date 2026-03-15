import { Phone, MapPin } from "lucide-react"
import { company } from "@/lib/content/company"

interface BottomCtaProps {
  headline?: string
  variant?: "dark" | "teal" | "green" | "cream" | "primary"
}

export const BottomCta = ({
  headline = "Come See It In Person",
  variant = "dark",
}: BottomCtaProps) => {
  const styles: Record<string, { bg: string; text: string; muted: string }> = {
    dark: {
      bg: "var(--color-dark)",
      text: "var(--color-text-on-dark)",
      muted: "rgba(250,246,239,0.5)",
    },
    teal: {
      bg: "var(--color-teal)",
      text: "#FFFFFF",
      muted: "rgba(255,255,255,0.65)",
    },
    green: {
      bg: "var(--color-green-egg)",
      text: "#FFFFFF",
      muted: "rgba(255,255,255,0.65)",
    },
    cream: {
      bg: "var(--color-cream)",
      text: "var(--color-text)",
      muted: "var(--color-text-secondary)",
    },
    primary: {
      bg: "var(--color-primary)",
      text: "#FFFFFF",
      muted: "rgba(255,255,255,0.7)",
    },
  }

  const s = styles[variant]
  const isDark = variant !== "cream"

  return (
    <section className="py-[var(--section-py)]" style={{ background: s.bg }}>
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)] text-center">
        <h2
          className="heading text-[length:var(--text-h2)] mb-6"
          style={{ color: s.text }}
        >
          {headline}
        </h2>
        <a
          href={company.phone.href}
          className="heading text-[length:var(--text-display)] block mb-6 hover:opacity-80 transition-opacity"
          style={{
            color:
              variant === "primary"
                ? "#FFFFFF"
                : variant === "cream"
                  ? "var(--color-primary)"
                  : "var(--color-primary)",
          }}
        >
          {company.phone.display}
        </a>
        <p className="text-base mb-2" style={{ color: s.muted }}>
          {company.hours.full}
        </p>
        <p className="text-base mb-8" style={{ color: s.muted }}>
          {company.address.full}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={company.phone.href}
            className={isDark ? "btn-primary" : "btn-dark"}
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a
            href={company.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={isDark ? "btn-secondary" : "btn-outline"}
          >
            <MapPin className="w-4 h-4" /> Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}
