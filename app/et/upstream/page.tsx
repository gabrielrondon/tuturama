import type { Metadata } from "next";
import { alternates } from "@/components/root-layout";
import { ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: ui["et"].upstream.title,
  description: ui["et"].upstream.description,
  alternates: alternates("/upstream"),
};

import { UpstreamPage } from "@/components/pages/upstream";

export default function Page() {
  return <UpstreamPage lang="et" />;
}
