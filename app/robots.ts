import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/privacy",
    },
    sitemap: "https://seshnova.com/sitemap.xml",
  };
}
