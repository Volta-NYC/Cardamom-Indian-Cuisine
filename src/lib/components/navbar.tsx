"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#menu" },
  { label: "Menu", href: "#menu" },
  { label: "Catering", href: "#services" },
  { label: "Contact", href: "#footer" },
  { label: "Book Now", href: "https://www.cardamomny.com/reservation.php" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-saffron/40 group-hover:border-saffron transition-colors duration-300">
              <Image
                src="https://www.cardamomny.com/assets/img/logo.png"
                alt="Cardamom Indian Cuisine"
                fill
                className="object-contain p-1"
                unoptimized
              />
            </div>
            <span className="font-serif text-lg text-cream hidden sm:block leading-tight">
              <span className="text-saffron">Cardamom</span>
              <br />
              <span className="text-xs font-sans font-light tracking-widest text-cream/70 uppercase">
                Indian Cuisine
              </span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-cream/80 hover:text-saffron transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="https://cardamom.ordering-panel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-saffron text-dark-base hover:bg-turmeric transition-all duration-300 shadow-lg shadow-saffron/20"
            >
              Order Online
            </a>
            <button
              className="lg:hidden p-2 text-cream/80 hover:text-saffron transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[68px] left-0 right-0 z-40 bg-black/90 backdrop-blur-2xl border-b border-white/10 lg:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-cream/80 hover:text-saffron transition-colors py-1 border-b border-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://cardamom.ordering-panel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-center px-5 py-3 rounded-full text-sm font-semibold bg-saffron text-dark-base"
              >
                Order Online
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
