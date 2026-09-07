import type { Metadata } from "next";
import { RootShell, baseMetadata } from "@/components/root-layout";

export const metadata: Metadata = baseMetadata("et");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="et">{children}</RootShell>;
}
