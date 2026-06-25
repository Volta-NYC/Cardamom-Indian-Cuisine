"use client"

import { motion } from "framer-motion"

const spices = [
  "Cardamom", "Saffron", "Turmeric", "Cumin", "Coriander", "Garam Masala",
  "Tandoori", "Kashmiri", "Fenugreek", "Amchur", "Asafoetida", "Mustard Seed",
  "Clove", "Star Anise", "Cinnamon", "Black Pepper", "Chili", "Ghee",
]

const items = [...spices, ...spices] // double for seamless loop

export default function Marquee({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className={`overflow-hidden border-y py-3.5 ${inverted ? "border-saffron/10 bg-saffron text-dark-base" : "border-white/5 bg-dark-card text-saffron"}`}>
      <motion.div
        animate={{ x: inverted ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        className="flex whitespace-nowrap"
      >
        {items.map((spice, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-5">
            <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              {spice}
            </span>
            <span className={`text-sm ${inverted ? "text-dark-base/40" : "text-saffron/40"}`}>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
