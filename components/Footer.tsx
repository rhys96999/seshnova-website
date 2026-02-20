import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-white/[0.06] py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-lg font-bold tracking-tight">
            <span className="text-white">seshn</span>
            <span className="gradient-text">ova</span>
            </span>
            <span className="text-xs text-slate-600">
              Prepaid billing for any session
            </span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-300 hover:bg-white/[0.06] transition-all"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="#"
              aria-label="Twitter / X"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-300 hover:bg-white/[0.06] transition-all"
            >
              <Twitter size={15} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-slate-700">
          &copy; {new Date().getFullYear()} Seshnova. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
