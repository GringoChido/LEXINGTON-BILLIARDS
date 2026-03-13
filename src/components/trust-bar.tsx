"use client"

import { Clock, Truck, Wrench, Award } from "lucide-react"

const trustItems = [
  { icon: Clock, label: "Since 1975", sublabel: "50+ years strong" },
  { icon: Truck, label: "Free Delivery", sublabel: "Within 50 miles" },
  { icon: Wrench, label: "Expert Install", sublabel: "Set up & leveled" },
  { icon: Award, label: "Service & Repair", sublabel: "All of Eastern KY" },
]

export const TrustBar = () => {
  return (
    <section className="bg-surface py-6 lg:py-8">
      <div className="mx-auto max-w-[var(--content-max)] px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-border">
          {trustItems.map((item, i) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center lg:px-6 animate-[fadeUp_0.5s_ease-out_both]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <item.icon className="w-6 h-6 text-accent-warm mb-2" />
              <span className="font-heading font-bold uppercase text-lg text-text">
                {item.label}
              </span>
              <span className="text-text-secondary text-sm">{item.sublabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
