"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const hours = [
  { day: "Monday",    time: "4:00 PM – 10:00 PM", open: true },
  { day: "Tuesday",   time: "Closed",              open: false },
  { day: "Wednesday", time: "4:00 PM – 10:00 PM", open: true },
  { day: "Thursday",  time: "4:00 PM – 10:00 PM", open: true },
  { day: "Friday",    time: "4:00 PM – 10:00 PM", open: true },
  { day: "Saturday",  time: "4:00 PM – 10:00 PM", open: true },
  { day: "Sunday",    time: "4:00 PM – 10:00 PM", open: true },
]

export default function Hours() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-28 relative overflow-hidden bg-[#0a0704]">
      {/* Full-bleed ambient radial */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(244,161,0,0.06) 0%, transparent 60%)" }}
      />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 50% at 10% 50%, rgba(139,26,26,0.07) 0%, transparent 60%)" }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: editorial text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px bg-saffron" />
              <span className="text-saffron text-xs uppercase tracking-[0.3em] font-medium font-sans">Plan Your Visit</span>
            </motion.div>

            <div className="overflow-hidden mb-2">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif font-bold text-cream leading-none"
                style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
              >
                Opening
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ delay: 0.22, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif font-bold italic text-saffron leading-none"
                style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
              >
                Hours
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-cream/50 font-sans text-base leading-relaxed mb-10 max-w-sm"
            >
              Dinner service nightly except Tuesday. Walk-ins welcome — reservations recommended on weekends.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex gap-3"
            >
              <a
                href="https://www.cardamomny.com/reservation.php"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full bg-saffron text-dark-base text-sm font-bold uppercase tracking-widest hover:bg-turmeric transition-colors shadow-xl shadow-saffron/20"
              >
                Reserve
              </a>
              <a
                href="tel:718-706-9718"
                className="px-7 py-3 rounded-full border border-white/10 text-cream/70 text-sm font-bold uppercase tracking-widest hover:border-saffron/40 hover:text-saffron transition-all"
              >
                Call
              </a>
            </motion.div>
          </div>

          {/* Right: hours card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow behind card */}
            <div className="absolute -inset-4 rounded-[2rem] bg-saffron/5 blur-2xl" />

            <div className="relative bg-dark-card border border-white/6 rounded-3xl overflow-hidden shadow-2xl">
              {/* Gradient top strip */}
              <div className="h-1 bg-gradient-to-r from-crimson via-saffron to-turmeric" />

              <div className="p-8">
                {hours.map((item, i) => {
                  const today = new Date().toLocaleDateString("en-US", { weekday: "long" })
                  const isToday = item.day === today
                  return (
                    <motion.div
                      key={item.day}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.35 + i * 0.06, duration: 0.5 }}
                      className={`flex items-center justify-between py-3.5 ${i < hours.length - 1 ? "border-b border-white/[0.05]" : ""} ${isToday ? "relative" : ""}`}
                    >
                      {isToday && (
                        <div className="absolute inset-x-0 rounded-lg bg-saffron/5 -mx-3 inset-y-1" />
                      )}
                      <div className="relative flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${!item.open ? "bg-crimson/50" : isToday ? "bg-saffron shadow-[0_0_6px_rgba(244,161,0,0.8)]" : "bg-white/15"}`} />
                        <span className={`font-sans text-sm ${!item.open ? "text-cream/25" : isToday ? "text-cream font-semibold" : "text-cream/60"}`}>
                          {item.day}
                          {isToday && <span className="ml-2 text-[10px] text-saffron uppercase tracking-widest font-bold">Today</span>}
                        </span>
                      </div>
                      <span className={`relative font-sans text-sm font-semibold tracking-wide ${!item.open ? "text-crimson/60" : isToday ? "text-saffron" : "text-cream/50"}`}>
                        {item.time}
                      </span>
                    </motion.div>
                  )
                })}
              </div>

              {/* Footer strip */}
              <div className="bg-saffron/5 border-t border-saffron/8 px-8 py-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.7)]" />
                <span className="text-cream/50 text-xs font-sans">
                  Open for dinner nightly · 4PM–10PM
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
