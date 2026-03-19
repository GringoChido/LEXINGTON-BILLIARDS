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
]

interface ClothSwatchesProps {
  compact?: boolean
}

export const ClothSwatches = ({ compact = false }: ClothSwatchesProps) => {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div>
      <div
        className={`grid gap-3 ${compact ? "grid-cols-6" : "grid-cols-3 sm:grid-cols-6"}`}
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
        + 23 more colors
      </p>
    </div>
  )
}
