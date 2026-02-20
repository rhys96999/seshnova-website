import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Seshnova",
  description: "Privacy policy for Seshnova.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
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
          <p className="text-slate-500 text-sm mb-10">
            seshnova.com
          </p>

          {/* Usercentrics / Cookiebot renders the policy content here */}
          <div
            className="uc-privacy-policy prose prose-invert max-w-none text-slate-400 leading-relaxed"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
