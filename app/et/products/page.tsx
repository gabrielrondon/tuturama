import type { Metadata } from "next";
import { alternates } from "@/components/root-layout";
import { ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: ui["et"].products.title,
  description: ui["et"].products.description,
  alternates: alternates("/products"),
};

import { ProductsPage } from "@/components/pages/products";

export default function Page() {
  return <ProductsPage lang="et" />;
}
