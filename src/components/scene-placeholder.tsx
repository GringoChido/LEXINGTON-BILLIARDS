interface ScenePlaceholderProps {
  label: string
  aspectRatio?: string
  className?: string
  dark?: boolean
}

export const ScenePlaceholder = ({
  label,
  aspectRatio = "16/9",
  className = "",
  dark = false,
}: ScenePlaceholderProps) => (
  <div
    className={`relative overflow-hidden ${className}`}
    style={{
      aspectRatio,
      background: dark
        ? "linear-gradient(135deg, #2A2520 0%, #1C1C1C 50%, #2A2520 100%)"
        : "linear-gradient(135deg, #E8D5B8 0%, #D4C0A3 40%, #C9A87C 100%)",
    }}
  >
    {/* Dot pattern */}
    <div
      className="absolute inset-0"
      style={{
        opacity: dark ? 0.04 : 0.06,
        backgroundImage:
          "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
        backgroundSize: "20px 20px",
        color: dark ? "#FAF6EF" : "#1C1C1C",
      }}
    />

    {/* Label */}
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <p
        className={`text-center text-sm font-medium leading-relaxed max-w-[36ch] italic ${
          dark ? "text-[#FAF6EF]/30" : "text-[#5C4A35]/40"
        }`}
      >
        {label}
      </p>
    </div>
  </div>
)
