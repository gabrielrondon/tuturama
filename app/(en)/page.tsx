import type { Metadata } from "next";
import { alternates } from "@/components/root-layout";

export const metadata: Metadata = { alternates: alternates("/") };

import { HomePage } from "@/components/pages/home";

export default function Page() {
  return <HomePage lang="en" />;
}
