"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";

const bullets = [
  "Prepaid voice and calling cards — real-time credit control per call",
  "Wholesale voice rating and charging at scale",
  "Hard spend limits and fraud cut-off enforcement",
  "Credit exhaustion termination — calls end the moment balance hits zero",
  "Integrates into carrier stacks: SIP, softswitch, and proxy environments",
];

export default function TelecomFeature() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="telecoms" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.04) 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div
          className="glass-card overflow-hidden"
          style={{ borderColor: "rgba(99, 102, 241, 0.25)" }}
        >
          {/* Header bar */}
          <div
            className="px-8 py-4 border-b border-white/[0.06] flex items-center gap-3"
            style={{
              background: "linear-gradient(90deg, rgba(99,102,241,0.12), rgba(6,182,212,0.06))",
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(99, 102, 241, 0.2)" }}
            >
              <Phone size={16} className="text-indigo-400" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-300">
              Telecoms
            </span>
          </div>

          <div className="p-8 md:p-10 grid md:grid-cols-2 gap-10 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                Telecoms: prepaid and wholesale,{" "}
                <span className="gradient-text">done properly.</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Seshnova was built to solve the hardest billing problems in
                telecoms — real-time credit control for prepaid voice, hard
                enforcement for calling cards, and wholesale rating at carrier
                scale. The same infrastructure that handles prepaid OTT calling
                network handles everything else.
              </p>
              <a
                href="#contact"
                className="btn-gradient px-5 py-2.5 text-sm inline-flex"
              >
                Find out more
                <ArrowRight size={15} />
              </a>
            </motion.div>

            {/* Right: bullets */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ul className="space-y-4">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-indigo-400 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-slate-300 leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
