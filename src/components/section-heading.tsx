interface SectionHeadingProps {
  label?: string
  headline: string
  description?: string
  align?: "left" | "center"
  dark?: boolean
}

export const SectionHeading = ({
  label,
  headline,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left"

  return (
    <div className={`max-w-[48ch] ${alignment} mb-12 lg:mb-16`}>
      {label && (
        <p
          className="section-label mb-4"
          style={dark ? { color: "var(--color-primary)" } : undefined}
        >
          {label}
        </p>
      )}
      <h2
        className="heading text-[length:var(--text-h2)] mb-4"
        style={{ color: dark ? "var(--color-text-on-dark)" : "var(--color-text)" }}
      >
        {headline}
      </h2>
      {description && (
        <p
          className="text-lg leading-relaxed max-w-[60ch]"
          style={{ color: dark ? "rgba(255,247,237,0.6)" : "var(--color-text-secondary)" }}
        >
          {description}
        </p>
      )}
    </div>
  )
}
