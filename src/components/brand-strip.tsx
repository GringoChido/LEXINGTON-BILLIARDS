"use client"

const brands = [
  "C.L. Bailey",
  "Brunswick",
  "Olhausen",
  "Imperial",
  "American Heritage",
  "Maax",
  "Bullfrog",
  "Jacuzzi",
  "Big Green Egg",
  "Custom Multicades",
  "Raw Thrills",
]

export const BrandStrip = () => {
  const combined = [...brands, ...brands]

  return (
    <section
      className="py-10 border-t border-b overflow-hidden"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-[var(--content-max)] mx-auto px-[var(--section-px)] mb-8">
        <p className="text-center font-heading font-700 text-sm tracking-[0.12em] uppercase text-[var(--color-text-secondary)]">
          Brands We&apos;re Proud to Carry
        </p>
      </div>

      <div className="relative">
        {/* Left/right fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--color-surface), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--color-surface), transparent)" }}
        />

        {/* Marquee track */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 gap-0">
            {combined.map((brand, i) => (
              <span key={i} className="flex items-center shrink-0">
                <span className="font-heading font-bold text-[length:var(--text-h4)] text-[var(--color-text)] whitespace-nowrap px-8">
                  {brand}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: "var(--color-primary)" }}
                  aria-hidden="true"
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
