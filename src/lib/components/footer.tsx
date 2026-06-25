"use client"

import Image from "next/image"
import Link from "next/link"

const hours = [
  { day: "Mon", time: "4:00 PM – 10:00 PM" },
  { day: "Tue", time: "Closed" },
  { day: "Wed – Fri", time: "4:00 PM – 10:00 PM" },
  { day: "Sat – Sun", time: "4:00 PM – 10:00 PM" },
]

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#footer" },
  { label: "Book a Table", href: "https://www.cardamomny.com/reservation.php" },
]

export default function Footer() {
  return (
    <>
      <footer id="footer" className="bg-dark-card border-t border-white/5">
        {/* Map Section */}
        <div className="w-full h-72 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12091.154567453708!2d-73.92032841465678!3d40.74467605008221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25853097f95f7%3A0x9c416b04efefa507!2sCardamom%20Indian%20Cuisine!5e0!3m2!1sen!2sin!4v1749239595623!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cardamom Indian Cuisine location"
          />
        </div>

        {/* Top accent */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-saffron/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-saffron/30">
                  <Image
                    src="https://www.cardamomny.com/assets/img/logo.png"
                    alt="Cardamom"
                    fill
                    className="object-contain p-1"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-serif font-bold text-cream text-base leading-tight">
                    <span className="text-saffron">Cardamom</span>
                  </p>
                  <p className="text-cream/40 text-xs tracking-widest uppercase">
                    Indian Cuisine
                  </p>
                </div>
              </div>
              <p className="text-cream/50 text-sm leading-relaxed mb-6 font-sans">
                Authentic Indian flavors meet warm hospitality in the heart of Sunnyside, Queens.
              </p>
              {/* Socials */}
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/cardamomindiancuisine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-cream/50 hover:border-saffron hover:text-saffron transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/cardamom.nyc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-cream/50 hover:border-saffron hover:text-saffron transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="https://maps.app.goo.gl/cardamomny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-cream/50 hover:border-saffron hover:text-saffron transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-bold text-cream mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-cream/50 text-sm hover:text-saffron transition-colors font-sans flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-saffron/40 group-hover:bg-saffron transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-serif text-lg font-bold text-cream mb-5">
                Hours
              </h4>
              <ul className="space-y-3">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span className="text-cream/50 text-sm font-sans">{h.day}</span>
                    <span className={`text-sm font-medium font-sans ${h.time === "Closed" ? "text-crimson/70" : "text-saffron"}`}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-lg font-bold text-cream mb-5">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-saffron mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-cream/50 text-sm font-sans leading-relaxed">
                    43-45 43rd Street, Queens Blvd,<br />Sunnyside, NY 11104
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-saffron mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <a href="tel:718-706-9718" className="text-cream/50 text-sm font-sans hover:text-saffron transition-colors">
                    718-706-9718
                  </a>
                </li>
                <li className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-saffron mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <a href="mailto:anilny7@gmail.com" className="text-cream/50 text-sm font-sans hover:text-saffron transition-colors">
                    anilny7@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 px-6 py-5">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-cream/30 text-xs font-sans">
              © {new Date().getFullYear()} Cardamom Indian Cuisine. All rights reserved.
            </p>
            <a
              href="https://nyc.voltanpo.org"
              target="_blank"
              rel="noreferrer"
              className="text-cream/20 hover:text-cream/50 text-xs transition-colors font-sans"
            >
              Website by @VoltaNYC
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden">
        <a
          href="https://cardamom.ordering-panel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-saffron text-dark-base font-bold text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          Order Now
        </a>
        <div className="w-px bg-dark-base/30" />
        <a
          href="tel:718-706-9718"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-saffron text-dark-base font-bold text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          Call Now
        </a>
      </div>
    </>
  )
}
