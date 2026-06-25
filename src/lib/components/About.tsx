"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: "10+", label: "Years of Flavors" },
  { value: "100%", label: "Halal Certified" },
  { value: "50+", label: "Menu Items" },
  { value: "4.9★", label: "Google Rating" },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" className="relative bg-dark-surface overflow-hidden">
      {/* Diagonal grid texture */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #F4A100 0, #F4A100 1px, transparent 0, transparent 50%)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Left crimson glow */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-crimson/5 to-transparent pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ── Image collage side ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 lg:order-1"
        >
          {/* Big letter watermark */}
          <div
            className="absolute -left-4 top-1/2 -translate-y-1/2 font-serif font-bold text-[22rem] leading-none text-white/[0.02] select-none pointer-events-none z-0 hidden lg:block"
            aria-hidden
          >
            C
          </div>

          {/* 2×2 collage grid */}
          <div
            className="relative z-10 grid grid-cols-2 gap-3 shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
            style={{ height: "520px" }}
          >
            {/* Top-left: team photo — CSS bg extracts top-left quadrant of composite */}
            <div
              className="relative rounded-tl-3xl overflow-hidden"
              style={{
                backgroundImage: "url('https://www.cardamomny.com/assets/img/pages/about-img.jpg')",
                backgroundSize: "200%",
                backgroundPosition: "0% 0%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#141008",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-dark-card/70" />
              {/* "Team" label */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-saffron" />
                <span className="text-cream/60 text-xs font-sans uppercase tracking-widest">Our Team</span>
              </div>
            </div>

            {/* Top-right: butter chicken image */}
            <div className="relative rounded-tr-3xl overflow-hidden">
              <Image
                src="https://www.cardamomny.com/assets/img/foods/butter-chicken.jpg"
                alt="Butter Chicken"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-serif font-bold text-cream text-sm">Butter Chicken</p>
                <p className="text-cream/40 text-xs font-sans">House Favourite</p>
              </div>
            </div>

            {/* Bottom-left: chana masala image */}
            <div className="relative rounded-bl-3xl overflow-hidden">
              <Image
                src="https://www.cardamomny.com/assets/img/foods/chana-masala.jpg"
                alt="Chana Masala"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-serif font-bold text-cream text-sm">Chana Masala</p>
                <p className="text-cream/40 text-xs font-sans">Vegan · Chef Pick</p>
              </div>
            </div>

            {/* Bottom-right: owner photo — CSS bg extracts bottom-right quadrant */}
            <div
              className="relative rounded-br-3xl overflow-hidden"
              style={{
                backgroundImage: "url('https://www.cardamomny.com/assets/img/pages/about-img.jpg')",
                backgroundSize: "200%",
                backgroundPosition: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#141008",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-dark-card/50" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-saffron" />
                <span className="text-cream/60 text-xs font-sans uppercase tracking-widest">Chef &amp; Owner</span>
              </div>
            </div>
          </div>

          {/* Stats strip below collage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-4 gap-3 mt-3"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-dark-card border border-white/5 rounded-2xl p-4 text-center">
                <p className="font-serif font-bold text-saffron text-xl">{s.value}</p>
                <p className="text-cream/40 text-[10px] font-sans uppercase tracking-wider mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Text side ── */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-8 h-px bg-saffron" />
            <span className="text-saffron text-xs uppercase tracking-[0.3em] font-medium font-sans">Our Story</span>
          </motion.div>

          <div className="overflow-hidden mb-3">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold text-cream leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              About the
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ delay: 0.28, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold italic text-saffron leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              Restaurant
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-cream/65 font-sans text-base md:text-lg leading-relaxed mb-5"
          >
            Welcome to Cardamom Indian Cuisine in Sunnyside, NY — where authentic Indian flavors meet warm hospitality. Whether you&apos;re craving a quick bite, a comforting meal, or a full dining experience, we offer dine-in, takeaway, and delivery.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-cream/65 font-sans text-base md:text-lg leading-relaxed mb-10"
          >
            Our menu includes halal, vegan, vegetarian, and healthy dishes, along with beer, wine, and coffee. Enjoy our cozy setting with table service, Wi-Fi, and family-friendly seating — fresh ingredients and bold spices in every bite.
          </motion.p>

          {/* Tag pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {["🥩 Halal", "🌱 Vegan", "🥦 Vegetarian", "🚗 Delivery", "🍽️ Dine-In", "📶 Free Wi-Fi", "👨‍👩‍👧 Family Friendly"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-xs font-medium bg-white/[0.04] border border-white/8 text-cream/60 hover:border-saffron/30 hover:text-saffron/80 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.75, duration: 0.6 }}
            href="#footer"
            className="group inline-flex items-center gap-3 text-saffron font-bold text-sm uppercase tracking-widest"
          >
            Learn More
            <span className="w-8 h-px bg-saffron group-hover:w-14 transition-all duration-400 block" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
