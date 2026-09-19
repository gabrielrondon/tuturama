import type { Metadata } from "next";
import { alternates } from "@/components/root-layout";
import { ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: ui["et"].audit.title,
  description: ui["et"].audit.description,
  alternates: alternates("/audit"),
};

import { AuditPage } from "@/components/pages/audit";

export default function Page() {
  return <AuditPage lang="et" />;
}
