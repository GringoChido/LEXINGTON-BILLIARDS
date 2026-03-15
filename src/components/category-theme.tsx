"use client"

import { useEffect } from "react"
import { categoryThemes, type CategoryKey } from "@/lib/category-themes"

export const CategoryTheme = ({ category }: { category: CategoryKey }) => {
  const theme = categoryThemes[category]

  useEffect(() => {
    const root = document.documentElement
    Object.entries(theme).forEach(([key, value]) => {
      if (key !== "name") {
        const cssVar = `--cat-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`
        root.style.setProperty(cssVar, value)
      }
    })

    return () => {
      Object.keys(theme).forEach((key) => {
        if (key !== "name") {
          const cssVar = `--cat-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`
          root.style.removeProperty(cssVar)
        }
      })
    }
  }, [theme])

  return null
}
