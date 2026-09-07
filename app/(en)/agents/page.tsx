import type { Metadata } from "next";
import { alternates } from "@/components/root-layout";
import { ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: ui["en"].agents.title,
  description: ui["en"].agents.description,
  alternates: alternates("/agents"),
};

import { AgentsPage } from "@/components/pages/agents";

export default function Page() {
  return <AgentsPage lang="en" />;
}
