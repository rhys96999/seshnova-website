"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isEnginePage, setIsEnginePage] = useState(false);

  useEffect(() => {
    setIsEnginePage(window.location.pathname === "/engine");
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const prefix = isEnginePage ? "/" : "";

  const navLinks = [
    { label: "Platform", href: `${prefix}#features` },
    { label: "Use Cases", href: `${prefix}#use-cases` },
    { label: "How It Works", href: `${prefix}#how-it-works` },
    { label: "The Engine", href: "/engine" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-white">seshn</span>
            <span className="gradient-text">ova</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`${prefix}#contact`}
            className="btn-gradient px-4 py-2 text-sm hidden md:inline-flex font-semibold"
          >
            Find out More
          </a>
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/[0.06] px-6 pb-5">
          <div className="flex flex-col gap-4 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors py-0.5 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${prefix}#contact`}
              className="btn-gradient px-5 py-2.5 text-sm w-fit mt-1 font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Find out More
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
