import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Metrics | Metrics List",
  description: "Metrics list page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="metrics-wrapper"> {children} </div>
  );
}
