"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(99,102,241,0.13) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(6,182,212,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">
        {/* Credibility badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-8"
          style={{
            background: "rgba(99, 102, 241, 0.1)",
            border: "1px solid rgba(99, 102, 241, 0.25)",
            color: "#a5b4fc",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Telecom-first. Built for high-volume, real-time enforcement.
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          Real-time session{" "}
          <span className="gradient-text">monetisation</span>
          <br />
          and fraud protection.
        </motion.h1>

        {/* Pull quote */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-lg md:text-xl font-medium text-slate-300 mb-5"
        >
          When credit ends, sessions end.
        </motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Seshnova meters and rates sessions in real time, tracks entitlement,
          and enforces hard cut-off the moment credit or allowance runs out.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="btn-gradient px-7 py-3.5 text-sm w-full sm:w-auto justify-center font-semibold"
          >
            Find out More
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
