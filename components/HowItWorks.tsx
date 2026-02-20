"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PlayCircle, Activity, ShieldOff } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PlayCircle,
    title: "Start session",
    action: "Check & reserve entitlement",
    description:
      "When a session begins, Seshnova checks the customer's balance or allowance and reserves capacity. If entitlement is insufficient, the session is denied before it starts.",
    color: "#6366f1",
  },
  {
    number: "02",
    icon: Activity,
    title: "Meter & rate",
    action: "Update balance in real time",
    description:
      "As the session runs, usage is metered continuously — by time, units, or events. The applicable rate is applied and the balance decremented in real time, not at the end.",
    color: "#8b5cf6",
  },
  {
    number: "03",
    icon: ShieldOff,
    title: "Enforce",
    action: "End session when credit runs out",
    description:
      "The moment entitlement is exhausted, the session is terminated. Hard cut-off — no overspend, no reconciliation, no disputes. The limit is the limit.",
    color: "#06b6d4",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3 block">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The{" "}
            <span className="gradient-text">rating and enforcement loop</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
            Every session — regardless of type — follows the same loop.
          </p>
        </motion.div>

        <div className="relative">

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 32 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="flex lg:justify-center mb-6">
                    <div
                      className="relative w-[52px] h-[52px] rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}22, ${step.color}08)`,
                        border: `2px solid ${step.color}45`,
                        boxShadow: `0 0 20px ${step.color}18`,
                      }}
                    >
                      <Icon size={22} style={{ color: step.color }} />
                      <span
                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center text-white"
                        style={{ background: step.color }}
                      >
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  <div
                    className="glass-card p-6"
                    style={{ borderColor: `${step.color}22` }}
                  >
                    <div
                      className="text-[10px] font-bold tracking-widest mb-1"
                      style={{ color: step.color }}
                    >
                      STEP {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p
                      className="text-xs font-semibold mb-3"
                      style={{ color: step.color }}
                    >
                      → {step.action}
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Applicability note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-slate-600 text-sm mt-10 max-w-xl mx-auto leading-relaxed"
        >
          This pattern applies to calls, EV charging sessions, parking sessions,
          API usage, IoT plans, and more.
        </motion.p>
      </div>
    </section>
  );
}
