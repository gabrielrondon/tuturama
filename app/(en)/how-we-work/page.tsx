import type { Metadata } from "next";
import { alternates } from "@/components/root-layout";
import { ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: ui["en"].how.title,
  description: ui["en"].how.description,
  alternates: alternates("/how-we-work"),
};

import { HowWeWorkPage } from "@/components/pages/how-we-work";

export default function Page() {
  return <HowWeWorkPage lang="en" />;
}
