import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HomeWrapper from "./home-wrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metrics | Home",
  description: "Metrics frontend app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeWrapper children={children} />
      </body>
    </html>
  );
}
