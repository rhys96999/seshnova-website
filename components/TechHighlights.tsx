"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, Sliders, ShieldAlert, Eye } from "lucide-react";

const outcomes = [
  {
    icon: TrendingDown,
    title: "Prevent revenue leakage",
    detail:
      "Hard cut-off means sessions cannot run past the point of payment. No overspend, no write-offs, no chasing customers for money already consumed.",
    color: "#6366f1",
  },
  {
    icon: Sliders,
    title: "Ship flexible pricing",
    detail:
      "Tiers, bundles, time windows, promotional rates, usage caps — configure any pricing structure your business needs, without touching the enforcement layer.",
    color: "#06b6d4",
  },
  {
    icon: ShieldAlert,
    title: "Reduce fraud and overspend",
    detail:
      "Hard balance limits and real-time enforcement mean a compromised account cannot consume beyond its credit. Fraud exposure is bounded by design.",
    color: "#8b5cf6",
  },
  {
    icon: Eye,
    title: "Operate with confidence",
    detail:
      "Full auditability across every session and balance event. Multi-tenant control. A complete record that supports compliance, dispute resolution, and financial reporting.",
    color: "#06b6d4",
  },
];

export default function TechHighlights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(6,182,212,0.2), rgba(99,102,241,0.3), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3 block">
            Why it matters
          </span>
          <h2 className="text-2xl md:text-3xl font-bold">
            What Seshnova means for your business
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {outcomes.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6"
                style={{ borderColor: `${item.color}20` }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}28`,
                  }}
                >
                  <Icon size={17} style={{ color: item.color }} />
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)",
        }}
      />
    </section>
  );
}
