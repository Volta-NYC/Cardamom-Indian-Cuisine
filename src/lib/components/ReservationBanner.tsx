"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function ReservationBanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dark warm background */}
      <div className="absolute inset-0 bg-dark-card" />

      {/* Spice pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(244,161,0,0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(139,26,26,0.4) 0%, transparent 50%)
          `,
        }}
      />

      {/* Geometric decorative lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 border border-saffron/5 rounded-full" />
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-60 h-60 border border-saffron/5 rounded-full" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 border border-crimson/5 rounded-full" />
        <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-60 h-60 border border-crimson/5 rounded-full" />
      </div>

      {/* Top & bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" ref={ref}>
        {/* Spice icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 mx-auto mb-8 rounded-full bg-saffron/10 border border-saffron/20 flex items-center justify-center text-2xl"
        >
          🍽️
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-saffron" />
          <span className="text-saffron text-xs uppercase tracking-[0.3em] font-medium">
            Reserve Your Spot
          </span>
          <div className="w-8 h-px bg-saffron" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-5xl md:text-6xl font-bold text-cream mb-4"
        >
          Book Your{" "}
          <span className="text-saffron italic">Table</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-cream/60 font-sans text-lg mb-10"
        >
          Make an online reservation — find your table now
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="https://www.cardamomny.com/reservation.php"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-saffron text-dark-base font-semibold text-base hover:bg-turmeric transition-all duration-300 shadow-xl shadow-saffron/30 hover:scale-105"
          >
            Book a Table
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="tel:718-706-9718"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full border border-saffron/30 text-cream font-semibold text-base hover:border-saffron hover:text-saffron transition-all duration-300 hover:scale-105"
          >
            718-706-9718
          </a>
        </motion.div>
      </div>
    </section>
  )
}
