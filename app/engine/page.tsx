"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Zap,
  MapPin,
  Globe2,
  Scale,
  ShieldCheck,
  Clock,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Timer,
  ReceiptText,
  Tag,
  Server,
} from "lucide-react";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const pillars = [
  {
    icon: Timer,
    title: "Precision",
    description:
      "Charges must be exact. Not approximately right — exact. Every second of a session matters, and a billing engine that rounds incorrectly or misses a cutoff loses customer trust instantly.",
    color: "#6366f1",
  },
  {
    icon: Scale,
    title: "Complexity",
    description:
      "Real-world services don't have one price. They have thousands — varying by destination, time of day, day of week, geography, customer tier, and promotional status. The engine must handle all of it without breaking.",
    color: "#06b6d4",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description:
      "A billing engine that works for 100 customers must work identically for 100 million. Performance cannot degrade as your business grows. Provisioning and management must scale just as easily as the billing itself.",
    color: "#8b5cf6",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "Billing cannot have downtime. Every missed debit or duplicate charge is a direct financial loss. The engine must be resilient, self-correcting, and provably correct at every step.",
    color: "#06b6d4",
  },
  {
    icon: ReceiptText,
    title: "Completeness",
    description:
      "Every penny must be accounted for. A great engine produces a complete, immutable record of every event — so disputes can be resolved, audits can be passed, and nothing is ever lost.",
    color: "#6366f1",
  },
];

const engineCapabilities = [
  {
    category: "Metering",
    icon: Zap,
    color: "#6366f1",
    headline: "Sessions are metered in real time, to the second",
    body: "The moment a session starts, the clock is running. As usage accumulates, the balance is decremented live. When the credit runs out, the session ends — immediately and automatically. There is no polling delay, no batch reconciliation, no after-the-fact correction.",
    points: [
      "Live balance tracking from session start",
      "Automatic cutoff at zero — no overspend",
      "Handles sessions of any duration",
      "Works for calls, time slots, data, access passes, and more",
    ],
  },
  {
    category: "Pricing",
    icon: MapPin,
    color: "#06b6d4",
    headline: "Thousands of rates. Always the right one.",
    body: "A single service might have different prices depending on where the customer is calling, what time it is, what day of the week it is, what country they are accessing from, and whether they are on a promotional plan. Seshnova loads and applies all of these in real time — at any scale — without slowing down.",
    points: [
      "Thousands of destination rates in a single product",
      "Geographic charge zones and country-level pricing",
      "Peak, off-peak, weekend, and holiday rate tables",
      "Timezone-aware billing — the right rate for the right time",
      "Per-customer pricing tiers and group discounts",
      "Promotional bonuses and top-up incentives",
    ],
  },
  {
    category: "Scale",
    icon: Server,
    color: "#8b5cf6",
    headline: "From your first customer to your ten-millionth",
    body: "Seshnova was designed from the start to handle volume. Account provisioning, balance lookups, and session metering are all built to operate at scale without architectural changes as you grow. You do not need to re-platform when you succeed.",
    points: [
      "Millions of accounts in a single deployment",
      "Bulk provisioning — issue credentials to millions in one operation",
      "Fast balance lookups regardless of account volume",
      "No performance cliff as customer numbers grow",
    ],
  },
  {
    category: "Correctness",
    icon: ShieldCheck,
    color: "#06b6d4",
    headline: "Built to never charge the wrong amount",
    body: "The hardest problem in billing is not calculating the price — it is guaranteeing that the right amount is charged exactly once, even when networks fail, retries happen, and systems restart. Seshnova uses a proven approach that makes duplicate charges and missed charges structurally impossible.",
    points: [
      "Every transaction is uniquely identified — duplicates are rejected automatically",
      "Partial session charges handled correctly on disconnection",
      "No charge can be applied twice for the same event",
      "Corrections and reversals are fully supported with full history preserved",
    ],
  },
  {
    category: "Record",
    icon: ReceiptText,
    color: "#6366f1",
    headline: "A complete financial record. Always.",
    body: "Every balance event — account creation, top-up, usage charge, adjustment, reversal — is written to a permanent, append-only record at the moment it happens. Nothing is ever overwritten. If a customer disputes a charge, the answer is always there.",
    points: [
      "Full history of every credit and debit",
      "Records are permanent — nothing is deleted or overwritten",
      "Supports financial audits, disputes, and reconciliation",
      "Balance at any point in time can be reconstructed from the record",
    ],
  },
];

const comparisons = [
  {
    them: "Built in-house in 18–36 months",
    us: "Live in days with Seshnova",
  },
  {
    them: "Custom pricing engine that breaks under volume",
    us: "Battle-tested at millions of sessions",
  },
  {
    them: "Rate tables managed in spreadsheets",
    us: "Thousands of rates loaded and applied in real time",
  },
  {
    them: "Billing errors discovered by customers",
    us: "Structural guarantees — the wrong charge cannot happen",
  },
  {
    them: "No record of what happened to a balance",
    us: "Complete permanent history of every penny",
  },
  {
    them: "Re-platform as you scale",
    us: "Same architecture from 100 to 100 million customers",
  },
];

export default function EnginePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(99,102,241,0.14) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8"
            style={{
              background: "rgba(99, 102, 241, 0.12)",
              border: "1px solid rgba(99, 102, 241, 0.25)",
              color: "#a5b4fc",
            }}
          >
            <Award size={13} />
            The Seshnova Engine
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8"
          >
            The world&apos;s best{" "}
            <span className="gradient-text">prepaid engine</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Billing is not just about doing the maths. It is about doing the
            maths correctly, at any scale, under any pricing complexity, without
            ever getting it wrong — and recording every single thing that
            happened, permanently. That is what Seshnova was built to do.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a href="/#contact" className="btn-gradient px-6 py-3 text-sm">
              Find out More
              <ArrowRight size={16} />
            </a>
            <a href="/" className="btn-ghost px-6 py-3 text-sm">
              Back to Overview
            </a>
          </motion.div>
        </div>
      </section>

      {/* What makes an engine great */}
      <section className="relative py-20">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), rgba(6,182,212,0.3), transparent)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3 block">
              The standard
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What it takes to be{" "}
              <span className="gradient-text">the best</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
              Most billing systems are built to handle the easy cases. The
              Seshnova engine was built to handle everything — including the
              cases you haven&apos;t thought of yet.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <FadeIn key={pillar.title} delay={i * 0.08}>
                  <div
                    className="glass-card p-5 h-full text-center"
                    style={{ borderColor: `${pillar.color}20` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                      style={{ background: `${pillar.color}18`, border: `1px solid ${pillar.color}28` }}
                    >
                      <Icon size={18} style={{ color: pillar.color }} />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deep-dive capabilities */}
      <section className="relative py-12">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          {engineCapabilities.map((cap, i) => {
            const Icon = cap.icon;
            const isEven = i % 2 === 0;
            return (
              <FadeIn key={cap.category} delay={0.1}>
                <div
                  className="glass-card p-8 md:p-10"
                  style={{ borderColor: `${cap.color}20` }}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Left: label + heading + body */}
                    <div className={`flex-1 ${isEven ? "md:order-1" : "md:order-2"}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center"
                          style={{ background: `${cap.color}18`, border: `1px solid ${cap.color}28` }}
                        >
                          <Icon size={17} style={{ color: cap.color }} />
                        </div>
                        <span
                          className="text-xs font-bold uppercase tracking-widest"
                          style={{ color: cap.color }}
                        >
                          {cap.category}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                        {cap.headline}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                        {cap.body}
                      </p>
                    </div>

                    {/* Right: bullet points */}
                    <div
                      className={`md:w-72 flex-shrink-0 ${isEven ? "md:order-2" : "md:order-1"}`}
                    >
                      <div
                        className="rounded-xl p-5 h-full"
                        style={{
                          background: `${cap.color}08`,
                          border: `1px solid ${cap.color}18`,
                        }}
                      >
                        <ul className="space-y-3">
                          {cap.points.map((point) => (
                            <li key={point} className="flex items-start gap-2.5 text-sm text-slate-300">
                              <CheckCircle
                                size={15}
                                className="flex-shrink-0 mt-0.5"
                                style={{ color: cap.color }}
                              />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Comparison table */}
      <section className="relative py-24">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3 block">
              The alternative
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Building it yourself{" "}
              <span className="gradient-text">vs. Seshnova</span>
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
              Every company that sells prepaid services eventually faces the
              same choice. Here is what that choice actually looks like.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="glass-card overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-2 border-b border-white/[0.06]">
                <div className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-widest border-r border-white/[0.06]">
                  Building in-house
                </div>
                <div
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "#a5b4fc" }}
                >
                  Seshnova
                </div>
              </div>
              {comparisons.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${
                    i < comparisons.length - 1 ? "border-b border-white/[0.04]" : ""
                  }`}
                >
                  <div className="px-6 py-4 text-sm text-slate-500 border-r border-white/[0.04] flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-red-500/50 flex-shrink-0" />
                    {row.them}
                  </div>
                  <div className="px-6 py-4 text-sm text-slate-300 flex items-start gap-2">
                    <CheckCircle size={14} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                    {row.us}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), rgba(6,182,212,0.3), transparent)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.06) 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <Globe2 size={36} className="text-indigo-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The best prepaid engine{" "}
              <span className="gradient-text">in the world</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Not because we say so — because the problems it solves are the
              hardest ones in prepaid billing, and it solves them reliably, at
              scale, every time. If you sell any kind of prepaid service, this
              is the engine you want under the hood.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="/#contact" className="btn-gradient px-7 py-3 text-sm">
                Find out More
                <ArrowRight size={16} />
              </a>
              <a href="/" className="btn-ghost px-7 py-3 text-sm">
                Back to Overview
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
