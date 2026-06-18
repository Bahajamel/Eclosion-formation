import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/formations",
    "/apprentissage",
    "/suivi-pedagogique",
    "/accessibilite-handicap",
    "/candidater",
    "/contact",
    "/politique-confidentialite",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
