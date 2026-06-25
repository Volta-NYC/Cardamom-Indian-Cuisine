"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false })

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* WebGL metaball canvas — fills entire hero */}
      <HeroCanvas />

      {/* Soft bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0D0A07] to-transparent z-10 pointer-events-none" />
      {/* Soft top fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0D0A07]/60 to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex items-center gap-4 mb-7"
        >
          <div className="w-10 h-px bg-saffron" />
          <span className="text-saffron text-xs md:text-sm uppercase tracking-[0.4em] font-medium font-sans">
            Welcome to
          </span>
        </motion.div>

        {/* Massive headline */}
        <div className="overflow-hidden mb-3">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.55, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-bold text-cream leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3.2rem, 10vw, 9rem)" }}
          >
            Cardamom
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-bold italic text-saffron leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3.2rem, 10vw, 9rem)" }}
          >
            Indian Cuisine
          </motion.h2>
        </div>

        {/* Thin rule + location */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-xl h-px bg-gradient-to-r from-saffron/60 via-crimson/40 to-transparent mb-6"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 mb-12"
        >
          <p className="text-cream/50 font-sans text-sm tracking-wide flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-saffron shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            43-45 43rd Street, Sunnyside, NY 11104
          </p>
          <span className="hidden sm:block w-px h-4 bg-cream/20" />
          <p className="text-cream/50 font-sans text-sm tracking-wide flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-saffron shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Mon & Wed–Sun · 4PM–10PM
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://cardamom.ordering-panel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-full bg-saffron text-dark-base font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-2xl shadow-saffron/30"
          >
            <span className="relative z-10">Order Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </a>
          <a
            href="tel:718-706-9718"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-cream/20 text-cream font-bold text-sm uppercase tracking-widest hover:border-cream/50 hover:bg-white/5 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call Us
          </a>
          <a
            href="https://www.cardamomny.com/reservation.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-saffron/30 text-saffron font-bold text-sm uppercase tracking-widest hover:border-saffron hover:bg-saffron/10 transition-all duration-300 hover:scale-105"
          >
            Book a Table
          </a>
        </motion.div>

        {/* Scroll cue — bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-10 right-8 hidden md:flex flex-col items-center gap-3"
        >
          <span className="text-cream/25 text-[10px] uppercase tracking-[0.3em] font-sans" style={{ writingMode: "vertical-rl" }}>
            Scroll to explore
          </span>
          <motion.div
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-14 bg-gradient-to-b from-saffron/60 to-transparent origin-top"
          />
        </motion.div>
      </div>
    </section>
  )
}
