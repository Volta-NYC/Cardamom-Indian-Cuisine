"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const dishes = [
  {
    name: "Vegetables Samosa",
    price: "$7",
    description: "Crispy golden pastry stuffed with spiced potatoes and peas",
    image: "https://www.cardamomny.com/assets/img/foods/samosa.jfif",
    tag: "Vegan",
  },
  {
    name: "Chana Masala",
    price: "$19",
    description: "Chickpeas slow-cooked in a rich, tangy tomato-spice gravy",
    image: "https://www.cardamomny.com/assets/img/foods/chana-masala.jpg",
    tag: "Vegan",
  },
  {
    name: "Baingan Bharta",
    price: "$19",
    description: "Flame-roasted eggplant mashed with caramelized onions and spices",
    image: "https://www.cardamomny.com/assets/img/foods/baingan-bharta.jpg",
    tag: "Vegetarian",
  },
  {
    name: "Chicken Malai Kabab",
    price: "$21",
    description: "Tender chicken marinated in cream and mild spices, grilled to perfection",
    image: "https://www.cardamomny.com/assets/img/foods/chicken-malai-kabab.jpg",
    tag: "Halal",
  },
  {
    name: "Mulligatawny Soup",
    price: "$7",
    description: "Classic Anglo-Indian lentil soup with apple, coconut, and aromatic spices",
    image: "https://www.cardamomny.com/assets/img/foods/mulligatawny.jpg",
    tag: "Vegan",
  },
  {
    name: "Butter Chicken",
    price: "$21",
    description: "Succulent chicken in a velvety tomato-cream sauce with warm spices",
    image: "https://www.cardamomny.com/assets/img/foods/butter-chicken.jpg",
    tag: "Halal",
  },
  {
    name: "Tomato Rice",
    price: "$7",
    description: "Fragrant basmati rice cooked with fresh tomatoes and South Indian spices",
    image: "https://www.cardamomny.com/assets/img/foods/tomato-rice.jpg",
    tag: "Vegan",
  },
  {
    name: "Kulfi",
    price: "$8",
    description: "Traditional Indian ice cream with cardamom, pistachio, and rosewater",
    image: "https://www.cardamomny.com/assets/img/foods/kulfi.jpg",
    tag: "Vegetarian",
  },
]

const tagColors: Record<string, string> = {
  Vegan: "bg-green-900/40 text-green-400 border-green-800/40",
  Vegetarian: "bg-emerald-900/40 text-emerald-400 border-emerald-800/40",
  Halal: "bg-saffron/10 text-saffron border-saffron/20",
}

function DishCard({ dish, index }: { dish: typeof dishes[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-dark-card border border-white/5 rounded-2xl overflow-hidden hover:border-saffron/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(244,161,0,0.12)] cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          unoptimized
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
        {/* Tag */}
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-medium border ${tagColors[dish.tag]}`}
        >
          {dish.tag}
        </span>
        {/* Price badge */}
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-saffron text-dark-base text-sm font-bold shadow-lg">
          {dish.price}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-lg font-bold text-cream mb-2 group-hover:text-saffron transition-colors duration-300">
          {dish.name}
        </h3>
        <p className="text-cream/50 text-sm leading-relaxed font-sans">{dish.description}</p>

        {/* Order button - slides up on hover */}
        <motion.div
          animate={hovered ? { opacity: 1, height: "auto", marginTop: 16 } : { opacity: 0, height: 0, marginTop: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <a
            href="https://cardamom.ordering-panel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-2.5 rounded-xl bg-saffron/10 border border-saffron/20 text-saffron text-sm font-semibold hover:bg-saffron hover:text-dark-base transition-all duration-200"
          >
            Order This Dish
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Menu() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="menu" className="py-28 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-saffron" />
            <span className="text-saffron text-xs uppercase tracking-[0.3em] font-medium">
              Taste the Difference
            </span>
            <div className="w-8 h-px bg-saffron" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4">
            Menu <span className="text-saffron italic">Highlights</span>
          </h2>
          <p className="text-cream/50 font-sans text-base max-w-xl mx-auto">
            Bold flavors, fresh ingredients, centuries of tradition — every dish tells a story.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <DishCard key={dish.name} dish={dish} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="https://cardamom.ordering-panel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-saffron text-dark-base font-semibold text-base hover:bg-turmeric transition-all duration-300 shadow-xl shadow-saffron/20 hover:shadow-saffron/30 hover:scale-105"
          >
            View Full Menu
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
        </motion.div>
      </div>
    </section>
  )
}
