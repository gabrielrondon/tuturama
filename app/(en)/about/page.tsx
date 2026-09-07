import type { Metadata } from "next";
import { alternates } from "@/components/root-layout";
import { ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: ui["en"].about.title,
  description: ui["en"].about.description,
  alternates: alternates("/about"),
};

import { AboutPage } from "@/components/pages/about";

export default function Page() {
  return <AboutPage lang="en" />;
}
