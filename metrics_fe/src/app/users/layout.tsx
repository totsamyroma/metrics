import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Metrics | Users",
  description: "Metrics Users list",
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
