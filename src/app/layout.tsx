import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glennford Atay — The Multiperspective Index",
  description:
    "A multidisciplinary portfolio exploring technology, analysis, professional experience, and creative production.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
