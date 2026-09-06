import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tuturama.com";
  const routes = ["", "/products", "/upstream", "/agents", "/how-we-work", "/about", "/archive", "/contact"];
  return routes.map((r) => ({ url: `${base}${r}`, lastModified: new Date() }));
}
