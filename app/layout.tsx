import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seshnova — Prepaid Billing for Any Session",
  description:
    "A real-time prepaid session billing platform. Meter and monetize any time-based session — from phone calls to parking, gaming credits to coworking desks.",
  metadataBase: new URL("https://seshnova.com"),
  openGraph: {
    title: "Seshnova — Prepaid Billing for Any Session",
    description:
      "A real-time prepaid session billing platform. Meter and monetize any time-based session — from phone calls to parking, gaming credits to coworking desks.",
    url: "https://seshnova.com",
    siteName: "Seshnova",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seshnova — Prepaid Billing for Any Session",
    description:
      "Meter and monetize any prepaid session in real time. Battle-tested billing infrastructure as a service.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
