"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function ReservationBanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="relative overflow-hidden bg-dark-base py-32">
      {/* Layered warm radials */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(244,161,0,0.10) 0%, transparent 60%)" }}
      />
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 40% 40% at 20% 50%, rgba(139,26,26,0.08) 0%, transparent 60%)" }}
      />
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 40% 40% at 80% 50%, rgba(139,26,26,0.08) 0%, transparent 60%)" }}
      />

      {/* Decorative ring */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-saffron/5 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-saffron/[0.03] pointer-events-none" />

      {/* Horizontal rule top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-saffron/25 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 mx-auto mb-10 rounded-full bg-saffron/10 border border-saffron/20 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-saffron" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-5"
        >
          <div className="w-8 h-px bg-saffron" />
          <span className="text-saffron text-xs uppercase tracking-[0.4em] font-medium font-sans">Reserve Your Table</span>
          <div className="w-8 h-px bg-saffron" />
        </motion.div>

        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-bold text-cream leading-none"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            Book Your
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.32, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-bold italic text-saffron leading-none"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            Table
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-cream/50 font-sans text-lg mb-12"
        >
          Make an online reservation — find your perfect table for two, for family, or for the whole crew.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="https://www.cardamomny.com/reservation.php"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-12 py-5 rounded-full bg-saffron text-dark-base font-bold text-sm uppercase tracking-widest hover:bg-turmeric transition-all duration-300 shadow-2xl shadow-saffron/30 hover:scale-105"
          >
            Book a Table
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="tel:718-706-9718"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full border border-cream/15 text-cream font-bold text-sm uppercase tracking-widest hover:border-saffron/40 hover:text-saffron transition-all duration-300 hover:scale-105"
          >
            718-706-9718
          </a>
        </motion.div>
      </div>
    </section>
  )
}
