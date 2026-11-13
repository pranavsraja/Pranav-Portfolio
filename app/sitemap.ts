import type { MetadataRoute } from "next";

const SITE = "https://pranavsraja.com";

// One-page site: a single entry tells search engines what to index.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
