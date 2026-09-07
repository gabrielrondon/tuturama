import type { Metadata } from "next";
import { alternates } from "@/components/root-layout";
import { ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: ui["en"].archive.title,
  description: ui["en"].archive.description,
  alternates: alternates("/archive"),
};

import { ArchivePage } from "@/components/pages/archive";

export default function Page() {
  return <ArchivePage lang="en" />;
}
