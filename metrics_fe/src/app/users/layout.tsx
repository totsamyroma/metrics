import type { Metadata } from "next";

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
