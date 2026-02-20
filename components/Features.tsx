"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Timer,
  Layers,
  Users,
  ReceiptText,
  LayoutDashboard,
  Plug,
  MapPin,
  Tag,
} from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "Customers are always charged the right amount",
    description:
      "Usage is tracked live. The moment a customer's credit runs out, their session ends — no more, no less. Whether it's a 3-minute call or a 3-hour parking slot.",
    color: "#6366f1",
  },
  {
    icon: Layers,
    title: "Launch multiple products without new infrastructure",
    description:
      "Run different services, brands, or pricing plans all from the same platform. Add a new product in minutes — no separate system needed.",
    color: "#06b6d4",
  },
  {
    icon: Users,
    title: "Onboard thousands of customers in one go",
    description:
      "Issue access credentials to your entire customer base at once — whether that's a hundred or a million. Activate, pause, or expire accounts individually or in bulk from the dashboard.",
    color: "#8b5cf6",
  },
  {
    icon: ReceiptText,
    title: "A complete record of every transaction",
    description:
      "Every top-up, every usage charge, every adjustment is saved permanently. You always know exactly what happened to every customer's balance.",
    color: "#06b6d4",
  },
  {
    icon: LayoutDashboard,
    title: "Run everything from one dashboard",
    description:
      "Search customer accounts, view usage history, download reports, and manage your service day-to-day — all from a clean, easy-to-use portal.",
    color: "#6366f1",
  },
  {
    icon: MapPin,
    title: "Pricing as complex as your business needs",
    description:
      "Thousands of rate destinations, charge zones, time-of-day pricing, peak and off-peak rates, timezone-aware billing — Seshnova handles the full complexity so customers always pay the right price for where they are and when.",
    color: "#6366f1",
  },
  {
    icon: Tag,
    title: "Discounts, bonuses, and promotional credit",
    description:
      "Reward loyal customers, run promotional top-up bonuses, or apply special rates for specific customer groups. Flexible pricing rules that work without touching your core billing setup.",
    color: "#06b6d4",
  },
  {
    icon: Plug,
    title: "Plug into your existing tools",
    description:
      "Connect Seshnova to your website, app, or CRM. A simple, well-documented API means your team can integrate it without starting from scratch.",
    color: "#8b5cf6",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
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
            What you get
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to{" "}
            <span className="gradient-text">sell prepaid services</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            From signing up your first customer to handling your ten-thousandth
            transaction — Seshnova has it covered, so you can focus on your business.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card p-6 group cursor-default"
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110"
                  style={{
                    background: `${feature.color}18`,
                    border: `1px solid ${feature.color}28`,
                  }}
                >
                  <Icon size={20} style={{ color: feature.color }} />
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
