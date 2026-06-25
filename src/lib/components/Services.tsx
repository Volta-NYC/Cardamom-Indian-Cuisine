"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    title: "Pickup Order",
    description:
      "Order ahead and pick up your meal fresh and hot. Skip the wait and enjoy authentic Indian cuisine on your schedule.",
    image: "https://www.cardamomny.com/assets/img/pages/online.png",
    href: "https://cardamom.ordering-panel.com/",
    cta: "Order Now",
  },
  {
    title: "Delivery Services",
    description:
      "We bring the flavors of India straight to your door. Fast, reliable delivery with the same restaurant quality.",
    image: "https://www.cardamomny.com/assets/img/pages/delivery.png",
    href: "https://cardamom.ordering-panel.com/",
    cta: "Order Delivery",
  },
  {
    title: "Catering Services",
    description:
      "Planning an event? Our catering team crafts memorable experiences with rich, aromatic Indian dishes for any occasion.",
    image: "https://www.cardamomny.com/assets/img/pages/catering.png",
    href: "https://www.cardamomny.com/reservation.php",
    cta: "Get a Quote",
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="services" className="py-28 bg-dark-base">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
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
              How We Serve You
            </span>
            <div className="w-8 h-px bg-saffron" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">
            Our <span className="text-saffron italic">Services</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative rounded-2xl bg-dark-card border border-white/5 overflow-hidden hover:border-saffron/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(244,161,0,0.15)]"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-saffron/5 to-transparent pointer-events-none" />

              {/* Image */}
              <div className="relative h-52 bg-dark-surface overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-serif text-xl font-bold text-cream mb-3 group-hover:text-saffron transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-cream/55 text-sm leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-saffron text-sm font-semibold hover:gap-4 transition-all duration-300"
                >
                  {service.cta}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
