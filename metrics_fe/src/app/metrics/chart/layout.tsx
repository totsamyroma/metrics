import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metrics | Dashboard",
  description: "Metrics dashboard page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div id="chart-wrapper"> {children} </div>;
}
