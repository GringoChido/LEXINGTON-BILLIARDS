"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const clothColors = [
  { name: "Tournament Green", hex: "#2C6E3F" },
  { name: "Championship Blue", hex: "#1B4F8A" },
  { name: "Wine", hex: "#722F37" },
  { name: "Camel", hex: "#C4A265" },
  { name: "Navy", hex: "#1C2951" },
  { name: "Red", hex: "#8B2500" },
  { name: "Spruce", hex: "#1B4332" },
  { name: "Electric Blue", hex: "#0066CC" },
  { name: "Burgundy", hex: "#5C1A1B" },
  { name: "Dark Green", hex: "#1A5632" },
  { name: "Charcoal", hex: "#3A3A3A" },
  { name: "Steel Grey", hex: "#6B7B8D" },
  { name: "Tan", hex: "#D2B48C" },
  { name: "Black", hex: "#1A1A1A" },
  { name: "English Green", hex: "#3D6B47" },
  { name: "Euro Blue", hex: "#2A5DA8" },
  { name: "Purple", hex: "#4A2065" },
  { name: "Bottle Green", hex: "#264D35" },
  { name: "Mocha", hex: "#7A5C48" },
  { name: "Olive", hex: "#5C6B3A" },
  { name: "Powder Blue", hex: "#6CA0C4" },
  { name: "Chocolate", hex: "#3E2723" },
  { name: "Khaki", hex: "#A69060" },
  { name: "Brick", hex: "#9B3B2B" },
  { name: "Sage", hex: "#7D8B6A" },
  { name: "Copper", hex: "#A0522D" },
  { name: "Taupe", hex: "#8B7D6B" },
  { name: "Midnight Blue", hex: "#191970" },
  { name: "Ivory", hex: "#E8DCC8" },
]

interface ClothSwatchesProps {
  compact?: boolean
}

export const ClothSwatches = ({ compact = false }: ClothSwatchesProps) => {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div>
      <div
        className={`grid gap-2.5 ${compact ? "grid-cols-6 sm:grid-cols-6" : "grid-cols-5 sm:grid-cols-6 lg:grid-cols-8"}`}
      >
        {clothColors.map((color, i) => (
          <motion.button
            key={color.hex}
            onHoverStart={() => setActive(i)}
            onHoverEnd={() => setActive(null)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            whileHover={{ scale: 1.12, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={`relative rounded-lg overflow-hidden shadow-md cursor-pointer border-2 border-white/20 ${
              compact ? "aspect-square" : "aspect-square sm:aspect-[3/4]"
            }`}
            style={{ background: color.hex }}
            aria-label={color.name}
          >
            {/* Felt texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.1]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(255,255,255,0.15) 1px, rgba(255,255,255,0.15) 2px)",
              }}
            />

            {active === i && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[2px]"
              >
                <span className="text-white text-[10px] sm:text-xs font-bold text-center px-1 leading-tight">
                  {color.name}
                </span>
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>
      <p
        className="text-center mt-4 text-sm font-bold"
        style={{ color: "var(--color-primary)" }}
      >
        {clothColors.length} colors available
      </p>
    </div>
  )
}
