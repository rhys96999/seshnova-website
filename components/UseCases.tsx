"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Car, Gamepad2, KeyRound } from "lucide-react";

const useCases = [
  {
    icon: Phone,
    title: "Prepaid Calling",
    subtitle: "Calling cards & international minutes",
    description:
      "Sell prepaid phone credit to your customers. They call, the minutes tick down, and when the credit runs out — the call ends. Issue calling cards to hundreds of thousands of people with a few clicks.",
    tags: ["Calling cards", "International calls", "Minutes bundles", "Payphone top-ups"],
    gradient: "from-indigo-500/10 to-violet-500/5",
    iconColor: "#6366f1",
    border: "rgba(99, 102, 241, 0.2)",
  },
  {
    icon: Car,
    title: "Parking & Mobility",
    subtitle: "Pay-and-go time-based access",
    description:
      "A driver buys a parking credit, pulls into a space, and the clock starts. When their time is up — or their credit runs out — the session closes. Works equally well for EV charging or bike hire.",
    tags: ["Car parking", "EV charging", "Bike hire", "Scooter rental"],
    gradient: "from-cyan-500/10 to-teal-500/5",
    iconColor: "#06b6d4",
    border: "rgba(6, 182, 212, 0.2)",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Entertainment",
    subtitle: "Credits, time and access passes",
    description:
      "Sell gaming credits, internet cafe time, or streaming passes. Customers load up and play until their credit runs out. Top up in-app, at the counter, or via a voucher — Seshnova handles the rest.",
    tags: ["Gaming credits", "Internet cafe", "Streaming passes", "Arcade tokens"],
    gradient: "from-violet-500/10 to-purple-500/5",
    iconColor: "#8b5cf6",
    border: "rgba(139, 92, 246, 0.2)",
  },
  {
    icon: KeyRound,
    title: "Facilities & Shared Spaces",
    subtitle: "Tokens, desks, and access credit",
    description:
      "A co-worker books a hot-desk for the morning. A student loads up laundry credit. A vending machine dispenses when there's enough balance. Any scenario where a customer prepays for time or access.",
    tags: ["Coworking desks", "Laundry tokens", "Vending machines", "Storage lockers"],
    gradient: "from-cyan-500/10 to-indigo-500/5",
    iconColor: "#06b6d4",
    border: "rgba(99, 102, 241, 0.15)",
  },
];

export default function UseCases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="use-cases" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.03) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3 block">
            Use cases
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            If a customer prepays,{" "}
            <span className="gradient-text">Seshnova can bill it</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Any service where a customer pays upfront and then uses it over time
            is a session. Here are just a few examples of what Seshnova powers.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card p-7 group cursor-default bg-gradient-to-br ${uc.gradient}`}
                style={{ borderColor: uc.border }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110"
                    style={{
                      background: `${uc.iconColor}18`,
                      border: `1px solid ${uc.iconColor}28`,
                    }}
                  >
                    <Icon size={20} style={{ color: uc.iconColor }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="text-base font-semibold text-white">
                        {uc.title}
                      </h3>
                      <span className="text-xs text-slate-500 font-medium truncate">
                        {uc.subtitle}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      {uc.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {uc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-medium"
                          style={{
                            background: `${uc.iconColor}12`,
                            color: uc.iconColor,
                            border: `1px solid ${uc.iconColor}20`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* And more */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-slate-600 text-sm mt-8"
        >
          Got a different use case in mind?{" "}
          <a href="#contact" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            Let&apos;s talk about it.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
