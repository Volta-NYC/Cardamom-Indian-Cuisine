"use client"

import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const reviews = [
  {
    name: "Andrea Luper",
    text: "This cozy neighborhood spot happens to be not only some of the best Indian fare in the area, but in the greater New York area. Never disappoints. The naan is perfection. The curries are perfectly balanced, and the saag is so thick and luxurious.",
    avatar: "https://www.cardamomny.com/assets/img/pages/t1.png",
    rating: 5,
    source: "Google Review",
    highlight: "The naan is perfection.",
  },
  {
    name: "IZON MAG",
    text: "The menu at Cardamom Indian Restaurant is a culinary masterpiece, featuring an extensive selection of traditional and contemporary Indian dishes. From flavorful curries to sizzling tandoori grills — every dish crafted with passion.",
    avatar: "https://www.cardamomny.com/assets/img/pages/t2.png",
    rating: 5,
    source: "Magazine",
    highlight: "A culinary masterpiece.",
  },
  {
    name: "Araf Ahmed",
    text: "One of the best Indian restaurants in Queens. I love the taste of the foods. The quality of the Basmati rice is awesome and every dish is packed with authentic flavor that keeps you coming back.",
    avatar: "https://www.cardamomny.com/assets/img/pages/t3.png",
    rating: 5,
    source: "Google Review",
    highlight: "Best Indian in Queens.",
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % reviews.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="py-28 bg-[#0a0704] relative overflow-hidden">
      {/* Background: large letter */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-[32rem] leading-none text-white/[0.015] select-none pointer-events-none hidden lg:block"
        aria-hidden
      >
        &ldquo;
      </div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px bg-saffron" />
              <span className="text-saffron text-xs uppercase tracking-[0.3em] font-medium font-sans">Guest Love</span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif font-bold text-cream leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                What Our <span className="italic text-saffron">Guests</span> Say
              </motion.h2>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 shrink-0"
          >
            {[1,2,3,4,5].map(s => (
              <svg key={s} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-saffron" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
            <span className="text-cream/40 text-sm font-sans ml-2">4.9 · 200+ Reviews</span>
          </motion.div>
        </div>

        {/* Main review display */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Big quote */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-3 relative bg-dark-card border border-white/6 rounded-3xl overflow-hidden flex flex-col"
          >
            <div className="h-1 bg-gradient-to-r from-crimson via-saffron to-turmeric" />
            <div className="p-10 flex flex-col flex-1">
              {/* Highlight pull-quote */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`hl-${active}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="font-serif text-3xl md:text-4xl font-bold italic text-saffron/80 mb-6 leading-tight"
                >
                  &ldquo;{reviews[active].highlight}&rdquo;
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`txt-${active}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-cream/60 font-sans text-base leading-relaxed flex-1 mb-8"
                >
                  {reviews[active].text}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`auth-${active}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-4"
                >
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-saffron/30 shrink-0">
                    <Image src={reviews[active].avatar} alt={reviews[active].name} fill className="object-cover" unoptimized />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-cream">{reviews[active].name}</p>
                    <p className="text-cream/35 text-xs font-sans">{reviews[active].source}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-saffron" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Progress bar */}
            <div className="h-px bg-white/5">
              <motion.div
                key={active}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="h-full bg-saffron/40"
              />
            </div>
          </motion.div>

          {/* Side cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {reviews.map((r, i) => (
              <button
                key={r.name}
                onClick={() => setActive(i)}
                className={`group text-left rounded-2xl border p-5 transition-all duration-300 ${
                  i === active
                    ? "bg-dark-card border-saffron/30 shadow-lg shadow-saffron/5"
                    : "bg-dark-card/40 border-white/5 hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10 shrink-0">
                    <Image src={r.avatar} alt={r.name} fill className="object-cover" unoptimized />
                  </div>
                  <div>
                    <p className={`text-sm font-bold font-serif ${i === active ? "text-saffron" : "text-cream/60"}`}>{r.name}</p>
                    <p className="text-cream/25 text-[10px] font-sans">{r.source}</p>
                  </div>
                  <div className={`ml-auto w-2 h-2 rounded-full transition-all ${i === active ? "bg-saffron scale-125" : "bg-white/10"}`} />
                </div>
                <p className={`text-xs leading-relaxed font-sans line-clamp-2 ${i === active ? "text-cream/60" : "text-cream/30"}`}>
                  {r.text}
                </p>
              </button>
            ))}

            {/* Navigation arrows */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setActive((p) => (p - 1 + reviews.length) % reviews.length)}
                className="flex-1 flex items-center justify-center py-3 rounded-2xl border border-white/8 text-cream/40 hover:border-saffron/30 hover:text-saffron transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <button
                onClick={() => setActive((p) => (p + 1) % reviews.length)}
                className="flex-1 flex items-center justify-center py-3 rounded-2xl border border-white/8 text-cream/40 hover:border-saffron/30 hover:text-saffron transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
