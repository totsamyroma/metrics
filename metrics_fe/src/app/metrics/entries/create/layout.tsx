import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metrics | Create Entry",
  description: "Create metric entry page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div id="metric-entry-create-form"> {children} </div>;
}
