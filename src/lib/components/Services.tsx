"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    title: "Pickup",
    sub: "Order Ahead",
    description: "Order on your schedule — we'll have your meal fresh and hot the moment you arrive. Zero wait, zero compromise.",
    image: "https://www.cardamomny.com/assets/img/pages/online.png",
    href: "https://cardamom.ordering-panel.com/",
    cta: "Order Now",
    number: "01",
    accent: "#F4A100",
  },
  {
    title: "Delivery",
    sub: "To Your Door",
    description: "The full Cardamom experience, delivered. Fast, reliable, still-hot-when-it-arrives. Queens-wide and beyond.",
    image: "https://www.cardamomny.com/assets/img/pages/delivery.png",
    href: "https://cardamom.ordering-panel.com/",
    cta: "Order Delivery",
    number: "02",
    accent: "#D4830A",
  },
  {
    title: "Catering",
    sub: "Every Occasion",
    description: "Corporate lunch, wedding feast, family gathering — our catering team creates memories through food. Let's talk.",
    image: "https://www.cardamomny.com/assets/img/pages/catering.png",
    href: "https://www.cardamomny.com/reservation.php",
    cta: "Get a Quote",
    number: "03",
    accent: "#8B1A1A",
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="services" className="py-28 bg-dark-base relative overflow-hidden">
      {/* Top fade */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-dark-surface to-transparent pointer-events-none" />
      {/* Radial glow centre */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(244,161,0,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px bg-saffron" />
              <span className="text-saffron text-xs uppercase tracking-[0.3em] font-medium font-sans">How We Serve</span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif font-bold text-cream leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                Our <span className="italic text-saffron">Services</span>
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-cream/45 font-sans text-base max-w-xs leading-relaxed"
          >
            Pickup, delivery, or catering — authentic Indian flavors on your terms.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl bg-dark-card border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
            >
              {/* Animated colour-accent top bar */}
              <div
                className="h-1 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: s.accent }}
              />

              {/* Number watermark */}
              <div className="absolute top-4 right-5 font-serif font-bold text-6xl text-white/[0.04] select-none pointer-events-none leading-none">
                {s.number}
              </div>

              {/* Icon */}
              <div className="relative h-52 bg-dark-surface/60 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `radial-gradient(circle at 50% 80%, ${s.accent}18, transparent 70%)` }}
                />
                <Image
                  src={s.image}
                  alt={s.title}
                  width={200}
                  height={160}
                  className="object-contain w-40 h-40 group-hover:scale-110 transition-transform duration-700 drop-shadow-lg"
                  unoptimized
                />
              </div>

              <div className="p-7">
                <p className="text-cream/30 text-[10px] uppercase tracking-[0.3em] font-sans mb-1">{s.sub}</p>
                <h3 className="font-serif font-bold text-2xl text-cream mb-3 group-hover:text-saffron transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed font-sans mb-6">{s.description}</p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all duration-300"
                  style={{ color: s.accent }}
                >
                  {s.cta}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
