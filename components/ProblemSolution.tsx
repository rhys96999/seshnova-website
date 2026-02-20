"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Sparkles } from "lucide-react";

export default function ProblemSolution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3 block">
            The challenge
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Selling prepaid services is simple.{" "}
            <span className="gradient-text">The billing behind it isn&apos;t.</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8"
            style={{ borderColor: "rgba(239, 68, 68, 0.15)" }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "rgba(239, 68, 68, 0.12)" }}
            >
              <AlertTriangle size={20} className="text-red-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">
              The hidden complexity behind prepaid
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Selling a prepaid phone card, parking pass, or gaming credit sounds
              straightforward. But behind the scenes you need to track live
              balances, cut off sessions at the right moment, handle top-ups,
              manage thousands of customer accounts, and keep a complete record
              of every penny — all while applying the right price depending on
              where a customer is, what time it is, and what deal they are on.
              Getting any of that wrong means unhappy customers or lost revenue.
            </p>
            <ul className="mt-5 space-y-2">
              {[
                "Customers charged too much — or too little",
                "Pricing that changes by zone, time, or customer type",
                "Sessions that don't end when they should",
                "No clear record of what happened and when",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-slate-500">
                  <span className="mt-1 w-1 h-1 rounded-full bg-red-400 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
            style={{ borderColor: "rgba(99, 102, 241, 0.2)" }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(6,182,212,0.15))",
              }}
            >
              <Sparkles size={20} className="text-indigo-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Seshnova handles all of it, so you don&apos;t have to
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Seshnova is a ready-to-use prepaid billing platform. Tell it about
              your service, issue credentials to your customers, and it takes
              care of everything in between — tracking usage, cutting off sessions
              at the right time, recording every transaction, and giving you a
              clear view of your business.
            </p>
            <ul className="mt-5 space-y-2">
              {[
                "Customers are always charged the right amount",
                "Sessions end exactly when the credit runs out",
                "Onboard thousands of customers in minutes",
                "Full financial history, always at your fingertips",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="mt-1 w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
