import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tuturama.com";
  const routes = ["", "/products", "/upstream", "/agents", "/how-we-work", "/about", "/archive", "/contact"];
  const en = routes.map((r) => ({ url: `${base}${r}`, lastModified: new Date() }));
  const et = routes.map((r) => ({ url: `${base}/et${r}`, lastModified: new Date() }));
  return [...en, ...et];
}
