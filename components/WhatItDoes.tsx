"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gauge, Wallet, Ban } from "lucide-react";

const bullets = [
  {
    icon: Gauge,
    title: "Real-time rating",
    description:
      "Price usage as it happens — by time, units, or events. Every second of a session is rated against the applicable tariff and applied to the customer's balance immediately.",
    color: "#6366f1",
  },
  {
    icon: Wallet,
    title: "Entitlement tracking",
    description:
      "Track balances, allowances, bundles, and caps across every customer and product. Seshnova always knows how much entitlement remains — and ensures it is never exceeded.",
    color: "#06b6d4",
  },
  {
    icon: Ban,
    title: "Instant enforcement",
    description:
      "When a limit is reached, the session ends — hard. No grace periods, no overspend, no reconciliation after the fact. Cut-off is enforced at the moment entitlement runs out.",
    color: "#8b5cf6",
  },
];

export default function WhatItDoes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), rgba(6,182,212,0.3), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3 block">
            The platform
          </span>
          <h2 className="text-2xl md:text-3xl font-bold">
            Three things. Done exceptionally well.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {bullets.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass-card p-7"
                style={{ borderColor: `${item.color}25` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
