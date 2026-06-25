"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-dark-surface" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #F4A100 0px,
            #F4A100 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section label */}
        <FadeIn className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-saffron" />
          <span className="text-saffron text-xs uppercase tracking-[0.3em] font-medium">
            Our Story
          </span>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-8">
                About{" "}
                <span className="text-saffron italic">Restaurant</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-cream/70 font-sans text-base md:text-lg leading-relaxed mb-8">
                Welcome to Cardamom Indian Cuisine in Sunnyside, NY – where authentic
                Indian flavors meet warm hospitality. Whether you&apos;re craving a quick
                bite, a comforting meal, or a full dining experience, we offer dine-in,
                takeaway, and delivery options.
              </p>
              <p className="text-cream/70 font-sans text-base md:text-lg leading-relaxed mb-8">
                Our menu includes halal, vegan, vegetarian, and healthy dishes, along with
                a selection of beer, wine, and coffee. Enjoy our cozy setting with table
                service, Wi-Fi, and family-friendly seating. From lunch to dinner, we bring
                you fresh ingredients and bold spices in every bite. Come experience the
                true taste of India right here in Sunnyside!
              </p>
            </FadeIn>

            {/* Badges */}
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-3 mb-10">
                {["Halal", "Vegan", "Vegetarian", "Dine-In", "Delivery", "Family Friendly"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full text-xs font-medium border border-saffron/30 text-saffron/80 bg-saffron/5 tracking-wide"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <a
                href="#footer"
                className="group inline-flex items-center gap-2 text-saffron font-semibold text-sm hover:gap-4 transition-all duration-300"
              >
                About Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </FadeIn>
          </div>

          {/* Image */}
          <FadeIn delay={0.3} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-crimson/30 via-transparent to-saffron/10 z-10 rounded-2xl" />
              <Image
                src="https://www.cardamomny.com/assets/img/pages/about-img.jpg"
                alt="Cardamom Indian Cuisine interior"
                width={700}
                height={520}
                className="w-full h-[420px] lg:h-[520px] object-cover"
                unoptimized
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-dark-card border border-saffron/20 rounded-2xl p-5 shadow-2xl backdrop-blur-sm hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-saffron/10 border border-saffron/20 flex items-center justify-center text-saffron text-xl">
                  🌶️
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-cream">10+</p>
                  <p className="text-cream/50 text-xs">Years of Flavors</p>
                </div>
              </div>
            </motion.div>
            {/* Saffron accent box */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-saffron/20 rounded-2xl -z-10" />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
