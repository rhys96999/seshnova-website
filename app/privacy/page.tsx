"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  useEffect(() => {
    // Dynamically insert the Usercentrics PPG script with the exact
    // non-standard attribute it requires (privacy-policy-id, not data-)
    const existing = document.getElementById("usercentrics-ppg");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "usercentrics-ppg";
    script.src =
      "https://policygenerator.usercentrics.eu/api/privacy-policy";
    script.setAttribute(
      "privacy-policy-id",
      "86cd5e3c-c7c8-4be1-b4fd-9be8d51c5243"
    );
    script.setAttribute("data-language", "en");
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("usercentrics-ppg");
      if (s) s.remove();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-24">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(99,102,241,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm mb-10">seshnova.com</p>

          {/* Usercentrics injects the policy content into this div */}
          <div className="uc-privacy-policy text-slate-400 leading-relaxed" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
