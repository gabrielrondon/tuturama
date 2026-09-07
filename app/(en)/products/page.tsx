import type { Metadata } from "next";
import { alternates } from "@/components/root-layout";
import { ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: ui["en"].products.title,
  description: ui["en"].products.description,
  alternates: alternates("/products"),
};

import { ProductsPage } from "@/components/pages/products";

export default function Page() {
  return <ProductsPage lang="en" />;
}
