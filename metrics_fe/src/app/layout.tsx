import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HomeWrapper from "./home-wrapper";
import { NextUIProvider } from "@nextui-org/react";
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
    <html lang="en" className="dark">
      <body className={inter.className}>
        <NextUIProvider>
          <HomeWrapper children={children} />
        </NextUIProvider>
      </body>
    </html>
  );
}
