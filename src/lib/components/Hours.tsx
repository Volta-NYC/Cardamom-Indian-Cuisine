"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const hours = [
  { day: "Monday", time: "4:00 PM – 10:00 PM", open: true },
  { day: "Tuesday", time: "Closed", open: false },
  { day: "Wednesday", time: "4:00 PM – 10:00 PM", open: true },
  { day: "Thursday", time: "4:00 PM – 10:00 PM", open: true },
  { day: "Friday", time: "4:00 PM – 10:00 PM", open: true },
  { day: "Saturday", time: "4:00 PM – 10:00 PM", open: true },
  { day: "Sunday", time: "4:00 PM – 10:00 PM", open: true },
]

export default function Hours() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0D0A07 0%, #1C1409 50%, #0D0A07 100%)" }}>
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #F4A100 0px, #F4A100 1px, transparent 1px, transparent 80px)`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-saffron" />
            <span className="text-saffron text-xs uppercase tracking-[0.3em] font-medium">
              Plan Your Visit
            </span>
            <div className="w-8 h-px bg-saffron" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">
            Opening <span className="text-saffron italic">Hours</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-dark-card border border-white/5 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Top accent */}
          <div className="h-1 w-full bg-gradient-to-r from-crimson via-saffron to-turmeric" />

          <div className="p-8 md:p-12">
            {hours.map((item, i) => (
              <motion.div
                key={item.day}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                className={`flex items-center justify-between py-4 ${
                  i < hours.length - 1 ? "border-b border-white/5" : ""
                } ${!item.open ? "opacity-50" : "group"}`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      item.open ? "bg-saffron shadow-[0_0_8px_rgba(244,161,0,0.6)]" : "bg-crimson/50"
                    }`}
                  />
                  <span
                    className={`font-serif text-lg ${
                      item.open ? "text-cream group-hover:text-saffron transition-colors" : "text-cream/40"
                    }`}
                  >
                    {item.day}
                  </span>
                </div>
                <span
                  className={`font-sans text-sm font-medium tracking-wide ${
                    item.open ? "text-saffron" : "text-crimson/70"
                  }`}
                >
                  {item.time}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Call to action inside card */}
          <div className="bg-saffron/5 border-t border-saffron/10 px-8 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-cream/80 text-sm font-medium">
                Ready to dine with us?
              </p>
              <p className="text-cream/40 text-xs mt-0.5">
                Reservations recommended on weekends
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.cardamomny.com/reservation.php"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-saffron text-dark-base text-sm font-semibold hover:bg-turmeric transition-colors"
              >
                Book a Table
              </a>
              <a
                href="tel:718-706-9718"
                className="px-5 py-2.5 rounded-full border border-saffron/30 text-saffron text-sm font-semibold hover:bg-saffron/10 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
