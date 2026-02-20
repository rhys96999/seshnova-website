import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatItDoes from "@/components/WhatItDoes";
import HowItWorks from "@/components/HowItWorks";
import TelecomFeature from "@/components/TelecomFeature";
import AlsoWorksFor from "@/components/AlsoWorksFor";
import TechHighlights from "@/components/TechHighlights";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhatItDoes />
      <HowItWorks />
      <TelecomFeature />
      <AlsoWorksFor />
      <TechHighlights />
      <ContactSection />
      <Footer />
    </main>
  );
}
