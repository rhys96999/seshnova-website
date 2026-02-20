"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Car, Code2, Cpu, BarChart3 } from "lucide-react";

const tiles = [
  {
    icon: Zap,
    industry: "EV Charging",
    session: "Charge per kWh or time — stop when wallet runs out",
    color: "#06b6d4",
  },
  {
    icon: Car,
    industry: "Parking & Mobility",
    session: "Pay per minute — enforce hard expiry on the session",
    color: "#8b5cf6",
  },
  {
    icon: Code2,
    industry: "API Monetisation",
    session: "Bill per call — throttle or cut off at spend caps",
    color: "#6366f1",
  },
  {
    icon: Cpu,
    industry: "IoT Connectivity",
    session: "Per-MB or per-message — enforce device-level limits",
    color: "#06b6d4",
  },
  {
    icon: BarChart3,
    industry: "SaaS Usage Billing",
    session: "Measure feature events — enforce budget or quota caps",
    color: "#6366f1",
  },
];

export default function AlsoWorksFor() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="use-cases" ref={ref} className="relative py-20 overflow-hidden">
      <div
        className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
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
            Beyond telecoms
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Any session. Any vertical.
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed">
            The rating and enforcement loop that powers prepaid voice applies
            equally to any service where usage must be metered and limits
            enforced in real time.
          </p>
        </motion.div>

        {/* Tiles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tiles.map((tile, i) => {
            const Icon = tile.icon;
            return (
              <motion.div
                key={tile.industry}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-5 group cursor-default"
                style={{ borderColor: `${tile.color}20` }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110"
                  style={{
                    background: `${tile.color}15`,
                    border: `1px solid ${tile.color}28`,
                  }}
                >
                  <Icon size={17} style={{ color: tile.color }} />
                </div>
                <div
                  className="text-sm font-bold text-white mb-2"
                >
                  {tile.industry}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {tile.session}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
