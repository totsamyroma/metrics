import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metrics | Create",
  description: "Create metric page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="metric-create-form"> {children} </div>
  );
}

