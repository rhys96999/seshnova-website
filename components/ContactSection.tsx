"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, CheckCircle, ChevronDown } from "lucide-react";

const interests = [
  "Telecoms",
  "EV Charging",
  "Parking & Mobility",
  "API Monetisation",
  "IoT Connectivity",
  "SaaS Usage Billing",
  "Other",
];

const inputStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
};

const focusStyle = {
  borderColor: "rgba(99,102,241,0.5)",
  boxShadow: "0 0 0 3px rgba(99,102,241,0.08)",
};

const blurStyle = {
  borderColor: "rgba(255,255,255,0.08)",
  boxShadow: "none",
};

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom center, rgba(99,102,241,0.07) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), rgba(6,182,212,0.3), transparent)",
        }}
      />

      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3 block">
            Get started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find out <span className="gradient-text">more</span>
          </h2>
          <p className="text-slate-400 leading-relaxed text-sm">
            Tell us about your use case and we will show you how Seshnova
            handles it — end to end.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-8"
          style={{ borderColor: "rgba(99, 102, 241, 0.2)" }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: "rgba(99, 102, 241, 0.15)" }}
              >
                <CheckCircle size={28} className="text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Request received
              </h3>
              <p className="text-slate-400 text-sm max-w-sm">
                We will be in touch to arrange your demo. Expect to hear from
                us within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    Name <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, blurStyle)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    Company <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Your company"
                    className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, blurStyle)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Email <span className="text-indigo-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, blurStyle)}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Primary interest <span className="text-indigo-400">*</span>
                </label>
                <div className="relative">
                  <select
                    name="interest"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none transition-all duration-200 appearance-none cursor-pointer"
                    style={{ ...inputStyle, color: undefined }}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, blurStyle)}
                  >
                    <option value="" disabled className="bg-[#0a0a0f] text-slate-500">
                      Select your primary use case
                    </option>
                    {interests.map((interest) => (
                      <option
                        key={interest}
                        value={interest}
                        className="bg-[#111118] text-white"
                      >
                        {interest}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={15}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us briefly about your use case or what you'd like to see in the demo..."
                  className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 resize-none"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, blurStyle)}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-gradient px-6 py-3 text-sm w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed font-semibold"
                >
                  {sending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Find out More
                      <Send size={14} />
                    </>
                  )}
                </button>
                <a
                  href="mailto:hello@seshnova.com"
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors"
                >
                  <Mail size={14} />
                  hello@seshnova.com
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
