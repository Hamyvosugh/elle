import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elle | Kosmetik & Massage",
  description: "Weniger Stress, mehr Schönheit – Kosmetik, Massage und Selfcare bei Elle.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
