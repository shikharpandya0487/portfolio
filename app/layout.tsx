import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
