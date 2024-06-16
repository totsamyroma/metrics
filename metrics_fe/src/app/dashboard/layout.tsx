import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Metrics | Dashboard",
  description: "Metrics dashboard page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section> {children} </section>
  );
}
