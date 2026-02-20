import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const GA_MEASUREMENT_ID = "G-79GVT244W7";

export const metadata: Metadata = {
  title: "Seshnova — Real-time session monetisation and fraud protection",
  description:
    "Seshnova meters and rates sessions in real time, tracks entitlement, and enforces hard cut-off the moment credit or allowance runs out.",
  metadataBase: new URL("https://seshnova.com"),
  openGraph: {
    title: "Seshnova — Real-time session monetisation and fraud protection",
    description:
      "Seshnova meters and rates sessions in real time, tracks entitlement, and enforces hard cut-off the moment credit or allowance runs out.",
    url: "https://seshnova.com",
    siteName: "Seshnova",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seshnova — Real-time session monetisation and fraud protection",
    description:
      "The enforcement layer for prepaid services. Rate live, track entitlement, end sessions instantly.",
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
      <head>
        {/* Cookiebot — must load before GA to block until consent given */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="af12e2b5-09cc-4dc7-8e36-d37b65107e41"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
        {/* Google Analytics — Cookiebot blocks this until consent */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
