"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const dishes = [
  { name: "Vegetables Samosa",   price: "$7",  tag: "Vegan",       image: "https://www.cardamomny.com/assets/img/foods/samosa.jfif",              desc: "Crispy golden pastry stuffed with spiced potatoes and peas" },
  { name: "Chana Masala",        price: "$19", tag: "Vegan",       image: "https://www.cardamomny.com/assets/img/foods/chana-masala.jpg",          desc: "Chickpeas slow-cooked in a rich, tangy tomato-spice gravy" },
  { name: "Baingan Bharta",      price: "$19", tag: "Vegetarian",  image: "https://www.cardamomny.com/assets/img/foods/baingan-bharta.jpg",        desc: "Flame-roasted eggplant with caramelized onions and spices" },
  { name: "Chicken Malai Kabab", price: "$21", tag: "Halal",       image: "https://www.cardamomny.com/assets/img/foods/chicken-malai-kabab.jpg",   desc: "Tender chicken marinated in cream and mild spices, grilled to perfection" },
  { name: "Mulligatawny Soup",   price: "$7",  tag: "Vegan",       image: "https://www.cardamomny.com/assets/img/foods/mulligatawny.jpg",          desc: "Classic lentil soup with apple, coconut, and aromatic spices" },
  { name: "Butter Chicken",      price: "$21", tag: "Halal",       image: "https://www.cardamomny.com/assets/img/foods/butter-chicken.jpg",        desc: "Succulent chicken in velvety tomato-cream sauce with warm spices" },
  { name: "Tomato Rice",         price: "$7",  tag: "Vegan",       image: "https://www.cardamomny.com/assets/img/foods/tomato-rice.jpg",           desc: "Fragrant basmati rice with fresh tomatoes and South Indian spices" },
  { name: "Kulfi",               price: "$8",  tag: "Vegetarian",  image: "https://www.cardamomny.com/assets/img/foods/kulfi.jpg",                 desc: "Traditional Indian ice cream with cardamom, pistachio, and rosewater" },
]

const tagStyle: Record<string, string> = {
  Vegan:       "bg-green-950/60 text-green-400 border-green-900/50",
  Vegetarian:  "bg-emerald-950/60 text-emerald-400 border-emerald-900/50",
  Halal:       "bg-saffron/10 text-saffron border-saffron/20",
}

function DishCard({ dish, i }: { dish: typeof dishes[0]; i: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-dark-card border border-white/5 rounded-3xl overflow-hidden flex flex-col hover:border-saffron/25 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
    >
      {/* Colour glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(244,161,0,0.06) 0%, transparent 70%)" }}
      />

      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-dark-surface shrink-0">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/20 to-transparent" />
        {/* Tag */}
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${tagStyle[dish.tag]}`}>
          {dish.tag}
        </span>
        {/* Price */}
        <div className="absolute bottom-3 right-3 bg-saffron text-dark-base font-bold text-sm px-3 py-1 rounded-full shadow-lg shadow-saffron/20">
          {dish.price}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif font-bold text-lg text-cream mb-2 group-hover:text-saffron transition-colors duration-300 leading-tight">
          {dish.name}
        </h3>
        <p className="text-cream/45 text-sm leading-relaxed font-sans flex-1">{dish.desc}</p>

        {/* Slide-up order btn */}
        <motion.div
          animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0, marginTop: hovered ? 14 : 0 }}
          transition={{ duration: 0.22 }}
          className="overflow-hidden"
        >
          <a
            href="https://cardamom.ordering-panel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-2.5 rounded-xl bg-saffron/10 border border-saffron/20 text-saffron text-sm font-bold uppercase tracking-widest hover:bg-saffron hover:text-dark-base transition-all duration-200"
          >
            Order
          </a>
        </motion.div>
      </div>
    </motion.article>
  )
}

export default function Menu() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="menu" className="py-28 bg-dark-surface relative overflow-hidden">
      {/* Top bleed from hours */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#0a0704] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8" ref={ref}>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px bg-saffron" />
              <span className="text-saffron text-xs uppercase tracking-[0.3em] font-medium font-sans">Taste the Difference</span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif font-bold text-cream leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                Menu <span className="italic text-saffron">Highlights</span>
              </motion.h2>
            </div>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            href="https://cardamom.ordering-panel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-saffron font-bold text-sm uppercase tracking-widest hover:gap-5 transition-all duration-300 shrink-0"
          >
            Full Menu
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dishes.map((dish, i) => (
            <DishCard key={dish.name} dish={dish} i={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="https://cardamom.ordering-panel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-full bg-saffron text-dark-base font-bold text-sm uppercase tracking-widest hover:bg-turmeric transition-all duration-300 shadow-2xl shadow-saffron/25 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">View Full Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
