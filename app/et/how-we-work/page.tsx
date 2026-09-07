import type { Metadata } from "next";
import { alternates } from "@/components/root-layout";
import { ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: ui["et"].how.title,
  description: ui["et"].how.description,
  alternates: alternates("/how-we-work"),
};

import { HowWeWorkPage } from "@/components/pages/how-we-work";

export default function Page() {
  return <HowWeWorkPage lang="et" />;
}
