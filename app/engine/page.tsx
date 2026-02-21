import type { Metadata } from "next";
import EngineContent from "./EngineContent";

export const metadata: Metadata = {
  title: "The Seshnova Engine — The world's best prepaid billing engine",
  description:
    "Precision metering, thousands of rates, real-time enforcement, and an immutable ledger. The billing engine built for operators who cannot afford to get it wrong.",
  metadataBase: new URL("https://seshnova.com"),
  alternates: { canonical: "https://seshnova.com/engine" },
  openGraph: {
    title: "The Seshnova Engine — The world's best prepaid billing engine",
    description:
      "Precision metering, thousands of rates, real-time enforcement, and an immutable ledger.",
    url: "https://seshnova.com/engine",
    siteName: "Seshnova",
    locale: "en_GB",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function EnginePage() {
  return <EngineContent />;
}
