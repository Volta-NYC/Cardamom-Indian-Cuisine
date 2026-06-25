"use client"

import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"

const reviews = [
  {
    name: "Andrea Luper",
    text: "This cozy neighborhood spot happens to be not only some of the best Indian fare in the area, but in the greater New York area. Never disappoints. The naan is perfection. The curries are perfectly balanced, and the saag is so thick and luxurious.",
    avatar: "https://www.cardamomny.com/assets/img/pages/t1.png",
    rating: 5,
    source: "Google Review",
  },
  {
    name: "IZON MAG",
    text: "The menu at Cardamom Indian Restaurant is a culinary masterpiece, featuring an extensive selection of traditional and contemporary Indian dishes. From flavorful curries to sizzling tandoori grills — every dish is crafted with passion and authenticity.",
    avatar: "https://www.cardamomny.com/assets/img/pages/t2.png",
    rating: 5,
    source: "Magazine Review",
  },
  {
    name: "Araf Ahmed",
    text: "One of the best Indian restaurants in Queens. I love the taste of the foods. The cheese naan was good but I expected more cheese inside the naan. The quality of the Basmati rice is awesome.",
    avatar: "https://www.cardamomny.com/assets/img/pages/t3.png",
    rating: 5,
    source: "Google Review",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 ${i < count ? "text-saffron" : "text-white/20"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const prev = () => setActive((p) => (p - 1 + reviews.length) % reviews.length)
  const next = () => setActive((p) => (p + 1) % reviews.length)

  return (
    <section className="py-28 bg-dark-base relative overflow-hidden">
      {/* Background spice motif */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #F4A100 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron/20 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-saffron" />
            <span className="text-saffron text-xs uppercase tracking-[0.3em] font-medium">
              Guest Love
            </span>
            <div className="w-8 h-px bg-saffron" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">
            What Our Guests{" "}
            <span className="text-saffron italic">Say</span>
          </h2>
        </motion.div>

        {/* Large quote display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-dark-card border border-white/5 rounded-3xl overflow-hidden"
        >
          {/* Top accent gradient */}
          <div className="h-1 w-full bg-gradient-to-r from-crimson via-saffron to-turmeric" />

          <div className="p-10 md:p-16">
            {/* Big quote mark */}
            <div className="font-serif text-8xl text-saffron/20 leading-none select-none mb-4 -mt-4">
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-serif text-xl md:text-2xl text-cream/90 leading-relaxed mb-10">
                  {reviews[active].text}
                </p>

                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-saffron/30">
                      <Image
                        src={reviews[active].avatar}
                        alt={reviews[active].name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-cream text-lg">
                        {reviews[active].name}
                      </p>
                      <p className="text-cream/40 text-xs font-sans mt-0.5">
                        {reviews[active].source}
                      </p>
                    </div>
                  </div>
                  <Stars count={reviews[active].rating} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="px-10 md:px-16 pb-8 flex items-center justify-between">
            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-8 h-2 bg-saffron"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream/60 hover:border-saffron hover:text-saffron transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream/60 hover:border-saffron hover:text-saffron transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Thumbnail strip */}
        <div className="flex justify-center gap-6 mt-10">
          {reviews.map((r, i) => (
            <motion.button
              key={r.name}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-full border transition-all duration-300 ${
                i === active
                  ? "border-saffron/60 bg-saffron/10 text-saffron"
                  : "border-white/10 bg-transparent text-cream/40 hover:border-white/20"
              }`}
            >
              <div className="relative w-7 h-7 rounded-full overflow-hidden">
                <Image src={r.avatar} alt={r.name} fill className="object-cover" unoptimized />
              </div>
              <span className="text-xs font-medium hidden sm:block">{r.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
