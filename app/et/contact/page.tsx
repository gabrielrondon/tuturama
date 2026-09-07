import type { Metadata } from "next";
import { alternates } from "@/components/root-layout";
import { ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: ui["et"].contact.title,
  description: ui["et"].contact.description,
  alternates: alternates("/contact"),
};

import { ContactPage } from "@/components/pages/contact";

export default function Page() {
  return <ContactPage lang="et" />;
}
